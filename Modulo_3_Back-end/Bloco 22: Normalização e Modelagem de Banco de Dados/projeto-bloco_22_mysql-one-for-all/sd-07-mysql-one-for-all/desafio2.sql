CREATE VIEW estatisticas_musicais AS
SELECT 
COUNT(DISTINCT s.song) AS 'cancoes',
COUNT(DISTINCT a.`name`) AS 'artistas',
COUNT(DISTINCT b.`name`) AS 'albuns'
FROM SpotifyClone.songs AS s
INNER JOIN SpotifyClone.albums AS b
ON s.fk_album_id = b.album_id
INNER JOIN SpotifyClone.artists AS a
ON b.fk_artist_id = a.artist_id;
