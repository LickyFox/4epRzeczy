--Uczniowie(Imie,Nazwisko,NumerLegitymacji,idKlasy)
--Klasy(idKlasy,Profil)
--Przedmioty(idPrzedmiotu,Nazwa)
CREATE DATABASE 4eP_matura;
USE 4eP_matura;

CREATE TABLE Klasy
(
    idKlasy int PRIMARY KEY AUTO_INCREMENT,
    Profil varchar(50)
);

CREATE TABLE Przedmioty 
(
    idPrzedmiotu int PRIMARY KEY AUTO_INCREMENT,
    Nazwa varchar(250)
);

CREATE TABLE Uczniowie
(
    NumerLegitymacji int PRIMARY KEY AUTO_INCREMENT,
    Imie varchar(20),
    Nazwisko varchar(100),
    idKlasy int 
);

ALTER TABLE Uczniowie
ADD FOREIGN KEY (idKlasy)
REFERENCES Klasy(idKlasy);

CREATE TABLE Matura 
(
    NumerLegitymacji INT,
    idPrzedmiotu INT,
     PRIMARY KEY (NumerLegitymacji,idPrzedmiotu)
);

ALTER TABLE Matura
ADD FOREIGN KEY(NumerLegitymacji)
REFERENCES Uczniowie(NumerLegitymacji),
ADD FOREIGN KEY(idPrzedmiotu)
REFERENCES Przedmioty(idPrzedmiotu);

INSERT INTO Klasy VALUES(NULL , "LOGISTYK");
INSERT INTO Przedmioty VALUES(NULL , "Matematyka", "Biologia");
