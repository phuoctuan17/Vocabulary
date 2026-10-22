/* =======================================================
   ENGLISH LEARNING WEB APP — MAIN SCRIPT
   =======================================================
   Modules:
     1. Data Layer (vocabulary + grammar)
     2. Navigation Controller
     3. Vocabulary Quiz Module
     4. Grammar Accordion Module
     5. Falling Words Game Module
     6. Toast Notification System
     7. Init
   ======================================================= */

// ─────────────────────────────────────────────
// 1. DATA LAYER
// ─────────────────────────────────────────────

const vocabData = [
  { en: "door",          vi: "cửa" },
  { en: "deep",          vi: "sâu" },
  { en: "dance",         vi: "nhảy, khiêu vũ" },
  { en: "drink",         vi: "uống" },
  { en: "middle",        vi: "ở giữa" },
  { en: "ladder",        vi: "cái thang" },
  { en: "double",        vi: "gấp đôi" },
  { en: "difficult",     vi: "khó khăn" },
  { en: "different",     vi: "khác biệt" },
  { en: "lady",          vi: "quý bà" },
  { en: "address",       vi: "địa chỉ" },
  { en: "decide",        vi: "quyết định" },
  { en: "dog",           vi: "con chó" },
  { en: "tear",          vi: "nước mắt" },
  { en: "dear",          vi: "thân yêu" },
  { en: "tie",           vi: "cà vạt" },
  { en: "die",           vi: "chết" },
  { en: "town",          vi: "thị trấn" },
  { en: "down",          vi: "xuống" },
  { en: "putting",       vi: "đang đặt" },
  { en: "pudding",       vi: "bánh tráng miệng" },
  { en: "sat",           vi: "đã ngồi" },
  { en: "sad",           vi: "buồn bã" },
  { en: "bat",           vi: "con dơi" },
  { en: "bad",           vi: "xấu, tồi" },
  { en: "neat",          vi: "gọn gàng" },
  { en: "need",          vi: "cần thiết" },
  { en: "part",          vi: "bộ phận, phần" },
  { en: "pie",           vi: "bánh nướng ngọt" },
  { en: "pen",           vi: "cây bút" },
  { en: "copy",          vi: "sao chép" },
  { en: "happy",         vi: "hạnh phúc" },
  { en: "pull",          vi: "lôi kéo, giật" },
  { en: "pet",           vi: "thú cưng" },
  { en: "peach",         vi: "quả đào" },
  { en: "pier",          vi: "bến tàu" },
  { en: "pig",           vi: "con lợn" },
  { en: "pin",           vi: "đinh ghim" },
  { en: "pole",          vi: "cực (Bắc, Nam)" },
  { en: "pencil",        vi: "bút chì" },
  { en: "pocket",        vi: "túi, ví tiền" },
  { en: "postcard",      vi: "bưu thiếp" },
  { en: "passenger",     vi: "hành khách" },
  { en: "passport",      vi: "hộ chiếu" },
  { en: "spoon",         vi: "cái thìa" },
  { en: "airport",       vi: "sân bay" },
  { en: "policeman",     vi: "cảnh sát" },
  { en: "two",           vi: "số hai (2)" },
  { en: "tall",          vi: "cao lớn" },
  { en: "water",         vi: "nước" },
  { en: "better",        vi: "tốt hơn" },
  { en: "bottle",        vi: "chai, lọ" },
  { en: "west",          vi: "phía tây" },
  { en: "complete",      vi: "hoàn thành" },
  { en: "tool",          vi: "công cụ" },
  { en: "top",           vi: "đỉnh, chóp" },
  { en: "potato",        vi: "khoai tây" },
  { en: "eat",           vi: "ăn" },
  { en: "right",         vi: "đúng, bên phải" },
  { en: "tennis",        vi: "quần vợt" },
  { en: "twenty",        vi: "số hai mươi (20)" },
  { en: "tomato",        vi: "cà chua" },
  { en: "hotel",         vi: "khách sạn" },
  { en: "photo",         vi: "bức ảnh" },
  { en: "boy",           vi: "cậu bé, con trai" },
  { en: "bread",         vi: "bánh mì" },
  { en: "bag",           vi: "cái cặp, túi xách" },
  { en: "boots",         vi: "đôi ủng" },
  { en: "baby",          vi: "đứa bé" },
  { en: "club",          vi: "câu lạc bộ" },
  { en: "job",           vi: "nghề nghiệp" },
  { en: "remember",      vi: "ghi nhớ" },
  { en: "bank",          vi: "ngân hàng" },
  { en: "bring",         vi: "mang theo" },
  { en: "verb",          vi: "động từ" },
  { en: "library",       vi: "thư viện" },
  { en: "neighbour",     vi: "hàng xóm" },
  { en: "rob",           vi: "cướp" },
  { en: "tub",           vi: "cái chậu" },
  { en: "buy",           vi: "mua" },
  { en: "pair",          vi: "cặp, đôi" },
  { en: "bear",          vi: "con gấu" },
  { en: "pill",          vi: "viên thuốc" },
  { en: "bill",          vi: "hóa đơn" },
  { en: "bull",          vi: "con bò đực" },
  { en: "peer",          vi: "bạn đồng lứa" },
  { en: "beer",          vi: "bia" },
  { en: "cap",           vi: "mũ lưỡi trai" },
  { en: "cab",           vi: "xe taxi" },
  { en: "sun",           vi: "mặt trời" },
  { en: "come",          vi: "đến" },
  { en: "touch",         vi: "chạm vào" },
  { en: "blood",         vi: "máu" },
  { en: "number",        vi: "con số" },
  { en: "cousin",        vi: "anh/chị/em họ" },
  { en: "cover",         vi: "bao phủ" },
  { en: "country",       vi: "đất nước" },
  { en: "cup",           vi: "cốc, chén" },
  { en: "run",           vi: "chạy" },
  { en: "accept",        vi: "chấp nhận" },
  { en: "woman",         vi: "phụ nữ" },
  { en: "mother",        vi: "mẹ" },
  { en: "answer",        vi: "trả lời" },
  { en: "handsome",      vi: "đẹp trai" },
  { en: "suggest",       vi: "gợi ý" },
  { en: "forget",        vi: "quên" },
  { en: "term",          vi: "học kỳ" },
  { en: "learn",         vi: "học tập" },
  { en: "firm",          vi: "công ty" },
  { en: "bird",          vi: "con chim" },
  { en: "word",          vi: "từ vựng" },
  { en: "thirty",        vi: "ba mươi (30)" },
  { en: "dirty",         vi: "bẩn thỉu" },
  { en: "journey",       vi: "hành trình" },
  { en: "turn",          vi: "quay đầu, rẽ" },
  { en: "heard",         vi: "đã nghe thấy" },
  { en: "church",        vi: "nhà thờ" },
  { en: "search",        vi: "tìm kiếm" },
  { en: "work",          vi: "làm việc" },
  { en: "first",         vi: "đầu tiên" },
  { en: "dessert",       vi: "món tráng miệng" },
  { en: "burglar",       vi: "kẻ trộm" },
  { en: "today",         vi: "hôm nay" },
  { en: "nice",          vi: "tốt, đẹp" },
  { en: "hair",          vi: "mái tóc" },
  { en: "ear",           vi: "tai" },
  { en: "tour",          vi: "chuyến du lịch" },
  { en: "cow",           vi: "con bò" },
  { en: "jump",          vi: "nhảy" },
  { en: "heat",          vi: "sức nóng, nhiệt" },
  { en: "seat",          vi: "chỗ ngồi" },
  { en: "took",          vi: "đã cầm, lấy" },
  { en: "teach",         vi: "dạy học" },
  { en: "team",          vi: "đội, nhóm" },
  { en: "time",          vi: "thời gian" },
  { en: "ten",           vi: "số mười (10)" },
  { en: "beat",          vi: "đánh, nhịp đập" },
  { en: "stop",          vi: "dừng lại" },
  { en: "did",           vi: "đã làm" },
  { en: "due",           vi: "đến hạn, do" },
  { en: "cut",           vi: "cắt" },
  { en: "hug",           vi: "ôm" },
  { en: "nut",           vi: "loại hạt" },
  { en: "bus",           vi: "xe buýt" },
  { en: "but",           vi: "nhưng" },
  { en: "ago",           vi: "trước đây" },
  { en: "about",         vi: "về, khoảng" },
  { en: "around",        vi: "xung quanh" },
  { en: "hurt",          vi: "làm đau, tổn thương" },
  { en: "nurse",         vi: "y tá" },
  { en: "burn",          vi: "đốt cháy, bỏng" },
  { en: "girl",          vi: "cô gái" },
  { en: "world",         vi: "thế giới" },
  { en: "book",          vi: "quyển sách" },
  { en: "people",        vi: "con người, mọi người" },
  { en: "shop",          vi: "cửa hàng" },
  { en: "shy",           vi: "nhút nhát, e thẹn" },
  { en: "she",           vi: "cô ấy" },
  { en: "show",          vi: "buổi biểu diễn, chỉ ra" },
  { en: "machine",       vi: "máy móc" },
  { en: "wash",          vi: "rửa, giặt" },
  { en: "lash",          vi: "lông mi" },
  { en: "brush",         vi: "chải (răng/tóc)" },
  { en: "English",       vi: "tiếng Anh" },
  { en: "mushroom",      vi: "nấm" },
  { en: "Russia",        vi: "nước Nga" },
  { en: "mission",       vi: "nhiệm vụ" },
  { en: "action",        vi: "hành động" },
  { en: "emotion",       vi: "cảm xúc" },
  { en: "musician",      vi: "nhạc sĩ" },
  { en: "sugar",         vi: "đường ăn" },
  { en: "shoe",          vi: "giày, dép" },
  { en: "friendship",    vi: "tình bạn" },
  { en: "discussion",    vi: "sự thảo luận" },
  { en: "nation",        vi: "quốc gia" },
  { en: "patient",       vi: "bệnh nhân" },
  { en: "specialist",    vi: "chuyên gia" },
  { en: "sure",          vi: "chắc chắn" },
  { en: "chef",          vi: "bếp trưởng" },
  { en: "measure",       vi: "đo lường" },
  { en: "leisure",       vi: "thời gian rảnh rỗi" },
  { en: "vision",        vi: "thị lực, tầm nhìn" },
  { en: "usually",       vi: "thường xuyên" },
  { en: "garage",        vi: "ga-ra" },
  { en: "massage",       vi: "sự xoa bóp" },
  { en: "beige",         vi: "màu be" },
  { en: "Asia",          vi: "châu Á" },
  { en: "decision",      vi: "quyết định" },
  { en: "occasion",      vi: "dịp" },
  { en: "equation",      vi: "phương trình" },
  { en: "Asian",         vi: "thuộc châu Á" },
  { en: "version",       vi: "phiên bản" },
  { en: "explosion",     vi: "sự bùng nổ" },
  { en: "revision",      vi: "sự ôn tập" },
  { en: "television",    vi: "ti-vi" },
  { en: "man",           vi: "người đàn ông" },
  { en: "much",          vi: "nhiều" },
  { en: "moon",          vi: "mặt trăng" },
  { en: "name",          vi: "tên" },
  { en: "room",          vi: "căn phòng" },
  { en: "map",           vi: "bản đồ" },
  { en: "mark",          vi: "đánh dấu" },
  { en: "mirror",        vi: "cái gương" },
  { en: "Monday",        vi: "thứ Hai" },
  { en: "film",          vi: "bộ phim" },
  { en: "mail",          vi: "gửi thư" },
  { en: "more",          vi: "nhiều hơn" },
  { en: "smile",         vi: "nụ cười, cười" },
  { en: "roommate",      vi: "bạn cùng phòng" },
  { en: "make",          vi: "làm, tạo ra" },
  { en: "must",          vi: "phải" },
  { en: "storm",         vi: "cơn bão" },
  { en: "harm",          vi: "sự tổn hại" },
  { en: "think",         vi: "suy nghĩ" },
  { en: "thank",         vi: "cảm ơn" },
  { en: "thought",       vi: "suy nghĩ, tư tưởng" },
  { en: "both",          vi: "cả hai" },
  { en: "month",         vi: "tháng" },
  { en: "breath",        vi: "hơi thở" },
  { en: "thin",          vi: "gầy, mỏng" },
  { en: "thief",         vi: "tên trộm" },
  { en: "throat",        vi: "cổ họng" },
  { en: "author",        vi: "tác giả" },
  { en: "thick",         vi: "dày" },
  { en: "everything",    vi: "mọi thứ" },
  { en: "teeth",         vi: "những chiếc răng" },
  { en: "mouth",         vi: "miệng" },
  { en: "north",         vi: "phía Bắc" },
  { en: "healthy",       vi: "khỏe mạnh" },
  { en: "Earth",         vi: "Trái đất" },
  { en: "birthday",      vi: "sinh nhật" },
  { en: "athlete",       vi: "vận động viên" },
  { en: "car",           vi: "ô tô" },
  { en: "kiss",          vi: "hôn" },
  { en: "cook",          vi: "nấu ăn" },
  { en: "look",          vi: "nhìn" },
  { en: "like",          vi: "thích" },
  { en: "king",          vi: "ông vua" },
  { en: "colour",        vi: "màu sắc" },
  { en: "key",           vi: "chìa khóa" },
  { en: "cream",         vi: "kem" },
  { en: "crab",          vi: "con cua" },
  { en: "Christmas",     vi: "Giáng sinh" },
  { en: "pancake",       vi: "bánh kếp" },
  { en: "architect",     vi: "kiến trúc sư" },
  { en: "go",            vi: "đi" },
  { en: "get",           vi: "lấy, nhận" },
  { en: "good",          vi: "tốt" },
  { en: "leg",           vi: "cái chân" },
  { en: "give",          vi: "đưa, cho" },
  { en: "gate",          vi: "cái cổng" },
  { en: "grow",          vi: "trồng, lớn lên" },
  { en: "dragon",        vi: "con rồng" },
  { en: "beggar",        vi: "người ăn xin" },
  { en: "fog",           vi: "sương mù" },
  { en: "jog",           vi: "chạy bộ" },
  { en: "coat",          vi: "áo choàng" },
  { en: "goat",          vi: "con dê" },
  { en: "class",         vi: "lớp học" },
  { en: "glass",         vi: "cái ly, thủy tinh" },
  { en: "ankle",         vi: "mắt cá chân" },
  { en: "angle",         vi: "góc" },
  { en: "picky",         vi: "kén chọn" },
  { en: "piggy",         vi: "con lợn con" },
  { en: "pick",          vi: "chọn" },
  { en: "back",          vi: "cái lưng" },
  { en: "fan",           vi: "cái quạt, người hâm mộ" },
  { en: "feel",          vi: "cảm thấy" },
  { en: "food",          vi: "thức ăn" },
  { en: "wife",          vi: "người vợ" },
  { en: "life",          vi: "cuộc sống" },
  { en: "knife",         vi: "con dao" },
  { en: "face",          vi: "khuôn mặt" },
  { en: "fat",           vi: "béo, mập" },
  { en: "finger",        vi: "ngón tay" },
  { en: "coffee",        vi: "cà phê" },
  { en: "staff",         vi: "nhân viên" },
  { en: "orphan",        vi: "trẻ mồ côi" },
  { en: "cough",         vi: "ho" },
  { en: "foot",          vi: "bàn chân" },
  { en: "leaf",          vi: "chiếc lá" },
  { en: "left",          vi: "bên trái" },
  { en: "office",        vi: "văn phòng" },
  { en: "cliff",         vi: "vách đá" },
  { en: "phone",         vi: "điện thoại" },
  { en: "van",           vi: "xe tải nhỏ" },
  { en: "vice",          vi: "thói hư tật xấu, phó" },
  { en: "voice",         vi: "giọng nói" },
  { en: "five",          vi: "số năm (5)" },
  { en: "leave",         vi: "rời đi" },
  { en: "move",          vi: "di chuyển" },
  { en: "vase",          vi: "lọ hoa" },
  { en: "vest",          vi: "áo lót (áo ba lỗ)" },
  { en: "violin",        vi: "đàn vi-ô-lông" },
  { en: "lover",         vi: "người yêu" },
  { en: "seven",         vi: "số 7" },
  { en: "advice",        vi: "lời khuyên" },
  { en: "vet",           vi: "bác sỹ thú y" },
  { en: "visa",          vi: "thị thực" },
  { en: "driver",        vi: "người lái xe" },
  { en: "harvest",       vi: "thu hoạch" },
  { en: "November",      vi: "tháng 11" },
  { en: "live",          vi: "sống" },
  { en: "this",          vi: "cái này" },
  { en: "that",          vi: "cái kia" },
  { en: "these",         vi: "những cái này" },
  { en: "those",         vi: "những cái kia" },
  { en: "with",          vi: "với, cùng với" },
  { en: "breathe",       vi: "thở, hít thở" },
  { en: "they",          vi: "họ, chúng nó" },
  { en: "father",        vi: "bố" },
  { en: "feather",       vi: "lông chim" },
  { en: "bathe",         vi: "tắm gội" },
  { en: "smooth",        vi: "mượt mà, êm ái" },
  { en: "them",          vi: "họ, chúng" },
  { en: "then",          vi: "lúc đó, sau đó" },
  { en: "brother",       vi: "anh, em trai" },
  { en: "leather",       vi: "chất liệu da" },
  { en: "gather",        vi: "tụ tập, thu thập" },
  { en: "soothe",        vi: "dỗ dành, xoa dịu" },
  { en: "sleep",         vi: "ngủ" },
  { en: "sister",        vi: "chị/em gái" },
  { en: "yesterday",     vi: "ngày hôm qua" },
  { en: "city",          vi: "thành phố" },
  { en: "grass",         vi: "bãi cỏ, cỏ" },
  { en: "sound",         vi: "âm thanh" },
  { en: "spring",        vi: "mùa xuân" },
  { en: "desk",          vi: "cái bàn" },
  { en: "display",       vi: "trưng bày" },
  { en: "translate",     vi: "dịch thuật" },
  { en: "see",           vi: "nhìn thấy" },
  { en: "send",          vi: "gửi đi" },
  { en: "sight",         vi: "cảnh tượng, thị lực" },
  { en: "saw",           vi: "đã thấy, cái cưa" },
  { en: "house",         vi: "ngôi nhà" },
  { en: "mouse",         vi: "con chuột" },
  { en: "zero",          vi: "số không (0)" },
  { en: "size",          vi: "kích cỡ" },
  { en: "zone",          vi: "vùng, khu vực" },
  { en: "prize",         vi: "giải thưởng" },
  { en: "noise",         vi: "tiếng ồn" },
  { en: "rise",          vi: "tăng lên, mọc" },
  { en: "lazy",          vi: "lười biếng" },
  { en: "surprise",      vi: "sự ngạc nhiên" },
  { en: "ozone",         vi: "khí ôzôn" },
  { en: "exam",          vi: "kì thi" },
  { en: "Tuesday",       vi: "thứ Ba" },
  { en: "Thursday",      vi: "thứ Năm" },
  { en: "zoo",           vi: "sở thú" },
  { en: "zip",           vi: "khóa kéo" },
  { en: "noisy",         vi: "ồn ào" },
  { en: "closet",        vi: "tủ quần áo" },
  { en: "close",         vi: "đóng lại, gần gũi" },
  { en: "nose",          vi: "cái mũi" },
  { en: "abandon",       vi: "từ bỏ" },
  { en: "achieve",       vi: "đạt được" },
  { en: "benefit",       vi: "lợi ích" },
  { en: "challenge",     vi: "thử thách" },
  { en: "contribute",    vi: "đóng góp" },
  { en: "determine",     vi: "quyết định" },
  { en: "environment",   vi: "môi trường" },
  { en: "essential",     vi: "thiết yếu" },
  { en: "frequently",    vi: "thường xuyên" },
  { en: "generate",      vi: "tạo ra" },
  { en: "hesitate",      vi: "do dự" },
  { en: "improve",       vi: "cải thiện" },
  { en: "knowledge",     vi: "kiến thức" },
  { en: "maintain",      vi: "duy trì" },
  { en: "opportunity",   vi: "cơ hội" },
  { en: "participate",   vi: "tham gia" },
  { en: "recognize",     vi: "nhận ra" },
  { en: "struggle",      vi: "đấu tranh" },
  { en: "transform",     vi: "biến đổi" },
  { en: "valuable",      vi: "quý giá" },
  { en: "cool",          vi: "mát mẻ, ngầu" },
  { en: "pool",          vi: "bể bơi" },
  { en: "flute",         vi: "ống sáo" },
  { en: "chew",          vi: "nhai" },
  { en: "music",         vi: "âm nhạc" },
  { en: "school",        vi: "trường học" },
  { en: "soon",          vi: "sớm" },
  { en: "Google",        vi: "Google" },
  { en: "YouTube",       vi: "YouTube" },
  { en: "boss",          vi: "ông chủ" },
  { en: "not",           vi: "không" },
  { en: "clock",         vi: "đồng hồ" },
  { en: "cross",         vi: "dấu gạch chéo" },
  { en: "chocolate",     vi: "sôcôla" },
  { en: "possible",      vi: "có thể" },
  { en: "lost",          vi: "bị lạc, mất" },
  { en: "long",          vi: "dài" },
  { en: "body",          vi: "cơ thể" },
  { en: "bar",           vi: "quán bar, thanh chắn" },
  { en: "far",           vi: "xa xôi" },
  { en: "hard",          vi: "chăm chỉ, khó khăn" },
  { en: "star",          vi: "ngôi sao" },
  { en: "start",         vi: "bắt đầu" },
  { en: "dark",          vi: "tối tăm" },
  { en: "cart",          vi: "xe thồ, xe đẩy" },
  { en: "park",          vi: "công viên" },
  { en: "card",          vi: "thẻ, thiệp" },
  { en: "farm",          vi: "trang trại" },
  { en: "Mars",          vi: "sao Hỏa" },
  { en: "sit",           vi: "ngồi" },
  { en: "bit",           vi: "một chút, miếng nhỏ" },
  { en: "hit",           vi: "đánh, cú đánh" },
  { en: "ring",          vi: "chiếc nhẫn" },
  { en: "wish",          vi: "ước mơ, mong ước" },
  { en: "chicken",       vi: "con gà" },
  { en: "little",        vi: "nhỏ bé, ít" },
  { en: "killer",        vi: "kẻ sát nhân" },
  { en: "sheep",         vi: "con cừu" },
  { en: "bean",          vi: "hạt đậu, đỗ" },
  { en: "agree",         vi: "đồng ý" },
  { en: "believe",       vi: "tin tưởng" },
  { en: "cheap",         vi: "rẻ tiền" },
  { en: "week",          vi: "tuần lễ" },
  { en: "piece",         vi: "miếng, mẩu" },
  { en: "pizza",         vi: "bánh pizza" },
  { en: "wool",          vi: "sợi len" },
  { en: "full",          vi: "đầy đủ, no" },
  { en: "would",         vi: "sẽ" },
  { en: "should",        vi: "nên" },
  { en: "put",           vi: "đặt, để" },
  { en: "childhood",     vi: "thời thơ ấu" },
  { en: "football",      vi: "môn bóng đá" },
  { en: "chop",          vi: "chặt, băm" },
  { en: "chin",          vi: "cái cằm" },
  { en: "check",         vi: "kiểm tra" },
  { en: "choice",        vi: "sự lựa chọn" },
  { en: "child",         vi: "đứa trẻ" },
  { en: "lunch",         vi: "bữa trưa" },
  { en: "watch",         vi: "xem, đồng hồ đeo tay" },
  { en: "sandwich",      vi: "bánh mì kẹp" },
  { en: "cheese",        vi: "phô mai" },
  { en: "teacher",       vi: "giáo viên" },
  { en: "March",         vi: "tháng Ba" },
  { en: "culture",       vi: "văn hóa" },
  { en: "future",        vi: "tương lai" },
  { en: "picture",       vi: "bức tranh" },
  { en: "kitchen",       vi: "nhà bếp" },
  { en: "chips",         vi: "khoai tây chiên" },
  { en: "research",      vi: "nghiên cứu" },
  { en: "question",      vi: "câu hỏi" },
  { en: "furniture",     vi: "nội thất" },
  { en: "butcher",       vi: "người bán thịt" },
  { en: "catch",         vi: "bắt được" },
  { en: "ginger",        vi: "củ gừng" },
  { en: "jeans",         vi: "quần bò, quần jean" },
  { en: "large",         vi: "rộng lớn" },
  { en: "huge",          vi: "khổng lồ, to lớn" },
  { en: "package",       vi: "gói hàng, kiện hàng" },
  { en: "college",       vi: "trường đại học, cao đẳng" },
  { en: "age",           vi: "tuổi tác" },
  { en: "join",          vi: "tham gia" },
  { en: "enjoy",         vi: "yêu thích, tận hưởng" },
  { en: "gym",           vi: "phòng tập thể hình" },
  { en: "giant",         vi: "người khổng lồ" },
  { en: "education",     vi: "giáo dục" },
  { en: "fridge",        vi: "tủ lạnh" },
  { en: "jam",           vi: "mứt hoa quả" },
  { en: "jet",           vi: "máy bay phản lực" },
  { en: "juice",         vi: "nước ép trái cây" },
  { en: "July",          vi: "tháng 7" },
  { en: "injure",        vi: "làm bị thương" },
  { en: "project",       vi: "dự án" },
  { en: "rejoice",       vi: "vui mừng, hoan hỉ" },
  { en: "sing",          vi: "hát" },
  { en: "song",          vi: "bài hát" },
  { en: "thing",         vi: "vật, đồ vật" },
  { en: "monkey",        vi: "con khỉ" },
  { en: "uncle",         vi: "chú, bác, cậu" },
  { en: "single",        vi: "độc thân, đơn lẻ" },
  { en: "morning",       vi: "buổi sáng" },
  { en: "red",           vi: "màu đỏ" },
  { en: "road",          vi: "con đường" },
  { en: "rat",           vi: "con chuột cống" },
  { en: "rain",          vi: "cơn mưa" },
  { en: "read",          vi: "đọc sách" },
  { en: "parents",       vi: "bố mẹ, phụ huynh" },
  { en: "American",      vi: "thuộc về nước Mỹ" },
  { en: "borrow",        vi: "vay, mượn" },
  { en: "ferry",         vi: "phà, bến phà" },
  { en: "sorry",         vi: "xin lỗi, đáng tiếc" },
  { en: "write",         vi: "viết" },
  { en: "wrong",         vi: "sai trái" },
  { en: "win",           vi: "chiến thắng" },
  { en: "wet",           vi: "ẩm ướt" },
  { en: "why",           vi: "tại sao" },
  { en: "sweet",         vi: "ngọt ngào" },
  { en: "white",         vi: "màu trắng" },
  { en: "wind",          vi: "ngọn gió" },
  { en: "welcome",       vi: "chào đón, hoan nghênh" },
  { en: "no",            vi: "không" },
  { en: "now",           vi: "bây giờ, hiện nay" },
  { en: "new",           vi: "mới mẻ" },
  { en: "nine",          vi: "số chín (9)" },
  { en: "fine",          vi: "khỏe, tốt" },
  { en: "line",          vi: "đường thẳng, hàng" },
  { en: "nature",        vi: "thiên nhiên" },
  { en: "know",          vi: "biết, hiểu biết" },
  { en: "sunny",         vi: "có nắng" },
  { en: "night",         vi: "ban đêm" },
  { en: "knee",          vi: "đầu gối" },
  { en: "knock",         vi: "gõ cửa" },
  { en: "nervous",       vi: "lo lắng, hồi hộp" },
  { en: "funny",         vi: "hài hước, buồn cười" },
  { en: "want",          vi: "muốn, mong muốn" },
  { en: "lot",           vi: "nhiều" },
  { en: "heel",          vi: "gót chân" },
  { en: "fall",          vi: "rơi, ngã, mùa thu" },
  { en: "lucky",         vi: "may mắn" },
  { en: "flower",        vi: "bông hoa" },
  { en: "play",          vi: "chơi đùa" },
  { en: "bowl",          vi: "cái bát, tô" },
  { en: "turtle",        vi: "con rùa" },
  { en: "hill",          vi: "ngọn đồi" },
  { en: "lamp",          vi: "chiếc đèn" },
  { en: "alarm",         vi: "báo động, chuông reo" },
  { en: "sail",          vi: "chèo thuyền buồm" },
  { en: "wallet",        vi: "ví tiền nam" },
  { en: "silly",         vi: "ngốc nghếch" },
  { en: "hat",           vi: "cái mũ" },
  { en: "hot",           vi: "nóng bức" },
  { en: "hand",          vi: "bàn tay" },
  { en: "homework",      vi: "bài tập về nhà" },
  { en: "behave",        vi: "cư xử, ứng xử" },
  { en: "forehead",      vi: "cái trán" },
  { en: "behind",        vi: "ở phía sau" },
  { en: "hammer",        vi: "cây búa" },
  { en: "habit",         vi: "thói quen" },
  { en: "perhaps",       vi: "có lẽ, có thể" },
  { en: "yes",           vi: "vâng, đồng ý" },
  { en: "young",         vi: "trẻ tuổi" },
  { en: "yard",          vi: "sân vườn" },
  { en: "your",          vi: "của bạn" },
  { en: "beyond",        vi: "vượt ra ngoài, quá" },
  { en: "yourself",      vi: "bản thân bạn" },
  { en: "yogurt",        vi: "sữa chua" },
  { en: "yawn",          vi: "ngáp ngủ" },
  { en: "yacht",         vi: "du thuyền" },
  { en: "yummy",         vi: "ngon miệng" },
  { en: "youth",         vi: "tuổi trẻ, thanh niên" },
  { en: "youthful",      vi: "trẻ trung, tươi trẻ" },
];

