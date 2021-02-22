INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');

INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff;

INSERT INTO sakila.staff (first_name, last_name, address_id, email,
  store_id, `active`, username, `password`)
VALUES('Marcelo','Santos' ,2 , 'msbobsk8@hotmail.com',1 ,1 ,'msbob', 'zébobbruto');

INSERT INTO sakila.staff (first_name, last_name, address_id, email,
  store_id, `active`, username, `password`)
VALUES('João','Silva' ,3 , 'joao@hotmail.com',2 ,2 ,'jhon', 'joaojoao'),
('Leandro','Rodrigues' ,4 , 'leandro@hotmail.com',1 ,1 ,'leandrao', 'josemuie');

INSERT IGNORE INTO actor(first_name, last_name)
  SELECT first_name, last_name from customer
  ORDER BY first_name LIMIT 5;
  
  INSERT IGNORE INTO category(`name`)
  VALUES('DRAMA'),
  ('ACÃO'),
  ('TERROR');
  
  INSERT IGNORE INTO store(manager_staff_id, address_id)
  VALUES(3, 3);
    