-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2023 年 08 月 14 日 01:43
-- 伺服器版本： 5.7.39
-- PHP 版本： 8.2.0

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
-- 資料表結構 `product_collection`
--

CREATE TABLE `product_collection` (
  `collection_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `product_collection`
--

INSERT INTO `product_collection` (`collection_id`, `member_id`, `product_id`) VALUES
(14, 1, 4),
(15, 1, 5),
(51, 1, 1),
(52, 1, 2),
(53, 1, 3),
(65, 28, 2),
(66, 28, 3),
(67, 28, 7),
(68, 28, 1),
(69, 28, 4),
(275, 2, 8),
(276, 2, 22),
(279, 2, 4),
(289, 4, 1),
(290, 4, 5),
(291, 4, 130),
(292, 4, 2),
(293, 5, 4),
(294, 5, 5),
(295, 5, 6),
(296, 6, 1),
(297, 6, 8),
(298, 7, 1),
(299, 7, 2);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `product_collection`
--
ALTER TABLE `product_collection`
  ADD PRIMARY KEY (`collection_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_collection`
--
ALTER TABLE `product_collection`
  MODIFY `collection_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=300;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
