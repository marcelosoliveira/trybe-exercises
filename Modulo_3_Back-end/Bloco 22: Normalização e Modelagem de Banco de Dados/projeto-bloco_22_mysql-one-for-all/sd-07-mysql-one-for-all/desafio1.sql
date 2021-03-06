DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE IF NOT EXISTS SpotifyClone;

USE SpotifyClone;

CREATE TABLE plans (
plan_id INT PRIMARY KEY AUTO_INCREMENT,
plan VARCHAR(20) NOT NULL,
plan_value DECIMAL(5,2) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE users (
user_id INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(100) NOT NULL,
age INT NOT NULL,
fk_plan_id INT NOT NULL,
FOREIGN KEY (fk_plan_id) REFERENCES plans(plan_id)
) ENGINE=InnoDB;

CREATE TABLE artists (
artist_id INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(40) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE albums (
album_id INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(30) NOT NULL,
fk_artist_id INT NOT NULL,
FOREIGN KEY (fk_artist_id) REFERENCES artists(artist_id)
) ENGINE=InnoDB;

CREATE TABLE songs (
song_id INT PRIMARY KEY AUTO_INCREMENT,
song VARCHAR(30) NOT NULL,
fk_album_id INT NOT NULL,
FOREIGN KEY (fk_album_id) REFERENCES albums(album_id)
) ENGINE=InnoDB;

CREATE TABLE reproduction_history (
fk_user_id INT NOT NULL,
fk_song_id INT NOT NULL,
PRIMARY KEY(fk_user_id, fk_song_id),
FOREIGN KEY (fk_user_id) REFERENCES users(user_id),
FOREIGN KEY (fk_song_id) REFERENCES songs(song_id)
) ENGINE=InnoDB;

CREATE TABLE followers (
fk_user_id INT NOT NULL,
fk_artist_id INT NOT NULL,
PRIMARY KEY(fk_user_id, fk_artist_id),
FOREIGN KEY (fk_user_id) REFERENCES users(user_id),
FOREIGN KEY (fk_artist_id) REFERENCES artists(artist_id)
) ENGINE=InnoDB;

INSERT INTO plans (plan, plan_value)
VALUES('gratuito', 0),
('familiar', 7.99),
('universitário', 5.99);
                  
INSERT INTO artists (`name`)
VALUES('Walter Phoenix'),
('Peter Strong'),
('Lance Day'),
('Freedie Shannon');
                  
INSERT INTO albums (`name`, fk_artist_id)
VALUES('Envious', 1),('Exuberant', 1),
('Hallowed Steam', 2),
('Incandescent', 3),
('Temporary Culture', 4);
                  
                  
INSERT INTO songs (song, fk_album_id)
VALUES('Soul For Us', 1),
('Reflections Of Magic', 1),
('Dance With Her Own', 1),
('Troubles Of My Inner Fire', 2),
('Time Fireworks', 2),
('Magic Circus', 3),
('Honey, So Do I', 3),
("Sweetie, Let's Go Wild", 3),
('She Knows', 3),
('Fantasy For Me', 4),
('Celebration Of More', 4),
('Rock His Everything', 4),
('Home Forever', 4),
('Diamond Power', 4),
("Honey, Let's Be Silly", 4),
('Thang Of Thunder', 5),
('Words Of Her Life', 5),
('Without My Streets', 5);

INSERT INTO users (`name`, age, fk_plan_id)
VALUES('Thati', 23, 1),
('Cintia', 35, 2),
('Bill', 20, 3),
('Roger', 45, 1);
                  
INSERT INTO reproduction_history (fk_user_id, fk_song_id)
VALUES(1, 1),
(1, 6),
(1, 14),
(1, 16),
(2, 13),
(2, 17),
(2, 2),
(2, 15),
(3, 4),
(3, 16),
(3, 6),
(4, 3),
(4, 18),
(4, 11);

INSERT INTO followers(fk_user_id, fk_artist_id)
VALUES(1, 1),
(1, 4),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(3, 1),
(4, 4);  
