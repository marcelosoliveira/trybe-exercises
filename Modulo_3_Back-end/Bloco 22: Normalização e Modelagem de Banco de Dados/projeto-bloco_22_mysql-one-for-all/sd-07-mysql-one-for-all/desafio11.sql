CREATE VIEW cancoes_premium AS
SELECT s.song AS 'nome',
COUNT(r.fk_song_id) AS 'reproducoes'
FROM SpotifyClone.songs AS s
INNER JOIN SpotifyClone.reproduction_history AS r
ON r.fk_song_id = s.song_id
INNER JOIN SpotifyClone.users AS u
ON r.fk_user_id = u.user_id
INNER JOIN SpotifyClone.plans AS p
ON p.plan_id = u.fk_plan_id
WHERE plan IN('familiar', 'universitário')
GROUP BY s.song ORDER BY s.song ASC;
