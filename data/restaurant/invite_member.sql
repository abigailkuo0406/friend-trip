-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:3306
-- 產生時間： 2023-07-27 00:24:37
-- 伺服器版本： 5.7.24
-- PHP 版本： 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `fridntrip_final`
--

-- --------------------------------------------------------

--
-- 資料表結構 `invite_member`
--

CREATE TABLE `invite_member` (
  `invite_id` int(11) NOT NULL,
  `reserve_id` int(11) DEFAULT NULL,
  `iv_member_id` int(11) DEFAULT NULL,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `invite_member`
--

INSERT INTO `invite_member` (`invite_id`, `reserve_id`, `iv_member_id`, `created_time`) VALUES
(2, 3, 2, '2023-07-23 09:16:38'),
(3, NULL, NULL, '2023-07-23 09:18:20'),
(4, 71, 4, '2023-07-23 09:19:01'),
(5, 72, 3, '2023-07-23 09:19:27'),
(6, 72, 1, '2023-07-23 09:19:27'),
(7, 72, 4, '2023-07-23 09:19:27'),
(8, 74, 3, '2023-07-23 09:29:37'),
(9, 74, 1, '2023-07-23 09:29:37'),
(10, 75, 2, '2023-07-23 09:30:26'),
(11, 75, 4, '2023-07-23 09:30:26'),
(12, 75, 1, '2023-07-23 09:30:26'),
(13, 81, 2, '2023-07-23 09:45:41'),
(14, 96, 3, '2023-07-26 12:46:44'),
(15, 96, 2, '2023-07-26 12:46:44');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `invite_member`
--
ALTER TABLE `invite_member`
  ADD PRIMARY KEY (`invite_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `invite_member`
--
ALTER TABLE `invite_member`
  MODIFY `invite_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
