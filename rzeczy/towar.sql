SELECT COUNT(rodzaj) 
FROM towar;

SELECT MAX(cena), AVG(cena)
FROM towar;

SELECT SUM(ilosc * cena), AVG(ilosc * cena)
FROM towar; 

SELECT AVG(cena), SUM(cena) / COUNT(rodzaj)
FROM towar;

SELECT AVG(cena)
FROM towar 
WHERE cena BETWEEN 10 AND 1000;

SELECT SUM(ilosc * waga)
FROM towar
WHERE rodzaj IN ('GD','TR');

SELECT COUNT(zamow)
FROM towar
WHERE zamow='PRAWDA';

SELECT MAX(ilosc*cena)
FROM towar
WHERE data_prod LIKE '1997-%-%';

SELECT COUNT(*)
FROM towar
GROUP BY rodzaj;

SELECT COUNT(*)
FROM towar
GROUP BY rodzaj
ORDER BY rodzaj DESC;

SELECT SUM(ilosc*cena), AVG(ilosc*cena), MIN(ilosc*cena), MAX(ilosc*cena)
FROM towar

FROM towar