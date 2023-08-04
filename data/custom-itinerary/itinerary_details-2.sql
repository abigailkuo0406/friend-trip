-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2023 年 08 月 04 日 10:44
-- 伺服器版本： 5.7.39
-- PHP 版本： 7.4.33

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
-- 資料表結構 `itinerary_details`
--

CREATE TABLE `itinerary_details` (
  `sid` int(11) NOT NULL,
  `itin_id` int(11) DEFAULT NULL,
  `itin_order` int(11) DEFAULT NULL,
  `formatted_address` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 DEFAULT NULL,
  `phone_number` varchar(100) CHARACTER SET utf8mb4 DEFAULT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `weekday_text` text CHARACTER SET utf8mb4,
  `startdatetime` time DEFAULT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `itinerary_details`
--

INSERT INTO `itinerary_details` (`sid`, `itin_id`, `itin_order`, `formatted_address`, `lat`, `lng`, `name`, `phone_number`, `photo_url`, `weekday_text`, `startdatetime`, `create_at`) VALUES
(57, 101, 0, '103台灣台北市大同區大稻埕碼頭', 25.0566, 121.5071, '大稻埕碼頭', NULL, '', '\"\"undefined\"\"', NULL, '2023-08-01 20:25:01'),
(91, 107, 0, '106台灣台北市大安區新生南路二段1號', 25.0311, 121.536, '大安森林公園', '02 2700 3830', NULL, '\"\"星期一: 24 小時營業,星期二: 24 小時營業,星期三: 24 小時營業,星期四: 24 小時營業,星期五: 24 小時營業,星期六: 24 小時營業,星期日: 24 小時營業\"\"', NULL, '2023-08-02 23:15:41'),
(92, 107, 1, '103台灣台北市大同區寧夏路', 25.0569, 121.5154, '寧夏夜市', '0987 456 794', NULL, '\"\"星期一: 17:00 – 01:00,星期二: 17:00 – 01:00,星期三: 17:00 – 01:00,星期四: 17:00 – 01:00,星期五: 17:00 – 01:00,星期六: 17:00 – 01:00,星期日: 17:00 – 01:00\"\"', NULL, '2023-08-02 23:15:41'),
(93, 107, 2, '115台灣台北市南港區經貿二路1號', 25.0561, 121.6185, '台北南港展覽館1館', '02 2725 5200', NULL, '\"星期一: 07:00 – 22:00,星期二: 07:00 – 22:00,星期三: 07:00 – 22:00,星期四: 07:00 – 22:00,星期五: 07:00 – 22:00,星期六: 07:00 – 22:00,星期日: 07:00 – 22:00\"', NULL, '2023-08-02 23:15:41'),
(94, 96, 0, '106台灣台北市大安區新生南路二段1號', 25.0311, 121.536, '大安森林公園', '02 2700 3830', NULL, '\"星期一: 24 小時營業,星期二: 24 小時營業,星期三: 24 小時營業,星期四: 24 小時營業,星期五: 24 小時營業,星期六: 24 小時營業,星期日: 24 小時營業\"', NULL, '2023-08-03 01:24:37'),
(95, 96, 1, '407台灣台中市西屯區朝富路30號', 24.1673, 120.6392, '秋紅谷景觀生態公園', '04 2228 9111', NULL, '\"星期一: 24 小時營業,星期二: 24 小時營業,星期三: 24 小時營業,星期四: 24 小時營業,星期五: 24 小時營業,星期六: 24 小時營業,星期日: 24 小時營業\"', NULL, '2023-08-03 01:24:37'),
(96, 96, 2, '115台灣台北市南港區經貿二路1號', 25.0561, 121.6185, '台北南港展覽館1館', '02 2725 5200', NULL, '\"星期一: 07:00 – 22:00,星期二: 07:00 – 22:00,星期三: 07:00 – 22:00,星期四: 07:00 – 22:00,星期五: 07:00 – 22:00,星期六: 07:00 – 22:00,星期日: 07:00 – 22:00\"', NULL, '2023-08-03 01:24:37'),
(112, 97, 0, '台灣八斗子漁港', 25.1446, 121.7915, '八斗子漁港', NULL, '八斗子漁港.jpg', '\"\"\"undefined\"\"\"', NULL, '2023-08-03 19:32:30'),
(113, 97, 1, '202台灣基隆市平一路360號', 25.1613, 121.7642, '和平島地質公園', '02 2463 5452', '和平島地質公園.jpg', '\"\"\"星期一: 08:00 – 19:00,星期二: 08:00 – 19:00,星期三: 08:00 – 19:00,星期四: 08:00 – 19:00,星期五: 08:00 – 19:00,星期六: 08:00 – 19:00,星期日: 08:00 – 19:00\"\"\"', NULL, '2023-08-03 19:32:30'),
(114, 97, 2, '224台灣新北市瑞芳區', 25.1346, 121.8238, '深澳岬角 象鼻岩景觀區', '02 2960 3456', '深澳岬角 象鼻岩景觀區.jpg', '\"\"\"星期一: 24 小時營業,星期二: 24 小時營業,星期三: 24 小時營業,星期四: 24 小時營業,星期五: 24 小時營業,星期六: 24 小時營業,星期日: 24 小時營業\"\"\"', NULL, '2023-08-03 19:32:30');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `itinerary_details`
--
ALTER TABLE `itinerary_details`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `itinerary_details`
--
ALTER TABLE `itinerary_details`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
