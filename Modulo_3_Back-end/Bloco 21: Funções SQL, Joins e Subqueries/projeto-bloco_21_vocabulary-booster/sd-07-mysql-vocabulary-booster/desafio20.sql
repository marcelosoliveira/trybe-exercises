USE hr;
DELIMITER $$ 
CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN email VARCHAR(100))
BEGIN
  SELECT
    CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo',
    j.JOB_TITLE AS 'Cargo',
    d.DEPARTMENT_NAME AS 'Departamento'
  FROM
    hr.employees AS e
  INNER JOIN hr.job_history AS jh
    ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
  INNER JOIN hr.jobs AS j
    ON j.JOB_ID = jh.JOB_ID
  INNER JOIN hr.departments AS d
    ON jh.DEPARTMENT_ID = d.DEPARTMENT_ID
  WHERE e.EMAIL = email
  ORDER BY
    d.DEPARTMENT_NAME, j.JOB_TITLE;
END;
$$ DELIMITER ;
