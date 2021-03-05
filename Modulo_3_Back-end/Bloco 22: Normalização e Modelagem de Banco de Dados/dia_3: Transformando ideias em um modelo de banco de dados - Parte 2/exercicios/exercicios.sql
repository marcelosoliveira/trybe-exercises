-- Desafios sobre Views
-- Exercício 1
USE sakila;
CREATE VIEW film_with_categories AS
   SELECT f.title, c.category_id, c.`name` FROM film AS f
   INNER JOIN film_category AS fc ON fc.film_id = f.film_id
   INNER JOIN category AS c ON fc.category_id = c.category_id
   ORDER BY f.title ASC;

DROP VIEW film_with_categories;

-- Exercício 2
USE sakila;
CREATE VIEW film_info AS
   SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name)
   AS 'actor', f.title FROM actor AS a
   INNER JOIN film_actor AS fa ON fa.actor_id = a.actor_id
   INNER JOIN film AS f ON fa.film_id = f.film_id
   ORDER BY CONCAT(a.first_name, ' ', a.last_name) ASC;

DROP VIEW film_info;

-- Exercício 3
USE sakila;
CREATE VIEW address_info AS
   SELECT a.address_id, a.address , a.district , c.city_id, c.city FROM address AS a
   INNER JOIN city AS c ON a.city_id = c.city_id
   ORDER BY c.city ASC;

DROP VIEW address_info;

-- Exercício 4
USE sakila;
CREATE VIEW movies_languages AS
   SELECT f.title, l.language_id, l.`name` FROM film AS f
   INNER JOIN `language` AS l ON f.language_id = l.language_id;

DROP VIEW movies_languages;

-- Desafios sobre INDEX
-- Exercicio 1
CREATE FULLTEXT INDEX index_name ON sakila.category(`name`);

-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX index_name ON sakila.category;
-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

-- Exercicio 2
CREATE FULLTEXT INDEX index_address_two ON sakila.address(postal_code);

-- Após ter criado o índice, mensure o custo com a seguinte query:
-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX index_address_two ON sakila.address;

-- Desafios sobre ALTER TABLE
-- Exercicio 1
ALTER TABLE locations CHANGE STREET_ADDRESS ADDRESS VARCHAR(40);

-- Exercicio 2
ALTER TABLE regions CHANGE REGION_NAME REGION VARCHAR(25);

-- Exercicio 3
ALTER TABLE countries CHANGE COUNTRY_NAME COUNTRY VARCHAR(40);
