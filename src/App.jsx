import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  MapPin, 
  Menu, 
  ChevronRight, 
  ChevronDown,
  ArrowLeft, 
  Star, 
  Trash2, 
  Plus, 
  Minus, 
  X,
  CheckCircle,
  Send
} from 'lucide-react';

const Instagram = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const Facebook = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Youtube = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2.3 5.8 3.5 4.6C4.9 3.2 6.5 3.2 7.3 3.1C10.7 2.9 16 3.1 16 3.1C16 3.1 19.3 2.9 20.7 4.6C21.9 5.8 21.7 7.1 21.7 7.1C21.9 8.6 22 10.1 22 11.6V12.4C22 13.9 21.9 15.4 21.7 16.9C21.7 16.9 21.9 18.2 20.7 19.4C19.3 20.8 17.5 20.8 16.7 20.9C13 21.3 7.3 20.9 7.3 20.9C7.3 20.9 4.9 20.8 3.5 19.4C2.3 18.2 2.5 16.9 2.5 16.9C2.3 15.4 2.2 13.9 2.2 12.4V11.6C2.2 10.1 2.3 8.6 2.5 7.1Z"/><polygon points="9.5 8.7 15.5 12 9.5 15.3 9.5 8.7"/></svg>;

import { PRODUCTS_DATA, CATEGORIES } from './data.js';

