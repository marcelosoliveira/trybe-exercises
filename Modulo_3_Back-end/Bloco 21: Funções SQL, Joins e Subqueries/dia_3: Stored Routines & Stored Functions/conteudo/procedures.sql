-- Verbo + Resultado

-- ObterTotalDeVendas
-- ExibirRankMaximo
-- ObterClienteMaisAtivo
-- CalcularNivelEngajamento
-- MontarNomeCompleto

SET @my_school = 'BeTrybe';
SELECT @my_school;

USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
DELIMITER $$ -- definindo delimitador

CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) -- parâmetros
BEGIN -- delimitando o início do código SQL

END $$ -- delimitando o final do código SQL

DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário

USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
    SELECT * FROM sakila.actor;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAllActors();

USE sakila;
DELIMITER $$

-- Procedure de entrada
CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER  ;

-- Como usar:

CALL ShowActorsWithSyllable('lope');

-- Procedure de saída
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;

-- Procedure de entrada e saída
USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$

DELIMITER ;

-- Como usar:

SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;

/*
Exercícios de fixação 1
Monte uma procedure que exiba os 10 atores mais populares,
baseado em sua quantidade de filmes. Essa procedure não deve
receber parâmetros de entrada ou saída e, quando chamada,
deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
*/

USE sakila;
DELIMITER $$

CREATE PROCEDURE StarsActors()
BEGIN
  SELECT a.actor_id, MAX(fa.film_id) FROM actor AS a
  INNER JOIN film_actor AS fa ON a.actor_id = fa.actor_id
  GROUP BY a.actor_id LIMIT 10;
END

$$ DELIMITER ;

CALL StarsActors();

/*
Exercícios de fixação 2
Monte uma procedure que receba como parâmetro de entrada o nome da
categoria desejada em uma string e que exiba o id do filme , seu titulo ,
o id de sua categoria e o nome da categoria selecionada.
Use as tabelas film , film_category e category para montar essa procedure.
 */
 
USE sakila
DELIMITER $$
 
CREATE PROCEDURE categoryName(IN category VARCHAR(100))
  BEGIN
    SELECT f.film_id, f.title, c.category_id, c.`name` FROM film AS f
    INNER JOIN film_category AS fc ON f.film_id = fc.film_id
    INNER JOIN category AS c ON fc.category_id = c.category_id
    WHERE c.`name` = category;
  END

$$ DELIMITER ;

CALL categoryName('Action');

/*
Exercícios de fixação 3
Monte uma procedure que receba o email de um cliente como parâmetro
de entrada e diga se o cliente está ou não ativo,
através de um parâmetro de saída.
*/

DELIMITER $$

CREATE PROCEDURE emailCliente(INOUT email VARCHAR(100))
  BEGIN
    SELECT IF(c.active <> 0, 'ACTIVO', 'INACTIVO') FROM customer AS c
    WHERE c.email = email;
  END
  
  $$ DELIMITER ;

SELECT 'SANDRA.MARTIN@sakilacustomer.org' INTO @Cliente;
SELECT 'DONNA.THOMPSON@sakilacustomer.org' INTO @Cliente;
CALL emailCliente(@Cliente);
SELECT @Cliente;
