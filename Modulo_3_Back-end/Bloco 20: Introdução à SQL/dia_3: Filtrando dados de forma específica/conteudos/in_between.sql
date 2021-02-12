USE sakila;

SELECT * FROM actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

SELECT * FROM customer
WHERE customer_id in (1, 2, 3, 4, 5);

-- Note que o MySQL inclui o valor inicial e o final nos resultados
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry',
'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;

SELECT email FROM customer
WHERE address_id 
BETWEEN 172 AND 176
ORDER BY email ASC;

SELECT COUNT(payment_id) AS 'Qtd de Pagamentos' FROM payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC;

SELECT title, rating FROM film
WHERE rating IN('G', 'PG', 'PG-13')
ORDER BY rating DESC LIMIT 500;
