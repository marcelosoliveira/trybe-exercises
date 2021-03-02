USE hr;
DELIMITER $$

CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(mes int, ano int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE quantity INT;
    SELECT COUNT(e.EMPLOYEE_ID)
    FROM hr.employees AS e
    WHERE MONTH(e.HIRE_DATE) = mes
    AND YEAR(e.HIRE_DATE) = ano INTO quantity;
    RETURN quantity;
END $$

DELIMITER ;

SELECT exibir_quantidade_pessoas_contratadas_por_mes_e_ano(06, 1987);