const grammarData = [
  {
    id: 1,
    name: "Present Simple (Hiện tại đơn)",
    icon: "🔵",
    formula: "S + V(s/es) + O",
    explanation: "Dùng để diễn tả thói quen, sự thật hiển nhiên, hoặc hành động lặp đi lặp lại. Động từ thêm 's/es' khi chủ ngữ là ngôi thứ 3 số ít (he, she, it).",
    examples: [
      { en: "She goes to school every day.", vi: "Cô ấy đi học mỗi ngày." },
      { en: "Water boils at 100 degrees Celsius.", vi: "Nước sôi ở 100 độ C." },
      { en: "I don't like coffee.", vi: "Tôi không thích cà phê." }
    ]
  },
  {
    id: 2,
    name: "Present Continuous (Hiện tại tiếp diễn)",
    icon: "🟢",
    formula: "S + am/is/are + V-ing + O",
    explanation: "Dùng để diễn tả hành động đang xảy ra tại thời điểm nói, hoặc kế hoạch đã được sắp xếp trong tương lai gần.",
    examples: [
      { en: "I am studying English right now.", vi: "Tôi đang học tiếng Anh ngay bây giờ." },
      { en: "They are playing football in the park.", vi: "Họ đang chơi bóng đá ở công viên." },
      { en: "She is meeting her friend tomorrow.", vi: "Cô ấy sẽ gặp bạn vào ngày mai." }
    ]
  },
  {
    id: 3,
    name: "Past Simple (Quá khứ đơn)",
    icon: "🟠",
    formula: "S + V-ed / V2 + O",
    explanation: "Dùng để diễn tả hành động đã xảy ra và kết thúc trong quá khứ, thường đi kèm các trạng từ: yesterday, last week, ago, in 2020,...",
    examples: [
      { en: "I visited my grandparents last weekend.", vi: "Tôi đã thăm ông bà vào cuối tuần trước." },
      { en: "She didn't go to the party yesterday.", vi: "Cô ấy đã không đi dự tiệc hôm qua." },
      { en: "Did you finish your homework?", vi: "Bạn đã làm xong bài tập chưa?" }
    ]
  },
  {
    id: 4,
    name: "Future Simple with 'will' (Tương lai đơn)",
    icon: "🟣",
    formula: "S + will + V(bare) + O",
    explanation: "Dùng để diễn tả quyết định tự phát tại thời điểm nói, dự đoán về tương lai, hoặc lời hứa, đề nghị.",
    examples: [
      { en: "I will help you with your project.", vi: "Tôi sẽ giúp bạn với dự án." },
      { en: "It will rain tomorrow, I think.", vi: "Tôi nghĩ trời sẽ mưa ngày mai." },
      { en: "They won't come to the meeting.", vi: "Họ sẽ không đến cuộc họp." }
    ]
  },
  {
    id: 5,
    name: "Conditional Type 1 (Câu điều kiện loại 1)",
    icon: "🔴",
    formula: "If + S + V(present), S + will + V(bare)",
    explanation: "Dùng để diễn tả điều kiện có thể xảy ra ở hiện tại hoặc tương lai và kết quả có khả năng thực hiện được.",
    examples: [
      { en: "If you study hard, you will pass the exam.", vi: "Nếu bạn học chăm, bạn sẽ đậu kỳ thi." },
      { en: "If it rains, we will stay at home.", vi: "Nếu trời mưa, chúng ta sẽ ở nhà." },
      { en: "I will call you if I have time.", vi: "Tôi sẽ gọi cho bạn nếu tôi có thời gian." }
    ]
  }
];


