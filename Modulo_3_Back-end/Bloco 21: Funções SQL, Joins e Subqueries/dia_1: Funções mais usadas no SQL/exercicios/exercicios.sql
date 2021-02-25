SELECT MAX(Years_employed) FROM employees;

SELECT Role, AVG(Years_employed) FROM Employees
GROUP BY Role;

SELECT Building, SUM(Years_employed) FROM Employees
GROUP BY Building;

SELECT COUNT(Role) FROM employees
GROUP BY Role HAVING Role = 'Artist';

SELECT Role, COUNT(Role) FROM Employees
GROUP BY Role;

SELECT Role, SUM(Years_employed) FROM Employees
GROUP BY Role HAVING Role = 'Engineer';

-- Utilizando o banco de dados hr
USE hr;

SELECT COUNT(EMPLOYEE_ID) AS 'QTD DE FUNCIONÁRIOS' FROM employees;

SELECT JOB_ID, SUM(EMPLOYEE_ID) FROM employees
GROUP BY JOB_ID;
