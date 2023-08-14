-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 14, 2023 at 01:36 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fridntrip_final`
--

-- --------------------------------------------------------

--
-- Table structure for table `restcommment`
--

CREATE TABLE `restcommment` (
  `ResComtID` int(11) NOT NULL,
  `ComtRestId` int(11) NOT NULL,
  `comtMemberId` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `ComtText` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `restcommment`
--

INSERT INTO `restcommment` (`ResComtID`, `ComtRestId`, `comtMemberId`, `rating`, `ComtText`, `created_time`) VALUES
(1, 1, 6, 5, 'afadsfv', '2023-08-08 21:04:55'),
(2, 1, 6, 2, 'dvadsvsfv', '2023-08-08 22:07:27'),
(3, 1, 6, 4, 'dvadsvfsvfvfvvFve', '2023-08-09 02:09:53'),
(4, 1, 6, 1, 'dadsvvsv', '2023-08-08 22:08:36'),
(5, 5, 9, 1, '超級好吃', '2023-08-09 04:09:50'),
(6, 1, 9, 1, '', '2023-08-09 06:17:40'),
(7, 5, 9, 4, 'abc', '2023-08-09 08:39:48'),
(8, 1, 9, 3, '好好吃', '2023-08-10 05:17:59'),
(9, 1, 9, 5, '超棒的', '2023-08-10 06:06:42'),
(10, 2, 17, 1, 'fffff', '2023-08-10 08:52:26'),
(11, 78, 9, 5, '', '2023-08-13 09:22:42'),
(12, 78, 9, 5, '', '2023-08-13 09:24:20'),
(13, 9, 9, 5, '', '2023-08-13 09:24:32'),
(14, 78, 9, 5, '', '2023-08-13 09:26:01'),
(15, 78, 9, 5, '', '2023-08-13 09:28:50'),
(16, 78, 9, 5, '', '2023-08-13 09:30:29'),
(17, 78, 9, 5, '', '2023-08-13 09:34:14'),
(18, 78, 9, 4, '', '2023-08-13 09:37:07'),
(19, 78, 9, 4, '', '2023-08-13 09:37:10'),
(20, 78, 9, 5, '', '2023-08-13 10:08:02'),
(21, 9, 9, 5, '', '2023-08-13 10:11:44'),
(22, 9, 9, 5, 'sdfadsfdsfsf', '2023-08-13 10:13:39'),
(23, 78, 9, 5, 'dsafadsfdsfsdf', '2023-08-13 10:28:06'),
(24, 9, 9, 1, 'svsadvds', '2023-08-13 12:02:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restcommment`
--
ALTER TABLE `restcommment`
  ADD PRIMARY KEY (`ResComtID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restcommment`
--
ALTER TABLE `restcommment`
  MODIFY `ResComtID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
