SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS

-- Podemos descobrir a diferença em dias entre duas datas usando
-- o DATEDIFF e a diferença de tempo entre dois horários usando o TIMEDIFF .
-- Em ambos os casos, o segundo valor é subtraído do primeiro para calcular o resultado.

-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- E por fim, podemos extrair qualquer parte de uma data de uma coluna:
SELECT DATE(data_cadastro); -- YYYY-MM-DD
SELECT YEAR(data_cadastro); -- Ano
SELECT MONTH(data_cadastro); -- Mês
SELECT DAY(data_cadastro); -- Dia
SELECT HOUR(data_cadastro); -- Hora
SELECT MINUTE(data_cadastro); -- Minuto
SELECT SECOND(data_cadastro); -- Segundo

-- Também podemos usar CURRENT_DATE() e NOW() em conjunto com
-- os comandos acima para encontrar resultados dinâmicos da seguinte maneira:
SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual

SELECT DATEDIFF('2030-01-20', '2021-02-24');

SELECT HOUR(TIMEDIFF('10:25:45', '11:00:00'));
