CREATE TABLE cars (
    id serial PRIMARY KEY,
    title varchar(200),
    parent_company varchar(200),
    country varchar(200),
    emblem varchar(500)
);

CREATE TABLE users (
id serial PRIMARY KEY,
first_name varchar(100),
last_name varchar(100),
email varchar(200),
password varchar(2000)
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    score integer,
    comment text,
    car_id integer REFERENCES cars (id),
    user_id integer REFERENCES users (id)
);