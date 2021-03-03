DROP DATABASE IF EXISTS normalization;

CREATE DATABASE normalization;

USE normalization;

CREATE TABLE cadastro (
	cadastro_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    telefone CHAR(16) NOT NULL,
    data_cadastro DATE NOT NULL
) ENGINE= InnoDB;

CREATE TABLE setor (
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(40) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE funcionario (
	funccionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    fk_cadastro_id INT NOT NULL,
    fk_setor_id INT NOT NULL,
    FOREIGN KEY (fk_cadastro_id) REFERENCES cadastro(cadastro_id),
    FOREIGN KEY (fk_setor_id) REFERENCES setor(setor_id)
) ENGINE=InnoDB;


INSERT INTO cadastro (email, telefone, data_cadastro)
	VALUES ('jo@gmail.com',	'(35)998552-1445', NOW()),
		   ('andre1990@gmail.com', '(47)99522-4996', NOW()),
           ('cindy@outlook.com', '(33)99855-4669', NOW()),
           ('rnandamendes@yahoo.com', '(33)99200-1556', NOW());

INSERT INTO setor (setor)
	VALUES ('Administração'),
		   ('Vendas'),
           ('Operacional'),
           ('Estratégico'),
           ('Marketing');

INSERT INTO funcionario (nome, sobrenome, fk_cadastro_ID, fk_setor_id)
	VALUES ('Joseph', 'Rodrigues', 1, 2),
		   ('André', 'Freeman', 2, 3),
           ('Cíntia', 'Duval', 3, 1),
           ('Fernanda', 'Mendes', 4, 5);
           
 SELECT  CONCAT(f.nome, ' ', f.sobrenome) AS 'Nome Completo', 
 s.setor AS 'Setor', c.email AS 'Email', c.telefone AS 'Telefone',
 c.data_cadastro AS 'Data de Cadastro' FROM funcionario AS f
 INNER JOIN setor AS s ON f.fk_setor_id = s.setor_id
 INNER JOIN cadastro AS c ON f.fk_cadastro_id = c.cadastro_id; 
