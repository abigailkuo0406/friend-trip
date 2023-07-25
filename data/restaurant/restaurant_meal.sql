-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:3306
-- 產生時間： 2023-07-25 17:15:23
-- 伺服器版本： 5.7.24
-- PHP 版本： 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `fridntrip_final`
--

-- --------------------------------------------------------

--
-- 資料表結構 `restaurant_meal`
--

CREATE TABLE `restaurant_meal` (
  `rest_class_id` int(10) UNSIGNED NOT NULL,
  `rest_meal` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `restaurant_meal`
--

INSERT INTO `restaurant_meal` (`rest_class_id`, `rest_meal`) VALUES
(1, '早午餐'),
(2, '下午茶'),
(3, '晚餐'),
(4, '日式'),
(6, '泰式'),
(7, '韓式'),
(8, '台式'),
(9, '中式'),
(10, '義式'),
(11, '韓式料理'),
(12, '美式餐廳'),
(13, '歐陸料理');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `restaurant_meal`
--
ALTER TABLE `restaurant_meal`
  ADD PRIMARY KEY (`rest_class_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `restaurant_meal`
--
ALTER TABLE `restaurant_meal`
  MODIFY `rest_class_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