export default function App() {
  const [view, setView] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [modals, setModals] = useState({ cart: false, fav: false, login: false });
  const [toast, setToast] = useState({ show: false, message: '' });

  const [activeCategoryId, setActiveCategoryId] = useState('smartfonlar');
  const [filters, setFilters] = useState({ minPrice: 0, maxPrice: 100000000, ram: [], size: [] });

  const activeCategoryData = useMemo(() => CATEGORIES.find(c => c.id === activeCategoryId) || CATEGORIES[0], [activeCategoryId]);

  const toggleRamFilter = (val) => {
    setFilters(prev => ({ ...prev, ram: prev.ram.includes(val) ? prev.ram.filter(r => r !== val) : [...prev.ram, val] }));
  };

  const toggleSizeFilter = (val) => {
    setFilters(prev => ({ ...prev, size: prev.size.includes(val) ? prev.size.filter(s => s !== val) : [...prev.size, val] }));
  };

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS_DATA;
    
    // Kategoriya ochiq bo'lsa
    if (view === 'category') {
      result = result.filter(p => p.categoryId === activeCategoryId);
      // Narx filtri
      result = result.filter(p => p.price >= filters.minPrice && p.price <= filters.maxPrice);
      // Dinamik filtrlar
      if (filters.ram.length > 0) result = result.filter(p => filters.ram.includes(p.ram));
      if (filters.size.length > 0) result = result.filter(p => filters.size.includes(p.size));
    }

    if (searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return result;
  }, [searchTerm, view, activeCategoryId, filters]);

  const selectedProduct = useMemo(() => {
    return PRODUCTS_DATA.find(p => p.id === selectedProductId);
  }, [selectedProductId]);

  const cartTotal = useMemo(() => {
    return cart.reduce((acc, curr) => acc + (curr.price * curr.count), 0);
  }, [cart]);

  const cartCount = useMemo(() => {
    return cart.reduce((acc, curr) => acc + curr.count, 0);
  }, [cart]);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, count: item.count + 1 } : item);
      }
      return [...prev, { ...product, count: 1 }];
    });
    showToast(`${product.name.substring(0, 20)}... savatga qo'shildi`);
  };

  const updateCartQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newCount = item.count + delta;
        return newCount > 0 ? { ...item, count: newCount } : item;
      }
      return item;
    }).filter(item => item.count > 0));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(prev => prev.filter(fid => fid !== id));
      showToast("Saralanganlardan o'chirildi");
    } else {
      setFavorites(prev => [...prev, id]);
      showToast("Saralanganlarga qo'shildi");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-[#1f2026] font-sans selection:bg-purple-100 flex flex-col">
      
      {/* TOAST NOTIFICATION */}
      <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-8 py-4 rounded-2xl shadow-2xl z-[200] flex items-center gap-3 transition-all duration-500 ${toast.show ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
        <CheckCircle className="text-green-400 w-6 h-6" />
        <span className="font-medium">{toast.message}</span>
      </div>

      {/* HEADER */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="bg-[#f2f4f7] py-1.5 hidden md:block border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[12px] text-gray-500">
            <div className="flex items-center gap-4">
              <span className="hover:text-black cursor-pointer flex items-center gap-1"><MapPin size={14} /> Toshkent</span>
              <span className="hover:text-black cursor-pointer" onClick={() => showToast("Topshirish punktlari xaritasi yuklanmoqda...")}>Topshirish punktlari</span>
            </div>
            <div className="flex items-center gap-4 font-medium">
              <span className="text-gray-400">Buyurtmangizni 1 kunda bepul yetkazib beramiz!</span>
              <span className="hover:text-black cursor-pointer" onClick={() => showToast("Sotuvchi bo'lish bo'limi tez orada ishga tushadi.")}>Sotuvchi bo'ling</span>
              <span className="hover:text-black cursor-pointer" onClick={() => showToast("Faol savol-javoblar tez orada qo'shiladi.")}>Savol-javoblar</span>
              <div className="flex items-center gap-1 cursor-pointer">
                <img src="https://flagcdn.com/w20/uz.png" width="14" alt="UZ" /> O'zbekcha
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setView('home')}>
            <div className="w-10 h-10 bg-[#7000ff] rounded-full flex items-center justify-center text-white text-xl font-bold group-hover:rotate-12 transition-transform">U</div>
            <span className="text-2xl font-bold text-[#7000ff] hidden lg:block">uzum market</span>
          </div>

          <button onClick={() => showToast("Katalog menyusi yangilanmoqda...")} className="bg-[#f0edff] text-[#7000ff] px-4 py-2.5 rounded-lg flex items-center gap-2 font-semibold hover:bg-[#e5e0ff] transition-colors">
            <Menu size={20} /> Katalog
          </button>

          <div className="flex-grow relative">
            <input 
              type="text" 
              placeholder="Mahsulotlar qidirish..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-200 rounded-lg py-2.5 pl-4 pr-12 outline-none focus:border-[#7000ff] bg-gray-50 transition-all"
            />
            <button className="absolute right-0 top-0 h-full px-5 text-gray-400 hover:text-[#7000ff]"><Search size={20}/></button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center cursor-pointer text-gray-700 hover:text-[#7000ff]" onClick={() => setModals({...modals, login: true})}>
              <User size={22} />
              <span className="text-[11px] mt-1 font-medium">Kirish</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-700 hover:text-[#7000ff] relative" onClick={() => setModals({...modals, fav: true})}>
              <Heart size={22} className={favorites.length > 0 ? "fill-red-500 text-red-500" : ""} />
              <span className="text-[11px] mt-1 font-medium">Saralangan</span>
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#7000ff] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">{favorites.length}</span>
              )}
            </div>
            <div className="flex flex-col items-center cursor-pointer text-gray-700 hover:text-[#7000ff] relative" onClick={() => setModals({...modals, cart: true})}>
              <ShoppingBag size={22} />
              <span className="text-[11px] mt-1 font-medium">Savat</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#7000ff] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center animate-pulse">{cartCount}</span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* CATEGORY BAR */}
      <div className="bg-white border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-[13px] font-medium text-gray-600">
          <div className="flex items-center gap-6 overflow-x-auto custom-scroll pb-2">
            {CATEGORIES.map(cat => (
              <div 
                key={cat.id} 
                onClick={() => { setActiveCategoryId(cat.id); setView('category'); window.scrollTo(0, 0); }} 
                className={`flex items-center gap-2 cursor-pointer whitespace-nowrap transition-colors ${activeCategoryId === cat.id && view === 'category' ? 'text-[#7000ff] font-bold border-b-2 border-[#7000ff]' : 'hover:text-black'}`}
              >
                {cat.icon && <span className="text-xl">{cat.icon}</span>} {cat.name}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black ml-6 whitespace-nowrap text-gray-500">Yana <ChevronDown size={14}/></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        {view === 'home' ? (
          <section className="animate-in fade-in duration-500">
            {/* HERO BANNER */}
            <div className="rounded-3xl overflow-hidden mb-12 h-[380px] relative shadow-2xl group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070" alt="Banner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center px-16 text-white">
                <span className="bg-yellow-400 text-black font-bold px-4 py-1.5 rounded-full text-xs w-fit mb-6 tracking-wider">SUPER CHEGIRMA</span>
                <h2 className="text-6xl font-black mb-6 leading-tight">Yozgi Katta <br /> Sotuvlar!</h2>
                <p className="text-xl opacity-90 mb-10 max-w-lg font-medium">Sevimli mahsulotlaringizni 50% gacha foyda bilan xarid qiling.</p>
                <button className="bg-white text-[#7000ff] px-10 py-4 rounded-2xl font-black w-fit hover:scale-105 active:scale-95 transition-all shadow-xl">HOZIR XARID QILISH</button>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">Hafta xitlari <ChevronRight size={20} className="text-gray-300" /></h2>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    isFavorite={favorites.includes(product.id)}
                    onDetail={() => { setSelectedProductId(product.id); setView('detail'); window.scrollTo(0,0); }}
                    onToggleFav={() => toggleFavorite(product.id)}
                    onAddToCart={() => addToCart(product)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-100">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mb-6">
                  <Search size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Hech narsa topilmadi</h3>
                <p className="text-gray-400">Qidiruv so'rovini o'zgartirib ko'ring</p>
              </div>
            )}
          </section>
        ) : view === 'category' ? (
          <section className="animate-in fade-in duration-500">
            <div className="text-[13px] text-gray-500 mb-6 font-medium">
              <span className="cursor-pointer hover:text-black" onClick={() => setView('home')}>Bosh sahifa</span> <span className="mx-1">/</span> <span className="text-gray-400">{activeCategoryData?.name}</span>
            </div>

            <h1 className="text-3xl font-bold mb-8 text-[#1f2026] flex items-center gap-3">
              {activeCategoryData?.icon} {activeCategoryData?.name}
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* SIDEBAR FILTER */}
              <div className="w-full lg:w-64 flex-shrink-0 space-y-8">
                <div>
                  <h3 className="font-medium text-gray-800 mb-4 text-[15px]">Turkumlar</h3>
                  <p className="text-gray-600 hover:text-[#7000ff] cursor-pointer text-[14px] pl-2 transition-colors">Elektronika</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-4 text-[15px]">Narx, baho, so'm</h3>
                  <div className="flex flex-col xl:flex-row gap-2 mb-4">
                    <div className="border border-gray-300 hover:border-gray-400 rounded-lg px-3 py-2 flex-1 flex items-center transition-colors">
                      <span className="text-gray-400 text-xs mr-2">dan</span>
                      <input type="number" value={filters.minPrice} onChange={e => setFilters({...filters, minPrice: Number(e.target.value)})} className="w-full outline-none text-[13px] font-medium bg-transparent text-gray-800" />
                    </div>
                    <div className="border border-gray-300 hover:border-gray-400 rounded-lg px-3 py-2 flex-1 flex items-center transition-colors">
                      <span className="text-gray-400 text-xs mr-2">gacha</span>
                      <input type="number" value={filters.maxPrice} onChange={e => setFilters({...filters, maxPrice: Number(e.target.value)})} className="w-full outline-none text-[13px] font-medium bg-transparent text-gray-800" />
                    </div>
                  </div>
                </div>

                {activeCategoryId === 'smartfonlar' && (
                  <div>
                    <h3 className="font-medium text-gray-800 mb-4 text-[15px]">Operativ xotira, Gb</h3>
                    <div className="space-y-3">
                      {[4, 6, 8, 12].map(ram => (
                        <label key={ram} className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" checked={filters.ram.includes(ram)} onChange={() => toggleRamFilter(ram)} className="w-4 h-4 rounded text-[#7000ff] focus:ring-[#7000ff]" />
                          <span className="text-gray-800 text-[14px] group-hover:text-black">{ram} GB</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {['bahorgi'].includes(activeCategoryId) && (
                  <div>
                    <h3 className="font-medium text-gray-800 mb-4 text-[15px]">O'lcham</h3>
                    <div className="space-y-3">
                      {['M', 'L', 'XL', '42', '44'].map(size => (
                        <label key={size} className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" checked={filters.size.includes(size)} onChange={() => toggleSizeFilter(size)} className="w-4 h-4 rounded text-[#7000ff] focus:ring-[#7000ff]" />
                          <span className="text-gray-800 text-[14px] group-hover:text-black">{size}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* PRODUCTS GRID */}
              <div className="flex-1">
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        isFavorite={favorites.includes(product.id)}
                        onDetail={() => { setSelectedProductId(product.id); setView('detail'); window.scrollTo(0,0); }}
                        onToggleFav={() => toggleFavorite(product.id)}
                        onAddToCart={() => addToCart(product)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-gray-100">
                    <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center text-gray-200 mb-6">
                      <Search size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Hech narsa topilmadi</h3>
                  </div>
                )}
              </div>
            </div>
          </section>
        ) : (
          <section className="animate-in slide-in-from-bottom-10 duration-500">
            <button onClick={() => setView('home')} className="mb-8 text-gray-500 hover:text-black flex items-center gap-2 font-bold group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Orqaga qaytish
            </button>
            {selectedProduct && (
              <div className="bg-white rounded-[40px] p-10 shadow-sm flex flex-col lg:flex-row gap-16 min-h-[600px] border border-gray-100">
                <div className="flex-1 overflow-hidden rounded-[32px] bg-gray-50 group">
                  <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-full max-h-[600px] object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex-1 space-y-10 py-4">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm font-bold flex items-center gap-1 bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full"><Star size={14} className="fill-current" /> {selectedProduct.rating}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-500 text-sm font-medium">{selectedProduct.reviews} ta sharh</span>
                    </div>
                    <h1 className="text-5xl font-black leading-[1.1] mb-6 tracking-tight">{selectedProduct.name}</h1>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-gray-400 line-through text-2xl font-medium">{selectedProduct.oldPrice.toLocaleString()} so'm</span>
                    <div className="flex items-center gap-6">
                      <span className="text-5xl font-black text-[#7000ff]">{selectedProduct.price.toLocaleString()} so'm</span>
                      <span className="bg-red-500 text-white px-4 py-1.5 rounded-xl text-sm font-black animate-bounce">Foyda</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[#f8f7ff] p-6 rounded-3xl border border-purple-50">
                      <p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-widest">Muddatli to'lov</p>
                      <p className="font-black text-xl">{Math.round(selectedProduct.price / 12).toLocaleString()} so'm / oy</p>
                    </div>
                    <div className="bg-green-50/50 p-6 rounded-3xl border border-green-50">
                      <p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-widest">Yetkazib berish</p>
                      <p className="font-black text-xl text-green-700">Ertaga, 0 so'm</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="font-black text-xl">Mahsulot haqida qisqacha:</p>
                    <p className="text-gray-600 leading-relaxed text-lg font-medium">{selectedProduct.desc}</p>
                  </div>

                  <div className="flex gap-6 pt-10">
                    <button 
                      onClick={() => addToCart(selectedProduct)}
                      className="flex-grow bg-[#7000ff] text-white py-6 rounded-[24px] font-black text-2xl hover:bg-[#5a00cc] shadow-2xl shadow-purple-200 active:scale-95 transition-all"
                    >
                      Savatga qo'shish
                    </button>
                    <button 
                      onClick={() => toggleFavorite(selectedProduct.id)}
                      className="w-24 h-24 rounded-[24px] border-4 border-gray-50 flex items-center justify-center text-4xl hover:bg-red-50 hover:border-red-100 transition-all active:scale-90"
                    >
                      <Heart className={favorites.includes(selectedProduct.id) ? "fill-red-500 text-red-500" : "text-gray-300"} size={32} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}
      </main>

      {/* FOOTER SECTION */}
      <footer className="bg-white border-t border-gray-100 pt-12 pb-8 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-6">Biz haqimizda</h4>
              <ul className="space-y-3 text-gray-500 font-medium">
                <li className="hover:text-black cursor-pointer transition-colors">Topshirish punktlari</li>
                <li className="hover:text-black cursor-pointer transition-colors">Vakansiyalar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Foydalanuvchilarga</h4>
              <ul className="space-y-3 text-gray-500 font-medium">
                <li className="hover:text-black cursor-pointer transition-colors">Biz bilan bog'lanish</li>
                <li className="hover:text-black cursor-pointer transition-colors">Savol-javoblar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Tadbirkorlarga</h4>
              <ul className="space-y-3 text-gray-500 font-medium">
                <li className="hover:text-black cursor-pointer transition-colors">Uzumda soting</li>
                <li className="hover:text-black cursor-pointer transition-colors">Sotuvchi kabinetiga kirish</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Ilovani yuklab olish</h4>
              <div className="flex gap-4 mb-8">
                <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-10" alt="AppStore" />
                </a>
                <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-10" alt="GooglePlay" />
                </a>
              </div>
              <h4 className="font-bold text-lg mb-4">Uzum ijtimoiy tarmoqlarda</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer text-pink-600 transition-colors">
                  <Instagram size={24} />
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer text-blue-500 transition-colors">
                  <Send size={24} />
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer text-blue-700 transition-colors">
                  <Facebook size={24} />
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer text-red-600 transition-colors">
                  <Youtube size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-400">
             <div className="flex gap-6">
               <span className="text-black font-bold">Maxfiylik kelishuvi</span>
               <span>Foydalanuvchi kelishuvi</span>
             </div>
             <div>«2024© OOO «UZUM MARKET». INN 309376127. Barcha huquqlar himoyalangan»</div>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      {modals.cart && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex justify-end animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-lg h-full p-8 flex flex-col shadow-2xl animate-in slide-in-from-right duration-500">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-black">Savat</h2>
              <button onClick={() => setModals({...modals, cart: false})} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={32}/></button>
            </div>
            <div className="flex-grow overflow-y-auto space-y-6 pr-2 custom-scroll">
              {cart.length > 0 ? cart.map(item => (
                <div key={item.id} className="flex gap-6 bg-gray-50 p-6 rounded-3xl border border-gray-100 group">
                  <img src={item.img} className="w-24 h-24 object-cover rounded-2xl shadow-sm" alt={item.name} />
                  <div className="flex-grow">
                    <h4 className="font-bold text-lg mb-1 line-clamp-1">{item.name}</h4>
                    <p className="text-gray-400 font-medium mb-4">{item.price.toLocaleString()} so'm</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5 bg-white px-4 py-2 rounded-2xl border-2 border-gray-100 shadow-sm">
                        <button onClick={() => updateCartQty(item.id, -1)} className="text-gray-400 hover:text-black font-bold text-xl"><Minus size={18}/></button>
                        <span className="font-black text-lg w-6 text-center">{item.count}</span>
                        <button onClick={() => updateCartQty(item.id, 1)} className="text-gray-400 hover:text-black font-bold text-xl"><Plus size={18}/></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-200 hover:text-red-500 transition-colors p-2"><Trash2 size={24}/></button>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="flex flex-col items-center justify-center h-full opacity-30 text-center">
                  <ShoppingBag size={100} className="mb-6" />
                  <p className="text-xl font-bold">Savat hozircha bo'sh</p>
                </div>
              )}
            </div>
            <div className="border-t-2 border-dashed pt-8 mt-6">
              <div className="flex justify-between text-2xl font-black mb-8">
                <span>Jami:</span>
                <span className="text-[#7000ff]">{cartTotal.toLocaleString()} so'm</span>
              </div>
              <button className="w-full bg-[#7000ff] text-white py-5 rounded-3xl font-black text-xl hover:shadow-xl hover:shadow-purple-200 active:scale-95 transition-all disabled:opacity-50 disabled:pointer-events-none" disabled={cart.length === 0}>
                RASMIYLASHTIRISH
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAVORITES MODAL */}
      {modals.fav && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-4xl rounded-[40px] p-10 max-h-[85vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-3">
                <Heart size={32} className="fill-red-500 text-red-500" />
                <h2 className="text-3xl font-black">Saralanganlar</h2>
              </div>
              <button onClick={() => setModals({...modals, fav: false})} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={32}/></button>
            </div>
            <div className="flex-grow overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-6 pr-2 custom-scroll">
              {favorites.length > 0 ? favorites.map(fid => {
                const p = PRODUCTS_DATA.find(x => x.id === fid);
                return (
                  <div key={p.id} className="flex gap-6 p-6 border-2 border-gray-50 rounded-[32px] bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all relative group">
                     <img src={p.img} className="w-28 h-28 object-cover rounded-2xl shadow-sm" alt={p.name} />
                     <div className="flex-grow flex flex-col justify-between">
                         <div>
                            <h4 className="font-bold text-lg line-clamp-1 mb-1">{p.name}</h4>
                            <p className="text-2xl font-black text-[#7000ff]">{p.price.toLocaleString()} so'm</p>
                         </div>
                         <button 
                            onClick={() => { addToCart(p); setModals({...modals, fav: false}); }} 
                            className="w-full mt-4 bg-white border-2 border-[#7000ff] text-[#7000ff] text-sm font-black py-3 rounded-2xl hover:bg-[#7000ff] hover:text-white transition-all shadow-sm"
                         >
                            Savatga o'tkazish
                         </button>
                     </div>
                     <button onClick={() => toggleFavorite(p.id)} className="absolute top-6 right-6 text-red-500 hover:scale-110 transition-transform"><Heart size={24} className="fill-current" /></button>
                  </div>
                );
              }) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 opacity-20">
                  <Heart size={100} className="mb-6" />
                  <p className="text-2xl font-bold">Hech narsa saqlanmagan</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* LOGIN MODAL */}
      {modals.login && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-[48px] p-16 w-full max-w-md text-center shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button onClick={() => setModals({...modals, login: false})} className="absolute top-8 right-8 text-gray-300 hover:text-black transition-colors"><X size={28}/></button>
            <div className="w-20 h-20 bg-[#f0edff] text-[#7000ff] rounded-[24px] flex items-center justify-center text-4xl mx-auto mb-8 shadow-inner">
              <User size={40} />
            </div>
            <h2 className="text-3xl font-black mb-4">Xush kelibsiz</h2>
            <p className="text-gray-500 text-lg mb-12 font-medium">Telefon raqamingiz orqali shaxsiy kabinetga kiring</p>
            <div className="relative mb-10 group">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-xl text-gray-400 group-focus-within:text-[#7000ff] transition-colors">+998</span>
              <input type="text" placeholder=" 00 000-00-00" className="w-full border-4 border-gray-50 bg-gray-50 rounded-3xl py-5 pl-20 pr-6 outline-none focus:border-[#7000ff] focus:bg-white text-xl font-black transition-all" />
            </div>
            <button className="w-full bg-[#7000ff] text-white py-5 rounded-3xl font-black text-xl hover:opacity-90 shadow-2xl shadow-purple-200 active:scale-95 transition-all mb-8">Kodni olish</button>
            <p className="text-gray-400 text-sm">Kirish orqali siz foydalanish shartlariga rozilik bildirasiz</p>
          </div>
        </div>
      )}

    </div>
  );
}

// PRODUCT CARD COMPONENT
function ProductCard({ product, isFavorite, onDetail, onToggleFav, onAddToCart }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 relative border border-gray-100 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]" onClick={onDetail}>
      <div className="relative h-72 bg-gray-50 overflow-hidden">
        {product.badge && (
          <span className="absolute top-4 left-4 bg-[#7000ff] text-white text-[10px] px-3 py-1.5 rounded-full font-black z-10 shadow-lg tracking-widest">{product.badge}</span>
        )}
        <button 
          onClick={(e) => { e.stopPropagation(); onToggleFav(); }} 
          className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 active:scale-90 z-10 transition-all shadow-md group/btn"
        >
          <Heart className={`transition-all duration-300 ${isFavorite ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-300 group-hover/btn:text-red-300'}`} size={22} />
        </button>
        <img src={product.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={product.name} />
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-[15px] font-bold text-gray-800 line-clamp-2 h-11 mb-3 leading-tight group-hover:text-[#7000ff] transition-colors">{product.name}</h3>
        
        <div className="text-[12px] mb-5 flex items-center gap-1.5">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-gray-800 font-bold">{product.rating}</span> 
          <span className="text-gray-400 font-medium">({product.reviews} ta sharh)</span>
        </div>
        
        <div className="bg-yellow-100/60 text-[#1f2026] text-[11px] font-black px-3 py-1.5 rounded-xl w-fit mb-6">
          {Math.round(product.price / 12).toLocaleString()} so'm/oy
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-50">
          <div className="text-[13px] text-gray-300 line-through mb-1 font-bold">{product.oldPrice.toLocaleString()} so'm</div>
          <div className="flex justify-between items-center">
            <span className="font-black text-[19px] tracking-tight">{product.price.toLocaleString()} so'm</span>
            <button 
              onClick={(e) => { e.stopPropagation(); onAddToCart(); }} 
              className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#7000ff] hover:text-white transition-all hover:shadow-lg hover:shadow-purple-200 active:scale-90"
            >
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
