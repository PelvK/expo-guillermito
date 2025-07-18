# INSERTS
## PARTIDOS
### Sub-10
INSERT INTO `Game`(`local_team_id`, `visit_team_id`, `date_match`, `hour`, `place_id`, `category_id`) VALUES 
(19,18,'2024-07-19', '09:20', 7, 1),
(20,17,'2024-07-19', '10:00',  7, 1),
(21,22,'2024-07-19', '10:40',  7, 1),
(23,26,'2024-07-19', '11:20',  7, 1),
(25,24,'2024-07-19', '12:00',  7, 1),
(18,17,'2024-07-19', '12:40',  7, 1),
(20,19,'2024-07-19', '13:20',  7, 1),
(23, 22,'2024-07-19', '14:00', 7, 1),
(21,25,'2024-07-19', '14:40', 7, 1),
(24,26,'2024-07-19', '15:20', 7, 1),
(18,20,'2024-07-19', '16:00', 7, 1),
(19,17,'2024-07-19', '16:40', 7, 1),
(21,23,'2024-07-19', '17:20', 7, 1),
(22,24,'2024-07-19', '18:00', 7, 1),
(25,26,'2024-07-19', '18:40', 7, 1);

### Cruces SUB-10
INSERT INTO `Game`(`local_team_id`, `visit_team_id`, `date_match`, `hour`, `place_id`, `type`, `category_id`) VALUES 

((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "3° TABLA GENERAL" and t.category_id = 1),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "6° TABLA GENERAL" and t.category_id = 1),
 '2025-07-20', '10:00', 7, 5, 1),
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "4° TABLA GENERAL" and t.category_id = 1),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "5° TABLA GENERAL" and t.category_id = 1),
 '2025-07-20', '10:40', 7, 6, 1),
 
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "2° TABLA GENERAL" and t.category_id = 1),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 5" and t.category_id = 1),
 '2025-07-20', '14:00', 7, 3, 1),
  ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "1° TABLA GENERAL" and t.category_id = 1),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 6" and t.category_id = 1),
 '2025-07-20', '14:40', 7, 4, 1),
 
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 3" and t.category_id = 1),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 4" and t.category_id = 1),
 '2025-07-20', '17:00', 7, 1, 1),
 
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "7° TABLA GENERAL" and t.category_id = 1),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "10° TABLA GENERAL" and t.category_id = 1),
 '2025-07-20', '11:20', 7, 35, 1),
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "8° TABLA GENERAL" and t.category_id = 1),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "9° TABLA GENERAL" and t.category_id = 1),
 '2025-07-20', '12:00', 7, 36, 1),
 
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 35" and t.category_id = 1),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 36" and t.category_id = 1),
 '2025-07-20', '15:30', 7, 33, 1);

### Cruces SUB-12
INSERT INTO `Game`(`local_team_id`, `visit_team_id`, `date_match`, `hour`, `place_id`, `type`, `category_id`) VALUES 

((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "1° TABLA GENERAL" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "8° TABLA GENERAL" and t.category_id = 2),
 '2025-07-20', '10:00', 2, 5, 2),
   ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "4° TABLA GENERAL" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "5° TABLA GENERAL" and t.category_id = 2),
 '2025-07-20', '10:40', 2, 6, 2),
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "3° TABLA GENERAL" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "6° TABLA GENERAL" and t.category_id = 2),
 '2025-07-20', '11:20', 2, 7, 2),
  ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "2° TABLA GENERAL" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "7° TABLA GENERAL" and t.category_id = 2),
 '2025-07-20', '12:00', 2, 8, 2),
 
 
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 5" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 6" and t.category_id = 2),
 '2025-07-20', '14:00', 2, 3, 2),
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 7" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 8" and t.category_id = 2),
 '2025-07-20', '14:40', 2, 4, 2),
 
 
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 3" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 4" and t.category_id = 2),
 '2025-07-20', '17:00', 2, 1, 2),
 
 
((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "9° TABLA GENERAL" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "6° TABLA GENERAL" and t.category_id = 2),
 '2025-07-20', '10:00', 3, 37, 2),
   ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "12° TABLA GENERAL" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "13° TABLA GENERAL" and t.category_id = 2),
 '2025-07-20', '10:40', 3, 38, 2),
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "11° TABLA GENERAL" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "14° TABLA GENERAL" and t.category_id = 2),
 '2025-07-20', '11:20', 3, 39, 2),
  ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "10° TABLA GENERAL" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "15° TABLA GENERAL" and t.category_id = 2),
 '2025-07-20', '12:00', 3, 40, 2),
 
 
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 37" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 38" and t.category_id = 2),
 '2025-07-20', '14:00', 3, 35, 2),
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 39" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 40" and t.category_id = 2),
 '2025-07-20', '14:40', 3, 36, 2),
 
 
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 35" and t.category_id = 2),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 36" and t.category_id = 2),
 '2025-07-20', '17:00', 3, 33, 2);

 ### Cruces SUB-15
