-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2023 年 08 月 10 日 08:03
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
-- 資料表結構 `product_comment`
--

CREATE TABLE `product_comment` (
  `comment_id` int(255) NOT NULL,
  `member_id` int(255) NOT NULL,
  `product_id` int(255) NOT NULL,
  `order_id` varchar(255) NOT NULL,
  `comment_content` varchar(255) NOT NULL,
  `comment_rating` int(11) NOT NULL,
  `comment_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `product_comment`
--
ALTER TABLE `product_comment`
  ADD PRIMARY KEY (`comment_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_comment`
--
ALTER TABLE `product_comment`
  MODIFY `comment_id` int(255) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
