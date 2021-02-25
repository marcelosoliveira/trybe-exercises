SELECT coluna(s) FROM tabela
GROUP BY coluna(s);

SELECT first_name FROM sakila.actor
GROUP BY first_name;

SELECT first_name FROM sakila.actor;

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT COUNT(*) AS 'qtd de clientes', IF(`active` <> 0, 'ATIVOS', 'INATIVOS')
AS 'ativos ou inativos' FROM sakila.customer GROUP BY `active`;

SELECT store_id  AS 'ID da loja', COUNT(store_id) AS 'qtd de clientes', IF(`active` <> 0, 'ATIVOS', 'INATIVOS')
AS 'ativos ou inativos' FROM sakila.customer GROUP BY store_id, active;

SELECT rating, AVG(length) AS 'Média de duração' FROM sakila.film
GROUP BY rating;

SELECT district, COUNT(address) AS 'qtd de endereços' FROM sakila.address
GROUP BY district ORDER BY COUNT(address) DESC;

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

SELECT rating, AVG(length) AS 'Média de duração'
FROM sakila.film
GROUP BY rating
HAVING  AVG(length) BETWEEN 115.0 AND 121.50;

SELECT rating, SUM(replacement_cost) AS ' total de substituição de custo'
FROM sakila.film GROUP by rating HAVING SUM(replacement_cost) > 3950.50;    
