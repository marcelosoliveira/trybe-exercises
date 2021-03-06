CREATE VIEW top_2_hits_do_momento AS
SELECT s.song AS 'cancao',
COUNT(r.fk_user_id) AS 'reproducoes' 
FROM SpotifyClone.songs AS s
INNER JOIN SpotifyClone.reproduction_history AS r
ON s.song_id = r.fk_song_id
GROUP BY s.song
ORDER BY COUNT(r.fk_user_id) DESC, s.song ASC LIMIT 2;
