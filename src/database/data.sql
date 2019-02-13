BEGIN;

DROP TABLE IF EXISTS clubs,clubs_type;

CREATE TABLE clubs_type(
    id SERIAL PRIMARY KEY,
    type_name VARCHAR(20) NOT NULL,
     type_image text
);

CREATE TABLE clubs(
    id SERIAL PRIMARY KEY,
    c_name VARCHAR(20) NOT NULL,
     c_desc text,
     type_id INTEGER REFERENCES clubs_type(id) 

);
INSERT INTO clubs_type (type_name,type_image) VALUES('English','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuc7S7zbSEcpFATpHDXFY37QjFa7qfivdj6agFa4lhRkGcudGe');
INSERT INTO clubs (c_name,c_desc,type_id) VALUES('English','fjgjhuigfhuhrfuh', 1);
COMMIT;

