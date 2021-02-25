SELECT f1.film_id, f1.replacement_cost, f2.film_id, f2.replacement_cost
FROM film AS f1, film AS f2 WHERE f1.replacement_cost = f2.replacement_cost;

SELECT f1.title, f1.rental_duration, f2.title, f2.rental_duration 
FROM film AS f1, film AS f2
WHERE f1.rental_duration = f2.rental_duration
AND f1.rental_duration BETWEEN 2 AND 4;
