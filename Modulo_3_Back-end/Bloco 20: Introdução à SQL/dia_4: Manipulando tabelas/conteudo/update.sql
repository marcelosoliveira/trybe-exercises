UPDATE sakila.staff
SET first_name = 'Rannveig'
WHERE first_name = 'Leandro';

UPDATE staff
SET last_name = 'Jordan'
WHERE staff_id = 18;

-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
END);

UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2
WHERE condicoes
-- ORDER BY expressao  ASC ou DESC 
LIMIT quantidade_resultados;

-- Exemplo:
UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

-- Segurança para o Banco de Dados --safe update
-- só deixa utilizar UPDATE E DELETE quando específica 
-- as chaves como id para não ter perigo de prejudicar o Banco de Dados
-- Habilita o safe update mode
SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;
-- Desabilita o safe update mode
SET SQL_SAFE_UPDATES = 0;

UPDATE actor SET first_name = 'JULES'
WHERE 	first_name = 'JULIA';

UPDATE category SET `name` = 'Science Fiction'
WHERE `name` = 'Sci-Fi';

UPDATE film SET replacement_cost = 25.00
WHERE length > 100 AND rating IN('G','PG','PG-13');

UPDATE film SET rental_rate = (
  CASE
    WHEN length BETWEEN 0 AND 100 THEN 10.00
    WHEN length > 100 THEN 20.00
  END  
);

