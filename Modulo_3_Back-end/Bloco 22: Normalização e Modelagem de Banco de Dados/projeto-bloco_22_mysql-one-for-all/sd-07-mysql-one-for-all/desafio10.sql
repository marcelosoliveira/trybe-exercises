USE SpotifyClone;
DELIMITER $$
CREATE FUNCTION quantidade_musicas_no_historico(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE musicas INT;
    SELECT COUNT(fk_user_id)
    FROM SpotifyClone.reproduction_history
    WHERE fk_user_id = id
    INTO musicas ;
    RETURN musicas;
END $$
DELIMITER ;

SELECT quantidade_musicas_no_historico(3);
