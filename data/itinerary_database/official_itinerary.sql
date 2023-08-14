-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:3306
-- 產生時間： 2023-08-14 11:32:32
-- 伺服器版本： 5.7.24
-- PHP 版本： 8.1.0

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
-- 資料表結構 `official_itinerary`
--

CREATE TABLE `official_itinerary` (
  `sid` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `itin_id` int(11) NOT NULL,
  `create_at` datetime NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `content` text CHARACTER SET armscii8 NOT NULL,
  `itinerary name` varchar(225) NOT NULL,
  `price` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `official_itinerary`
--

INSERT INTO `official_itinerary` (`sid`, `member_id`, `itin_id`, `create_at`, `img`, `content`, `itinerary name`, `price`) VALUES
(1, 2, 159, '2023-08-10 14:20:35', 'http://localhost:3002/offical_img/1.jpg', '', '碧湖公園', '42000'),
(2, 2, 152, '2023-08-10 14:21:12', 'http://localhost:3002/offical_img/2.jpg', '', '碧山巖櫻花隧道', '32000'),
(3, 9, 150, '2023-08-10 15:55:58', 'http://localhost:3002/offical_img/3.jpg', '', '台北賞櫻景點', '22000'),
(4, 12, 157, '2023-08-10 15:58:05', 'http://localhost:3002/offical_img/4.jpg', '', '大溝溪生態治水園區', '25000'),
(5, 17, 148, '2023-08-10 16:44:19', 'http://localhost:3002/offical_img/5.jpg', '', '圓覺瀑布', '40000'),
(6, 23, 148, '2023-08-10 18:53:39', 'http://localhost:3002/offical_img/6.jpg', '', '大溝溪步道', '50000'),
(7, 24, 156, '2023-08-14 02:06:27', 'http://localhost:3002/offical_img/7.jpg', '', '華山文創園區', '40000'),
(8, 27, 170, '2023-08-14 02:08:17', 'http://localhost:3002/offical_img/8.jpg', '', '白石湖吊橋', '30000'),
(9, 29, 166, '2023-08-14 02:11:49', 'http://localhost:3002/offical_img/9.jpg', '', '內溝溪自然生態步道', '45000'),
(10, 30, 130, '2023-08-14 02:14:28', 'http://localhost:3002/offical_img/10.jpg', '', '彩虹光雕瀑布', '30000'),
(11, 31, 130, '2023-08-14 02:15:21', 'http://localhost:3002/offical_img/11.jpg', '', '新北植光Chill景觀燈廊', '32000'),
(12, 30, 150, '2023-08-14 02:17:41', 'http://localhost:3002/offical_img/12.jpg', '', '蘇東隧道-夜光海底世界', '22000'),
(13, 129, 380, '2023-08-14 02:18:48', 'http://localhost:3002/offical_img/13.jpg', '', '名間親子生態園區-巨型彩虹溜滑梯', '21000'),
(14, 130, 350, '2023-08-14 02:20:00', 'http://localhost:3002/offical_img/14.jpg', '', '1895乙未保台紀念公園', '34000'),
(15, 30, 130, '2023-08-14 02:24:29', 'http://localhost:3002/offical_img/15.jpg', '', '台北新生公園兒童遊戲場 ', '35000'),
(16, 12, 143, '2023-08-14 02:25:10', 'http://localhost:3002/offical_img/16.jpg', '', '國立故宮博物院', '45000'),
(17, 20, 14, '2023-08-14 02:27:58', 'http://localhost:3002/offical_img/17.jpg', '', '淡海輕軌漁人碼頭站', '37000'),
(18, 14, 105, '2023-08-14 02:30:19', 'http://localhost:3002/offical_img/18.jpg', '', '橫山書法藝術館-書法主題禪風公園', '42000'),
(19, 18, 120, '2023-08-14 02:31:58', 'http://localhost:3002/offical_img/19.jpg', '', '西門町商圈', '43000'),
(20, 23, 146, '2023-08-14 02:33:46', 'http://localhost:3002/offical_img/20.jpg', '', '羅浮溫泉湯池-５大特色湯池+１池溫泉魚', '56000');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `official_itinerary`
--
ALTER TABLE `official_itinerary`
  ADD PRIMARY KEY (`sid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `official_itinerary`
--
ALTER TABLE `official_itinerary`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
