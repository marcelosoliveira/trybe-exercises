CREATE VIEW historico_reproducao_usuarios AS
SELECT u.`name` AS 'usuario',
s.song AS 'nome'
FROM SpotifyClone.users AS u
INNER JOIN SpotifyClone.reproduction_history AS r
ON r.fk_user_id = u.user_id
INNER JOIN SpotifyClone.songs AS s
ON r.fk_song_id = s.song_id
ORDER BY u.`name`, s.song;
