SELECT * FROM film;

SELECT title, release_year, rating FROM film;

SELECT DISTINCT last_name FROM actor;

SELECT COUNT(title) AS 'Qtd Filmes' FROM film;

SELECT COUNT(first_name) AS 'Qtd Clientes' FROM actor;

SELECT COUNT(DISTINCT last_name) FROM actor;

SELECT COUNT(name) AS 'Qtd Categorias' FROM category;

SELECT COUNT(country) AS 'Qtd Paises' FROM country;

SELECT name FROM language LIMIT 5 OFFSET 1;

SELECT * FROM film;

SELECT title, release_year, rental_duration, rating, replacement_cost
FROM film
ORDER BY rental_duration DESC,
replacement_cost ASC;
