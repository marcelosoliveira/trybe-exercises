DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.

DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

-- Rejeita o comando DELETE.
-- ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
-- ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
-- ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
-- ON DELETE CASCADE;

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

-- 1° Excluindo a referência do ator Grace
DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE

-- 2° Excluindo o ator Grace
DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

 TRUNCATE banco_de_dados.tabela;
 
 DELETE FROM film_actor
 WHERE actor_id = 12;
 
 DELETE FROM actor
 WHERE first_name = 'KARL';
 
 DELETE FROM film_actor
 WHERE actor_id IN(8, 103, 181);
 
 DELETE FROM actor
 WHERE first_name = 'MATTHEW';
 
 DELETE FROM film_text
 WHERE `description` LIKE '%saga%';
 
 TRUNCATE film_actor;
 
 TRUNCATE film_category;
 
 DROP DATABASE sakila;
