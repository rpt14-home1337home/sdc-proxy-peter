-- DROP DATABASE IF EXISTS airbnb;

CREATE DATABASE airbnb;

USE airbnb;

CREATE TABLE `photos` (
  `id` VARCHAR(16),
  `likes` INT,
  `username` VARCHAR(64),
  `link` VARCHAR(255),
  `tag` VARCHAR(32),
  `photo_set` VARCHAR(10),
  PRIMARY KEY (`id`)
)

-- LOAD DATA LOCAL INFILE '/Users/allen/Desktop/photos.csv'
-- INTO TABLE photos
-- FIELDS TERMINATED BY ','
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS
-- (id, likes, username, link, tag, photo_set);
