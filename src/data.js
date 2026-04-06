import pocoImg from './assets/images/image.png';

export const CATEGORIES = [
  { id: 'hafta', name: 'Hafta tovarlari', icon: 'Flame' },
  { id: 'bahorgi', name: 'Bahorgi kolleksiya', icon: 'Shirt' },
  { id: 'gozallik', name: "Sizning go'zalligingiz", icon: 'Sparkles' },
  { id: 'xobbi', name: 'Xobbi va ijod', icon: 'Music' },
  { id: 'smartfonlar', name: 'Smartfonlari', icon: 'Smartphone' },
  { id: 'yarmarka', name: 'Bahor yarmarkasi', icon: 'ShoppingBasket' },
  { id: 'mebel', name: 'Mebel', icon: 'Armchair' },
  { id: 'turizm', name: 'Turizm, ovchilik', icon: 'Tent' },
  { id: 'aksessuarlar', name: 'Aksessuarlar', icon: 'Headphones' }
];

export const PRODUCTS_DATA = [
  // 📱 SMARTFONLAR
  {
    id: 1, categoryId: 'smartfonlar', name: "Apple iPhone 15 Pro, 256 GB, Natural Titanium",
    price: 14500000, oldPrice: 16200000, rating: 5.0, reviews: 1450, badge: "YANGILIK",
    img: "https://easyphones.co.in/cdn/shop/files/Apple_iPhone_15_Pro_Max_-_Refurbished.png?v=1755515069",
    desc: "Eng so'nggi texnologiya, titan korpus va A17 Pro chipi.",
    ram: 8, screen: 6.1
  },
  {
    id: 2, categoryId: 'smartfonlar', name: "Samsung Galaxy S24 Ultra, 12/512 GB, Titanium Gray",
    price: 15200000, oldPrice: 16500000, rating: 4.8, reviews: 450, badge: "YANGILIK",
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000",
    desc: "Sun'iy intellekt (Galaxy AI) imkoniyatlari va 200MP kamera.",
    ram: 12, screen: 6.8
  },
  {
    id: 3, categoryId: 'smartfonlar', name: "Xiaomi 13T Pro, 12/256 GB,",
    price: 6500000, oldPrice: 7200000, rating: 4.7, reviews: 310, badge: null,
    img: "https://ir.ozone.ru/s3/multimedia-k/6765663368.jpg",
    desc: "Leica kameralar, IP68 va 120W tezkor zaryadlash.",
    ram: 12, screen: 6.67
  },
  {
    id: 4, categoryId: 'smartfonlar', name: "Poco X6 Pro 5G, 8/256 Gb",
    price: 3650000, oldPrice: 4200000, rating: 4.9, reviews: 852, badge: "XIT",
    img: pocoImg,
    desc: "O'yinlar uchun maxsus eng so'nggi protsessor va yorqin AMOLED ekran.",
    ram: 8, screen: 6.67
  },

  // 🔥 HAFTA TOVARLARI (Aralash foydali narsalar)
  {
    id: 5, categoryId: 'hafta', name: "Dyson V15 Detect Simsiz changyutgich",
    price: 8900000, oldPrice: 9500000, rating: 4.9, reviews: 156, badge: "XONADON",
    img: "https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1000",
    desc: "Lazer yordamida changlarni aniqlash texnologiyasi."
  },
  {
    id: 6, categoryId: 'hafta', name: "Sony WH-1000XM5 Shovqinni to'suvchi quloqchinlar",
    price: 4200000, oldPrice: 4800000, rating: 5.0, reviews: 890, badge: "XIT",
    img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000",
    desc: "Shovqinni to'sish texnologiyasi va kristallday tiniq ovoz sifatli eshitish vositasi."
  },
  {
    id: 7, categoryId: 'hafta', name: "Elektr chovgum Tefal Element K20",
    price: 240000, oldPrice: 350000, rating: 4.6, reviews: 125, badge: "-30%",
    img: "https://basket-17.wbbasket.ru/vol2753/part275350/275350665/images/big/1.webp",
    desc: "Suvni tez qaynatadigan mustahkam chovgum."
  },
  {
    id: 56, categoryId: 'hafta', name: "Xiaomi Smart Air Purifier 4, Havo tozalagich",
    price: 1850000, oldPrice: 2200000, rating: 4.9, reviews: 450, badge: "SALOMATLIK",
    img: "https://images.uzum.uz/cta3vhdpb7f7ago7lq7g/original.jpg",
    desc: "Xonadoningiz havosini zararli zarralardan 99.97% gacha tozalaydi."
  },
  {
    id: 57, categoryId: 'hafta', name: "Dreame D10 Plus Robot changyutgich",
    price: 4200000, oldPrice: 4800000, rating: 4.8, reviews: 310, badge: "SMART",
    img: "https://mionline.uz/image/cache/catalog/image/cache/catalog/xiaomi-dreame-bot-d10s-plus-45096890661229-1300x1300.webp",
    desc: "O'zini tozalash funksiyasiga ega, namli va quruq yig'ishtiruvchi robot."
  },
  {
    id: 58, categoryId: 'hafta', name: "Tefal Turbo Cuisine Multi-pishirgich",
    price: 1450000, oldPrice: 1800000, rating: 4.9, reviews: 180, badge: "OSHXONA",
    img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/mobile/c8c5b6401b084a5b2ded9b382982c6a62025042311344023883jIOjBbMzug.jpg.webp",
    desc: "Mazali taomlarni 3 baravar tezroq tayyorlaydigan universal qurilma."
  },
  {
    id: 59, categoryId: 'hafta', name: "Oral-B iO Series 9 Elektr tish cho'tkasi",
    price: 2650000, oldPrice: 3100000, rating: 5.0, reviews: 120, badge: "PREMIUM",
    img: "https://images.uzum.uz/d2fghqniub3brtuatg6g/t_product_540_high.jpg",
    desc: "Sun'iy intellekt yordamida tishlarni mukammal tozalash texnologiyasi."
  },
  {
    id: 60, categoryId: 'hafta', name: "Dyson Supersonic HD08 Fen (Professional)",
    price: 5200000, oldPrice: 5800000, rating: 5.0, reviews: 850, badge: "TOP",
    img: "https://dysons-ru.com/netcat_files/multifile/484/76/160_0.jpg",
    desc: "Sochlarni haddan tashqari issiqdan himoya qilib, tez qurituvchi afsonaviy fen."
  },
  {
    id: 61, categoryId: 'hafta', name: "Xiaomi Mi Water Purifier, Suv tozalagich",
    price: 3200000, oldPrice: 3800000, rating: 4.8, reviews: 156, badge: "SALOMATLIK",
    img: "https://joybox.uz/wp-content/uploads/2025/04/xiaomi-faucet-water4.jpg",
    desc: "Suvni 4 bosqichli tozalash tizimi orqali ichishga tayyor holga keltiradi."
  },
  {
    id: 62, categoryId: 'hafta', name: "Omron M2 Basic Qon bosimi o'lchagich",
    price: 450000, oldPrice: 580000, rating: 4.9, reviews: 1240, badge: "TIBBIY",
    img: "https://main.apteka.uz/uploads/iblock/93c/nz7inp4zwsqiylw3duvv4f6f1v6txs6z.webp",
    desc: "Yuqori aniqlikdagi avtomatik tonometr, har bir xonadon uchun zarur."
  },
  {
    id: 63, categoryId: 'hafta', name: "WalkingPad R1 Pro Buklanadigan yugurish yo'lakchasi",
    price: 5800000, oldPrice: 6500000, rating: 4.7, reviews: 89, badge: "FITNES",
    img: "https://storage.kun.uz/source/7/DlyELuZD34iRjfCi5N42TibF1uQkkcxP.jpg",
    desc: "Uyda mashq qilish uchun ixcham, buklanadigan va smart boshqaruvli yo'lakcha."
  },
  {
    id: 64, categoryId: 'hafta', name: "Bosch ErgoMixx Qo'l mikseri va blender",
    price: 850000, oldPrice: 1100000, rating: 4.8, reviews: 340, badge: "OSHXONA",
    img: "https://api.openmarket.uz/storage/59935/conversions/6498466790-filled.jpg",
    desc: "Ko'p funksiyali oshxona yordamchisi, pishiriq va taomlar uchun ideal."
  },
  {
    id: 65, categoryId: 'hafta', name: "Aqlli eshik qulfi (Fingerprint & App Control)",
    price: 1350000, oldPrice: 1650000, rating: 4.9, reviews: 72, badge: "XAVFSIZLIK",
    img: "https://cdn.globalso.com/btelec/930.jpg",
    desc: "Barmoq izi, kod va mobil ilova orqali boshqariladigan zamonaviy qulf."
  },
  {
    id: 66, categoryId: 'smartfonlar', name: "Apple iPhone 15 Pro Max, 512 GB, Blue Titanium",
    price: 16800000, oldPrice: 18500000, rating: 5.0, reviews: 890, badge: "TOP",
    img: "https://easyphones.co.in/cdn/shop/files/Apple_iPhone_15_Pro_Max_-_Refurbished.png?v=1755515069",
    desc: "Eng baquvvat protsessor va 5x optik zoomli super kamera."
  },
  {
    id: 67, categoryId: 'smartfonlar', name: "Apple iPhone 15, 128 GB, Pink",
    price: 9800000, oldPrice: 11200000, rating: 4.9, reviews: 1250, badge: "XIT",
    img: "https://ipiter.ru/upl/modules/shop/360/4sanpf9py7.jpg",
    desc: "Yangi Dynamic Island va 48MP asosiy kamera bilan."
  },
  {
    id: 68, categoryId: 'smartfonlar', name: "Apple iPhone 14 Pro, 256 GB, Space Black",
    price: 12500000, oldPrice: 14000000, rating: 4.8, reviews: 2100, badge: "PREMIUM",
    img: "https://bigmag.ua/image/cache/catalog/image/Product/Apple_iPhone_BY/Apple_iPhone_14_Pro/Apple_iPhone_14_Pro_Space_Black/A10A2231-2000x2000.jpg",
    desc: "Always-On display va A16 Bionic chipi bilan."
  },
  {
    id: 69, categoryId: 'smartfonlar', name: "Apple iPhone 14, 128 GB, Blue",
    price: 8500000, oldPrice: 9800000, rating: 4.7, reviews: 3400, badge: "TAVSIYA",
    img: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg",
    desc: "Uzoq vaqt ishlaydigan batareya va ajoyib tungi s’yomka."
  },
  {
    id: 70, categoryId: 'smartfonlar', name: "Apple iPhone 13, 128 GB, Midnight",
    price: 7200000, oldPrice: 8500000, rating: 4.9, reviews: 5600, badge: "HIT",
    img: "https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_SL1500_.jpg",
    desc: "Hamisha urfda bo'lgan va ishonchli iPhone modeli."
  },
  {
    id: 71, categoryId: 'smartfonlar', name: "Apple iPhone 13 mini, 128 GB, Blue",
    price: 6800000, oldPrice: 7800000, rating: 4.8, reviews: 1800, badge: "IXCHAM",
    img: "https://images.uzum.uz/clkaipl6sfhsc0umm9b0/original.jpg",
    desc: "Kichik o'lchamda katta quvvat beruvchi yagona smartfon."
  },
  {
    id: 72, categoryId: 'smartfonlar', name: "Apple iPhone SE (2022), 64 GB, (Product)RED",
    price: 5200000, oldPrice: 6200000, rating: 4.6, reviews: 950, badge: "BYUDJET",
    img: "https://fonezone.com/cdn/shop/files/Untitled_7_75febde6-a8a0-44c2-9054-e31aea79cf5d.jpg?v=1738306353",
    desc: "Klassik dizayn va A15 Bionic chipining kuchi."
  },
  {
    id: 73, categoryId: 'smartfonlar', name: "Samsung Galaxy Z Fold5, 12/512 GB, Phantom Black",
    price: 18500000, oldPrice: 20500000, rating: 4.9, reviews: 120, badge: "PREMIUM",
    img: "https://i5.walmartimages.com/asr/25bd8fad-94f5-4a74-b1e5-d16d25f765aa.c4d2ef5157f6217934093a5b7a8ba971.jpeg",
    desc: "Buklanadigan katta ekran va multitasking uchun ideal qurilma."
  },
  {
    id: 74, categoryId: 'smartfonlar', name: "Samsung Galaxy Z Flip5, 8/256 GB, Mint",
    price: 9200000, oldPrice: 10800000, rating: 4.8, reviews: 215, badge: "STIL",
    img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000",
    desc: "Ixcham buklanadigan dizayn va ajoyib Flex Window ekrani."
  },
  {
    id: 75, categoryId: 'smartfonlar', name: "Samsung Galaxy A56 5G, 8/256 GB, Awesome Graphite",
    price: 4800000, oldPrice: 5500000, rating: 4.7, reviews: 840, badge: "HIT",
    img: "https://istoria.pro/2969/4468ed3007e7072e1e907dc876c96cbc70aae6a8.jpg",
    desc: "Yorqin Super AMOLED ekran va tungi s’yomka uchun ajoyib kamera."
  },
  {
    id: 76, categoryId: 'smartfonlar', name: "Samsung Galaxy S23 FE, 8/128 GB, Purple",
    price: 6500000, oldPrice: 7200000, rating: 4.8, reviews: 156, badge: "TOP",
    img: "https://i.ebayimg.com/images/g/BCUAAOSwzBNoKpKl/s-l500.jpg",
    desc: "Premium funksiyalar va kuchli protsessor hamyonbop narxda."
  },
  {
    id: 77, categoryId: 'smartfonlar', name: "Samsung Galaxy A34 5G, 6/128 GB, Awesome Silver",
    price: 3600000, oldPrice: 4200000, rating: 4.6, reviews: 520, badge: "SKIDKA",
    img: "https://http2.mlstatic.com/D_Q_NP_662643-MLA96417397872_102025-O.webp",
    desc: "Tiniq ekran, uzoq vaqt ishlaydigan batareya va suvdan himoya."
  },

  // 👗 BAHORGI KOLLEKSIYA
  {
    id: 8, categoryId: 'bahorgi', name: "Nike Air Jordan 1 Retro High, Erkaklar poyabzali",
    price: 2100000, oldPrice: 2800000, rating: 4.7, reviews: 670, badge: "STIL",
    img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000",
    desc: "Afsonaviy basketbol poyabzali, bahorgi kunlar uchun ayni muddao.",
    size: '42'
  },
  {
    id: 9, categoryId: 'bahorgi', name: "Ayollar uchun baxorgi yengil material gulli naqsh",
    price: 240000, oldPrice: 350000, rating: 4.5, reviews: 102, badge: "YANGI",
    img: "https://api.cabinet.smart-market.uz/uploads/images/8a8386023bb76cdf048b1f44",
    desc: "Issiq ob-havo uchun qulay va zamonaviy ko'ylak.",
    size: 'M'
  },
  {
    id: 10, categoryId: 'bahorgi', name: "ZARA Erkaklar jinsi kiyimi, Regular Fit",
    price: 320000, oldPrice: 450000, rating: 4.6, reviews: 45, badge: "SKIDKA",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000",
    desc: "Kundalik kiyishga qulay bahorgi to'q ko'k matodan.",
    size: 'L'
  },

  // 💄 GO'ZALLIK
  {
    id: 11, categoryId: 'gozallik', name: "Mac Studio Fix Fluid Tonal kremi, SPF 15",
    price: 450000, oldPrice: 520000, rating: 4.9, reviews: 830, badge: "TOP",
    img: "https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/115148/qbnKY9H7ho9Pwiw8lXg5Lg.JPG",
    desc: "Teringizni 24 soat davomida ideal va silliq tutib turadi."
  },
  {
    id: 12, categoryId: 'gozallik', name: "Chanel Coco Mademoiselle Parfyum, 100ml",
    price: 2850000, oldPrice: 3200000, rating: 5.0, reviews: 1240, badge: "ORIGINAL",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1000",
    desc: "Yengil va nafis romantik is.",
  },

  // 🎸 XOBBI VA IJOD
  {
    id: 13, categoryId: 'xobbi', name: "Yamaha F310 Akustik gitara",
    price: 2200000, oldPrice: 2500000, rating: 4.8, reviews: 180, badge: "TAVSIYA",
    img: "https://avatars.mds.yandex.net/get-mpic/6982353/2a00000197d21bf20b99abdef00895486209/orig",
    desc: "O'rganuvchilar va professional tarzda chiquvchilar uchun mashhur gitara."
  },
  {
    id: 14, categoryId: 'xobbi', name: "Fujifilm X100V Raqamli fotoapparat",
    price: 18500000, oldPrice: 20000000, rating: 5.0, reviews: 88, badge: "LIMIT",
    img: "https://i.ytimg.com/vi/Ngqu_qZSLV8/maxresdefault.jpg",
    desc: "Retro uslubdagi dizayn va professional sifatli tasvir sensori."
  },

  // 🧺 BAHOR YARMARKASI
  {
    id: 15, categoryId: 'yarmarka', name: "Piknik uchun sumka",
    price: 125000, oldPrice: 160000, rating: 4.7, reviews: 40, badge: "YARMARKA",
    img: "https://sc04.alicdn.com/kf/Hd233fe2f79ad48e8b0564b1b4798b324m/277826985/Hd233fe2f79ad48e8b0564b1b4798b324m.jpg",
    desc: "Bahorgi tabiat qo'ynida dam olish uchun klassik savat."
  },
  {
    id: 16, categoryId: 'yarmarka', name: "Ray-Ban Aviator Quyosh ko'zoynagi",
    price: 1850000, oldPrice: 2100000, rating: 4.9, reviews: 310, badge: "ORIGINAL",
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000",
    desc: "Ko'zlarni UV nurlaridan to'liq himoyalovchi afsonaviy ko'zoynak."
  },

  // 🛋️ MEBEL
  {
    id: 17, categoryId: 'mebel', name: "Ikea POANG Zamonaviy kreslo, ochiq bej",
    price: 1350000, oldPrice: 1500000, rating: 4.8, reviews: 290, badge: "SHINAM",
    img: "https://n.cdn.cdek.shopping/images/shopping/Zavps93NwX0ohKAN.jpg?v=1",
    desc: "Xonangizga bezak bo'luvchi qulay va ergonomik kreslo."
  },
  {
    id: 18, categoryId: 'mebel', name: "Yozuv stoli va kompyuter partasi, minimalist",
    price: 850000, oldPrice: 1100000, rating: 4.4, reviews: 85, badge: null,
    img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=1000",
    desc: "Talabalar va frilanserlar xonasi uchun kichik va ishonchli stol."
  },

  // 🏕️ TURIZM
  {
    id: 19, categoryId: 'turizm', name: "Naturehike 2 kishilik chodir",
    price: 450000, oldPrice: 1400000, rating: 4.7, reviews: 60, badge: "DAM OLISH",
    img: "https://images.uzum.uz/d317bcniub35i07kjc3g/original.jpg",
    desc: "Yengil va suv o'tkazmaydigan materialdan ishlangan."
  },
  {
    id: 20, categoryId: 'turizm', name: "Termos Stanley Classic 1L",
    price: 450000, oldPrice: 520000, rating: 5.0, reviews: 400, badge: "XIT",
    img: "https://wunderwald.ru/image/cache/catalog/aksessuary-turizm/termos-stanley-legendary-classic-1-l/termos-stanley-legendary-classic-1-l-2-2000x2000.JPG",
    desc: "Issiqlikni 24 soatgacha saqlaydigan haqiqiy afsona termos."
  },

  // 🎧 AKSESSUARLAR
  {
    id: 21, categoryId: 'aksessuarlar', name: "Apple AirPods Pro (2-avlod), MagSafe (USB-C)",
    price: 2950000, oldPrice: 3500000, rating: 5.0, reviews: 2150, badge: "XIT",
    img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1000",
    desc: "Active Noise Cancellation va adaptiv ovoz tizimi."
  },
  {
    id: 22, categoryId: 'aksessuarlar', name: "Samsung Galaxy Watch 6 Classic, 47mm",
    price: 3800000, oldPrice: 4200000, rating: 4.8, reviews: 120, badge: "YANGI",
    img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000",
    desc: "Elegant dizayn va salomatlikni kuzatishning ilg'or funksiyalari."
  },
  {
    id: 23, categoryId: 'aksessuarlar', name: "Anker 737 Power Bank (PowerCore 24K), 140W",
    price: 1650000, oldPrice: 1900000, rating: 4.9, reviews: 340, badge: "PREMIUM",
    img: "https://images.uzum.uz/ctpr6r45j42bjc460qbg/original.jpg",
    desc: "Ultra-baquvvat va tezkor quvvatlash qurilmasi."
  },
  {
    id: 24, categoryId: 'aksessuarlar', name: "iPhone 15 Pro Silicone Case with MagSafe - Storm Blue",
    price: 650000, oldPrice: 850000, rating: 4.7, reviews: 560, badge: "APPLE",
    img: "https://cdn.quicksell.co/-Nbrp2oIl4-BgXfjo8iA/products/-NfaIh0QGEJpMynpUkCg.jpg",
    desc: "Telefoningiz uchun ideal himoya va zamonaviy ko'rinish."
  },
  {
    id: 25, categoryId: 'aksessuarlar', name: "Logitech MX Master 3S Simsiz Sichqoncha",
    price: 1450000, oldPrice: 1700000, rating: 5.0, reviews: 890, badge: "PROF",
    img: "https://images.uzum.uz/csi759j4nkdv7h9ijtq0/original.jpg",
    desc: "Kreativ mutaxassislar uchun eng qulay va funksional sichqoncha."
  },

  // 🌟 MASHHUR TOVARLAR
  {
    id: 26, categoryId: 'smartfonlar', name: "Apple MacBook Air 13-inch, M2 chip, 8/256 GB",
    price: 13500000, oldPrice: 15000000, rating: 5.0, reviews: 450, badge: "PREMIUM",
    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000",
    desc: "Yengil, quvvatli va uzoq vaqt ishlaydigan noutbuk."
  },
  {
    id: 27, categoryId: 'xobbi', name: "Sony PlayStation 5 (PS5) Slim Edition",
    price: 6800000, oldPrice: 7500000, rating: 4.9, reviews: 1560, badge: "TOP",
    img: "https://m.media-amazon.com/images/I/510uTHyDqGL._AC_SL1500_.jpg",
    desc: "Keyingi avlod o'yin konsoli, 4K va yuqori tezlik."
  },
  {
    id: 28, categoryId: 'hafta', name: "Philips Air Fryer XL, 6.2L",
    price: 1850000, oldPrice: 2300000, rating: 4.8, reviews: 890, badge: "OSHXONA",
    img: "https://www.tradeinn.com/f/13982/139824810_3/philips-%D0%B0%D1%8D%D1%80%D0%BE%D1%84%D1%80%D0%B8%D1%82%D1%8E%D1%80%D0%BD%D0%B8%D1%86%D0%B0-hd9270-96-xl-6.2l-2000w.webp",
    desc: "Yog'siz mazali va foydali taomlar tayyorlash uchun idish."
  },
  {
    id: 29, categoryId: 'xobbi', name: "LEGO Star Wars: Millennium Falcon 75257",
    price: 2450000, oldPrice: 2800000, rating: 5.0, reviews: 340, badge: "LEGO",
    img: "https://www.lego.com/cdn/cs/set/assets/blt4c5f96799b1e87fb/75257_alt1.jpg",
    desc: "Mashhur kosmik kema nusxasi, har bir muxlis uchun ajoyib sovg'a."
  },
  {
    id: 30, categoryId: 'turizm', name: "Stanley Quencher H2.0 FlowState Tumbler, 40oz",
    price: 850000, oldPrice: 1100000, rating: 4.7, reviews: 1200, badge: "XIT",
    img: "https://i5.walmartimages.com/seo/The-Quencher-H2-0-FlowState-Tumbler-40-OZ-Copper-Tinsel_ddaf9463-d533-46ff-8c95-9c3962be9066.3352601c55daa92f451c77da0ed0e430.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    desc: "Issiq va sovuq ichimliklarni uzoq vaqt saqlaydigan mashhur idish."
  },
  {
    id: 31, categoryId: 'xobbi', name: "Amazon Kindle Paperwhite (16 GB), 6.8\" ekran",
    price: 2150000, oldPrice: 2400000, rating: 4.9, reviews: 560, badge: "KITOB",
    img: "https://m.media-amazon.com/images/G/01/kindle/journeys/5xlDnKG94P0ryVnD8MqFmnIhMKBXE2F2BxyzUQHa63Hhs3D/YzQ3NDYzMjUt._CB600254656_.jpg",
    desc: "Elektron kitoblar o'qish uchun eng qulay va ishonchli qurilma."
  },
  {
    id: 32, categoryId: 'bahorgi', name: "Adidas Yeezy Boost 350 V2 'Carbon'",
    price: 3650000, oldPrice: 4500000, rating: 4.8, reviews: 930, badge: "LIMIT",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000",
    desc: "Zamonaviy dizayn va cheksiz qulaylik uyg'unligi."
  },
  {
    id: 33, categoryId: 'gozallik', name: "Dior Addict Lip Glow, 001 Pink",
    price: 580000, oldPrice: 720000, rating: 5.0, reviews: 1450, badge: "LUXURY",
    img: "https://img.ltwebstatic.com/images3_spmp/2024/12/28/c1/173536644283a291a46d5d370f5de256af82a7d1e8_thumbnail_750x999.webp",
    desc: "Lablarni namlovchi va tabiiy rang beruvchi mashhur balzam."
  },
  {
    id: 34, categoryId: 'hafta', name: "KitchenAid Artisan Stand Mixer, 4.8L",
    price: 5200000, oldPrice: 6000000, rating: 5.0, reviews: 310, badge: "Oshpaz",
    img: "https://dawsonsliving.co.uk/cdn/shop/files/kitchenaid_matte_grey_123.jpg?v=1701176182&width=1946",
    desc: "Har bir oshpazning orzusidagi ko'p funksiyali mikser."
  },
  {
    id: 35, categoryId: 'aksessuarlar', name: "Apple AirTag (4-talik to'plam)",
    price: 1350000, oldPrice: 1600000, rating: 4.9, reviews: 780, badge: "APPLE",
    img: "https://tradeinphonesg.com/cdn/shop/files/Untitled_design_46.png?v=1711077711",
    desc: "Buyumlaringizni yo'qotib qo'ymaslik uchun ideal yechim."
  },
  {
    id: 36, categoryId: 'aksessuarlar', name: "Apple Watch Series 9, GPS, 45mm Starlight",
    price: 5400000, oldPrice: 6200000, rating: 4.9, reviews: 340, badge: "TOP",
    img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000",
    desc: "Salomatlik ko'rsatkichlarini kuzatish uchun eng ilg'or soat."
  },
  {
    id: 37, categoryId: 'aksessuarlar', name: "Bose QuietComfort Ultra Quloqchinlari",
    price: 4800000, oldPrice: 5500000, rating: 5.0, reviews: 210, badge: "PREMIUM",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
    desc: "Shovqinni to'suvchi eng yaxshi texnologiya va yuqori sifat."
  },
  {
    id: 38, categoryId: 'aksessuarlar', name: "Keychron K2 Simsiz Mexanik Klaviaturasi",
    price: 1200000, oldPrice: 1500000, rating: 4.8, reviews: 450, badge: "STIL",
    img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000",
    desc: "Mac va Windows uchun moslashuvchan, RGB yoritgichli klaviatura."
  },
  {
    id: 39, categoryId: 'aksessuarlar', name: "Belkin BoostCharge Pro 3-in-1 MagSafe",
    price: 1850000, oldPrice: 2100000, rating: 4.9, reviews: 180, badge: "ORIGINAL",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HRGH2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cTdlUnBqVGdvanFGTGVIQitEZmt2UWtuVHYzMERCZURia3c5SzJFOTlPaEZNQjI0eVVYcEVHZkJReDNTSHVZTit3WVIzN0JVWWU4VmR5Ti9GYkNWV2c",
    desc: "iPhone, Apple Watch va AirPods'ni bir vaqtda quvvatlash."
  },
  {
    id: 40, categoryId: 'aksessuarlar', name: "SanDisk 1TB Extreme Portable SSD V2",
    price: 2100000, oldPrice: 2500000, rating: 4.9, reviews: 670, badge: "TEZKOR",
    img: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1000",
    desc: "Suv va changdan himoyalangan o'ta tezkor portativ xotira."
  },
  {
    id: 41, categoryId: 'aksessuarlar', name: "Razer DeathAdder V3 Pro Simsiz Sichqoncha",
    price: 1850000, oldPrice: 2200000, rating: 5.0, reviews: 1100, badge: "GAMING",
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1000",
    desc: "O'ta yengil va professional geymerlar uchun maxsus dizayn."
  },
  {
    id: 42, categoryId: 'aksessuarlar', name: "HyperX QuadCast S RGB Mikrofoni",
    price: 2450000, oldPrice: 2900000, rating: 4.8, reviews: 540, badge: "STREAM",
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000",
    desc: "Strimerlar uchun tiniq ovoz va chiroyli RGB yoritish."
  },
  {
    id: 43, categoryId: 'aksessuarlar', name: "UGREEN 9-in-1 USB-C Hub Docking Station",
    price: 750000, oldPrice: 950000, rating: 4.7, reviews: 320, badge: "FOYDALI",
    img: "https://m.media-amazon.com/images/I/71e2jEMcU0L._AC_UF894,1000_QL80_.jpg",
    desc: "Noutbuk uchun barcha kerakli portlarni bitta qurilmada jamlang."
  },
  {
    id: 44, categoryId: 'aksessuarlar', name: "Baseus Magnetic Power Bank 10000mAh",
    price: 450000, oldPrice: 580000, rating: 4.6, reviews: 890, badge: "HIT",
    img: "https://images.uzum.uz/d2iqfffiub3adlji9fu0/original.jpg",
    desc: "MagSafe qo'llab-quvvatlovchi ixcham va qulay tashqi batareya."
  },
  {
    id: 45, categoryId: 'aksessuarlar', name: "Laptop Stand, Aluminiy Minimalist",
    price: 320000, oldPrice: 450000, rating: 4.5, reviews: 150, badge: "KABINET",
    img: "https://5.imimg.com/data5/ECOM/Default/2023/9/340866420/IQ/KZ/NI/18109516/712hsxmetos-500x500.jpg",
    desc: "Ish joyingiz uchun ergonomik va chidamli noutbuk ko'targichi."
  },
  {
    id: 46, categoryId: 'aksessuarlar', name: "Samsung T7 Shield 2TB, Portativ SSD",
    price: 2850000, oldPrice: 3400000, rating: 5.0, reviews: 120, badge: "MUSTAHKAM",
    img: "https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2022/04/Samsung-T7-Shield-plugged-into-a-MacBook.jpg",
    desc: "IP65 himoya darajasi va o'ta yuqori tezlikdagi ma'lumot uzatish."
  },
  {
    id: 47, categoryId: 'aksessuarlar', name: "Logitech G Pro X 2 LIGHTSPEED Gaming Headset",
    price: 3500000, oldPrice: 4200000, rating: 4.9, reviews: 85, badge: "PROF",
    img: "https://www.gamingislife.sg/cdn/shop/files/LOGITECHGPROX2HEADSET-MAGENTA-981-001276.jpg?v=1716620041&width=1214",
    desc: "Graphene drayverlar yordamida tiniq audio va simsiz erkinlik."
  },
  {
    id: 48, categoryId: 'aksessuarlar', name: "Elgato Stream Deck MK.2, 15 LCD Keys",
    price: 2100000, oldPrice: 2600000, rating: 5.0, reviews: 310, badge: "STUDIO",
    img: "https://m.media-amazon.com/images/I/71WEp9nBMbL._AC_UF894,1000_QL80_.jpg",
    desc: "Striming va ish unumdorligini oshirish uchun universal boshqaruv paneli."
  },
  {
    id: 49, categoryId: 'aksessuarlar', name: "Anker 511 Charger (Nano 3) 30W",
    price: 280000, oldPrice: 380000, rating: 4.8, reviews: 620, badge: "IXCHAM",
    img: "https://i.ebayimg.com/images/g/sToAAOSw-XxmVE5W/s-l400.jpg",
    desc: "iPhone va iPad uchun o'ta ixcham va xavfsiz tezkor quvvatlash qurilmasi."
  },
  {
    id: 50, categoryId: 'aksessuarlar', name: "DJI Osmo Mobile 6, Smartfon stabilizatori",
    price: 1950000, oldPrice: 2300000, rating: 4.9, reviews: 180, badge: "VIDEO",
    img: "https://m.media-amazon.com/images/I/61EF4SC+ojL._AC_SL1200_.jpg",
    desc: "Silliq va professional videolar olish uchun 3-o'qli gimbal stabilizator."
  },
  {
    id: 51, categoryId: 'aksessuarlar', name: "Logitech C922 Pro HD Webcam, 1080p",
    price: 1100000, oldPrice: 1400000, rating: 4.8, reviews: 890, badge: "VIDEO",
    img: "https://www.gamingislife.sg/cdn/shop/files/Slide167_5caf14d6-833a-45b6-bbe3-42bfe7cb2d29.jpg?v=1717930047&width=1214",
    desc: "Striming va video muloqotlar uchun tiniq HD tasvir."
  },
  {
    id: 52, categoryId: 'aksessuarlar', name: "SteelSeries Arctis Nova 7 Wireless",
    price: 2450000, oldPrice: 2900000, rating: 4.9, reviews: 310, badge: "XIT",
    img: "https://www.gamingislife.sg/cdn/shop/files/Slide91_15ec84f8-b5ee-4c26-b057-ec1214bd0cfc.jpg?v=1734768114&width=1214",
    desc: "O'yinlar uchun eng qulay va silliq audio tajribasi."
  },
  {
    id: 53, categoryId: 'aksessuarlar', name: "WD Black P40 1TB Game Drive SSD",
    price: 1850000, oldPrice: 2200000, rating: 4.9, reviews: 150, badge: "GAMING",
    img: "https://down-id.img.susercontent.com/file/id-11134207-8224o-mhq4mk29r4egdc",
    desc: "Konsol va PK uchun o'ta tezkor yoritilgan tashqi xotira."
  },
  {
    id: 54, categoryId: 'aksessuarlar', name: "Keychron Q1 Pro Wireless Mechanical Keyboard",
    price: 2650000, oldPrice: 3200000, rating: 5.0, reviews: 85, badge: "PREMIUM",
    img: "https://i.ytimg.com/vi/URjj7-QghHs/maxresdefault.jpg  ",
    desc: "To'liq alyuminiy korpusli professional mexanik klaviatura."
  },
  {
    id: 55, categoryId: 'aksessuarlar', name: "Shargeek Storm 2 Slim 20000mAh Power Bank",
    price: 2100000, oldPrice: 2500000, rating: 4.9, reviews: 120, badge: "STYLE",
    img: "https://vseplus.com/images/p/full/395612e.jpg",
    desc: "Shaffof dizayn va quvvat boshqaruvi displeyi bilan futuristik batareya."
  }
];
