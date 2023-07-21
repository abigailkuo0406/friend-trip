-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:3306
-- 產生時間： 2023-07-21 13:42:52
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
-- 資料表結構 `restaurants_img`
--

CREATE TABLE `restaurants_img` (
  `RestImgID` int(2) DEFAULT NULL,
  `RestID` int(1) DEFAULT NULL,
  `RestImg` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `restaurants_img`
--

INSERT INTO `restaurants_img` (`RestImgID`, `RestID`, `RestImg`) VALUES
(1, 1, '1a.jpg'),
(2, 1, '1b.jpg'),
(3, 1, '1c.jpg'),
(4, 1, '1d.jpg'),
(5, 2, '2a.jpg'),
(6, 2, '2b.jpg'),
(7, 2, '2c.jpg'),
(8, 2, '2d.jpg'),
(9, 3, '3a.jpg'),
(10, 3, '3b.jpg'),
(11, 3, '3c.jpg'),
(12, 3, '3d.jpg'),
(13, 4, '4a.jpg'),
(14, 4, '4b.jpg'),
(15, 4, '4c.jpg'),
(16, 4, '4d.jpg'),
(17, 5, '5a.jpg'),
(18, 5, '5b.jpg'),
(19, 5, '5c.jpg'),
(20, 5, '5d.jpg'),
(21, 6, '6a.jpg'),
(22, 6, '6b.jpg'),
(23, 6, '6c.jpg'),
(24, 6, '6d.jpg'),
(25, 7, '7a.jpg'),
(26, 7, '7b.jpg'),
(27, 7, '7c.jpg'),
(28, 7, '7d.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
