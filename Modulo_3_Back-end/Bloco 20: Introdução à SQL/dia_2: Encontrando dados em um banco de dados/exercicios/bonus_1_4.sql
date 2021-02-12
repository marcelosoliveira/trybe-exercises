DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,  
  Name TEXT NOT NULL
);

CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);
 
INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
    
USE PiecesProviders;
    
SELECT Code, Name FROM Providers ORDER BY Name DESC LIMIT 1;

SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;

SELECT Providers.Name AS Providers, Provides.Price AS Provides 
FROM Provides
INNER JOIN Providers
ON Provides.Provider = Providers.Code
ORDER BY Provides.Price DESC
LIMIT 4 OFFSET 2;

SELECT CONCAT(
  'A peça mais cara é a: ', Pieces.Name,
  ' provida pela empresa ', Providers.Name,
  ' e custa ', Price, ' reais.') AS 'Peça mais cara'
FROM Provides
INNER JOIN Providers
ON Providers.Code = Provides.Provider
INNER JOIN Pieces
ON Pieces.Code = Provides.Piece
ORDER BY Price DESC LIMIT 1
