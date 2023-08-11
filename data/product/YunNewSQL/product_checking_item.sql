-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2023 年 08 月 04 日 02:58
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
-- 資料表結構 `product_checking_item`
--

CREATE TABLE `product_checking_item` (
  `checking_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_num` int(11) NOT NULL,
  `checking_total` int(11) NOT NULL,
  `order_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `product_checking_item`
--

INSERT INTO `product_checking_item` (`checking_id`, `member_id`, `product_id`, `product_num`, `checking_total`, `order_id`) VALUES
(1, 2, 1, 3, 1625, 'n1583zlkvh2lp2'),
(2, 2, 2, 1, 1625, 'n1583zlkvh2lp2'),
(3, 2, 3, 1, 1625, 'n1583zlkvh2lp2'),
(4, 2, 9, 2, 2040, 'y124swlkvh3fd2'),
(5, 2, 7, 1, 2040, 'y124swlkvh3fd2');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `product_checking_item`
--
ALTER TABLE `product_checking_item`
  ADD PRIMARY KEY (`checking_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_checking_item`
--
ALTER TABLE `product_checking_item`
  MODIFY `checking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
