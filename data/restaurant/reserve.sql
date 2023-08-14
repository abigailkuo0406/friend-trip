-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 14, 2023 at 01:35 AM
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
-- Table structure for table `reserve`
--

CREATE TABLE `reserve` (
  `reserveId` int(11) NOT NULL,
  `reserve_member_id` int(11) DEFAULT NULL,
  `rest_id` int(11) DEFAULT NULL,
  `reserve_date` date DEFAULT NULL,
  `reserve_time` time DEFAULT NULL,
  `reserve_people` int(11) DEFAULT NULL,
  `state` tinyint(1) NOT NULL,
  `pass` tinyint(1) NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reserve`
--

INSERT INTO `reserve` (`reserveId`, `reserve_member_id`, `rest_id`, `reserve_date`, `reserve_time`, `reserve_people`, `state`, `pass`, `created_time`) VALUES
(2, 3, 3, '2023-04-05', '00:00:00', 7, 0, 0, '2023-05-17 10:02:44'),
(3, 3, 1, '2023-05-01', '00:00:00', 1, 0, 0, '2023-05-17 04:23:27'),
(4, 5, 3, '2023-05-01', '00:00:00', 5, 0, 0, '2023-05-18 09:52:07'),
(5, 4, 1, '2023-05-01', '00:00:00', 1, 0, 0, '2023-05-17 04:23:27'),
(6, 4, 3, '2023-05-01', '00:00:00', 1, 0, 0, '2023-05-19 01:15:45'),
(7, 56, 16, '2023-05-01', '00:00:00', 1, 0, 0, '2023-05-17 04:23:27'),
(8, 78, 1, '2023-05-01', '00:00:00', 1, 0, 0, '2023-05-17 04:23:27'),
(9, 24, 16, '2023-05-01', '00:00:00', 1, 0, 0, '2023-05-17 04:23:27'),
(10, 24, 2, '2023-05-01', '00:00:00', 1, 0, 0, '2023-05-17 04:23:27'),
(11, 6, 11, '2023-05-01', '00:00:00', 1, 0, 0, '2023-05-17 04:23:27'),
(12, 24, 1, '2023-05-01', '00:00:00', 3, 0, 0, '2023-05-17 04:23:27'),
(13, 5, 3, '2023-05-26', '00:00:00', 11, 0, 0, '2023-05-17 04:23:27'),
(14, 2, 23, '2023-05-27', '00:00:00', 11, 0, 0, '2023-05-17 04:23:27'),
(15, 5, 46, '2023-05-31', '00:00:00', 2, 0, 0, '2023-05-17 04:23:27'),
(16, 2, 3, '2023-05-17', '00:00:00', 2, 0, 0, '2023-05-19 01:16:11'),
(17, 2, 3, '2023-05-17', '00:00:00', 1, 0, 0, '2023-05-17 04:23:27'),
(18, 2, 3, '2023-05-05', '00:00:00', 2, 0, 0, '2023-05-17 04:23:27'),
(19, 5, 3, '2023-05-18', '00:00:00', 2, 0, 0, '2023-05-17 04:23:27'),
(20, 5, 2, '2023-05-16', '00:00:00', 2, 0, 0, '2023-05-17 04:23:27'),
(21, 2, 47, '2023-05-26', '00:00:00', 4, 0, 0, '2023-05-17 04:23:27'),
(22, 5, 2, '2023-05-27', '13:51:00', 4, 0, 0, '2023-05-17 04:23:27'),
(23, 11, 47, '2023-05-31', '19:32:00', 2, 0, 0, '2023-05-17 04:23:27'),
(24, 5, 3, '2023-05-03', '09:05:00', 13, 0, 0, '2023-05-17 09:59:59'),
(25, 2, 1, '2023-05-25', '20:12:00', 1, 0, 0, '2023-05-17 12:10:02'),
(26, 10, 64, '2023-05-27', '12:29:00', 2, 0, 0, '2023-05-18 16:29:25'),
(27, 13, 59, '2023-05-22', '14:30:00', 2, 0, 0, '2023-05-18 16:30:59'),
(28, 17, 59, '2023-05-15', '17:32:00', 3, 0, 0, '2023-05-18 16:32:12'),
(29, 24, 4, '2023-05-29', '13:33:00', 3, 0, 0, '2023-05-18 16:33:16'),
(30, 3, 5, '2023-07-28', '11:48:25', 2, 0, 0, '2023-07-19 03:49:16'),
(43, 1, 5, '2023-07-31', '12:30:00', 4, 0, 0, '2023-07-19 08:20:06'),
(44, 1, 5, '2023-08-05', '13:30:00', 3, 0, 0, '2023-07-19 08:39:52'),
(46, 1, 5, '2023-07-30', '12:30:00', 4, 0, 0, '2023-07-19 08:49:49'),
(47, 1, 1, '2023-07-30', '12:30:00', 1, 0, 0, '2023-07-19 09:10:25'),
(48, 1, 1, '2023-07-26', '12:30:00', 1, 0, 0, '2023-07-19 09:11:37'),
(49, 1, 2, '2023-07-30', '13:30:00', 3, 0, 0, '2023-07-20 01:26:50'),
(50, 1, 2, '2023-07-29', '12:30:00', 4, 0, 0, '2023-07-20 03:33:19'),
(51, 1, 1, '2023-07-22', '12:30:00', 4, 0, 0, '2023-07-20 04:11:16'),
(52, 1, 1, '2023-07-22', '13:30:00', 4, 0, 0, '2023-07-20 04:12:09'),
(53, 1, 2, '2023-08-01', '13:30:00', 4, 0, 0, '2023-07-20 04:12:47'),
(54, 1, 1, '2023-07-29', '12:30:00', 3, 0, 0, '2023-07-20 07:37:07'),
(55, 1, 1, '2023-07-28', '13:30:00', 4, 0, 0, '2023-07-21 04:20:59'),
(56, 1, 1, '2023-07-28', '12:30:00', 4, 0, 0, '2023-07-21 07:15:42'),
(57, 1, 1, '2023-07-28', '13:30:00', 4, 0, 0, '2023-07-21 07:22:57'),
(58, 1, 1, '2023-07-29', '13:30:00', 3, 0, 0, '2023-07-21 07:25:54'),
(59, 1, 1, '2023-07-26', '12:30:00', 3, 0, 0, '2023-07-21 07:53:21'),
(60, 1, 1, '2023-08-20', '13:30:00', 3, 0, 0, '2023-07-21 07:55:51'),
(61, 1, 1, '2023-07-28', '12:30:00', 1, 0, 0, '2023-07-21 08:26:20'),
(62, 1, 1, '2023-07-31', '12:30:00', 4, 0, 0, '2023-07-21 09:18:31'),
(63, 1, 1, '2023-08-01', '13:30:00', 3, 0, 0, '2023-07-21 09:25:36'),
(64, 1, 1, '2023-08-01', '13:30:00', 3, 0, 0, '2023-07-21 09:25:52'),
(65, 1, 1, '2023-07-31', '13:30:00', 2, 0, 0, '2023-07-21 09:27:28'),
(66, 1, 1, '2023-07-31', '11:30:00', 2, 0, 0, '2023-07-21 09:27:50'),
(67, 1, 2, '2023-07-31', '11:30:00', 3, 0, 0, '2023-07-21 09:34:47'),
(70, 1, 9, '2023-07-29', '12:30:00', 1, 0, 0, '2023-07-25 05:14:13'),
(75, 1, 5, '2023-07-27', '12:30:00', 2, 0, 0, '2023-07-25 05:18:44'),
(83, 1, 1, '2023-07-27', '11:30:00', 2, 0, 0, '2023-07-25 05:25:06'),
(91, 1, 3, '2023-08-05', '12:30:25', 2, 0, 0, '2023-07-25 05:28:46'),
(97, 1, 1, '2023-08-05', '12:30:25', 2, 0, 0, '2023-07-25 05:29:44'),
(104, 1, 5, '2023-07-28', '13:30:15', 3, 0, 0, '2023-07-25 05:31:38'),
(105, 1, 5, '2023-07-28', '13:30:15', 4, 0, 0, '2023-07-25 05:31:43'),
(106, 1, 5, '2023-07-28', '12:30:25', 4, 0, 0, '2023-07-25 05:31:47'),
(107, 1, 5, '2023-07-26', '12:30:25', 4, 0, 0, '2023-07-25 05:31:50'),
(108, 1, 5, '2023-07-26', '12:30:25', 4, 0, 0, '2023-07-25 05:31:51'),
(109, 1, 5, '2023-07-26', '11:30:30', 3, 0, 0, '2023-07-25 05:32:02'),
(110, 1, 5, '2023-07-26', '13:30:15', 3, 0, 0, '2023-07-25 05:32:09'),
(111, 1, 1, '2023-07-28', '12:30:25', 1, 0, 0, '2023-07-25 05:32:37'),
(112, 1, 1, '2023-07-28', '13:30:15', 1, 0, 0, '2023-07-25 05:32:43'),
(113, 1, 1, '2023-07-28', '13:30:15', 3, 0, 0, '2023-07-25 05:32:48'),
(114, 1, 1, '2023-08-03', '13:30:15', 3, 0, 0, '2023-07-25 05:32:51'),
(115, 1, 1, '2023-08-03', '12:30:25', 3, 0, 0, '2023-07-25 05:32:53'),
(116, 1, 1, '2023-08-03', '11:30:30', 3, 0, 0, '2023-07-25 05:32:55'),
(132, 1, 1, '2023-07-28', '12:30:25', 1, 0, 0, '2023-07-25 05:34:06'),
(133, 1, 3, '2023-07-28', '12:30:25', 3, 0, 0, '2023-07-25 05:34:24'),
(135, 1, 1, '2023-07-29', '12:30:25', 3, 0, 0, '2023-07-25 05:35:36'),
(136, 1, 1, '2023-07-29', '12:30:25', 4, 0, 0, '2023-07-25 05:35:41'),
(137, 1, 1, '2023-07-29', '11:30:30', 4, 0, 0, '2023-07-25 05:35:44'),
(142, 1, 5, '2023-08-23', '13:30:15', 2, 0, 0, '2023-07-25 05:36:34'),
(143, 1, 5, '2023-08-23', '11:30:30', 2, 0, 0, '2023-07-25 05:36:39'),
(147, 1, 1, '2023-08-05', '13:30:15', 3, 0, 0, '2023-07-25 05:39:07'),
(149, 1, 1, '2023-08-19', '13:30:15', 3, 0, 0, '2023-07-25 05:41:52'),
(150, 1, 2, '2023-08-05', '11:30:00', 3, 0, 0, '2023-07-25 05:47:36'),
(151, 1, 2, '2023-08-05', '12:30:00', 4, 0, 0, '2023-07-25 05:48:18'),
(152, 1, 7, '2023-08-22', '11:30:00', 2, 0, 0, '2023-07-25 05:48:49'),
(155, 1, 4, '2023-08-04', '12:30:00', 3, 0, 0, '2023-07-25 05:58:52'),
(156, 1, 4, '2023-07-31', '12:30:00', 2, 0, 0, '2023-07-25 06:00:57'),
(158, 1, 1, '2023-07-31', '12:30:25', 2, 0, 0, '2023-07-25 06:06:22'),
(160, 1, 2, '2023-08-01', '11:30:00', 3, 0, 0, '2023-07-25 06:07:54'),
(161, 1, 3, '2023-08-04', '00:00:00', 2, 0, 0, '2023-07-25 06:24:55'),
(163, 4, 1, '2023-08-05', '13:30:15', 2, 0, 0, '2023-07-25 06:57:50'),
(164, 25, 9, '2023-07-29', '12:30:25', 3, 0, 0, '2023-07-25 06:59:49'),
(165, 25, 1, '2023-07-29', '13:30:15', 2, 0, 0, '2023-07-25 07:52:46'),
(167, 25, 1, '2023-07-29', '11:30:30', 1, 0, 0, '2023-07-25 08:01:22'),
(170, 25, 4, '2023-08-05', '12:30:25', 4, 0, 0, '2023-07-27 02:39:16'),
(171, 25, 3, '2023-08-01', '12:30:25', 3, 0, 0, '2023-07-27 02:50:06'),
(172, 25, 6, '2023-08-04', '12:30:25', 3, 0, 0, '2023-07-27 05:58:25'),
(173, 25, 3, '2023-05-07', '11:30:30', 4, 0, 0, '2023-07-31 03:04:28'),
(174, 25, 4, '2023-08-03', '12:30:25', 1, 0, 0, '2023-07-31 03:41:03'),
(177, 2, 1, '2023-08-26', '13:30:15', 3, 0, 0, '2023-08-04 03:27:01'),
(178, 3, 6, '2023-08-18', '12:30:25', 2, 0, 0, '2023-08-04 07:47:42'),
(179, 2, 6, '2023-09-01', '12:30:25', 3, 0, 0, '2023-08-04 07:50:07'),
(180, 2, 1, '2023-08-25', '12:30:00', 2, 0, 0, '2023-08-07 02:44:42'),
(181, 2, 1, '2023-08-16', '12:30:00', 1, 0, 0, '2023-08-07 04:03:26'),
(182, 2, 1, '2023-08-17', '12:30:00', 1, 0, 0, '2023-08-07 04:04:19'),
(183, 2, 1, '2023-08-11', '12:30:00', 2, 0, 0, '2023-08-07 04:14:39'),
(185, 9, 1, '2023-08-23', '12:30:25', 3, 0, 0, '2023-08-07 06:54:32'),
(188, 9, 5, '2023-08-29', '12:30:25', 3, 0, 0, '2023-08-07 07:26:59'),
(189, 9, 1, '2023-08-18', '12:50:00', 2, 0, 0, '2023-08-07 07:36:37'),
(190, 9, 1, '2023-08-10', '11:30:00', 4, 0, 1, '2023-08-13 08:11:02'),
(191, 9, 2, '2023-08-09', '11:30:00', 3, 0, 1, '2023-08-13 08:11:02'),
(192, 9, 1, '2023-08-10', '12:30:00', 3, 0, 1, '2023-08-13 08:11:02'),
(193, 9, 4, '2023-08-10', '12:30:00', 4, 0, 1, '2023-08-13 08:11:02'),
(194, 9, 3, '2023-08-24', '11:30:00', 3, 0, 0, '2023-08-07 07:53:59'),
(195, 9, 7, '2023-08-09', '12:30:00', 4, 0, 1, '2023-08-13 08:11:02'),
(196, 9, 8, '2023-08-11', '12:30:00', 3, 0, 1, '2023-08-13 08:11:02'),
(198, 9, 2, '2023-08-16', '12:30:00', 3, 0, 0, '2023-08-07 08:05:26'),
(199, 9, 6, '2023-08-10', '12:30:25', 4, 0, 1, '2023-08-13 08:11:02'),
(200, 9, 2, '2023-08-16', '12:30:00', 4, 0, 0, '2023-08-08 01:29:52'),
(201, 9, 1, '2023-08-09', '12:30:00', 2, 0, 1, '2023-08-13 08:11:02'),
(202, 9, 1, '2023-08-10', '13:30:00', 3, 1, 1, '2023-08-13 07:40:03'),
(203, 9, 3, '2023-08-11', '12:30:00', 4, 0, 1, '2023-08-13 08:11:02'),
(204, 9, 1, '2023-08-10', '12:30:00', 3, 0, 1, '2023-08-13 08:11:02'),
(205, 9, 5, '2023-08-20', '13:30:00', 3, 0, 0, '2023-08-08 06:14:38'),
(206, 9, 5, '2023-08-24', '13:30:00', 3, 1, 0, '2023-08-09 04:40:16'),
(207, 9, 1, '2023-08-17', '12:30:00', 2, 0, 0, '2023-08-13 08:56:29'),
(208, 9, 2, '2023-08-17', '13:30:00', 2, 1, 0, '2023-08-09 04:55:05'),
(209, 9, 2, '2023-08-18', '13:30:00', 2, 1, 0, '2023-08-09 04:57:52'),
(210, 9, 6, '2023-08-25', '13:30:00', 2, 1, 0, '2023-08-09 04:58:22'),
(211, 9, 5, '2023-08-18', '13:30:00', 2, 1, 0, '2023-08-09 05:01:23'),
(212, 9, 6, '2023-08-18', '13:30:00', 2, 1, 0, '2023-08-09 05:01:54'),
(213, 9, 10, '2023-08-18', '13:30:00', 2, 1, 0, '2023-08-09 05:02:40'),
(214, 9, 9, '2023-09-01', '13:30:00', 3, 1, 0, '2023-08-09 05:03:21'),
(215, 9, 10, '2023-08-24', '12:30:00', 2, 1, 0, '2023-08-09 05:08:24'),
(216, 9, 1, '2023-08-07', '11:30:00', 3, 1, 1, '2023-08-13 08:04:42'),
(217, 9, 1, '2023-08-08', '12:30:00', 1, 0, 1, '2023-08-13 08:11:02'),
(218, 9, 1, '2023-08-30', '12:30:00', 4, 1, 0, '2023-08-10 02:21:51'),
(219, 9, 1, '2023-08-16', '12:30:00', 3, 0, 0, '2023-08-13 08:58:02'),
(220, 9, 1, '2023-08-01', '13:30:00', 3, 1, 1, '2023-08-13 08:04:42'),
(221, 9, 5, '2023-08-11', '12:30:00', 2, 1, 1, '2023-08-13 08:04:42'),
(222, 9, 2, '2023-08-23', '13:30:00', 4, 1, 0, '2023-08-13 08:51:32'),
(223, 17, 4, '2023-08-10', '13:30:00', 888888, 0, 0, '2023-08-10 08:51:07'),
(224, 17, 2, '2023-08-01', '12:30:00', 3, 1, 0, '2023-08-10 08:52:08'),
(225, 23, 5, '2023-08-15', '13:30:00', 4, 1, 0, '2023-08-10 10:55:21'),
(226, 9, 78, '2023-08-17', '13:30:00', 2, 1, 0, '2023-08-12 17:39:48'),
(227, 9, 1, '2023-08-02', '18:30:00', 2, 1, 1, '2023-08-13 08:04:42'),
(228, 9, 9, '2023-08-25', '18:30:00', 4, 0, 0, '2023-08-13 08:57:51'),
(229, 9, 9, '2023-08-01', '18:30:00', 1, 1, 1, '2023-08-13 08:11:03'),
(230, 9, 78, '2023-08-02', '13:30:00', 2, 1, 1, '2023-08-13 08:11:44'),
(231, 9, 1, '2023-08-15', '19:30:00', 2, 1, 0, '2023-08-13 09:37:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reserve`
--
ALTER TABLE `reserve`
  ADD PRIMARY KEY (`reserveId`),
  ADD KEY `rest_id` (`rest_id`),
  ADD KEY `meber_id` (`reserve_member_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reserve`
--
ALTER TABLE `reserve`
  MODIFY `reserveId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=232;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;