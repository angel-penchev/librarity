INSERT INTO authors (author_first_name,author_last_name) VALUES ( 'John','Adventureson' );
INSERT INTO authors (author_first_name,author_last_name) VALUES ( 'Bob','Scienceful' );
INSERT INTO authors (author_first_name,author_last_name) VALUES ( 'Helen','Fantasylan' );

INSERT INTO books (book_title) VALUES ( 'Adventures of Johnny' );
INSERT INTO books (book_title) VALUES ( 'Science of the Earth' );
INSERT INTO books (book_title) VALUES ( 'Adventures in Fantazaria' );
INSERT INTO books (book_title) VALUES ( 'Science Adventure' );

INSERT INTO genres (genre_name) VALUES ( 'Adventure' );
INSERT INTO genres (genre_name) VALUES ( 'Science' );
INSERT INTO genres (genre_name) VALUES ( 'Fantasy' );


INSERT INTO book_genres (book_id,genre_id) VALUES ( 1,1 );
INSERT INTO book_genres (book_id,genre_id) VALUES ( 2,2 );
INSERT INTO book_genres (book_id,genre_id) VALUES ( 3,1 );
INSERT INTO book_genres (book_id,genre_id) VALUES ( 3,3 );
INSERT INTO book_genres (book_id,genre_id) VALUES ( 4,1 );
INSERT INTO book_genres (book_id,genre_id) VALUES ( 4,2 );


INSERT INTO book_authors (book_id,author_id) VALUES ( 1,1 );
INSERT INTO book_authors (book_id,author_id) VALUES ( 2,2 );
INSERT INTO book_authors (book_id,author_id) VALUES ( 3,2 );
INSERT INTO book_authors (book_id,author_id) VALUES ( 3,3 );


