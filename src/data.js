import pocoImg from './assets/images/image.png';

export const CATEGORIES = [
  { id: 'hafta', name: 'Hafta tovarlari', icon: '🔥' },
  { id: 'bahorgi', name: 'Bahorgi kolleksiya', icon: '👗' },
  { id: 'gozallik', name: "Sizning go'zalligingiz", icon: '💄' },
  { id: 'xobbi', name: 'Xobbi va ijod', icon: '🎸' },
  { id: 'smartfonlar', name: 'Smartfonlari', icon: '📱' },
  { id: 'yarmarka', name: 'Bahor yarmarkasi', icon: '🧺' },
  { id: 'mebel', name: 'Mebel', icon: '🪑' },
  { id: 'turizm', name: 'Turizm, ovchilik', icon: '⛺' }
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
  }
];
