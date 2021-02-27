DELIMITER $$

CREATE TRIGGER nome_do_trigger
[BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
FOR EACH ROW
BEGIN
    -- o código SQL entra aqui
END;

$$ DELIMITER ;

CREATE DATABASE IF NOT EXISTS rede_social;

USE rede_social;

CREATE TABLE perfil(
    perfil_id INT PRIMARY KEY auto_increment,
    saldo DECIMAL(10, 2) NOT NULL DEFAULT 0,
    ultima_atualizacao DATETIME,
    acao VARCHAR(50),
    ativo BOOLEAN DEFAULT 1
) engine = InnoDB;

CREATE TABLE log_perfil(
    acao_id INT PRIMARY KEY AUTO_INCREMENT,
    acao VARCHAR(300),
    data_acao DATE
) engine = InnoDB;

/*
Exemplo de trigger para o INSERT :
Considerando a tabela perfil , hora de montar um Trigger
que define a data de inserção e o tipo de operação,
quando um novo registro é inserido.
*/

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END; $$
DELIMITER ;

INSERT INTO perfil(saldo) VALUES (2500);

SELECT * FROM perfil;

/*
Exemplo de trigger para o UPDATE :
Considerando a tabela perfil , hora de montar um Trigger
que define a data de atualização e o tipo de operação,
quando algum registro for modificado.
*/
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END; $$
DELIMITER ;

UPDATE perfil
SET saldo = 3000
WHERE perfil_id = 1;

SELECT * FROM perfil;

/*
Exemplo de trigger para o DELETE :
Considerando a tabela log_perfil , hora de criar um trigger
que envia informações para essa tabela quando um registro da
tabela perfil é excluído.
*/

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('exclusão', NOW());
END; $$
DELIMITER ;

DELETE FROM perfil WHERE perfil_id = 1;

SELECT * FROM log_perfil;

/*
It's Trigger Time
Alright, people! Hora de montar uns triggers.
Considerando as tabelas e os banco de dados abaixo:
*/

CREATE DATABASE IF NOT EXISTS betrybe_automoveis;

USE betrybe_automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;

/*
Exercício de fixação 1
Crie um TRIGGER que, a cada nova inserção feita na tabela carros,
defina o valor da coluna data_atualizacao para o momento do ocorrido,
a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .
*/

DELIMITER $$

  CREATE TRIGGER value_column_insert
    BEFORE INSERT ON carros
    FOR EACH ROW
  BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 12;
  END;

$$ DELIMITER ;

INSERT INTO carros (preco) VALUES(25000);

/*
Exercício de fixação 2
Crie um TRIGGER que, a cada atualização feita na tabela carros,
defina o valor da coluna data_atualizacao para o momento do
ocorrido e a acao para 'ATUALIZAÇÃO' .
*/

DELIMITER $$

  CREATE TRIGGER value_column_update
    AFTER UPDATE ON carros
    FOR EACH ROW
  BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'ATUALIZAÇÃO';
  END;

$$ DELIMITER ;

UPDATE carros SET preco = 31000
WHERE id_carro = 4;

SELECT * FROM carros;

/*
Exercício de fixação 3
Crie um TRIGGER que, a cada exclusão feita na tabela carros,
envie para a tabela log_operacoes as informações do tipo_operacao
como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
*/

DELIMITER $$

  CREATE TRIGGER value_column_delete
    AFTER DELETE ON carros
    FOR EACH ROW
  BEGIN
    INSERT INTO log_operacoes (tipo_operacao, data_ocorrido)
    VALUES('EXCLUSÃO', NOW());
  END;

$$ DELIMITER ;

DELETE FROM carros
WHERE id_carro = 5;

SELECT * FROM log_operacoes;
