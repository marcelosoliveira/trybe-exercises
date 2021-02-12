USE Scientists;

SELECT * FROM Scientists
WHERE Name LIKE '%e%';

SELECT Name FROM Projects
WHERE Name LIKE 'A%'
ORDER BY Name ASC;

SELECT Code, Name FROM Projects
WHERE Code LIKE '%3%'
ORDER BY Name ASC;

SELECT Scientists.Name FROM AssignedTo
INNER JOIN Scientists
ON AssignedTo.Scientist = Scientists.SSN
WHERE Project IN('AeH3', 'Ast3', 'Che1');

SELECT * FROM Projects
WHERE Hours > 500;

SELECT * FROM Projects
WHERE Hours BETWEEN 251 AND 799;

SELECT Name, Code FROM Projects
WHERE Name NOT LIKE 'A%';

SELECT Name, Code FROM Projects
WHERE Code LIKE '%H%';
