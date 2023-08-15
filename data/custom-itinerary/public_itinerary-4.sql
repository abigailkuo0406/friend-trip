-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2023 年 08 月 14 日 22:38
-- 伺服器版本： 5.7.39
-- PHP 版本： 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `fridntrip_final`
--

-- --------------------------------------------------------

--
-- 資料表結構 `public_itinerary`
--

CREATE TABLE `public_itinerary` (
  `sid` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `itin_id` int(11) NOT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `public_itinerary`
--

INSERT INTO `public_itinerary` (`sid`, `member_id`, `itin_id`, `create_at`) VALUES
(15, 2, 159, '2023-08-10 14:20:35'),
(16, 2, 152, '2023-08-10 14:21:12'),
(17, 18, 150, '2023-08-10 21:59:46'),
(18, 11, 152, '2023-08-10 22:37:20'),
(19, 36, 178, '2023-08-11 09:22:35'),
(20, 36, 166, '2023-08-12 19:11:31'),
(21, 36, 173, '2023-08-12 22:24:15'),
(22, 36, 156, '2023-08-12 22:25:55'),
(23, 36, 132, '2023-08-12 22:26:36'),
(24, 36, 148, '2023-08-12 22:28:39'),
(25, 36, 148, '2023-08-12 22:41:18'),
(26, 36, 148, '2023-08-12 22:46:42'),
(27, 36, 148, '2023-08-12 22:46:43'),
(28, 36, 148, '2023-08-12 22:47:56'),
(29, 36, 153, '2023-08-12 22:55:37'),
(30, 36, 157, '2023-08-13 10:33:21'),
(31, 36, 158, '2023-08-13 11:09:50'),
(32, 36, 148, '2023-08-13 12:04:03'),
(33, 36, 152, '2023-08-13 12:05:27'),
(34, 36, 156, '2023-08-13 12:26:35'),
(36, 1011, 156, '2023-08-14 10:19:00');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `public_itinerary`
--
ALTER TABLE `public_itinerary`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `public_itinerary`
--
ALTER TABLE `public_itinerary`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
