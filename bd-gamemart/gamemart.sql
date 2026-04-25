-- Crear BD (solo si aún no existe)
CREATE DATABASE GamesMartDB;


USE GamesMartDB;
GO

-- Crear tabla principal usada por el backend /games

    CREATE TABLE dbo.Games (
        Id INT IDENTITY(1,1) PRIMARY KEY,
        Title VARCHAR(100) NOT NULL,
        Description VARCHAR(255) NOT NULL,
        Price DECIMAL(10,2) NOT NULL
    );


-- Datos de prueba (opcional)
INSERT INTO dbo.Games (Title, Description, Price)
VALUES
('EA FC 26', 'Juego de futbol', 199.90),
('Elden Ring', 'RPG de mundo abierto', 249.00),
('Teclado Mecanico', 'Periferico gamer RGB', 159.50);
GO

SELECT * FROM dbo.Games;
GO
