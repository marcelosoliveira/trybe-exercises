SELECT CONCAT (first_name, last_name) FROM actor;

-- Seu resultado ficou estranho? Eu também achei! Tente agora a query a seguir.

SELECT CONCAT(first_name, ' ', last_name) FROM actor;

-- Muito melhor, certo? Mas dá para melhorar? Dá!

SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM actor;

SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM film;
SELECT CONCAT(title, ' ', rating) AS 'Classificação ' FROM film;
SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM address;
