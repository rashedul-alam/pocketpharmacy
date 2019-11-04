-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2019 at 07:46 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pocketdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(60) NOT NULL,
  `type` varchar(20) NOT NULL,
  `salary` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `password`, `email`, `phone`, `address`, `type`, `salary`) VALUES
('PoPO', 'admin1', 'admin1@a.c', '45358545484584', 'basundora ,block C', 'admin', NULL),
('admin01', 'admin', 'admin@a.c', '01762255226', 'mirpur 14', 'admin', NULL),
('cus1', 'cus1', 'cus1@c.c', '8463486486', 'gulshan', 'customer', NULL),
('doc000', 'doc1', 'doc1@d.c', '1234', 'mirpur 10', 'doctor', 1000),
('guluta', 'guluta', 'guluta@g.g', '545543', 'nikunjo', 'customer', 0),
('man11', 'man1', 'man1@m.c', '153434534', 'mirpr13', 'manager', 200),
('xxxxxx', 'xxxxxx', 'xxxxxx@x', '2113223', 'mirpr13', 'manager', 50);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `email` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
