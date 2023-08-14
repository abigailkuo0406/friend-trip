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
('303jytlla62m0f', 6, 'female', '苗景翔', '0911477238', '新北市三芝區', 'mail698456@test.com', '', 0, '信用卡', '2023-08-14 08:59:12', 0, '2023-08-14 08:59:17', '訂單完成', 1),
('3dlg3tll9lilo4', 1, 'female', '塗丞恩', '0988888888', '新北市林口區中山路一段233號', 'mail233591@test.com', '', 0, '信用卡', '2023-08-13 23:24:11', 0, '2023-08-13 23:24:28', '訂單完成', 1),
('5vuyshlla5t9q6', 6, 'female', '苗景翔', '0911477238', '新北市三芝區', 'mail698456@test.com', '', 0, '信用卡', '2023-08-14 08:51:58', 0, '2023-08-14 08:52:02', '訂單完成', 1),
('93ycx8lla7g4hg', 2, 'female', '陽芊妤', '0911953355', '新北市瑞芳區瑞芳路112號', 'mail431272@test.com', '幫我放警衛室門口，謝謝！', 0, '信用卡', '2023-08-14 09:37:55', 0, '2023-08-14 09:38:05', '訂單完成', 1),
('9y8mpvlla7jhdq', 2, 'female', '陽芊妤', '0911953355', '新北市瑞芳區瑞光路112號', 'mail431272@test.com', '請提早寄出，謝謝', 0, '信用卡', '2023-08-14 09:40:41', 0, '2023-08-14 09:40:53', '訂單完成', 1),
('b09cxvll9ltnvx', 3, 'male', '錢彥廷', '0911418784', '新北市土城區', 'mail383507@test.com', '', 0, '信用卡', '2023-08-13 23:32:24', 0, '2023-08-13 23:32:27', '訂單完成', 1),
('cj45y6ll9m2em8', 4, 'female', '程俊廷', '0911985867', '基隆市信義區', 'mail814206@test.com', '', 0, '信用卡', '2023-08-13 23:39:12', 0, '2023-08-13 23:39:16', '訂單完成', 1),
('dbkmeslla789bg', 11, 'female', '刁育萱', '0911131230', '新北市雙溪區', 'mail757523@test.com', '', 0, '信用卡', '2023-08-14 09:31:37', 0, '2023-08-14 09:31:41', '訂單完成', 1),
('h7v4fcll9lopqz', 3, 'male', '錢彥廷', '0911418784', '新北市土城區中山路12號', 'mail383507@test.com', '家裡沒人收貨請來電，謝謝', 0, '信用卡', '2023-08-13 23:29:05', 0, '2023-08-13 23:29:11', '訂單完成', 1),
('i9gvdxlla6k80w', 8, 'male', '雷佳蓉', '0911492005', '新北市平溪區', 'mail582740@test.com', '', 0, '信用卡', '2023-08-14 09:12:56', 0, '2023-08-14 09:13:01', '訂單完成', 1),
('lhyviylla6pe11', 8, 'male', '雷佳蓉', '0911492005', '新北市平溪區', 'mail582740@test.com', '', 0, '信用卡', '2023-08-14 09:16:52', 0, '2023-08-14 09:16:57', '訂單完成', 1),
('mp8cdoll9llila', 1, 'female', '塗丞恩', '0911325829', '新北市林口區中山路一段233號', 'mail233591@test.com', '寄送快一點，謝謝', 0, '信用卡', '2023-08-13 23:26:23', 0, '2023-08-13 23:26:30', '訂單完成', 1),
('mze2jell9lwuc5', 4, 'female', '程俊廷', '0911985867', '基隆市信義區', 'mail814206@test.com', '', 0, '信用卡', '2023-08-13 23:34:57', 0, '2023-08-13 23:35:03', '訂單完成', 1),
('nmjvc9ll9m6u5v', 5, 'male', '簡欣穎', '0911873553', '新北市平溪區', 'mail667663@test.com', '', 0, '信用卡', '2023-08-13 23:43:53', 0, '2023-08-13 23:43:58', '訂單完成', 1),
('ntiv0nlla6ygzg', 10, 'male', '蕭彥丞', '0911496376', '新北市石碇區', 'mail509998@test.com', '', 0, '信用卡', '2023-08-14 09:23:57', 0, '2023-08-14 09:24:02', '訂單完成', 1),
('p205rhll9lau15', 1, 'female', '塗丞恩', '0911325829', '新北市林口區中山路一段233號', 'mail233591@test.com', '東西有點多請幫我包裝好，謝謝', 0, '信用卡', '2023-08-13 23:18:18', 0, '2023-08-13 23:18:29', '訂單完成', 1),
('uom9fklla6880c', 7, 'male', '劉羽彤', '0911161446', '基隆市七堵區', 'mail951109@test.com', '', 0, '信用卡', '2023-08-14 09:03:46', 0, '2023-08-14 09:03:56', '訂單完成', 1),
('vk8hi6lla6grs3', 7, 'male', '劉羽彤', '0911161446', '基隆市七堵區', 'mail951109@test.com', '', 0, '信用卡', '2023-08-14 09:10:14', 0, '2023-08-14 09:10:18', '訂單完成', 1),
('xuqh8qlla6t1fh', 9, 'female', '袁欣妤', '0911976984', '新北市樹林區', 'mail584852@test.com', '', 0, '信用卡', '2023-08-14 09:19:44', 0, '2023-08-14 09:19:48', '訂單完成', 1),
('zbpr4ella5ra7t', 5, 'male', '簡欣穎', '0911873553', '新北市平溪區', 'mail667663@test.com', '', 0, '信用卡', '2023-08-14 08:50:24', 0, '2023-08-14 08:50:28', '訂單完成', 1);

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
