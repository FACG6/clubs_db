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
     type_id integer REFERENCES clubs_type(id) 

);

insert into clubs_type(type_name,type_image)values('English','fhfhfj');
insert into clubs(c_name,c_desc,type_id)values('Englishhhhh','this ishuisinhdg',1);
COMMIT;

