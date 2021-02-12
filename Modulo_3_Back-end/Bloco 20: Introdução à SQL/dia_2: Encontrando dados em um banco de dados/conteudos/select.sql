SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2021 AS ano;
SELECT 'Marcelo', 'Santos', 34, 'Desenvolvedor Web';

SELECT 'Marcelo' AS nome, 'Santos' AS sobrenome, 34 AS idade, 'Lindóia' AS Cidade;
SELECT 13 * 8 AS Resultado;
SELECT DATE_FORMAT (now(),'%d/%m/%Y') AS 'Data Atual';

USE sakila;
SELECT * FROM city;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental; 
SELECT title, description, release_year FROM film;
SHOW TABLES;
