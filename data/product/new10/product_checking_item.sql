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
(3, 2, 1, 6, 13800, 'u0h73wlkybofy6'),
(4, 2, 3, 11, 13800, 'u0h73wlkybofy6'),
(5, 2, 2, 6, 750, 't4nq84lkybrz16'),
(6, 2, 3, 1, 1200, 'pycx3tlkybu190'),
(8, 2, 22, 3, 60, 'v0zspsll0jwk9o'),
(9, 2, 6, 3, 7937, '61x7wsll1pbd8c'),
(10, 2, 7, 3, 7937, '61x7wsll1pbd8c'),
(11, 2, 9, 21, 7937, '61x7wsll1pbd8c'),
(12, 2, 8, 1, 7937, '61x7wsll1pbd8c'),
(13, 2, 3, 1, 7937, '61x7wsll1pbd8c'),
(14, 2, 6, 3, 7937, 'srmjq9ll1q4d4t'),
(15, 2, 9, 21, 7937, 'srmjq9ll1q4d4t'),
(16, 2, 7, 3, 7937, 'srmjq9ll1q4d4t'),
(17, 2, 8, 1, 7937, 'srmjq9ll1q4d4t'),
(18, 2, 3, 1, 7937, 'srmjq9ll1q4d4t'),
(19, 2, 6, 3, 7937, 'xh4gyzll1q7ppl'),
(20, 2, 9, 21, 7937, 'xh4gyzll1q7ppl'),
(21, 2, 7, 3, 7937, 'xh4gyzll1q7ppl'),
(22, 2, 8, 1, 7937, 'xh4gyzll1q7ppl'),
(23, 2, 3, 1, 7937, 'xh4gyzll1q7ppl'),
(24, 2, 6, 3, 7937, 'e3px05ll1qhjbi'),
(25, 2, 9, 21, 7937, 'e3px05ll1qhjbi'),
(26, 2, 7, 3, 7937, 'e3px05ll1qhjbi'),
(27, 2, 8, 1, 7937, 'e3px05ll1qhjbi'),
(28, 2, 3, 1, 7937, 'e3px05ll1qhjbi'),
(29, 2, 6, 3, 7937, 'ddzgwcll1qskon'),
(30, 2, 9, 21, 7937, 'ddzgwcll1qskon'),
(31, 2, 7, 3, 7937, 'ddzgwcll1qskon'),
(32, 2, 8, 1, 7937, 'ddzgwcll1qskon'),
(33, 2, 3, 1, 7937, 'ddzgwcll1qskon'),
(34, 2, 6, 3, 7937, 'fpmknqll1qutx4'),
(35, 2, 9, 21, 7937, 'fpmknqll1qutx4'),
(36, 2, 7, 3, 7937, 'fpmknqll1qutx4'),
(37, 2, 8, 1, 7937, 'fpmknqll1qutx4'),
(38, 2, 3, 1, 7937, 'fpmknqll1qutx4'),
(39, 2, 6, 3, 7937, 'c6srhgll1qxblu'),
(40, 2, 9, 21, 7937, 'c6srhgll1qxblu'),
(41, 2, 7, 3, 7937, 'c6srhgll1qxblu'),
(42, 2, 8, 1, 7937, 'c6srhgll1qxblu'),
(43, 2, 3, 1, 7937, 'c6srhgll1qxblu'),
(44, 2, 9, 21, 7937, 'n65m8dll1qyz83'),
(45, 2, 6, 3, 7937, 'n65m8dll1qyz83'),
(46, 2, 7, 3, 7937, 'n65m8dll1qyz83'),
(47, 2, 3, 1, 7937, 'n65m8dll1qyz83'),
(48, 2, 8, 1, 7937, 'n65m8dll1qyz83'),
(49, 2, 6, 3, 7937, 'nz9apvll1r2xr9'),
(50, 2, 9, 21, 7937, 'nz9apvll1r2xr9'),
(51, 2, 7, 3, 7937, 'nz9apvll1r2xr9'),
(52, 2, 8, 1, 7937, 'nz9apvll1r2xr9'),
(53, 2, 3, 1, 7937, 'nz9apvll1r2xr9'),
(54, 2, 6, 3, 7937, '3msqerll1rctrd'),
(55, 2, 9, 21, 7937, '3msqerll1rctrd'),
(56, 2, 7, 3, 7937, '3msqerll1rctrd'),
(57, 2, 8, 1, 7937, '3msqerll1rctrd'),
(58, 2, 3, 1, 7937, '3msqerll1rctrd'),
(59, 2, 6, 3, 7937, 'egtk1gll1rsqb5'),
(60, 2, 9, 21, 7937, 'egtk1gll1rsqb5'),
(61, 2, 8, 1, 7937, 'egtk1gll1rsqb5'),
(62, 2, 3, 1, 7937, 'egtk1gll1rsqb5'),
(63, 2, 7, 3, 7937, 'egtk1gll1rsqb5'),
(69, 2, 6, 3, 7937, 'fpj9oall1rxavx'),
(70, 2, 9, 21, 7937, 'fpj9oall1rxavx'),
(71, 2, 7, 3, 7937, 'fpj9oall1rxavx'),
(72, 2, 8, 1, 7937, 'fpj9oall1rxavx'),
(73, 2, 3, 1, 7937, 'fpj9oall1rxavx'),
(74, 2, 6, 3, 7937, 'dbzc36ll1ugguj'),
(75, 2, 9, 21, 7937, 'dbzc36ll1ugguj'),
(76, 2, 7, 3, 7937, 'dbzc36ll1ugguj'),
(77, 2, 8, 1, 7937, 'dbzc36ll1ugguj'),
(78, 2, 3, 1, 7937, 'dbzc36ll1ugguj'),
(84, 2, 6, 3, 7937, 'egfl71ll1vb9vo'),
(85, 2, 9, 21, 7937, 'egfl71ll1vb9vo'),
(86, 2, 7, 3, 7937, 'egfl71ll1vb9vo'),
(87, 2, 8, 1, 7937, 'egfl71ll1vb9vo'),
(88, 2, 3, 1, 7937, 'egfl71ll1vb9vo'),
(89, 2, 6, 3, 7937, 'd3alywll1vdxwq'),
(90, 2, 9, 21, 7937, 'd3alywll1vdxwq'),
(91, 2, 7, 3, 7937, 'd3alywll1vdxwq'),
(92, 2, 8, 1, 7937, 'd3alywll1vdxwq'),
(93, 2, 3, 1, 7937, 'd3alywll1vdxwq'),
(94, 2, 6, 3, 7937, 'lvpg4zll1wtnu7'),
(95, 2, 9, 21, 7937, 'lvpg4zll1wtnu7'),
(96, 2, 7, 3, 7937, 'lvpg4zll1wtnu7'),
(97, 2, 8, 1, 7937, 'lvpg4zll1wtnu7'),
(98, 2, 3, 1, 7937, 'lvpg4zll1wtnu7'),
(99, 2, 8, 1, 20, 'z65505ll1wwpyn'),
(100, 2, 8, 1, 120, '9thhp4ll2dzi0c'),
(101, 2, 1, 1, 120, '9thhp4ll2dzi0c'),
(104, 2, 3, 2, 8617, 'i4ya5all4uv60m'),
(105, 2, 9, 4, 8617, 'i4ya5all4uv60m'),
(106, 2, 7, 1, 8617, 'i4ya5all4uv60m'),
(107, 2, 4, 3, 8617, 'i4ya5all4uv60m'),
(108, 2, 3, 2, 8617, 'lrdliill4v0e8a'),
(109, 2, 9, 4, 8617, 'lrdliill4v0e8a'),
(110, 2, 7, 1, 8617, 'lrdliill4v0e8a'),
(111, 2, 4, 3, 8617, 'lrdliill4v0e8a');

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
  MODIFY `checking_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
