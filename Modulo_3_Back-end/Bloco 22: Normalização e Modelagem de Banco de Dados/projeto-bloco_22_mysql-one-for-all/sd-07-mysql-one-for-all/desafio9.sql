USE SpotifyClone
DELIMITER $$ 
CREATE PROCEDURE albuns_do_artista(IN artist_name VARCHAR(100))
  BEGIN
    SELECT a.`name` AS 'artista', b.`name` AS 'album'
    FROM SpotifyClone.artists AS a 
    INNER JOIN SpotifyClone.albums
    AS b ON b.fk_artist_id = a.artist_id
    WHERE a.`name` = artist_name
    ORDER BY b.`name` ASC;
  END;
$$ DELIMITER ;

CALL albuns_do_artista('Walter Phoenix');
