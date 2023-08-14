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
(1, 1, 7, 1, 27417, 'p205rhll9lau15'),
(2, 1, 17, 2, 27417, 'p205rhll9lau15'),
(3, 1, 32, 1, 27417, 'p205rhll9lau15'),
(4, 1, 1, 2, 27417, 'p205rhll9lau15'),
(5, 1, 3, 1, 27417, 'p205rhll9lau15'),
(6, 1, 6, 1, 27417, 'p205rhll9lau15'),
(7, 1, 5, 1, 27417, 'p205rhll9lau15'),
(8, 1, 8, 1, 27417, 'p205rhll9lau15'),
(9, 1, 10, 1, 27417, 'p205rhll9lau15'),
(10, 1, 18, 1, 27417, 'p205rhll9lau15'),
(11, 1, 34, 1, 27417, 'p205rhll9lau15'),
(12, 1, 33, 1, 27417, 'p205rhll9lau15'),
(13, 1, 39, 1, 670, '3dlg3tll9lilo4'),
(14, 1, 42, 1, 670, '3dlg3tll9lilo4'),
(15, 1, 145, 1, 200, 'mp8cdoll9llila'),
(16, 3, 1, 2, 2214, 'h7v4fcll9lopqz'),
(17, 3, 2, 1, 2214, 'h7v4fcll9lopqz'),
(18, 3, 4, 1, 2214, 'h7v4fcll9lopqz'),
(19, 3, 9, 1, 2214, 'h7v4fcll9lopqz'),
(20, 3, 13, 1, 2214, 'h7v4fcll9lopqz'),
(21, 3, 12, 1, 2214, 'h7v4fcll9lopqz'),
(22, 3, 16, 1, 2214, 'h7v4fcll9lopqz'),
(23, 3, 49, 1, 1731, 'b09cxvll9ltnvx'),
(24, 3, 52, 1, 1731, 'b09cxvll9ltnvx'),
(25, 3, 51, 1, 1731, 'b09cxvll9ltnvx'),
(26, 3, 70, 1, 1731, 'b09cxvll9ltnvx'),
(27, 3, 63, 1, 1731, 'b09cxvll9ltnvx'),
(28, 4, 1, 1, 8379, 'mze2jell9lwuc5'),
(29, 4, 2, 1, 8379, 'mze2jell9lwuc5'),
(30, 4, 3, 1, 8379, 'mze2jell9lwuc5'),
(31, 4, 6, 1, 8379, 'mze2jell9lwuc5'),
(32, 4, 9, 1, 8379, 'mze2jell9lwuc5'),
(33, 4, 7, 1, 8379, 'mze2jell9lwuc5'),
(34, 4, 25, 1, 8379, 'mze2jell9lwuc5'),
(35, 4, 23, 1, 8379, 'mze2jell9lwuc5'),
(36, 4, 62, 1, 8379, 'mze2jell9lwuc5'),
(37, 4, 59, 1, 8379, 'mze2jell9lwuc5'),
(38, 4, 58, 1, 8379, 'mze2jell9lwuc5'),
(39, 4, 56, 1, 8379, 'mze2jell9lwuc5'),
(40, 4, 118, 1, 1300, 'cj45y6ll9m2em8'),
(41, 4, 123, 1, 1300, 'cj45y6ll9m2em8'),
(42, 4, 120, 1, 1300, 'cj45y6ll9m2em8'),
(43, 5, 1, 1, 28724, 'nmjvc9ll9m6u5v'),
(44, 5, 5, 1, 28724, 'nmjvc9ll9m6u5v'),
(45, 5, 4, 1, 28724, 'nmjvc9ll9m6u5v'),
(46, 5, 8, 1, 28724, 'nmjvc9ll9m6u5v'),
(47, 5, 7, 1, 28724, 'nmjvc9ll9m6u5v'),
(48, 5, 13, 1, 28724, 'nmjvc9ll9m6u5v'),
(49, 5, 11, 1, 28724, 'nmjvc9ll9m6u5v'),
(50, 5, 33, 1, 28724, 'nmjvc9ll9m6u5v'),
(51, 5, 10, 1, 28724, 'nmjvc9ll9m6u5v'),
(52, 5, 123, 1, 28724, 'nmjvc9ll9m6u5v'),
(53, 5, 59, 1, 28724, 'nmjvc9ll9m6u5v'),
(54, 5, 121, 1, 28724, 'nmjvc9ll9m6u5v'),
(55, 5, 122, 1, 28724, 'nmjvc9ll9m6u5v'),
(56, 5, 86, 1, 28724, 'nmjvc9ll9m6u5v'),
(57, 5, 83, 1, 28724, 'nmjvc9ll9m6u5v'),
(58, 5, 84, 1, 28724, 'nmjvc9ll9m6u5v'),
(59, 5, 90, 1, 28724, 'nmjvc9ll9m6u5v'),
(60, 5, 74, 2, 990, 'zbpr4ella5ra7t'),
(61, 6, 1, 1, 2653, '5vuyshlla5t9q6'),
(62, 6, 2, 1, 2653, '5vuyshlla5t9q6'),
(63, 6, 3, 1, 2653, '5vuyshlla5t9q6'),
(64, 6, 8, 1, 2653, '5vuyshlla5t9q6'),
(65, 6, 37, 1, 2653, '5vuyshlla5t9q6'),
(66, 6, 38, 1, 2653, '5vuyshlla5t9q6'),
(67, 6, 40, 1, 2653, '5vuyshlla5t9q6'),
(68, 6, 45, 1, 2653, '5vuyshlla5t9q6'),
(69, 6, 123, 1, 452, '303jytlla62m0f'),
(70, 6, 54, 1, 452, '303jytlla62m0f'),
(71, 6, 39, 1, 452, '303jytlla62m0f'),
(72, 6, 55, 1, 452, '303jytlla62m0f'),
(73, 7, 2, 1, 4572, 'uom9fklla6880c'),
(74, 7, 32, 1, 4572, 'uom9fklla6880c'),
(75, 7, 38, 2, 4572, 'uom9fklla6880c'),
(76, 7, 40, 1, 4572, 'uom9fklla6880c'),
(77, 7, 45, 1, 4572, 'uom9fklla6880c'),
(78, 7, 12, 1, 4572, 'uom9fklla6880c'),
(79, 7, 18, 1, 4572, 'uom9fklla6880c'),
(80, 7, 121, 1, 4572, 'uom9fklla6880c'),
(81, 7, 4, 1, 4572, 'uom9fklla6880c'),
(82, 7, 48, 1, 4572, 'uom9fklla6880c'),
(83, 7, 53, 1, 4572, 'uom9fklla6880c'),
(84, 7, 106, 1, 4572, 'uom9fklla6880c'),
(85, 7, 110, 1, 4572, 'uom9fklla6880c'),
(86, 7, 108, 1, 4572, 'uom9fklla6880c'),
(87, 7, 104, 1, 4572, 'uom9fklla6880c'),
(88, 7, 11, 1, 500, 'vk8hi6lla6grs3'),
(89, 8, 6, 1, 4234, 'i9gvdxlla6k80w'),
(90, 8, 1, 1, 4234, 'i9gvdxlla6k80w'),
(91, 8, 8, 1, 4234, 'i9gvdxlla6k80w'),
(92, 8, 23, 1, 4234, 'i9gvdxlla6k80w'),
(93, 8, 27, 1, 4234, 'i9gvdxlla6k80w'),
(94, 8, 26, 1, 4234, 'i9gvdxlla6k80w'),
(95, 8, 25, 1, 4234, 'i9gvdxlla6k80w'),
(96, 8, 29, 1, 4234, 'i9gvdxlla6k80w'),
(97, 8, 31, 1, 4234, 'i9gvdxlla6k80w'),
(98, 8, 30, 1, 4234, 'i9gvdxlla6k80w'),
(99, 8, 34, 1, 4234, 'i9gvdxlla6k80w'),
(100, 8, 35, 1, 676, 'lhyviylla6pe11'),
(101, 8, 124, 1, 676, 'lhyviylla6pe11'),
(102, 8, 73, 1, 676, 'lhyviylla6pe11'),
(103, 8, 72, 1, 676, 'lhyviylla6pe11'),
(104, 9, 27, 1, 4841, 'xuqh8qlla6t1fh'),
(105, 9, 31, 1, 4841, 'xuqh8qlla6t1fh'),
(106, 9, 124, 1, 4841, 'xuqh8qlla6t1fh'),
(107, 9, 122, 1, 4841, 'xuqh8qlla6t1fh'),
(108, 9, 13, 1, 4841, 'xuqh8qlla6t1fh'),
(109, 9, 25, 1, 4841, 'xuqh8qlla6t1fh'),
(110, 9, 35, 1, 4841, 'xuqh8qlla6t1fh'),
(111, 9, 45, 1, 4841, 'xuqh8qlla6t1fh'),
(112, 9, 56, 1, 4841, 'xuqh8qlla6t1fh'),
(113, 9, 108, 1, 4841, 'xuqh8qlla6t1fh'),
(114, 9, 57, 1, 4841, 'xuqh8qlla6t1fh'),
(115, 9, 10, 1, 4841, 'xuqh8qlla6t1fh'),
(116, 9, 43, 1, 4841, 'xuqh8qlla6t1fh'),
(117, 9, 47, 1, 4841, 'xuqh8qlla6t1fh'),
(118, 10, 89, 1, 5204, 'ntiv0nlla6ygzg'),
(119, 10, 88, 1, 5204, 'ntiv0nlla6ygzg'),
(120, 10, 68, 1, 5204, 'ntiv0nlla6ygzg'),
(121, 10, 72, 1, 5204, 'ntiv0nlla6ygzg'),
(122, 10, 67, 1, 5204, 'ntiv0nlla6ygzg'),
(123, 10, 46, 1, 5204, 'ntiv0nlla6ygzg'),
(124, 10, 47, 1, 5204, 'ntiv0nlla6ygzg'),
(125, 10, 31, 1, 5204, 'ntiv0nlla6ygzg'),
(126, 10, 9, 1, 5204, 'ntiv0nlla6ygzg'),
(127, 10, 1, 1, 5204, 'ntiv0nlla6ygzg'),
(128, 11, 1, 1, 34648, 'dbkmeslla789bg'),
(129, 11, 3, 1, 34648, 'dbkmeslla789bg'),
(130, 11, 2, 1, 34648, 'dbkmeslla789bg'),
(131, 11, 4, 1, 34648, 'dbkmeslla789bg'),
(132, 11, 6, 1, 34648, 'dbkmeslla789bg'),
(133, 11, 5, 1, 34648, 'dbkmeslla789bg'),
(134, 11, 9, 1, 34648, 'dbkmeslla789bg'),
(135, 11, 10, 1, 34648, 'dbkmeslla789bg'),
(136, 11, 17, 1, 34648, 'dbkmeslla789bg'),
(137, 11, 18, 1, 34648, 'dbkmeslla789bg'),
(138, 11, 19, 1, 34648, 'dbkmeslla789bg'),
(139, 11, 20, 1, 34648, 'dbkmeslla789bg'),
(140, 11, 21, 1, 34648, 'dbkmeslla789bg'),
(141, 11, 26, 1, 34648, 'dbkmeslla789bg'),
(142, 11, 35, 1, 34648, 'dbkmeslla789bg'),
(143, 11, 36, 1, 34648, 'dbkmeslla789bg'),
(144, 11, 40, 1, 34648, 'dbkmeslla789bg'),
(145, 11, 146, 1, 34648, 'dbkmeslla789bg'),
(146, 11, 145, 1, 34648, 'dbkmeslla789bg'),
(147, 11, 144, 1, 34648, 'dbkmeslla789bg'),
(148, 11, 142, 1, 34648, 'dbkmeslla789bg'),
(149, 11, 139, 1, 34648, 'dbkmeslla789bg'),
(150, 2, 62, 1, 2346, '93ycx8lla7g4hg'),
(151, 2, 65, 1, 2346, '93ycx8lla7g4hg'),
(152, 2, 77, 4, 2346, '93ycx8lla7g4hg'),
(153, 2, 80, 2, 2346, '93ycx8lla7g4hg'),
(154, 2, 34, 5, 640, '9y8mpvlla7jhdq'),
(155, 2, 59, 1, 640, '9y8mpvlla7jhdq'),
(156, 2, 61, 1, 640, '9y8mpvlla7jhdq');

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
  MODIFY `checking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=157;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
