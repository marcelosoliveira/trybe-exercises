CREATE VIEW perfil_artistas AS
SELECT a.`name` AS 'artista',
b.`name`AS 'album',
COUNT(b.album_id) AS 'seguidores'
FROM SpotifyClone.artists AS a
INNER JOIN SpotifyClone.albums AS b
ON b.fk_artist_id = a.artist_id
INNER JOIN SpotifyClone.followers AS f
ON f.fk_artist_id = a.artist_id
GROUP BY b.album_id
ORDER BY  COUNT(b.album_id) DESC, a.`name` ASC, b.`name` ASC;
