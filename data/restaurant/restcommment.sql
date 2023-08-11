-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:3306
-- 產生時間： 2023-08-09 04:07:23
-- 伺服器版本： 5.7.24
-- PHP 版本： 8.0.1

SET FOREIGN_KEY_CHECKS=0;
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
-- 資料表結構 `restcommment`
--

CREATE TABLE `restcommment` (
  `ResComtID` int(11) NOT NULL,
  `ComtRestId` int(11) NOT NULL,
  `comtMemberId` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `ComtText` varchar(225) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `restcommment`
--

INSERT INTO `restcommment` (`ResComtID`, `ComtRestId`, `comtMemberId`, `rating`, `ComtText`, `created_time`) VALUES
(1, 1, 6, 5, 'afadsfv', '2023-08-08 21:04:55'),
(2, 1, 6, 2, 'dvadsvsfv', '2023-08-08 22:07:27'),
(3, 1, 6, 4, 'dvadsvfsvfvfvvFve', '2023-08-09 02:09:53'),
(4, 1, 6, 1, 'dadsvvsv', '2023-08-08 22:08:36');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `restcommment`
--
ALTER TABLE `restcommment`
  ADD PRIMARY KEY (`ResComtID`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `restcommment`
--
ALTER TABLE `restcommment`
  MODIFY `ResComtID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
