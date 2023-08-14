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
(1, 'p205rhll9lau15', '4535624563453456', '234', 'TO DAU EN', '0124'),
(2, '3dlg3tll9lilo4', '4123412352345234', '222', 'TOD DKF BV', '2222'),
(3, 'mp8cdoll9llila', '3452345234564526', '555', 'DVK DKV DK', '8888'),
(4, 'h7v4fcll9lopqz', '3324523425245624', '222', 'DFJIV DIF OFV', '8888'),
(5, 'b09cxvll9ltnvx', '2342135234523456', '444', 'DD', '4333'),
(6, 'mze2jell9lwuc5', '3422423444444444', '333', 'DAFV', '3333'),
(7, 'cj45y6ll9m2em8', '3333333333333333', '333', 'DFA', '3333'),
(8, 'nmjvc9ll9m6u5v', '3141234123412341', '234', 'ADSF', '7573'),
(9, 'zbpr4ella5ra7t', '3332423424235236', '444', 'DVK', '4123'),
(10, '5vuyshlla5t9q6', '4423452345234523', '123', 'DDVSV', '1111'),
(11, '303jytlla62m0f', '2314324523452345', '423', 'DFASKDV', '3234'),
(12, 'uom9fklla6880c', '3124123412341234', '333', 'DVD', '2211'),
(13, 'vk8hi6lla6grs3', '3241234324235643', '494', 'DFK', '4444'),
(14, 'i9gvdxlla6k80w', '3419502349520345', '334', 'DVK RKF', '4444'),
(15, 'lhyviylla6pe11', '3452345234523452', '333', 'FVLKR', '2344'),
(16, 'xuqh8qlla6t1fh', '3413124123412341', '444', 'DVK', '5555'),
(17, 'ntiv0nlla6ygzg', '3412341234123412', '333', 'ASDFASV', '3333'),
(18, 'dbkmeslla789bg', '3323414312341234', '324', 'DDD', '9594'),
(19, '93ycx8lla7g4hg', '2134123412341234', '333', 'ADF', '3333'),
(20, '9y8mpvlla7jhdq', '2314123412341234', '333', 'ADSF', '3333');

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
  MODIFY `credit_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
