-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2023 年 07 月 28 日 11:06
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
  `coverPhoto` varchar(100) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `date` date DEFAULT NULL,
  `description` text,
  `public` varchar(20) DEFAULT NULL,
  `ppl` int(11) DEFAULT NULL,
  `note` text,
  `itin_member_id` int(11) DEFAULT NULL,
  `create_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `itinerary`
--

INSERT INTO `itinerary` (`itin_id`, `coverPhoto`, `name`, `date`, `description`, `public`, `ppl`, `note`, `itin_member_id`, `create_at`) VALUES
(83, '1920x1080_attractions-image-fwfaxumoiegq42wwkiwkpg.jpg', '台北: 猴硐貓村＆九份美食探索與品茶一日遊', '2023-07-30', '猴銅貓村曾獲CNN推薦為全球六大賞貓景點\r\n深入九份小徑與探索美食小吃\r\n品嚐台灣在地茶葉，遼望海景\r\n進入金礦博物館，了解煤礦歷史與對在地的文化影響', '公開', 6, '* 行程可能視交通與天候狀況調整\r\n*此活動最少需6人成團，如未達最低成團人數，將為你安排改期\r\n*行程包含大量步行及階梯攀爬，請確保有足夠體力參加。', NULL, '2023-07-27 16:03:46'),
(84, 'x6357xkkrjxkdeyjoij4.webp', '台北:北投＆陽明山一日遊', '2023-07-29', '陽明山＆北投一日遊，來去台北近郊親近大自然\r\n前往由火山岩組成的低窪冷水坑，泡個足浴體驗「冷」的溫泉\r\n陽明山是最好的地理教科書，認識火山活動的噴氣孔和硫磺結晶\r\n', '公開', 5, '*請視當日天氣穿著合適服裝\r\n*此活動最少需5人成團，如未達最低成團人數，將為你安排改期\r\n*忠孝新生捷運站2號出口集合', NULL, '2023-07-27 16:07:07'),
(86, '20190126200544-f4cbc46b.jpg', '新北:平溪十分天燈半日遊', '2023-07-31', '台北一日遊推薦！半日體驗平溪當地天燈文化，了解台灣文化遺產\r\n走訪與火車鐵軌並存相連的十分老街，也是許多電影的取景勝地\r\n前往十分車站尋找通往幸福的郵筒\r\n闖入宛如人間仙境的十分瀑布，有台灣的尼加拉瓜瀑布之稱', '公開', 5, '*此活動最少需4人成團，如未達最低成團人數，將為你安排改期\r\n*若因天氣影響無法出行，將於活動日前一天透過email或手機通知\r\n*請提前5分鐘抵達集合地點', NULL, '2023-07-27 16:10:20'),
(87, 'pic.jpeg', '基隆＆新北:野柳郊外半日遊', '2023-08-01', '幸運的話可以在龜吼漁港看見萬里蟹\r\n深度基隆及野柳欣賞令人嘖嘖稱奇的東北角海岸線景色\r\n看見野柳由大自然鬼斧神工的雕刻塑造出獨一無二的岩石', '公開', 3, '*此活動最少需4人成團，如未達最低成團人數，將為你安排改期\r\n*若因天氣影響無法出行，將於活動日前一天透過email或手機通知\r\n*請提前5分鐘抵達集合地點', NULL, '2023-07-27 16:13:31'),
(88, 'zozivvvwi82szk9cfnkc.jpg', '台北茶文化一日遊:在地茶園茶席體驗・貓空纜車', '2023-08-07', '一次走訪台北近郊三大茶區，沉浸在茶香繚繞的美好時光\r\n搭乘貓空纜車,感受居高臨下俯視台灣山景的壯麗\r\n享受自然風光，感受千島湖靜謐的氛圍，彷彿被自然擁抱', '公開', 5, '*此活動最少需5人成團，如未達最低成團人數，將為你安排改期\r\n*若因天氣影響無法出行，將於活動日前一天透過email或手機通知\r\n*請提前5分鐘抵達集合地點', NULL, '2023-07-27 16:16:43'),
(89, 'shutterstock_1377979610.jpg', '台北象山探索一日遊', '2023-07-28', '在像山近距離觀看台北101大樓以及眺望寬敞的城市風景', '公開', 3, '*此活動最少需3人成團，如未達最低成團人數，將為你安排改期\r\n*若因天氣影響無法出行，將於活動日前一天透過email或手機通知\r\n*請提前5分鐘抵達集合地點', NULL, '2023-07-27 16:21:49'),
(90, '20200928130639_13.jpg', '平溪線三貂嶺碩仁秘境小鎮一日遊', '2023-07-30', '沿著基隆河谷來趟三貂嶺碩仁一日遊小旅行，走訪猴硐國小猴子溜滑梯、礦工紀念館、猴硐礦工文史館、猴硐壺穴，前往秘境小鎮碩仁聚落品嘗阿珠姐肉羹、文瓊小築草仔粿，步行前往三貂嶺車站、碩仁國小，最後再以Cafe Hytte的咖啡香當作結尾，來場猴硐、三貂嶺之旅', '不公開', 4, '*請提前5分鐘抵達集合地點\r\n*快快樂樂渡過一天吧～', NULL, '2023-07-27 16:26:50');

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
  MODIFY `itin_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
