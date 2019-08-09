INSERT INTO authors (author_first_name,author_last_name) VALUES ( 'John','Adventureson' );
INSERT INTO authors (author_first_name,author_last_name) VALUES ( 'Bob','Scienceful' );
INSERT INTO authors (author_first_name,author_last_name) VALUES ( 'Helen','Fantasylan' );

INSERT INTO books (book_title, book_desc, book_rating) VALUES ( 'Adventures of Johnny', 'The adventures of kid named Johnny in the steel ball universe', 10.0 );
INSERT INTO books (book_title, book_desc, book_rating) VALUES ( 'Science of the Earth', 'Archeology encyclopedia', 4.2 );
INSERT INTO books (book_title, book_desc, book_rating) VALUES ( 'Adventures in Fantazaria', 'Chronicles of Narnaia but with different characters', 6.9 );
INSERT INTO books (book_title, book_desc, book_rating) VALUES ( 'Science Adventure','Dr. Stone rip-off',8.0 );
INSERT INTO books (book_title, book_desc, book_rating) VALUES ( 'Under Siege','The book based on R6',6.0 );

INSERT INTO tags (tag_name) VALUES ( 'Adventure' );
INSERT INTO tags (tag_name) VALUES ( 'Science' );
INSERT INTO tags (tag_name) VALUES ( 'Fantasy' );
INSERT INTO tags (tag_name) VALUES ( 'New' );
INSERT INTO tags (tag_name) VALUES ( 'Trending' );


INSERT INTO book_tags (book_id,tag_id) VALUES ( 1,1 );
INSERT INTO book_tags (book_id,tag_id) VALUES ( 1,4 );
INSERT INTO book_tags (book_id,tag_id) VALUES ( 2,2 );
INSERT INTO book_tags (book_id,tag_id) VALUES ( 3,1 );
INSERT INTO book_tags (book_id,tag_id) VALUES ( 3,3 );
INSERT INTO book_tags (book_id,tag_id) VALUES ( 4,1 );
INSERT INTO book_tags (book_id,tag_id) VALUES ( 4,2 );
INSERT INTO book_tags (book_id,tag_id) VALUES ( 4,5 );
INSERT INTO book_tags (book_id,tag_id) VALUES ( 5,1 );
INSERT INTO book_tags (book_id,tag_id) VALUES ( 5,3 );


INSERT INTO book_authors (book_id,author_id) VALUES ( 1,1 );
INSERT INTO book_authors (book_id,author_id) VALUES ( 2,2 );
INSERT INTO book_authors (book_id,author_id) VALUES ( 3,2 );
INSERT INTO book_authors (book_id,author_id) VALUES ( 3,3 );
INSERT INTO book_authors (book_id,author_id) VALUES ( 4,2 );
INSERT INTO book_authors (book_id,author_id) VALUES ( 5,2 );
