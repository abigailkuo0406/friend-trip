-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2023 at 11:40 PM
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
  `user_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `user_id`, `content`, `img`, `created_at`) VALUES
(3, 1, '#國外 廉價航空便宜機票攻略心得分享\n\n我只是一個朝九晚五的上班族，每個月幾乎沒有太多盈餘可以花費，但是我很愛出國旅遊，\n於是就開始研究要怎麼樣才能買到便宜機票!\n本文就單純我個人買機票的經驗分享，如果有興趣的話可以看看!\n\n搶票攻略依照順序大概分為以下幾個\n1.鎖定旅遊日期\n2.目標航班/旅遊地點\n3.關注廉價航空開賣、特價消息\n4.搶票事前準備', '', '2023-07-25 23:17:50'),
(5, 1, '有女生可以接受不用每天聊天的感情嗎？\r\n有女生可以接受\r\n男友跟妳不會每天聊天\r\n大概就是報個平安\r\n講一下要去幹嘛\r\n然後各做各自的事\r\n不用每天一定要聊天\r\n想見對方的時候見面\r\n這種模式嗎？', '', '2023-07-27 19:55:40'),
(6, 4, '這樣的人才值得我愛一輩子\r\n1.有同理心的人\r\n2.情緒穩定的人\r\n3.不會有太多成見的人\r\n4.幽默的人\r\n5.懂得表達自我的人', '', '2023-07-11 19:59:12'),
(7, 3, '致寶貝女友的一封信\r\n嘿 我不知道妳看不看得到\r\n但我想說 我開始找回當初跟妳認識的自己了\r\n分開後我想了很多 一段感情需要雙方共同成長\r\n但是我卻選擇了原地踏步 忽視自己\r\n另一半之所以是另一半不就是保有自己的同時\r\n才會稱之為另一半嗎？', '', '2023-07-25 20:01:44'),
(8, 2, '男生會不喜歡太瘦的女生嗎\r\n常常被嗆竹竿女跟骷髏\r\n我156 41\r\n但我自己蠻喜歡這樣瘦的身材可以穿很多衣服\r\n可是常常被別人嗆跟罵', '', '2023-07-23 20:03:31'),
(9, 5, '分手後擔心找不到更愛我的人\r\n跟男友算和平分手\r\n因為家庭價值觀差距實在太大\r\n男友認為他沒有能力給我幸福\r\n分手的時候交代了我好多要好好生活的話\r\n想到在一起的點點滴滴生活的回憶\r\n有男友照顧的我真的很幸福\r\n只是現實讓我們不能走到一塊\r\n覺得很感傷', '', '2023-07-21 20:05:15'),
(10, 2, '我想問大家會介意自己的另一半跟異性出去嗎?\r\n因為我的男朋友有很多異性朋友，在一起的時候他就有跟我說他的朋友誰是誰，但我男友是個喜歡認識新朋友的人，所以我們在一起一年多，他一樣認識很多新朋友(男男女女都有)。而且他其實和一般男生不太一樣吧，不知道怎麼形容，我剛認識他時，覺得他很好聊天、很健談，所以這種男生是會吸引滿多女生跟他做朋友當閨密這種，不過有可能因為他身高不高，再加上他都把那些女生當朋友，所以在我認識他之前他是母胎單身。\r\n', '', '2023-07-08 20:54:08'),
(11, 4, '我堅持了十個月的感情，為什麼都遇人不淑?\r\n在一次聚會中，前男友加了我的line，\r\n沒想到聊著聊著就有好感，\r\n當時他有個交往七八年的女友，\r\n正準備要跟他分手（可能是講給我聽的）\r\n我也很明確告訴他，\r\n請先把你的感情處理好，再來談，\r\n沒多久他們分手了，\r\n我們在一起了，好一個無縫接軌，\r\n前男友媽媽得知分手訊息，\r\n非常反對，甚至要求他們復合', '', '2023-07-11 21:02:13'),
(12, 3, '#國外 大家覺得幾個人一起出國比較好？\r\n個人是比較偏好兩個人，如果是特別要好的朋友，比較可以互相照顧，也很好討論。\r\n兩人以上的話，其中一人如果有什麼問題，就比較沒辦法被照顧到，因為要配合大家的行程。\r\n想問大家會喜歡幾個人一起出國？', '', '2023-07-25 21:20:47'),
(13, 5, '#國外 當天來回快閃韓國會很瘋狂嗎?\r\n因為有期間限定的商品（需要本人去）\r\n想要飛韓國但公司沒辦法休那麼多假，也沒那麼多預算\r\n已經看好機票來回$6900\r\n預計不住宿當天來回，不曉得會不會很瘋狂\r\n想問有沒有人有當天快閃國外的經驗可以給個建議🤣', '', '2023-07-24 21:29:05'),
(14, 2, '#國外 羅馬冰淇淋超級名店\r\n在羅馬，品嚐冰淇淋就是件日常，不過Lucciano’s與Venchi這兩家就是與眾不同，不只有網美風的裝潢、下足功夫的擺盤，更是把冰淇淋推向全世界，並獲獎無數，不過價格相對貴上一截，是否真的值得掏出大把鈔票去嘗試？', '', '2023-07-26 21:37:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;