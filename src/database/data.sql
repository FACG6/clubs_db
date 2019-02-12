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
     type_id REFERENCES clubs_type(id) 

);

COMMIT;

