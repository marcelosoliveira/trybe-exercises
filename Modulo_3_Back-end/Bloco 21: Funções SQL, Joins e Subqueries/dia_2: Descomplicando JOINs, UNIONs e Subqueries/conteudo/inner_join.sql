SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

SELECT a.actor_id, a.first_name, f.film_id FROM actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

SELECT s.first_name, s.last_name, a.address FROM staff AS s
INNER JOIN address AS a
ON a.address_id = s.address_id;

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM customer AS c INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC LIMIT 100;

SELECT c.first_name, c.email, a.address_id, a.address, a.district FROM address AS a
INNER JOIN customer AS c ON a.address_id = c.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

SELECT c.first_name, COUNT(a.address) FROM customer AS c
INNER JOIN address AS a ON c.address_id = a.address_id
WHERE c.active <> 0 GROUP BY c.first_name ORDER BY c.first_name DESC;

SELECT s.first_name, s.last_name, AVG(p.amount) FROM staff AS s
INNER JOIN payment AS p ON s.staff_id = p.staff_id
WHERE p.payment_date IN(2006) GROUP BY s.first_name, s.last_name;

SELECT a.actor_id, a.first_name, f.film_id, f.title FROM actor AS a
INNER JOIN film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN film AS f ON f.film_id = fa.film_id;
