-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: healthy_care
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `allcodes`
--

DROP TABLE IF EXISTS `allcodes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allcodes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `key` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `type` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `valueEn` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `valueVi` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allcodes`
--

LOCK TABLES `allcodes` WRITE;
/*!40000 ALTER TABLE `allcodes` DISABLE KEYS */;
/*!40000 ALTER TABLE `allcodes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `statusId` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `doctorId` int DEFAULT NULL,
  `patientId` int DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `timeType` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clinics`
--

DROP TABLE IF EXISTS `clinics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clinics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `description` text COLLATE utf8_bin,
  `image` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinics`
--

LOCK TABLES `clinics` WRITE;
/*!40000 ALTER TABLE `clinics` DISABLE KEYS */;
/*!40000 ALTER TABLE `clinics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_clinic_specialty`
--

DROP TABLE IF EXISTS `doctor_clinic_specialty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor_clinic_specialty` (
  `id` int NOT NULL AUTO_INCREMENT,
  `doctorId` int DEFAULT NULL,
  `clinicId` int DEFAULT NULL,
  `specialtyId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_clinic_specialty`
--

LOCK TABLES `doctor_clinic_specialty` WRITE;
/*!40000 ALTER TABLE `doctor_clinic_specialty` DISABLE KEYS */;
/*!40000 ALTER TABLE `doctor_clinic_specialty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `histories`
--

DROP TABLE IF EXISTS `histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `histories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `patientId` int DEFAULT NULL,
  `doctorId` int DEFAULT NULL,
  `description` text COLLATE utf8_bin,
  `files` text COLLATE utf8_bin,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `histories`
--

LOCK TABLES `histories` WRITE;
/*!40000 ALTER TABLE `histories` DISABLE KEYS */;
/*!40000 ALTER TABLE `histories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedules`
--

DROP TABLE IF EXISTS `schedules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedules` (
  `id` int NOT NULL AUTO_INCREMENT,
  `currentNumber` int DEFAULT NULL,
  `maxNumber` int DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `timeType` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `doctorId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedules`
--

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('migration-create-allcode.js'),('migration-create-booking.js'),('migration-create-clinic.js'),('migration-create-doctor-clinic-specialty.js'),('migration-create-history.js'),('migration-create-schedule.js'),('migration-create-specialty.js'),('migration-create-user.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialties`
--

DROP TABLE IF EXISTS `specialties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specialties` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `description` text COLLATE utf8_bin,
  `image` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialties`
--

LOCK TABLES `specialties` WRITE;
/*!40000 ALTER TABLE `specialties` DISABLE KEYS */;
/*!40000 ALTER TABLE `specialties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `firstName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `lastName` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `phoneNumber` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `roleId` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `positionId` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (11,'phamquynh@gmail.com','$2a$10$3O5iIO9Te4QGl1HvkwaQbuGrSCuzmxETnFwRx3j3EZz8ldXlnlLDS','Phạm Thị','Quỳnh','Hải Phòng','0123456789',0,NULL,'2',NULL,'2021-09-26 18:41:23','2021-09-28 21:17:14'),(30,'ngnambka00@gmail.com','$2b$10$jjtzeNRcL23WRtNifQ0O6OZOb9vLS76/GuWx8emW2s/8l72cbxabK','Nguyễn Văn','Nam','Hải Phòng','0901599299',1,NULL,'1',NULL,'2021-09-28 00:34:15','2021-09-28 21:19:28'),(32,'danghuyen@gmail.com','$2b$10$aUT1RvCHyihRCihpqil27Om7MylynhyVTyN3SwLiRG1mXDw72.d/q','Đặng Văn','Huyên','Quảng Ninh','0123456789',1,NULL,'2',NULL,'2021-09-28 06:51:29','2021-09-28 21:24:36'),(35,'hatranthi@gmail.com','$2b$10$mRQVAinsv0JHAAIk1xocA.S4hNLg5Yrm77PFprKq1TgtAKNhOUCE.','Trần Thị','Hà','Thanh Hóa','0123456789',0,NULL,'3',NULL,'2021-09-28 07:05:18','2021-09-28 07:05:18'),(37,'danglongkhanh@gmail.com','$2b$10$Cw70Zo1uZaaEqUw.ETTxqutzf/eVkoTX/2ux3AOZvSOdMHJV9JOMC','Đặng Gia','Long Khánh','Bắc Ninh','0903124987',1,NULL,'3',NULL,'2021-09-28 21:39:53','2021-09-28 21:40:13'),(38,'nhatminh@gmail.com','$2b$10$Cw70Zo1uZaaEqUw.ETTxqutzf/eVkoTX/2ux3AOZvSOdMHJV9JOMC','Nguyễn Nhật','Minh','Lào Cai','0123456789',1,NULL,'3',NULL,'2021-09-28 21:40:53','2021-09-28 21:44:07'),(39,'hoanglong@gmail.com','$2b$10$psr96XVyKa9vQlQX0c0QIOESg10W3ohMxubQ64fg5I6vwfAuDk41S','Nguyễn Hoàng','Long','Nghệ An','0123456789',1,NULL,'3',NULL,'2021-09-28 21:44:36','2021-09-28 21:44:36'),(40,'nhatquang@gmail.com','$2b$10$psr96XVyKa9vQlQX0c0QIOHbMXVYOEurRJE9p1veb46KtQMQCDhH.','Nguyễn Nhật','Quang','Hải Phòng','0123456789',1,NULL,'2',NULL,'2021-09-28 21:45:19','2021-09-28 21:45:27');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-30 19:00:50
