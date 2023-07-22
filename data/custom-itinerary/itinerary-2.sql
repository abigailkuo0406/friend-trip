-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2023 年 07 月 21 日 11:52
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
-- 資料表結構 `itinerary`
--

CREATE TABLE `itinerary` (
  `itin_id` int(50) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `date` date DEFAULT NULL,
  `description` text,
  `public` varchar(20) DEFAULT NULL,
  `ppl` int(11) DEFAULT NULL,
  `note` text,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `itinerary`
--

INSERT INTO `itinerary` (`itin_id`, `img`, `name`, `date`, `description`, `public`, `ppl`, `note`, `create_at`) VALUES
(1, NULL, '九份基隆 從山城到海岸， 網美景點一次探索', '2023-05-02', '沿著濱海公路走，從山城到海岸，一趟旅行兩種體驗，在瑞芳基隆這裡就是可以這樣安排，還去了不少網美店和 ig 熱門打卡景點喔！', '公開', 2, '1.4 人即可成行，一日遊行程時間充足，拍照打卡不是問題\r\n2.行程中途，若自行脫團者，視同交易無效，不退還任何費用，若因此導致人身、財產安全，後果須自行承擔。\r\n3.行程如遇天氣、罷工、安全等因素，出於安全因素，以通知為準', '2023-05-17 23:55:45'),
(2, NULL, 'fdsf', '2023-07-21', 'dfsdf', NULL, 3, 'fdsfs', '2023-07-20 15:31:39'),
(3, NULL, 'fdsf', '2023-07-21', 'dfsdf', 'nonPublicValue', 3, 'fdsfs', '2023-07-20 15:31:46'),
(4, NULL, 'fdsf', '2023-07-21', 'dfsdf', 'nonPublicValue', 3, 'fdsfs', '2023-07-20 15:31:50'),
(5, NULL, '野柳好讚！', '2023-07-26', 'xzcxzxcx', 'publicValue', 0, 'czx', '2023-07-20 15:48:02'),
(6, NULL, 'aaa', '2023-07-29', 'sds', 'publicValue', 3, 'dsadas', '2023-07-20 15:49:13'),
(7, NULL, 'hfghfgh', '2023-07-28', 'hgfhfgh', 'nonPublicValue', 2, 'hfghfgh', '2023-07-20 23:40:04'),
(8, NULL, 'hfghfgh', '2023-07-28', 'hgfhfgh', 'nonPublicValue', 2, 'hfghfgh', '2023-07-20 23:40:06'),
(9, NULL, 'dsadas', '2023-07-26', 'asdasd', 'nonPublicValue', 1, 'dasdas', '2023-07-20 23:40:26'),
(10, NULL, 'dsadas', '2023-07-26', 'asdasd', 'nonPublicValue', 1, 'dasdas', '2023-07-20 23:42:17'),
(11, NULL, 'dsadas', '2023-07-26', 'asdasd', 'nonPublicValue', 1, 'dasdas', '2023-07-20 23:42:53'),
(12, NULL, 'dsadas', '2023-07-26', 'asdasd', 'nonPublicValue', 1, 'dasdas', '2023-07-20 23:42:57'),
(13, NULL, 'dfdddd', '2023-07-21', 'dfsdfsdf', 'publicValue', 3, 'ffsdfdsf', '2023-07-20 23:50:13'),
(14, NULL, 'dfdddd', '2023-07-21', 'dfsdfsdf', 'publicValue', 3, 'ffsdfdsf', '2023-07-20 23:50:32'),
(15, NULL, 'fsdfsdf', '2023-07-29', 'gdfgfd', 'publicValue', 2, 'fgdfg', '2023-07-20 23:52:12'),
(16, NULL, '野柳好讚！', '2023-07-29', 'asdasda', 'publicValue', 3, 'dasdas', '2023-07-21 10:55:27');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `itinerary`
--
ALTER TABLE `itinerary`
  ADD PRIMARY KEY (`itin_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `itinerary`
--
ALTER TABLE `itinerary`
  MODIFY `itin_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
