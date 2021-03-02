USE w3schools;
DELIMITER $$

  CREATE TRIGGER value_column_insert
    BEFORE INSERT ON w3schools.orders
    FOR EACH ROW
  BEGIN
    SET NEW.OrderDate = NOW();
  END;

$$ DELIMITER ;
