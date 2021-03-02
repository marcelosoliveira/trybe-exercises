USE hr;
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email varchar(100))
RETURNS INT READS SQL DATA
BEGIN
    DECLARE quantity INT;
    SELECT COUNT(jh.EMPLOYEE_ID)
    FROM hr.employees AS e
    INNER JOIN hr.job_history AS jh
    ON e.EMPLOYEE_ID = jh.EMPLOYEE_ID
    WHERE e.EMAIL = email INTO quantity;
    RETURN quantity;
END $$

DELIMITER ;

SELECT buscar_quantidade_de_empregos_por_funcionario("NKOCHHAR");
