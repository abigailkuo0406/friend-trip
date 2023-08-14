-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2023 年 08 月 14 日 01:13
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
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `member_id` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `images` varchar(255) DEFAULT NULL,
  `member_name` varchar(255) NOT NULL,
  `member_birth` date NOT NULL,
  `id_number` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `height` float DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `zodiac` varchar(255) DEFAULT NULL,
  `bloodtype` varchar(255) DEFAULT NULL,
  `smoke` varchar(255) DEFAULT NULL,
  `alchohol` varchar(255) DEFAULT NULL,
  `education_level` varchar(255) DEFAULT NULL,
  `job` varchar(255) DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `create_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`member_id`, `email`, `password`, `images`, `member_name`, `member_birth`, `id_number`, `gender`, `location`, `height`, `weight`, `zodiac`, `bloodtype`, `smoke`, `alchohol`, `education_level`, `job`, `profile`, `mobile`, `create_at`) VALUES
(1, 'mail233591@test.com', 'A176373707r', 'face1.png', '塗丞恩', '1993-01-25', 'X131804595', '男', '新北市林口區', 176, 64, '巨蟹座', 'B', '有', '滴酒不沾', '國中', '中醫師', '我每個周末都會找不一樣的咖啡廳坐坐，立志要喝遍台北所有的手沖咖啡', '0911325829', '2023-07-12 18:10:37'),
(2, 'mail431272@test.com', 'I734633895r', 'face2.png', '陽芊妤', '1988-03-18', 'V263367589', '女', '新北市瑞芳區', 160, 53, '天秤座', 'A', '有', '滴酒不沾', '博士', '醫學美容', '朋友都說跟我隨和、好相處，也喜歡和我分享心事，因為我是個滿好的聆聽者', '0911953355', '2023-07-12 18:10:37'),
(3, 'mail383507@test.com', 'B970607548i', 'face3.png', '錢彥廷', '1999-09-10', 'X193715892', '男', '新北市土城區', 160, 77, '天秤座', 'A', '無', '小酌', '國小', '系統分析師', '我欣賞有智慧的女生，喜歡兩個人能深度對談；無法接受太黏的性格，傾向各自保留適度空間', '0911418784', '2023-07-12 18:10:37'),
(4, 'mail814206@test.com', 'P893564755p', 'face4.png', '程俊廷', '1994-07-03', 'Q115420048', '男', '基隆市信義區', 164, 73, '雙子座', 'O', '有', '酒豪', '碩士', '類比IC設計工程師', '我的外號是「米奇」，只因為換了去迪士尼戴米老鼠帽子的大頭貼，辦公室同事就幫我取了這個外號，希望可以找到願意讓我帶妳去迪士尼玩的米妮。', '0911985867', '2023-07-12 18:10:37'),
(5, 'mail667663@test.com', 'N780952113x', 'face5.png', '簡欣穎', '1991-06-09', 'D211145469', '女', '新北市平溪區', 136, 44, '水瓶座', 'B', '有', '滴酒不沾', '國中', '醫學美容', '我是一個對婚姻很有嚮往的人，未來希望可以跟我愛的人一起「一屋、二人、三餐、四季」', '0911873553', '2023-07-12 18:10:37'),
(6, 'mail698456@test.com', 'Q656030592q', 'face6.png', '苗景翔', '1987-12-02', 'E184189752', '男', '新北市三芝區', 151, 72, '天秤座', 'AB', '無', '滴酒不沾', '國小', '艙面部船員', '我是三芝人，喜歡交朋友 電影愛好者，希望\r\n能找到一起看電影的朋友！', '0912477238', '2023-07-12 18:10:37'),
(7, 'mail951109@test.com', 'J919290082f', 'face7.png', '劉羽彤', '1999-11-05', 'T218220182', '女', '基隆市七堵區', 142, 44, '雙子座', 'B', '無', '酒豪', '博士', '藥師輪機部船員', '我是基隆人，喜歡交朋友 愛好健身，希望\r\n能找到一起健身的朋友！', '0921161446', '2023-07-12 18:10:37'),
(8, 'mail582740@test.com', 'U813231924d', 'face8.png', '雷佳蓉', '1992-04-18', 'G287448860', '女', '新北市平溪區', 136, 48, '射手座', 'AB', '無', '酒豪', '高中', '船上作業人員', '我是平溪人，喜歡交朋友 喜歡放天燈，希望\r\n能找到一起放天燈的朋友！', '0911492005', '2023-07-12 18:10:37'),
(9, 'mail584852@test.com', 'U892220610y', 'face9.png', '袁欣妤', '1985-10-02', 'F279320783', '女', '新北市樹林區', 161, 45, '天秤座', 'O', '有', '酒豪', '高中', '數位IC設計工程師', '我是樹林人，喜歡吃烤雞腿，樹林的雞腿超好吃，快來找我一起吃烤雞腿吧！', '0963976984', '2023-07-12 18:10:37'),
(10, 'mail509998@test.com', 'X121157802f', 'face10.png', '蕭彥丞', '1993-09-18', 'N127190274', '男', '新北市石碇區', 152, 62, '天秤座', 'O', '有', '滴酒不沾', '高中', '醫師', '我是石碇人，喜歡泡溫泉，有事沒事就去泡湯，希望\r\n能找到一起泡溫泉的朋友！', '0918496376', '2023-07-12 18:10:37'),
(11, 'mail757523@test.com', 'I596989780s', 'face11.png', '刁育萱', '1987-09-16', 'L281204494', '女', '新北市雙溪區', 157, 45, '水瓶座', 'AB', '有', '滴酒不沾', '碩士', '藝術總監', '我是雙溪人，喜歡參加美術展 美術愛好者，希望\r\n能找到一起看展的朋友', '0958131230', '2023-07-12 18:10:37'),
(12, 'mail688347@test.com', 'E321217863m', 'face12.png', '熊宜萱', '1996-04-24', 'O288651376', '女', '新北市金山區', 139, 48, '天蠍座', 'O', '無', '小酌', '國小', '建築師', '我是金山人，喜歡吃地瓜，美食愛好者，希望\r\n能找到一起烤地瓜的朋友！', '0975373381', '2023-07-12 18:10:37'),
(13, 'mail836535@test.com', 'C826677339r', 'face13.png', '梅秉叡', '1988-11-10', 'Q168545300', '男', '新北市鶯歌區', 157, 75, '天秤座', 'AB', '有', '酒豪', '碩士', '牙醫師', '我是鶯歌人，喜歡跑馬拉松，流汗的感覺，希望\r\n能找到一起跑半馬的朋友！', '0954868231', '2023-07-12 18:10:37'),
(14, 'mail747776@test.com', 'Q121728532r', 'face14.png', '卜鈺婷', '1985-09-01', 'D267986696', '女', '臺北市大安區', 132, 45, '巨蟹座', 'B', '無', '滴酒不沾', '國中', '系統分析師', '我是臺北人，喜歡逛街血拼，希望能找到一起逛街掃貨的朋友', '0977652132', '2023-07-12 18:10:37'),
(15, 'mail827520@test.com', 'G728538675k', 'face15.png', '孟品蓁', '1986-02-13', 'D294306873', '女', '基隆市暖暖區', 147, 42, '處女座', 'AB', '有', '滴酒不沾', '博士', '類比IC設計工程師', '我是基隆人，喜歡吃小吃 基隆廟口天天去，希望\r\n能找到一起吃美食的朋友', '0927598088', '2023-07-12 18:10:37'),
(16, 'mail689967@test.com', 'P767899927r', 'face16.png', '程柏宏', '1999-03-17', 'B181677350', '男', '基隆市仁愛區', 180, 69, '射手座', 'AB', '有', '小酌', '國小', '飛行機師', '我是飛行機師，喜歡交朋友 超愛旅遊，希望\r\n能找到一起出國旅遊的朋友！', '0933838881', '2023-07-12 18:10:37'),
(17, 'mail942764@test.com', 'H954237998b', 'face17.png', '韋彥均', '1994-06-15', 'X185245735', '男', '新北市林口區', 158, 78, '射手座', 'O', '無', '小酌', '學士', '類比IC設計工程師', '熱愛旅行，喜歡探索世界各地的文化和美食，不斷追求新奇的冒險和回憶。', '0911628374', '2023-07-12 18:10:37'),
(18, 'mail598008@test.com', 'W294728817u', 'face18.png', '凌品蓁', '1986-04-11', 'V295323480', '女', '臺北市松山區', 138, 56, '處女座', 'AB', '有', '酒豪', '高中', '中醫師', '音樂是我的靈魂，我彈奏各種樂器，尤其熱愛創作屬於自己的音樂，表達內心情感。', '0911758337', '2023-07-12 18:10:37'),
(19, 'mail660921@test.com', 'L696420178d', 'face19.png', '雲怡臻', '1997-05-02', 'I267741306', '女', '新北市板橋區', 156, 51, '金牛座', 'A', '無', '酒豪', '高中', '數位IC設計工程師', '登山是我放鬆的方式，每次攀登都是對自己的挑戰，也是對大自然的敬仰。', '0956296263', '2023-07-12 18:10:37'),
(20, 'mail141128@test.com', 'Z586427473x', 'face20.png', '張簡芷涵', '1986-01-08', 'O261856830', '女', '基隆市七堵區', 163, 48, '牡羊座', 'O', '有', '滴酒不沾', '高中', '醫師', '烹飪不僅是技能，更是我的藝術。我總是喜歡嘗試不同的食材和烹調方法，創造美味佳餚。', '0936200892', '2023-07-12 18:10:37'),
(21, 'mail181315@test.com', 'Z694208388j', 'face21.png', '管冠霆', '1997-11-20', 'V172770647', '男', '基隆市信義區', 184, 63, '射手座', 'AB', '無', '小酌', '國小', '中醫師', '電影改變我對世界的看法，我熱愛每一種電影體驗，無論是情感豐富的劇情片還是驚險刺激的動作片。', '0967448476', '2023-07-12 18:10:37'),
(22, 'mail428623@test.com', 'C632960711a', 'face22.png', '關珮慈', '1996-05-17', 'J244104888', '女', '新北市蘆洲區', 148, 49, '魔羯座', 'A', '有', '滴酒不沾', '國中', '船上作業人員', '書籍是我的良師益友，我喜歡各種類型的書，閱讀豐富了我的內心世界。', '0953337692', '2023-07-12 18:10:37'),
(23, 'mail430922@test.com', 'Z826681105a', 'face23.png', '牛凱傑', '1988-06-08', 'S138437825', '男', '新北市貢寮區', 170, 64, '牡羊座', 'AB', '有', '滴酒不沾', '國小', '空服人員', '我堅信環保是每個人的責任，我努力減少浪費，用實際行動愛護地球家園。', '0911815045', '2023-07-12 18:10:37'),
(24, 'mail297869@test.com', 'H911798403l', 'face24.png', '陳芳瑜', '1991-06-08', 'L212104368', '女', '臺北市信義區', 154, 41, '金牛座', 'A', '有', '小酌', '高中', '建築師', '美容保養是我生活的一部分，我注重皮膚護理，總是保持最佳的狀態。', '0911485288', '2023-07-12 18:10:37'),
(25, 'mail628245@test.com', 'N192995716s', 'face25.png', '房郁晴', '1990-08-23', 'A237085786', '女', '基隆市安樂區', 164, 40, '魔羯座', 'B', '有', '滴酒不沾', '國小', '船上作業人員', '舞蹈是我情感的宣泄，每次的舞蹈都是我情感的表達，也是對生活的熱愛。', '0911190328', '2023-07-12 18:10:37'),
(26, 'mail849253@test.com', 'L260902850b', 'face26.png', '殷芷涵', '1985-02-26', 'A264165778', '女', '新北市三峽區', 155, 59, '牡羊座', 'A', '有', '滴酒不沾', '高中', '系統分析師', '美容保養是我生活的一部分，我注重皮膚護理，總是保持最佳的狀態。', '0919715242', '2023-07-12 18:10:37'),
(27, 'mail988911@test.com', 'V947479176o', 'face27.png', '衛丞恩', '1999-07-18', 'R127763655', '男', '新北市新莊區', 190, 71, '水瓶座', 'AB', '無', '小酌', '學士', '律師', '我熱愛攝影，通過鏡頭捕捉生活的美好瞬間，每張照片都是對時光的記錄。', '0961882499', '2023-07-12 18:10:37'),
(28, 'mail485720@test.com', 'X999473926a', 'face28.png', '龐宗翰', '1985-04-21', 'T119680149', '男', '新北市永和區', 169, 61, '天秤座', 'A', '無', '滴酒不沾', '學士', '船上作業人員', '科技的發展總是讓我充滿好奇，我熱愛學習新的科技知識，追求創新。', '0911719869', '2023-07-12 18:10:37'),
(29, 'mail887720@test.com', 'G552599313w', 'face29.png', '趙芷涵', '1990-04-20', 'D266849148', '女', '基隆市信義區', 154, 49, '射手座', 'AB', '無', '酒豪', '碩士', '艙面部船員', '世界旅行者，我喜歡感受不同文化和風景，每次旅行都是為了擴展視野。', '0965830466', '2023-07-12 18:10:37'),
(30, 'mail509575@test.com', 'I509911913n', 'face30.png', '童柏均', '1989-04-15', 'B116749845', '男', '臺北市大安區', 165, 74, '水瓶座', 'A', '有', '酒豪', '博士', '艙面部船員', '書迷，閱讀是我思考和創作的源泉，喜歡研究各種主題，豐富自己的知識庫。', '0936474612', '2023-07-12 18:10:37'),
(31, 'mail266694@test.com', 'S459140666i', 'face31.png', '齊柏勳', '1985-03-10', 'S126156544', '男', '臺北市北投區', 171, 66, '牡羊座', 'O', '無', '滴酒不沾', '學士', '空服人員', '登山者兼攀岩愛好者，樂於挑戰自己極限，對於大自然的崇敬讓我充滿能量。', '0976815305', '2023-07-12 18:10:37'),
(32, 'mail970648@test.com', 'D689400906m', 'face32.png', '池哲瑋', '1992-12-17', 'G155097350', '男', '新北市五股區', 166, 67, '巨蟹座', 'B', '無', '小酌', '國小', '護理長', '綠色生活的倡導者，積極參與社區環保活動，透過實際行動守護地球。', '0955784056', '2023-07-12 18:10:37'),
(33, 'mail389192@test.com', 'X189616811y', 'face33.png', '車凱文', '1993-11-27', 'N143962571', '男', '新北市林口區', 170, 79, '處女座', 'A', '有', '酒豪', '碩士', '飛行機師', '世界旅行者，我喜歡感受不同文化和風景，每次旅行都是為了擴展視野', '0911541666', '2023-07-12 18:10:37'),
(34, 'mail989934@test.com', 'V960427465q', 'face34.png', '耿子涵', '1998-11-12', 'N295830755', '女', '新北市萬里區', 141, 51, '牡羊座', 'A', '有', '滴酒不沾', '國中', '空服人員', '音樂是我的靈魂之源，彈奏吉他和鋼琴已有多年，喜愛將情感融入每個音符中。', '0922933093', '2023-07-12 18:10:37'),
(35, 'mail388015@test.com', 'Y664483711j', 'face35.png', '鍾庭瑄', '1999-03-22', 'H226907733', '女', '基隆市仁愛區', 146, 46, '金牛座', 'AB', '有', '滴酒不沾', '博士', '創業家', '創業家，我對於創新和市場趨勢有著敏銳的洞察力，經營小型創業。', '0965642038', '2023-07-12 18:10:37'),
(36, 'mail544153@test.com', 'M233273696l', 'face36.png', '關瑜安', '1990-03-09', 'M298953807', '女', '基隆市安樂區', 144, 58, '牡羊座', 'A', '無', '滴酒不沾', '高中', '護理長', '書迷，閱讀是我思考和創作的源泉，喜歡研究各種主題，豐富自己的知識庫。', '0968587573', '2023-07-12 18:10:37'),
(37, 'mail519008@test.com', 'N164534886b', 'face37.png', '唐宸瑋', '1986-11-27', 'F149869052', '男', '臺北市南港區', 159, 72, '雙子座', 'O', '無', '小酌', '國中', '輪機部船員', '我是南港人，喜歡跑山跟去看汽車展，希望\r\n能找到一起上山兜風的朋友！', '0975895434', '2023-07-12 18:10:37'),
(38, 'mail344223@test.com', 'J544834030q', 'face38.png', '凃育萱', '1997-12-30', 'E233497038', '女', '新北市深坑區', 151, 50, '雙魚座', 'O', '有', '滴酒不沾', '碩士', 'IC設計工程師', '綠色生活的倡導者，積極參與社區環保活動，透過實際行動守護地球。', '0911651144', '2023-07-12 18:10:37'),
(39, 'mail802423@test.com', 'P540143424b', 'face39.png', '阮育誠', '1990-10-21', 'O196621060', '男', '新北市三峽區', 179, 64, '魔羯座', 'O', '有', '滴酒不沾', '碩士', '類比IC設計工程師', '遊戲愛好者，我喜愛探索虛擬世界，也經常參與線上多人遊戲。', '0919504025', '2023-07-12 18:10:37'),
(40, 'mail409072@test.com', 'R243501835k', 'face40.png', '司芷萱', '1998-12-20', 'V210740178', '女', '新北市林口區', 160, 57, '雙魚座', 'O', '有', '滴酒不沾', '國中', '數位IC設計工程師', '喜愛騎腳踏車，健康生活。', '0934568692', '2023-07-12 18:10:37'),
(41, 'mail842981@test.com', 'K500607094d', 'face41.png', '利昱辰', '1989-06-22', 'R190936759', '男', '臺北市大同區', 187, 64, '獅子座', 'B', '無', '小酌', '博士', '律師', '我是臺北人，喜歡交朋友 超級電影愛好者，最近想看奧本海希望\r\n能找到一起看電影的朋友！', '0966126630', '2023-07-12 18:10:37'),
(42, 'mail219778@test.com', 'T481713405c', 'face42.png', '尤秉諺', '1998-04-01', 'Z117620542', '男', '臺北市中山區', 165, 71, '雙子座', 'B', '有', '酒豪', '學士', '牙醫師', '電影評論家，我喜愛觀賞不同類型的電影，並在部落格中分享個人觀點', '0933567187', '2023-07-12 18:10:37'),
(43, 'mail916905@test.com', 'X918812872n', 'face43.png', '柯欣穎', '1989-01-24', 'R227602788', '女', '基隆市中山區', 145, 53, '射手座', 'B', '有', '小酌', '碩士', '醫師', '堅持瑜伽的練習者，我相信身心靈的平衡，並且持續努力追求內在和諧。', '0988186682', '2023-07-12 18:10:37'),
(44, 'mail239991@test.com', 'E834737102c', 'face44.png', '樓家瑋', '1989-06-23', 'Q257867101', '女', '新北市平溪區', 151, 54, '天秤座', 'O', '無', '滴酒不沾', '學士', '數位IC設計工程師', '美容護膚專家，我熱愛研究各種護膚產品和方法，保持最佳的皮膚狀態。', '0911126889', '2023-07-12 18:10:37'),
(45, 'mail450277@test.com', 'J417835313r', 'face45.png', '譚柏翔', '1991-09-19', 'Z152847681', '男', '新北市汐止區', 156, 80, '天秤座', 'B', '無', '小酌', '高中', '護理長', '電子遊戲是我的娛樂方式之一，我熱愛不同類型的遊戲，每一場冒險都讓我緊張刺激。', '0918359765', '2023-07-12 18:10:37'),
(46, 'mail650121@test.com', 'P146407824e', 'face46.png', '易品妤', '1999-08-26', 'U258544875', '女', '臺北市大安區', 155, 50, '金牛座', 'AB', '有', '小酌', '國小', '數位IC設計工程師', '我對時尚有著獨特的眼光，我喜歡用服裝表達自己的個性，經常混搭不同風格。', '0923198433', '2023-07-12 18:10:37'),
(47, 'mail320981@test.com', 'B169636652d', 'face47.png', '左俊諺', '1995-06-01', 'O114245172', '男', '新北市土城區', 176, 64, '金牛座', 'B', '無', '小酌', '碩士', '藝術總監', '我認為健康是最大的財富，每天的運動都讓我保持活力和好心情。', '0979401940', '2023-07-12 18:10:37'),
(48, 'mail189741@test.com', 'S906743698f', 'face48.png', '常心妤', '1992-01-28', 'Z226227836', '女', '新北市中和區', 154, 50, '巨蟹座', 'AB', '無', '酒豪', '國小', '麻醉醫師', '創意是我生活的一部分，無論是畫畫還是寫作，我總是充滿著豐富的想像力。', '0915936167', '2023-07-12 18:10:37'),
(49, 'mail168850@test.com', 'K617446854i', 'face49.png', '傅怡蓁', '1985-09-07', 'X287839783', '女', '新北市石碇區', 141, 58, '雙子座', 'B', '無', '小酌', '學士', '船上作業人員', '我是一個動物愛好者，經常參與志願者活動，用心關懷每一個毛茸茸的生命。', '0977999585', '2023-07-12 18:10:37'),
(50, 'mail902229@test.com', 'V668940152g', 'face50.png', '任心妤', '1989-10-02', 'T272869506', '女', '新北市坪林區', 150, 40, '雙子座', 'A', '無', '小酌', '國小', '空服人員', '瑜伽幫助我保持身體和心靈的平衡，每天的練習都讓我感到充滿活力。', '0961772184', '2023-07-12 18:10:37');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`member_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `member_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1010;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
