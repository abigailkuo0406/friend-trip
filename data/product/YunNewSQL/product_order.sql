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
-- 資料表結構 `product_order`
--

CREATE TABLE `product_order` (
  `order_id` varchar(255) NOT NULL,
  `member_id` int(11) NOT NULL,
  `receiver_gender` varchar(11) NOT NULL,
  `receiver_name` varchar(11) NOT NULL,
  `receiver_tel` varchar(20) NOT NULL,
  `receiver_address` varchar(255) NOT NULL,
  `receiver_email` varchar(255) NOT NULL,
  `order_note` varchar(255) DEFAULT NULL,
  `ad` tinyint(1) DEFAULT '0',
  `payment_method` varchar(255) NOT NULL,
  `order_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `order_complete` tinyint(1) DEFAULT '0',
  `complete_time` datetime DEFAULT NULL,
  `order_status` varchar(255) DEFAULT '訂單成立'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `product_order`
--

INSERT INTO `product_order` (`order_id`, `member_id`, `receiver_gender`, `receiver_name`, `receiver_tel`, `receiver_address`, `receiver_email`, `order_note`, `ad`, `payment_method`, `order_time`, `order_complete`, `complete_time`, `order_status`) VALUES
('n1583zlkvh2lp2', 2, 'female', '籃柏勳', '0911545915', '新北市深坑區', 'mail921742@test.com', '', 0, '信用卡', '2023-08-04 02:10:29', 0, NULL, '訂單成立'),
('y124swlkvh3fd2', 2, 'female', '籃柏勳123', '0911545915', '新北市深坑區', 'mail921742@test.com', '', 0, '信用卡', '2023-08-04 02:11:09', 0, NULL, '訂單成立');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `product_order`
--
ALTER TABLE `product_order`
  ADD PRIMARY KEY (`order_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
