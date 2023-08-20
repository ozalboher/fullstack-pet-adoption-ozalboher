-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: pets
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phoneNumber` varchar(12) NOT NULL,
  `role` varchar(6) NOT NULL,
  `bio` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0a790d54-dc25-4f18-81d4-31200c56d180','s@sa.com','asd','asd','$2b$10$K/WWYruiSqQXxrIbqU/FWO0bLqgYewS..s6TW3Ibeda3E.Osmw2yu','1111111111','user',NULL),('2cf55a61-e532-465b-887a-fe265b9b58e8','q@q.com','Ma','Ku','$2b$10$KEHLKoy4Oefa2oOxoRYSDeCKhjaYdsSSPOUp.au4bv7OdOK5TQBhu','1111111111','user',NULL),('34b0d64e-cf68-4a1b-8e0c-68c2e08e541b','w@w.com','Alfred','Hitchkok','$2b$10$vZ0zgCMoiP/Dkg2NbMHYbeAe1O9zyxQQe4gZZx4i49BK.SCTeC.qC','1111111111','user',''),('4a49b914-bdef-4d04-a4fb-ce74494f4e68','s@ssa.com','asd','asd','$2b$10$J92vNbRwu5sLFVJSEII0lOblgXL4jmw3/TUfU2l2Vf1afI2sRHvHC','1111111111','user',NULL),('61ca02ae-8b3c-4526-94c8-6a7e3a861eeb','s@s.com','Simon','Williams','$2b$10$TP2.Fh9SUqLh9jWoC21H9eBJWl.eaPSdmYvQVRDYmZ3xs3bwP7lM2','0508540400','user','Hello World !'),('bea2c41e-507e-4a42-985f-03192a36a41c','a@a.com','Admin','Administrator','$2b$10$Ad7JRRGuXQH8jlgjznix7eL.mLyKKoDGdXB9h5kI4fUEfuu/sgKzm','7777777777','admin','');
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

-- Dump completed on 2023-08-20  7:02:04
