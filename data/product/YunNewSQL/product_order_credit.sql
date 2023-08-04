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
-- 資料表結構 `product_order_credit`
--

CREATE TABLE `product_order_credit` (
  `credit_id` int(11) NOT NULL,
  `order_id` varchar(50) NOT NULL,
  `credit_number` varchar(20) NOT NULL,
  `credit_security` varchar(10) NOT NULL,
  `credit_name` varchar(50) NOT NULL,
  `credit_ex` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `product_order_credit`
--

INSERT INTO `product_order_credit` (`credit_id`, `order_id`, `credit_number`, `credit_security`, `credit_name`, `credit_ex`) VALUES
(1, 'n1583zlkvh2lp2', '1111111111111111', '222', '222', '222'),
(2, 'y124swlkvh3fd2', '4444444444444444', '444', '444', '4444');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `product_order_credit`
--
ALTER TABLE `product_order_credit`
  ADD PRIMARY KEY (`credit_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_order_credit`
--
ALTER TABLE `product_order_credit`
  MODIFY `credit_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