// ─────────────────────────────────────────────
// 2. NAVIGATION CONTROLLER
// ─────────────────────────────────────────────

const Navigation = (() => {
  let currentSection = 'home';

  function init() {
    // Event delegation on document so all [data-nav] (including Back buttons & dynamically rendered buttons) work reliably
    document.addEventListener('click', (e) => {
      const navTarget = e.target.closest('[data-nav]');
      if (!navTarget) return;

      e.preventDefault();
      const target = navTarget.getAttribute('data-nav');
      if (target) {
        switchTo(target);
        // Collapse Bootstrap mobile nav if open
        const navCollapse = document.getElementById('mainNav');
        if (navCollapse && navCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        }
      }
    });

    // Feature cards on home
    document.querySelectorAll('[data-feature]').forEach(card => {
      card.addEventListener('click', () => {
        const target = card.getAttribute('data-feature');
        if (target) switchTo(target);
      });
    });
  }

  function switchTo(sectionId) {
    if (currentSection === sectionId) return;

    // Stop game if leaving game section
    if (currentSection === 'game') {
      FallingWordsGame.stop();
      document.body.classList.remove('game-active');
    }

    currentSection = sectionId;

    // Update nav links
    document.querySelectorAll('[data-nav]').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-nav') === sectionId);
    });

    // Update sections
    document.querySelectorAll('.app-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const target = document.getElementById(`section-${sectionId}`);
    if (target) {
      target.classList.remove('active');
      // Force reflow for animation
      void target.offsetWidth;
      target.classList.add('active');
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return { init, switchTo };
})();


// ─────────────────────────────────────────────
// 3. VOCABULARY QUIZ MODULE
// ─────────────────────────────────────────────

// Thuật toán xáo trộn Fisher-Yates (Knuth) Shuffle: Đảo ngẫu nhiên 100%, không lặp lại
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const VocabQuiz = (() => {
  let questions = [];
  let currentIndex = 0;
  let score = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let isAnswered = false;

  // DOM refs
  let quizContent, quizResult;

  function init() {
    quizContent = document.getElementById('quiz-content');
    quizResult  = document.getElementById('quiz-result');

    const startBtn = document.getElementById('btn-start-quiz');
    if (startBtn) startBtn.addEventListener('click', startQuiz);
  }

  function generateQuestions() {
    // Đảo lộn xộn 100% TOÀN BỘ từ vựng trong kho — mỗi lần làm là một thứ tự hoàn toàn mới!
    const shuffledWords = shuffleArray(vocabData);
    questions = [];

    // Duyệt qua tất cả các từ trong kho (không giới hạn 10 từ)
    // Mỗi từ xuất hiện đúng 1 lần, tuyệt đối không lặp lại từ đã xuất hiện!
    for (let i = 0; i < shuffledWords.length; i++) {
      const correct = shuffledWords[i];
      // Luân phiên ngẫu nhiên chiều câu hỏi: Anh ➔ Việt hoặc Việt ➔ Anh
      const isEnToVi = Math.random() > 0.5;

      // 3 đáp án sai lấy ngẫu nhiên từ các từ khác trong kho
      const otherWords = vocabData.filter(w => w.en !== correct.en);
      const wrongOptions = shuffleArray(otherWords).slice(0, 3);

      // Đảo lộn xộn 4 vị trí đáp án A, B, C, D
      const options = shuffleArray([...wrongOptions, correct]);

      questions.push({
        word: correct,
        isEnToVi,
        options,
        correctAnswer: correct
      });
    }
  }

  function startQuiz() {
    currentIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    generateQuestions();
    quizResult.style.display = 'none';
    quizContent.style.display = 'block';
    renderQuestion();
  }

  function renderQuestion() {
    if (currentIndex >= questions.length) {
      showResult();
      return;
    }

    isAnswered = false;
    const q = questions[currentIndex];
    const progress = ((currentIndex) / questions.length) * 100;

    const questionText = q.isEnToVi
      ? `"${q.word.en}" nghĩa là gì?`
      : `Từ nào có nghĩa "${q.word.vi}"?`;

    const subText = q.isEnToVi
      ? 'Chọn nghĩa tiếng Việt đúng — sau khi chọn sẽ hiện từ tiếng Anh của cả 4 đáp án'
      : 'Chọn từ tiếng Anh đúng — sau khi chọn sẽ hiện nghĩa tiếng Việt của cả 4 đáp án';

    const letters = ['A', 'B', 'C', 'D'];

    quizContent.innerHTML = `
      <div class="quiz-score-bar">
        <span class="score-item correct-score">✅ ${correctCount}</span>
        <span class="score-item wrong-score">❌ ${wrongCount}</span>
        <span class="score-item total-score">⭐ ${score} điểm</span>
        <button class="btn-early-finish" id="btn-finish-early" title="Nộp bài và xem kết quả hiện tại">🏁 Nộp bài sớm</button>
      </div>
      <div class="quiz-progress">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progress}%"></div>
        </div>
        <span class="quiz-progress-text">${currentIndex + 1}/${questions.length}</span>
      </div>
      <div class="quiz-question">${questionText}</div>
      <div class="quiz-question-sub">${subText}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <button class="quiz-option-btn" data-index="${i}">
            <span class="option-letter">${letters[i]}</span>
            <div class="option-text-group">
              <span class="option-main-text">${q.isEnToVi ? opt.vi : opt.en}</span>
              <span class="option-translation" style="display: none;">(${q.isEnToVi ? opt.en : opt.vi})</span>
            </div>
          </button>
        `).join('')}
      </div>
      <div class="quiz-next-container" id="quiz-next-container" style="display: none; flex-direction: column; align-items: center;">
        <button class="btn-primary-custom" id="btn-next-question" style="padding: 0.85rem 2.2rem; font-size: 1.05rem;">
          ${currentIndex + 1 < questions.length ? 'Câu tiếp theo ➔' : 'Xem kết quả bài làm 🏆'}
        </button>
        <span style="font-size: 0.85rem; color: var(--gray-500); margin-top: 0.5rem;">(Nhấn <strong>Enter</strong> hoặc <strong>Phím cách</strong> để sang câu tiếp)</span>
      </div>
    `;

    // Nút nộp bài sớm để xem kết quả bất kỳ lúc nào
    const finishBtn = document.getElementById('btn-finish-early');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        if (confirm(`Bạn đã làm ${currentIndex} câu. Bạn có muốn nộp bài sớm và xem kết quả không?`)) {
          showResult(true);
        }
      });
    }

    // Bind click đáp án
    quizContent.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => handleAnswer(btn));
    });
  }

  function handleAnswer(btn) {
    if (isAnswered) return;
    isAnswered = true;

    const q = questions[currentIndex];
    const selectedIndex = parseInt(btn.dataset.index);
    const selectedWord = q.options[selectedIndex];
    const isCorrect = selectedWord.en === q.correctAnswer.en;

    // Vô hiệu hóa tất cả các nút đáp án
    quizContent.querySelectorAll('.quiz-option-btn').forEach(b => b.disabled = true);

    // HIỂN THỊ NGHĨA TƯƠNG ỨNG CỦA CẢ 4 ĐÁP ÁN ĐỂ HỌC THÊM CÁC TỪ KHÁC!
    quizContent.querySelectorAll('.option-translation').forEach(el => {
      el.style.display = 'inline-flex';
    });

    if (isCorrect) {
      btn.classList.add('correct');
      score += 10;
      correctCount++;
      spawnConfetti(btn);
    } else {
      btn.classList.add('wrong');
      wrongCount++;
      // Đánh dấu đáp án đúng
      quizContent.querySelectorAll('.quiz-option-btn').forEach(b => {
        const idx = parseInt(b.dataset.index);
        if (q.options[idx].en === q.correctAnswer.en) {
          b.classList.add('correct');
        }
      });
    }

    // Cập nhật thanh điểm trên đầu bài trắc nghiệm
    const correctScoreEl = quizContent.querySelector('.correct-score');
    if (correctScoreEl) correctScoreEl.textContent = `✅ ${correctCount}`;
    const wrongScoreEl = quizContent.querySelector('.wrong-score');
    if (wrongScoreEl) wrongScoreEl.textContent = `❌ ${wrongCount}`;
    const totalScoreEl = quizContent.querySelector('.total-score');
    if (totalScoreEl) totalScoreEl.textContent = `⭐ ${score} điểm`;

    // Hiển thị nút "Câu tiếp theo" để người học thoải mái đọc và học nghĩa 4 từ trước khi chuyển
    const nextContainer = document.getElementById('quiz-next-container');
    if (nextContainer) {
      nextContainer.style.display = 'flex';
      const nextBtn = document.getElementById('btn-next-question');
      if (nextBtn) {
        nextBtn.focus();
        let advanced = false;
        const advance = () => {
          if (advanced) return;
          advanced = true;
          document.removeEventListener('keydown', keyHandler);
          currentIndex++;
          renderQuestion();
        };
        const keyHandler = (e) => {
          if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') {
            e.preventDefault();
            advance();
          }
        };
        nextBtn.onclick = advance;
        document.addEventListener('keydown', keyHandler);
      }
    }
  }

  function showResult(isEarly = false) {
    quizContent.style.display = 'none';
    quizResult.style.display = 'block';

    const answeredCount = isEarly ? Math.max(1, currentIndex) : questions.length;
    const pct = Math.round((correctCount / answeredCount) * 100);
    let emoji, title;

    if (pct >= 90) {
      emoji = '🏆';
      title = isEarly ? 'Kết quả tuyệt vời!' : 'Xuất sắc! Bạn đã vượt qua tất cả!';
    } else if (pct >= 70) {
      emoji = '🎉';
      title = 'Làm rất tốt!';
    } else if (pct >= 50) {
      emoji = '💪';
      title = 'Khá tốt!';
    } else {
      emoji = '📚';
      title = 'Cần cố gắng thêm!';
    }

    quizResult.innerHTML = `
      <div class="quiz-result">
        <div class="result-emoji">${emoji}</div>
        <div class="result-title">${title}</div>
        <div class="result-score-big">${score} điểm</div>
        <div class="result-detail">
          Đúng: <strong>${correctCount}</strong> / ${answeredCount} câu đã làm (${pct}%)
          ${isEarly ? `<br><small style="color:var(--gray-500); margin-top:4px; display:inline-block;">Tổng kho từ vựng: <strong>${questions.length}</strong> từ</small>` : ''}
        </div>
        <div class="d-flex gap-2 justify-content-center flex-wrap">
          <button class="btn-primary-custom" id="btn-restart-quiz">
            🔄 Làm lượt mới (Đảo từ mới)
          </button>
          <button class="btn-secondary-custom" data-nav="home">
            🏠 Về Trang Chủ
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-restart-quiz').addEventListener('click', startQuiz);
  }

  function spawnConfetti(element) {
    const rect = element.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const colors = ['#6366f1', '#8b5cf6', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4'];

    for (let i = 0; i < 12; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = cx + (Math.random() - 0.5) * 60 + 'px';
      c.style.top = cy + 'px';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 1300);
    }
  }

  return { init };
})();


