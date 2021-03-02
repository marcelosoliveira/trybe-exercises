USE banco_de_dados; -- obrigatório para criar a função no banco correto
DELIMITER $$

CREATE FUNCTION nome_da_function('parametro1',' parametro2', '...',' parametroN')
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ;

USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(actor_id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM sakila.film_actor
    WHERE sakila.film_actor.actor_id = actor_id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;

-- Como usar:

SELECT MoviesWithActor(1);

USE sakila;
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHAR(200);
    SELECT concat(first_name, ' ', last_name)
    FROM sakila.actor
    WHERE actor_id = id
    LIMIT 1
    INTO full_name ;
    RETURN full_name;
END $$

DELIMITER ;

SELECT GetFullName(51);

/*
Exercícios de fixação 1
Utilizando a tabela sakila.payment , monte uma function que retorna
a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
*/

USE sakila;
DELIMITER &&

CREATE FUNCTION QuantidadeTotalPagamentos(id int)
  RETURNS DOUBLE READS SQL DATA
  BEGIN
  DECLARE pag DOUBLE;
    SELECT SUM(p.amount) FROM payment AS p
    WHERE p.customer_id = id
    INTO pag;
    RETURN pag;
  END

&& DELIMITER ;

SELECT QuantidadeTotalPagamentos(50);

/*
Exercícios de fixação 2
Crie uma function que, dado o parâmetro de entrada inventory_id,
retorna o nome do filme vinculado ao registro de inventário com esse id.
*/

USE sakila;
DELIMITER $$

CREATE FUNCTION inventarioId(id int)
  RETURNS VARCHAR(100) READS SQL DATA
  BEGIN
    DECLARE nomeFilme VARCHAR(100);
    SELECT f.title FROM film AS f
    INNER JOIN inventory AS i
    ON f.film_id = i.film_id
    WHERE i.inventory_id = id
    INTO nomeFilme;
    RETURN nomeFilme;
  END

$$ DELIMITER ;

SELECT inventarioId(140);

/*
Exercícios de fixação 3
Crie uma function que receba uma determinada categoria
de filme em formato de texto (ex: 'Action' , 'Horror' )
e retorna a quantidade total de filmes registrados nessa categoria.
*/

DELIMITER $$

CREATE FUNCTION categoriaFilme(category VARCHAR(100))
  RETURNS INT READS SQL DATA
  BEGIN
    DECLARE countFilmes INT;
    SELECT COUNT(fc.film_id) FROM category AS c
    INNER JOIN film_category AS fc
    ON c.category_id = fc.category_id
    WHERE c.`name` = category
    INTO countFilmes;
    RETURN countFilmes;
  END

$$ DELIMITER ;

SELECT 'Horror' INTO @Categoria;
SELECT categoriaFilme(@Categoria);
