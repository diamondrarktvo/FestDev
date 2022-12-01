-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           8.0.30 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.2.0.6576
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour fakoy
USE `FAKOY`;

-- Listage de la structure de table fakoy. fako
DROP TABLE IF EXISTS `fako`;
CREATE TABLE IF NOT EXISTS `fako` (
  `id` int NOT NULL AUTO_INCREMENT,
  `poids` double NOT NULL,
  `status` tinyint(1) DEFAULT 0,
  `prix` DOUBLE NOT NULL,
  `date_create` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_Utilisateur` int NOT NULL,
  `id_Type` int NOT NULL,
  `id_Place` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Fako_Utilisateur_FK` (`id_Utilisateur`),
  KEY `Fako_Type0_FK` (`id_Type`),
  KEY `Fako_Place1_FK` (`id_Place`),
  CONSTRAINT `Fako_Place1_FK` FOREIGN KEY (`id_Place`) REFERENCES `place` (`id`),
  CONSTRAINT `Fako_Type0_FK` FOREIGN KEY (`id_Type`) REFERENCES `type` (`id`),
  CONSTRAINT `Fako_Utilisateur_FK` FOREIGN KEY (`id_Utilisateur`) REFERENCES `utilisateur` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de table fakoy. fokotany
DROP TABLE IF EXISTS `fokotany`;
CREATE TABLE IF NOT EXISTS `fokotany` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de table fakoy. place
DROP TABLE IF EXISTS `place`;
CREATE TABLE IF NOT EXISTS `place` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `cord_x` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `cord_y` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `id_Fokotany` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Place_Fokotany_FK` (`id_Fokotany`),
  CONSTRAINT `Place_Fokotany_FK` FOREIGN KEY (`id_Fokotany`) REFERENCES `fokotany` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de table fakoy. type
DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(15) COLLATE utf8mb4_general_ci NOT NULL,
  `description` TEXT COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Les données exportées n'étaient pas sélectionnées.

-- Listage de la structure de table fakoy. utilisateur
DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `fonction` VARCHAR(255) DEFAULT 'utilisateur',
  `quartier` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `cin` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mdp` text COLLATE utf8mb4_general_ci NOT NULL,
  `path_photo` VARCHAR(255) NULL,
  `path_qr_code` VARCHAR(255),
  `facial` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `admin`;

CREATE TABLE IF NOT EXISTS `admin` (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `fonction` VARCHAR(255) DEFAULT 'admin',
  `username` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mdp` text COLLATE utf8mb4_general_ci NOT NULL,
  `path_photo` VARCHAR(255) NULL
);

CREATE TABLE IF NOT EXISTS type_contenu (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `contenu` (
  `id` INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `photo_1` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `photo_2` varchar(255) COLLATE utf8mb4_general_ci NULL,
  `description` TEXT NOT NULL,
  `created_at` DATETIME DEFAULT NOW(),
  `updated_at` DATETIME DEFAULT NULL,
  `admin_id` INT(11) NOT NULL,
  `type_id` INT(11) NOT NULL,
  CONSTRAINT fk_admin_id_contenu FOREIGN KEY(admin_id)
    REFERENCES `admin`(id),
  CONSTRAINT fk_type_id_contenu FOREIGN KEY(type_id)
    REFERENCES type_contenu(id)
);

-- Les données exportées n'étaient pas sélectionnées.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