INSERT INTO `Game`(`local_team_id`, `visit_team_id`, `date_match`, `hour`, `place_id`, `type`, `category_id`) VALUES 

((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "3° TABLA GENERAL" and t.category_id = 3),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "6° TABLA GENERAL" and t.category_id = 3),
 '2025-07-20', '10:00', 4, 5, 3),
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "4° TABLA GENERAL" and t.category_id = 3),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "5° TABLA GENERAL" and t.category_id = 3),
 '2025-07-20', '10:40', 4, 6, 3),
 
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "2° TABLA GENERAL" and t.category_id = 3),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 5" and t.category_id = 3),
 '2025-07-20', '14:00', 4, 3, 3),
  ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "1° TABLA GENERAL" and t.category_id = 3),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 6" and t.category_id = 3),
 '2025-07-20', '14:40', 4, 4, 3),
 
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 3" and t.category_id = 3),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 4" and t.category_id = 3),
 '2025-07-20', '17:00', 1, 1, 3),
 
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "7° TABLA GENERAL" and t.category_id = 3),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "10° TABLA GENERAL" and t.category_id = 3),
 '2025-07-20', '11:20', 4, 35, 3),
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "8° TABLA GENERAL" and t.category_id = 3),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "9° TABLA GENERAL" and t.category_id = 3),
 '2025-07-20', '12:00', 4, 36, 3),
 
 ((SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 35" and t.category_id = 3),
 (SELECT t.ID from Team t join Club c on c.id = t.club_id where c.large_name = "GANADOR 36" and t.category_id = 3),
 '2025-07-20', '15:30', 1, 33, 3);

### SUB-12
INSERT INTO `Game`(`local_team_id`, `visit_team_id`, `date_match`, `hour`, `place_id`, `category_id`) VALUES 
(1,2,'2024-07-19', '10:00',  3, 1),
(5,6,'2024-07-19', '10:40',  3, 1),
(9,10,'2024-07-19', '11:20',  3, 1),
(16,15,'2024-07-19', '12:00',  3, 1),
(2,3,'2024-07-19', '12:40',  3, 1),
(5,7,'2024-07-19', '13:20',  3, 1),
(11,10,'2024-07-19', '14:00',  3, 1),
(2,4,'2024-07-19', '14:40',  3, 1),
(15,14,'2024-07-19', '15:20',  3, 1),
(5,8,'2024-07-19', '16:00',  3, 1),
(9,11,'2024-07-19', '16:40',  3, 1),
(14,16,'2024-07-19', '17:20',  3, 1),

(3,4,'2024-07-19', '10:00',  3, 1),
(7,8,'2024-07-19', '10:40',  3, 1),
(12,11,'2024-07-19', '11:20',  3, 1),
(13,14,'2024-07-19', '12:00',  3, 1),
(4,1,'2024-07-19', '12:40',  3, 1),
(6,8,'2024-07-19', '13:20',  3, 1),
(12,9,'2024-07-19', '14:00',  3, 1),
(13,16,'2024-07-19', '14:40',  3, 1),
(3,1,'2024-07-19', '15:20',  3, 1),
(6,7,'2024-07-19', '16:00',  3, 1),
(12,10,'2024-07-19', '16:40',  3, 1),
(13,15,'2024-07-19', '17:20',  3, 1);

## EQUIPOS

### CRUCES SUB-10
INSERT INTO `Team`
(`club_id`, `category_id`, `zone_id`) VALUES
((SELECT ID FROM Club WHERE large_name = "1° TABLA GENERAL"),1,8),
((SELECT ID FROM Club WHERE large_name = "2° TABLA GENERAL"),1,8),
((SELECT ID FROM Club WHERE large_name = "3° TABLA GENERAL"),1,8),
((SELECT ID FROM Club WHERE large_name = "4° TABLA GENERAL"),1,8),
((SELECT ID FROM Club WHERE large_name = "5° TABLA GENERAL"),1,8),
((SELECT ID FROM Club WHERE large_name = "6° TABLA GENERAL"),1,8),
((SELECT ID FROM Club WHERE large_name = "7° TABLA GENERAL"),1,8),
((SELECT ID FROM Club WHERE large_name = "8° TABLA GENERAL"),1,8),
((SELECT ID FROM Club WHERE large_name = "9° TABLA GENERAL"),1,8),
((SELECT ID FROM Club WHERE large_name = "10° TABLA GENERAL"),1,8),
((SELECT ID FROM Club WHERE large_name = "GANADOR 3"),1,8),
((SELECT ID FROM Club WHERE large_name = "GANADOR 4"),1,8),
((SELECT ID FROM Club WHERE large_name = "GANADOR 5"),1,8),
((SELECT ID FROM Club WHERE large_name = "GANADOR 6"),1,8),
((SELECT ID FROM Club WHERE large_name = "GANADOR 35"),1,8),
((SELECT ID FROM Club WHERE large_name = "GANADOR 36"),1,8),

## EQUIPOS

### CRUCES SUB-12
INSERT INTO `Team`
(`club_id`, `category_id`, `zone_id`) VALUES
((SELECT ID FROM Club WHERE large_name = "1° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "2° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "3° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "4° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "5° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "6° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "7° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "8° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "9° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "10° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "11° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "12° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "13° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "14° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "15° TABLA GENERAL"),2,9),
((SELECT ID FROM Club WHERE large_name = "16° TABLA GENERAL"),2,9),

((SELECT ID FROM Club WHERE large_name = "GANADOR 3"),2,9),
((SELECT ID FROM Club WHERE large_name = "GANADOR 4"),2,9),

((SELECT ID FROM Club WHERE large_name = "GANADOR 5"),2,9),
((SELECT ID FROM Club WHERE large_name = "GANADOR 6"),2,9),
((SELECT ID FROM Club WHERE large_name = "GANADOR 7"),2,9),
((SELECT ID FROM Club WHERE large_name = "GANADOR 8"),2,9),


((SELECT ID FROM Club WHERE large_name = "GANADOR 35"),2,9),
((SELECT ID FROM Club WHERE large_name = "GANADOR 36"),2,9),

((SELECT ID FROM Club WHERE large_name = "GANADOR 37"),2,9),
((SELECT ID FROM Club WHERE large_name = "GANADOR 38"),2,9),
((SELECT ID FROM Club WHERE large_name = "GANADOR 39"),2,9),
((SELECT ID FROM Club WHERE large_name = "GANADOR 40"),2,9);

### CRUCES SUB-15
INSERT INTO `Team`
(`club_id`, `category_id`, `zone_id`) VALUES
((SELECT ID FROM Club WHERE large_name = "1° TABLA GENERAL"),3,10),
((SELECT ID FROM Club WHERE large_name = "2° TABLA GENERAL"),3,10),
((SELECT ID FROM Club WHERE large_name = "3° TABLA GENERAL"),3,10),
((SELECT ID FROM Club WHERE large_name = "4° TABLA GENERAL"),3,10),
((SELECT ID FROM Club WHERE large_name = "5° TABLA GENERAL"),3,10),
((SELECT ID FROM Club WHERE large_name = "6° TABLA GENERAL"),3,10),
((SELECT ID FROM Club WHERE large_name = "7° TABLA GENERAL"),3,10),
((SELECT ID FROM Club WHERE large_name = "8° TABLA GENERAL"),3,10),
((SELECT ID FROM Club WHERE large_name = "9° TABLA GENERAL"),3,10),
((SELECT ID FROM Club WHERE large_name = "10° TABLA GENERAL"),3,10),
((SELECT ID FROM Club WHERE large_name = "GANADOR 3"),3,10),
((SELECT ID FROM Club WHERE large_name = "GANADOR 4"),3,10),
((SELECT ID FROM Club WHERE large_name = "GANADOR 5"),3,10),
((SELECT ID FROM Club WHERE large_name = "GANADOR 6"),3,10),
((SELECT ID FROM Club WHERE large_name = "GANADOR 35"),3,10),
((SELECT ID FROM Club WHERE large_name = "GANADOR 36"),3,10),

# SELECTS
## Equipos y club por categoria
SELECT c.id as ID_CLUB, t.id as ID_TEAM, c.large_name as NAME_CLUB, cat.description as DESCRIPTION from Club as c
INNER JOIN Team as t on t.club_id = c.id
INNER JOIN Category as cat ON cat.id = t.category_id
WHERE cat.description = 'Sub-12';


