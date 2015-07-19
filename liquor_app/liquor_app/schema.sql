DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS liquors CASCADE;
DROP TABLE IF EXISTS threads CASCADE;


CREATE TABLE users(
  id SERIAL PRIMARY KEY, 
  name VARCHAR(255),
  password VARCHAR(4),
  img_url TEXT, 
  email VARCHAR(255),
  zipcode INTEGER
);

CREATE TABLE liquors(
  id SERIAL PRIMARY KEY, 
  liq_name VARCHAR(255),
  liquor_type VARCHAR(255),
  img_url TEXT,
  user_id VARCHAR(255) 
);

CREATE TABLE threads(
  id SERIAL PRIMARY KEY, 
  title VARCHAR(255),
  liquor_id INTEGER references liquors,
  text VARCHAR(255),
  view_count INTEGER,
  comment_count INTEGER,
  user_id INTEGER references users
);