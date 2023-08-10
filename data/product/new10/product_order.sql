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
  `complete_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `order_status` varchar(255) DEFAULT '訂單成立',
  `order_comment` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `product_order`
--

INSERT INTO `product_order` (`order_id`, `member_id`, `receiver_gender`, `receiver_name`, `receiver_tel`, `receiver_address`, `receiver_email`, `order_note`, `ad`, `payment_method`, `order_time`, `order_complete`, `complete_time`, `order_status`, `order_comment`) VALUES
('lvpg4zll1wtnu7', 2, 'female', '陽芊妤', '0911953355', '新北市瑞芳區', 'mail431272@test.com', '123', 0, '信用卡', '2023-08-08 14:18:26', 0, '2023-08-08 23:02:24', '訂單完成', 0),
('pycx3tlkybu190', 2, 'female', '陽芊妤', '0911953355', '新北市瑞芳區', 'mail431272@test.com', '2', 0, '信用卡', '2023-08-06 02:07:14', 0, '2023-08-08 14:18:26', '訂單完成', 0),
('t4nq84lkybrz16', 2, 'female', '陽芊妤', '0911953355', '新北市瑞芳區', 'mail431272@test.com', '333', 0, '信用卡', '2023-08-06 02:05:35', 0, '2023-08-08 14:18:26', '訂單完成', 0),
('u0h73wlkybofy6', 2, 'female', '陽芊妤', '0911953355', '新北市瑞芳區', 'mail431272@test.com', '123', 0, '信用卡', '2023-08-06 02:03:04', 0, '2023-08-08 14:18:26', '訂單完成', 0),
('v0zspsll0jwk9o', 2, 'female', '陽芊妤', '0911953355', '新北市瑞芳區', 'mail431272@test.com', '123', 0, '信用卡', '2023-08-07 15:28:38', 0, '2023-08-09 01:56:01', '訂單完成', 0);

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
