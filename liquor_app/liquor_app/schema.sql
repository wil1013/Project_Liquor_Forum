DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS liquors CASCADE;
DROP TABLE IF EXISTS threads CASCADE;


CREATE TABLE users(
  id SERIAL PRIMARY KEY, 
  name VARCHAR(255),
  password VARCHAR(255),
  img_url TEXT, 
  email VARCHAR(255),
  latitude VARCHAR(255),
  longitude VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255)
);

CREATE TABLE liquors(
  id SERIAL PRIMARY KEY, 
  liq_name VARCHAR(255),
  img_url TEXT,
  user_id SERIAL references users,
  description VARCHAR(255)
);

CREATE TABLE threads(
  id SERIAL PRIMARY KEY, 
  title VARCHAR(255),
  liquor_id SERIAL references liquors,
  comment VARCHAR(255),
  view_count INTEGER,
  comment_count INTEGER,
  user_id SERIAL references users
);