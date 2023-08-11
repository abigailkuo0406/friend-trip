-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2023 at 05:29 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fridntrip_final`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `member_id`, `content`, `img`, `created_at`) VALUES
(3, 31, '#國外 廉價航空便宜機票攻略心得分享\n\n我只是一個朝九晚五的上班族，每個月幾乎沒有太多盈餘可以花費，但是我很愛出國旅遊，\n於是就開始研究要怎麼樣才能買到便宜機票!\n本文就單純我個人買機票的經驗分享，如果有興趣的話可以看看!\n\n搶票攻略依照順序大概分為以下幾個\n1.鎖定旅遊日期\n2.目標航班/旅遊地點\n3.關注廉價航空開賣、特價消息\n4.搶票事前準備', 'https://plus.unsplash.com/premium_photo-1684407617236-9baf926474ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', '2023-07-25 00:00:00'),
(5, 17, '有女生可以接受不用每天聊天的感情嗎？\r\n有女生可以接受\r\n男友跟妳不會每天聊天\r\n大概就是報個平安\r\n講一下要去幹嘛\r\n然後各做各自的事\r\n不用每天一定要聊天\r\n想見對方的時候見面\r\n這種模式嗎？', 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', '2023-07-27 00:00:00'),
(6, 64, '這樣的人才值得我愛一輩子\r\n1.有同理心的人\r\n2.情緒穩定的人\r\n3.不會有太多成見的人\r\n4.幽默的人\r\n5.懂得表達自我的人', 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80', '2023-07-11 00:00:00'),
(7, 73, '致寶貝女友的一封信\r\n嘿 我不知道妳看不看得到\r\n但我想說 我開始找回當初跟妳認識的自己了\r\n分開後我想了很多 一段感情需要雙方共同成長\r\n但是我卻選擇了原地踏步 忽視自己\r\n另一半之所以是另一半不就是保有自己的同時\r\n才會稱之為另一半嗎？', 'https://images.unsplash.com/photo-1482235225574-c37692835cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80', '2023-07-25 00:00:00'),
(8, 92, '男生會不喜歡太瘦的女生嗎\r\n常常被嗆竹竿女跟骷髏\r\n我156 41\r\n但我自己蠻喜歡這樣瘦的身材可以穿很多衣服\r\n可是常常被別人嗆跟罵', 'https://images.unsplash.com/photo-1499314060091-745e1ca06f22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80', '2023-07-23 00:00:00'),
(10, 69, '我想問大家會介意自己的另一半跟異性出去嗎?\r\n因為我的男朋友有很多異性朋友，在一起的時候他就有跟我說他的朋友誰是誰，但我男友是個喜歡認識新朋友的人，所以我們在一起一年多，他一樣認識很多新朋友(男男女女都有)。而且他其實和一般男生不太一樣吧，不知道怎麼形容，我剛認識他時，覺得他很好聊天、很健談，所以這種男生是會吸引滿多女生跟他做朋友當閨密這種，不過有可能因為他身高不高，再加上他都把那些女生當朋友，所以在我認識他之前他是母胎單身。\r\n', 'https://plus.unsplash.com/premium_photo-1663051246527-2fece938779f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', '2023-07-08 00:00:00'),
(11, 49, '我堅持了十個月的感情，為什麼都遇人不淑?\r\n在一次聚會中，前男友加了我的line，\r\n沒想到聊著聊著就有好感，\r\n當時他有個交往七八年的女友，\r\n正準備要跟他分手（可能是講給我聽的）\r\n我也很明確告訴他，\r\n請先把你的感情處理好，再來談，\r\n沒多久他們分手了，\r\n我們在一起了，好一個無縫接軌，\r\n前男友媽媽得知分手訊息，\r\n非常反對，甚至要求他們復合', 'https://images.unsplash.com/photo-1627876888313-4a7cadd50055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80', '2023-07-11 00:00:00'),
(12, 3, '#國外 大家覺得幾個人一起出國比較好？\r\n個人是比較偏好兩個人，如果是特別要好的朋友，比較可以互相照顧，也很好討論。\r\n兩人以上的話，其中一人如果有什麼問題，就比較沒辦法被照顧到，因為要配合大家的行程。\r\n想問大家會喜歡幾個人一起出國？', 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', '2023-07-25 00:00:00'),
(13, 53, '#國外 當天來回快閃韓國會很瘋狂嗎?\r\n因為有期間限定的商品（需要本人去）\r\n想要飛韓國但公司沒辦法休那麼多假，也沒那麼多預算\r\n已經看好機票來回$6900\r\n預計不住宿當天來回，不曉得會不會很瘋狂\r\n想問有沒有人有當天快閃國外的經驗可以給個建議🤣', 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', '2023-07-24 00:00:00'),
(76, 98, '這是我上禮拜去博朗大道拍的', 'http://localhost:3002/forum_pics/brownBlv.jpg', '2023-08-04 10:58:49'),
(109, 86, '誰要跟我看星星？', 'http://localhost:3002/forum_pics/starryNight.jpg', '2023-08-07 22:50:55'),
(111, 6, '三缺一，誰要加入？', 'http://localhost:3002/forum_pics/kayaking.jpg', '2023-08-08 11:23:56'),
(115, 25, '我有拿波里pizza折價卷，划完船之後一起去吃吧', 'http://localhost:3002/forum_pics/napoli-pizza-coupon.jpg', '2023-08-09 13:38:41'),
(117, 7, '我找到了素食pizza', 'http://localhost:3002/forum_pics/vegan-pizza.jpg', '2023-08-09 17:52:11'),
(122, 13, '希望在此找到有緣人', 'http://localhost:3002/forum_pics/youngLover.jpg', '2023-08-09 22:28:02'),
(188, 8, '嘉明湖位於台東縣海端鄉，是台灣高山湖泊中排名第二，僅次雪山翠池。其湖水顏色深藍如寶石，雖無溪流注入卻終年不枯，有著「天使的眼淚」的美稱。沿途順路造訪向陽、三叉兩座百岳。', 'http://localhost:3002/forum_pics/jiaminhu.webp', '2023-08-11 10:26:05'),
(189, 8, '我們最後從陽山屋出發準備下山，山屋伯伯熱情款待蒸包子和紅豆湯，大夥飽餐一頓，跟伯伯約好下次來嘉明湖再見，便興高采烈的下山。', 'http://localhost:3002/forum_pics/xianyanshan.webp', '2023-08-11 10:31:03'),
(191, 8, 'test for delete', 'http://localhost:3002/forum_pics/noPost.jpg', '2023-08-11 10:38:10'),
(195, 14, '這一條路線很方便的地方就是可以搭捷運、騎Ubike~而且下山就可以直接去逛街了～一整天的行程直接排好。不過只去六巨石市真的蠻短的啦，建議大家可以排個半天，把四獸山走完，或是去九五峰、拇指山、南港山等。', 'http://localhost:3002/forum_pics/jiandaoshi.webp', '2023-08-11 10:48:42'),
(199, 28, '你們好，我是宗翰，我喜歡夜遊', 'http://localhost:3002/forum_pics/yiejin.webp', '2023-08-11 11:09:58'),
(200, 28, '這是我前女友', 'http://localhost:3002/forum_pics/qiannvyou.webp', '2023-08-11 11:11:23'),
(201, 28, '還是我前女友', 'http://localhost:3002/forum_pics/qinnv.webp', '2023-08-11 11:17:28'),
(203, 35, '這是九份，就團一起去', 'http://localhost:3002/forum_pics/jiufen.webp', '2023-08-11 11:25:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=204;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
