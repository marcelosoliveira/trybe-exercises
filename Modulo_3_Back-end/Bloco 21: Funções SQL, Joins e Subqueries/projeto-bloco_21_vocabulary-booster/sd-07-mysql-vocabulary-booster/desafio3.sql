SELECT j.JOB_TITLE AS 'Cargo', (MAX_SALARY - MIN_SALARY)
AS 'Diferença entre salários máximo e mínimo' FROM hr.jobs AS j
ORDER BY (MAX_SALARY - MIN_SALARY), j.JOB_TITLE;
