const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation/authenticationValidation");
const tokenValidation = require("../validation/tokenValidation")

router.post("/register", async (req, res) => {
    // Validating the user input
    const { error } = registerValidation(req.body);
    if (error) res.status(400).send(error.details[0].message);

    // Checking if the username is already taken
    const usernameAlreadyExists = await User.findOne({ username: req.body.email });
    if (usernameAlreadyExists) res.status(400).send("Email already registered.")

    // Checking if the email is already registered
    const emailAlreadyExists = await User.findOne({ email: req.body.email });
    if (emailAlreadyExists) res.status(400).send("Email already registered.")

    // Hashing the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Creating the new user profile
    const user = User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser._id);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post("/login", async (req, res) => {
    // Validating the user input
    const { error } = loginValidation(req.body);
    if (error) res.status(400).send(error.details[0].message);

    // Checking if the username is registered
    const user = await User.findOne({ username: req.body.username });
    if (!user) res.status(400).send("Incorrect username or password.");

    // Validating the password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) res.status(400).send("Incorrect username or password.");

    // Creating an user json web token
    const token = jsonwebtoken.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
});

router.get("/profile", tokenValidation, async (req, res) => {
    const user = await User.findOne({ _id: req.user });

    res.json({
        "username": user.username,
        "email": user.email,
        "startedBooks": user.startedBooks,
        "favouriteBooks": user.favouriteBooks
    });
});

module.exports = router;