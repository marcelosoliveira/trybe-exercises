DROP DATABASE IF EXISTS zoo;
CREATE DATABASE zoo;

USE zoo;

CREATE TABLE gerente (
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE cuidador (
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    fk_gerente_id INT NOT NULL,
    FOREIGN KEY (fk_gerente_id) REFERENCES gerente(gerente_id)
) ENGINE=InnoDB;

CREATE TABLE animal (
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sexo CHAR(4) NOT NULL,
    idade INT NOT NULL,
    fk_cuidador_id INT NOT NULL,
    FOREIGN KEY (fk_cuidador_id) REFERENCES cuidador(cuidador_id)
) ENGINE=InnoDB;
