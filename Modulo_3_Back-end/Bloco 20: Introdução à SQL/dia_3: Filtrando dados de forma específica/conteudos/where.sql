USE sakila;

SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;

SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;

SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT first_name FROM customer
WHERE store_id = 2
AND first_name <> 'KENNETH'
AND active IS NOT TRUE
ORDER BY first_name; 

SELECT title, description, release_year, replacement_cost FROM film
WHERE rating = 'PG'
AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC LIMIT 100;

SELECT COUNT(customer_id) FROM customer
WHERE store_id = 1
AND active IS TRUE;

SELECT * FROM customer
WHERE store_id = 1
AND active IS NOT TRUE;

SELECT title FROM film
WHERE rating = 'R'
OR rating = 'NC-17'
ORDER BY rental_rate ASC LIMIT 50;
