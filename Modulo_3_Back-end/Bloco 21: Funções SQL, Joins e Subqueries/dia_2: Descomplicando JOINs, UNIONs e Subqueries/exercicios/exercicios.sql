SELECT m.Title, b.Domestic_sales, b.International_sales
FROM movies AS m
INNER JOIN Boxoffice AS b
ON m.Id = b.Movie_id;

SELECT m.Title, b.International_sales
FROM movies AS m
INNER JOIN Boxoffice AS b
ON m.Id = b.Movie_id
WHERE b.International_sales > b.Domestic_sales;