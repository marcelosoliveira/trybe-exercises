SELECT first_name, last_name FROM actor
UNION
SELECT first_name, last_name FROM staff;

SELECT first_name FROM customer
WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name FROM actor
WHERE first_name LIKE '%je%';

(SELECT first_name from sakila.actor ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name from sakila.staff LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 15)
ORDER BY first_name;

(SELECT first_name, last_name
 FROM   sakila.customer
 ORDER  BY first_name, last_name
 LIMIT  60)
UNION
(SELECT first_name, last_name
 FROM   sakila.actor
 ORDER  BY first_name, last_name
 LIMIT  60)
ORDER  BY first_name, last_name
LIMIT 15
OFFSET 45;