// ─────────────────────────────────────────────
// 4. GRAMMAR ACCORDION MODULE
// ─────────────────────────────────────────────

const GrammarModule = (() => {
  function init() {
    const container = document.getElementById('grammar-list');
    container.innerHTML = grammarData.map(g => `
      <div class="grammar-card" data-grammar-id="${g.id}">
        <div class="grammar-card-header" onclick="GrammarModule.toggle(${g.id})">
          <div class="grammar-card-title">
            <span class="grammar-icon">${g.icon}</span>
            ${g.name}
          </div>
          <span class="grammar-card-arrow">▼</span>
        </div>
        <div class="grammar-card-body">
          <div class="grammar-formula">${g.formula}</div>
          <div class="grammar-explanation">${g.explanation}</div>
          <div class="grammar-examples">
            ${g.examples.map(ex => `
              <div class="grammar-example">
                <div class="en">📝 ${ex.en}</div>
                <div class="vi">→ ${ex.vi}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  function toggle(id) {
    const card = document.querySelector(`.grammar-card[data-grammar-id="${id}"]`);
    if (!card) return;

    const wasOpen = card.classList.contains('open');

    // Close all
    document.querySelectorAll('.grammar-card').forEach(c => c.classList.remove('open'));

    // Toggle
    if (!wasOpen) card.classList.add('open');
  }

  return { init, toggle };
})();


// ─────────────────────────────────────────────
// 5. FALLING WORDS GAME MODULE
// ─────────────────────────────────────────────

const FallingWordsGame = (() => {
  // Config: Tốc độ rơi siêu chậm, cực kỳ thư thả để có nhiều thời gian gõ phím
  const BASE_SPEED = 0.22;              // px per frame (~13px/giây -> mất khoảng 40 giây mới chạm đáy!)
  const SPEED_INCREMENT = 0.005;        // Tăng cực nhẹ sau mỗi từ đúng, không làm khó người học
  const SPAWN_INTERVAL_MS = 4200;       // Mỗi 4.2 giây ra 1 từ mới, màn hình thoáng đãng
  const SPAWN_INTERVAL_MIN = 3000;      // Tối thiểu không nhanh hơn 3 giây
  const SPAWN_INTERVAL_DECAY = 15;      // Giảm khoảng cách spawn cực kỳ từ từ

  // State
  let score, combo, maxCombo, speed, spawnInterval;
  let gameRunning = false;
  let animFrameId = null;
  let spawnTimerId = null;
  let fallingWords = [];               // { el, word, y, speed }
  let wordsCorrect = 0;

  // DOM
  let gameArea, inputEl, scoreEl, comboEl;
  let startOverlay, gameOverOverlay;

  function init() {
    gameArea        = document.getElementById('game-area');
    inputEl         = document.getElementById('game-input');
    scoreEl         = document.getElementById('game-score-value');
    comboEl         = document.getElementById('game-combo');
    startOverlay    = document.getElementById('game-start-overlay');
    gameOverOverlay = document.getElementById('game-over-overlay');

    document.getElementById('btn-start-game').addEventListener('click', startGame);
    document.getElementById('btn-restart-game').addEventListener('click', startGame);

    inputEl.addEventListener('input', onInput);

    // Khi nhấn Enter: nếu gõ đúng thì nhận điểm, nếu gõ SAI thì TỰ ĐỘNG XÓA CHỮ không cần bấm Delete!
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleEnterKey();
      }
    });
  }

  function handleEnterKey() {
    if (!gameRunning) return;
    const typed = inputEl.value.trim().toLowerCase();
    if (!typed) return;

    // Kiểm tra xem từ vừa gõ có khớp từ nào đang rơi không
    for (let i = fallingWords.length - 1; i >= 0; i--) {
      const fw = fallingWords[i];
      if (typed === fw.word.en.toLowerCase()) {
        wordCorrect(i);
        inputEl.value = '';
        return;
      }
    }

    // Nếu KHÔNG KHỚP bất kỳ từ nào (gõ sai):
    // Tự động xóa sạch ô input ngay lập tức + rung đỏ phản hồi, người dùng gõ từ mới luôn!
    inputEl.value = '';
    inputEl.classList.remove('flash-wrong');
    void inputEl.offsetWidth; // ép reflow để kích hoạt lại animation shake
    inputEl.classList.add('flash-wrong');
    setTimeout(() => {
      inputEl.classList.remove('flash-wrong');
    }, 350);
  }

  let gameWordQueue = [];              // Hàng đợi các từ đã được đảo lộn xộn, đảm bảo không trùng lặp

  function resetState() {
    score = 0;
    combo = 0;
    maxCombo = 0;
    speed = BASE_SPEED;
    spawnInterval = SPAWN_INTERVAL_MS;
    wordsCorrect = 0;
    fallingWords = [];
    inputEl.value = '';
    // Đảo lộn xộn 100% toàn bộ từ vựng cho ván chơi này (176 từ)
    gameWordQueue = shuffleArray(vocabData);
  }

  function startGame() {
    // Clean up
    stop();
    resetState();

    // Clear game area words
    gameArea.querySelectorAll('.falling-word').forEach(el => el.remove());

    // Update UI
    updateHUD();
    startOverlay.classList.add('hidden');
    gameOverOverlay.classList.add('hidden');

    gameRunning = true;
    document.body.classList.add('game-active');

    // Focus input without jumping/scrolling page
    inputEl.focus({ preventScroll: true });

    // Start spawning
    spawnWord();
    scheduleSpawn();

    // Start animation loop
    animFrameId = requestAnimationFrame(gameLoop);
  }

  function stop() {
    gameRunning = false;
    document.body.classList.remove('game-active');
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
    if (spawnTimerId) {
      clearTimeout(spawnTimerId);
      spawnTimerId = null;
    }
  }

  function scheduleSpawn() {
    if (!gameRunning) return;
    spawnTimerId = setTimeout(() => {
      if (!gameRunning) return;
      spawnWord();
      scheduleSpawn();
    }, spawnInterval);
  }

  function spawnWord() {
    if (!gameRunning) return;

    // Khi đã lấy hết từ trong hàng đợi
    if (gameWordQueue.length === 0) {
      // Nếu không còn từ nào đang rơi nữa -> người chơi đã chinh phục toàn bộ từ vựng!
      if (fallingWords.length === 0) {
        gameVictory();
      }
      return;
    }

    // Lấy từ tiếp theo trong danh sách đã đảo ngẫu nhiên (tuyệt đối không lặp lại từ đã xuất hiện)
    const word = gameWordQueue.shift();
    updateHUD();

    // Create DOM element
    const el = document.createElement('div');
    el.className = 'falling-word';
    el.textContent = word.en;
    gameArea.appendChild(el);

    // Position — random X, avoid overflow
    const areaW = gameArea.clientWidth;
    const wordW = el.offsetWidth;
    const maxX = Math.max(10, areaW - wordW - 10);
    const x = Math.random() * maxX;
    el.style.left = x + 'px';
    el.style.top = '-40px';

    fallingWords.push({
      el,
      word,
      y: -40,
      speed: speed + (Math.random() * 0.03) // Rơi cực kỳ ổn định, êm ái
    });
  }

  function gameLoop() {
    if (!gameRunning) return;

    const areaH = gameArea.clientHeight;

    for (let i = fallingWords.length - 1; i >= 0; i--) {
      const fw = fallingWords[i];

      // Move down
      fw.y += fw.speed;
      fw.el.style.top = fw.y + 'px';

      // Check if reached bottom
      if (fw.y >= areaH - 10) {
        wordMissed(i);
      }
    }

    animFrameId = requestAnimationFrame(gameLoop);
  }

  function onInput() {
    if (!gameRunning) return;

    const typed = inputEl.value.trim().toLowerCase();
    if (!typed) return;

    // Check against all falling words (khi gõ đúng khớp ký tự cuối cùng thì tự ăn luôn)
    for (let i = fallingWords.length - 1; i >= 0; i--) {
      const fw = fallingWords[i];
      if (typed === fw.word.en.toLowerCase()) {
        wordCorrect(i);
        inputEl.value = '';
        return;
      }
    }
  }

  function wordCorrect(index) {
    const fw = fallingWords[index];

    // 1. Tách từ ra khỏi mảng rơi ngay lập tức để từ đứng yên tại chỗ trên màn hình!
    fallingWords.splice(index, 1);

    // 2. Hiển thị nghĩa tiếng Việt ngay trên từ đó để người chơi học trực tiếp!
    fw.el.innerHTML = `
      <span class="matched-en">${fw.word.en}</span>
      <span class="matched-arrow">➔</span>
      <span class="matched-vi">${fw.word.vi}</span>
    `;

    // Đảm bảo không bị tràn mép phải khi từ dài ra
    const currentLeft = parseFloat(fw.el.style.left) || 0;
    const maxAllowedLeft = Math.max(10, gameArea.clientWidth - 280);
    if (currentLeft > maxAllowedLeft) {
      fw.el.style.left = maxAllowedLeft + 'px';
    }

    // 3. Kích hoạt hiệu ứng nổi bật (badge xanh sáng, dừng lại 1.8 giây cho người học đọc)
    fw.el.classList.add('matched');

    inputEl.classList.add('flash-correct');
    setTimeout(() => {
      inputEl.classList.remove('flash-correct');
    }, 300);

    // Hiệu ứng pháo hoa tia sáng
    spawnSparkles(fw.el);

    // Cộng điểm & combo
    combo++;
    if (combo > maxCombo) maxCombo = combo;
    const comboBonus = Math.min(combo, 5);
    score += 10 + (comboBonus * 2);
    wordsCorrect++;

    // Tăng tốc độ rất nhẹ nhàng
    speed = BASE_SPEED + wordsCorrect * SPEED_INCREMENT;
    spawnInterval = Math.max(SPAWN_INTERVAL_MIN, SPAWN_INTERVAL_MS - wordsCorrect * SPAWN_INTERVAL_DECAY);

    // Toast thông báo thêm góc màn hình
    Toast.show(`✅ ${fw.word.en}`, fw.word.vi);

    // Cập nhật điểm
    updateHUD();

    // Giữ từ hiển thị trên màn hình 1.8 giây để người dùng kịp nhìn và ghi nhớ nghĩa tiếng Việt
    setTimeout(() => {
      fw.el.remove();
    }, 1800);
  }

  function wordMissed(index) {
    const fw = fallingWords[index];
    fallingWords.splice(index, 1);

    // Visual feedback: từ trôi qua nhẹ nhàng, không mất mạng
    fw.el.classList.add('missed');
    combo = 0;
    updateHUD();

    // Xóa từ khỏi DOM sau hiệu ứng mờ dần
    setTimeout(() => {
      fw.el.remove();
    }, 400);

    // Nếu đã xuất hiện hết toàn bộ từ vựng và không còn từ nào đang rơi trên màn hình
    if (gameWordQueue.length === 0 && fallingWords.length === 0) {
      gameVictory();
    }
  }

  function gameOver() {
    stop();

    // Clear remaining words with animation
    fallingWords.forEach(fw => {
      fw.el.classList.add('missed');
      setTimeout(() => fw.el.remove(), 400);
    });
    fallingWords = [];

    // Show game over overlay
    gameOverOverlay.classList.remove('hidden');
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-words').textContent = wordsCorrect;
    document.getElementById('final-combo').textContent = maxCombo;
  }

  function updateHUD() {
    if (scoreEl) scoreEl.textContent = score;

    // Cập nhật số từ đúng đã gõ thành công
    const correctEl = document.getElementById('game-correct-count');
    if (correctEl) correctEl.textContent = wordsCorrect;

    // Cập nhật tiến độ từ vựng: Số từ đã xuất hiện / Tổng số từ trong kho
    const progressCountEl = document.getElementById('game-progress-count');
    if (progressCountEl) {
      const appearedCount = Math.min(vocabData.length, vocabData.length - gameWordQueue.length);
      progressCountEl.textContent = `${appearedCount}/${vocabData.length} từ`;
    }

    // Combo display
    if (combo >= 2) {
      comboEl.textContent = `🔥 x${combo} Combo!`;
      comboEl.style.display = 'block';
    } else {
      comboEl.textContent = '';
      comboEl.style.display = 'none';
    }
  }

  function gameVictory() {
    stop();
    fallingWords.forEach(fw => fw.el.remove());
    fallingWords = [];

    gameOverOverlay.classList.remove('hidden');
    gameOverOverlay.innerHTML = `
      <div style="font-size:3.5rem; margin-bottom:0.5rem;">🏆</div>
      <h2>CHIẾN THẮNG TUYỆT ĐỐI!</h2>
      <p style="color:#86efac; font-weight:700; font-size:1.05rem; margin-bottom:1rem;">
        Bạn đã hoàn thành xuất sắc toàn bộ ${vocabData.length} từ vựng!
      </p>
      <div class="final-score" id="final-score">${score}</div>
      <p>
        Từ đúng: <strong>${wordsCorrect}</strong> / ${vocabData.length}<br/>
        Combo cao nhất: <strong>${maxCombo}</strong>
      </p>
      <div class="d-flex gap-2 justify-content-center flex-wrap">
        <button class="btn-primary-custom" id="btn-restart-game">
          🔄 Chơi Lại (Đảo ngẫu nhiên)
        </button>
        <button class="btn-secondary-custom" data-nav="home">
          🏠 Về Trang Chủ
        </button>
      </div>
    `;
    document.getElementById('btn-restart-game').addEventListener('click', startGame);
  }

  function spawnSparkles(el) {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const colors = ['#6366f1', '#8b5cf6', '#22c55e', '#fbbf24'];

    for (let i = 0; i < 8; i++) {
      const s = document.createElement('div');
      s.className = 'sparkle-burst';
      const angle = (Math.PI * 2 / 8) * i;
      const dist = 30 + Math.random() * 20;
      s.style.left = cx + 'px';
      s.style.top = cy + 'px';
      s.style.background = colors[Math.floor(Math.random() * colors.length)];
      s.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
      s.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
      document.body.appendChild(s);
      setTimeout(() => s.remove(), 600);
    }
  }

  return { init, stop };
})();


// ─────────────────────────────────────────────
// 6. TOAST NOTIFICATION SYSTEM
// ─────────────────────────────────────────────

const Toast = (() => {
  let container;

  function init() {
    container = document.getElementById('toast-container');
  }

  function show(title, message, duration = 2500) {
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `
      <div class="toast-word">${title}</div>
      <div class="toast-meaning">📖 ${message}</div>
    `;
    container.appendChild(toast);

    // Auto remove
    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  return { init, show };
})();


// ─────────────────────────────────────────────
// 7. NAVBAR SCROLL EFFECT
// ─────────────────────────────────────────────

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-custom');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}


// ─────────────────────────────────────────────
// 8. INITIALIZATION
// ─────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  Navigation.init();
  VocabQuiz.init();
  GrammarModule.init();
  FallingWordsGame.init();
  Toast.init();
  initNavbarScroll();
});
