CREATE VIEW top_3_artistas AS
SELECT a.`name` AS 'artista',
COUNT(f.fk_user_id) AS 'seguidores'
FROM SpotifyClone.artists AS a
INNER JOIN SpotifyClone.followers AS f
ON f.fk_artist_id = a.artist_id
GROUP BY a.`name`
ORDER BY COUNT(f.fk_user_id) DESC, a.`name` ASC LIMIT 3;
