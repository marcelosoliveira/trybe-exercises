SELECT b.Id, b.Title FROM Books AS b
WHERE NOT EXISTS (
  SELECT * FROM Books_Lent AS bl
  WHERE bl.book_id = b.Id 
);

SELECT b.Id, b.Title FROM Books AS b
WHERE b.Title LIKE '%lost%'
AND EXISTS (
  SELECT * FROM Books_Lent AS bl
  WHERE bl.book_id = b.Id
);

SELECT c.`Name` FROM Customers AS c
WHERE NOT EXISTS(
  SELECT * FROM CarSales AS cs
  WHERE c.CustomerID = cs.CustomerID
);

SELECT c.`Name` FROM Customers AS c
INNER JOIN CarSales AS cs
ON c.CustomerId = cs.CustomerID
WHERE EXISTS(
  SELECT * FROM CarSales AS cs
  INNER JOIN Cars AS car
  ON cs.CarID = car.Id
);

