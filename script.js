/* ==========================================
   ELJEL APPAREL - script.js
   ========================================== */

// ========== DATA PRODUK ==========
// Ukuran celana: 28,29,30,31 | Baju/Dress: S,M,L,XL
// img: null = pakai emoji, img: 'url' = pakai foto

let products = [
  {
    id: 1,
    name: 'Eljel Sleeveless White Layered Shirt',
    cat: 'Atasan',
    price: 149000,
    oldPrice: 230000,
    stock: 24,
    emoji: '👚',
    img: 'img/desbaj2.jpg',
    desc: 'Kemeja tanpa lengan berwarna putih dengan detail cutting asimetris dan inner hitam yang menyatu. Memberikan kesan layering yang rapi dan modern.',
    badge: 'New',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Eljel Maroon Pleated Shirt Dress',
    cat: 'Dress',
    price: 360000,
    oldPrice: null,
    stock: 18,
    emoji: '🍷',
    img: 'img/desdres3.jpg',
    desc: 'Shirt dress lengan pendek warna marun dengan bagian bawah rok model lipit. Dilengkapi kancing penuh di bagian depan dan logo EL hitam di dada.',
    badge: 'Bestseller',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: 3,
    name: 'Eljel Grey Wide-Leg Cuffed Jeans',
    cat: 'Celana',
    price: 325000,
    oldPrice: 350000,
    stock: 20,
    emoji: '🐘',
    img: 'img/descel1.jpg',
    desc: 'Celana jeans potongan lebar (wide-leg) warna abu-abu dengan detail lipatan bawah (cuff) warna kontras yang unik.',
    badge: 'Hot Item',
    sizes: ['28', '29', '30', '31'],
  },
  {
    id: 4,
    name: 'Eljel Blue Flare Denim Jeans',
    cat: 'Celana',
    price: 310000,
    oldPrice: null,
    stock: 8,
    emoji: '👖',
    img: 'img/descel3.jpg',
    desc: 'Celana jeans model flare (cutbray) warna biru klasik yang memberikan efek kaki lebih jenjang dan siluet retro.',
    badge: 'Limited',
    sizes: ['28', '29', '30', '31'],
  },
  {
    id: 5,
    name: 'Eljel V-Neck Ribbed Blue Top',
    cat: 'Atasan',
    price: 155000,
    oldPrice: null,
    stock: 42,
    emoji: '🦋',
    img: 'img/desbaj5.jpg',
    desc: 'Kaos lengan panjang bahan ribbed warna biru muda dengan kerah V dan detail kancing kecil di bagian samping leher.',
    badge: null,
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 6,
    name: 'ljel Sleeveless Raw-Edge Denim Dress',
    cat: 'Dress',
    price: 345000,
    oldPrice: null,
    stock: 15,
    emoji: '🥻',
    img: 'img/desdres1.jpg',
    desc: 'Dress denim tanpa lengan dengan detail kerah klasik dan aksen raw-edge (serabut) pada lubang lengan. Dilengkapi kantong dada dengan bordir logo EL senada.',
    badge: 'New',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 7,
    name: 'Eljel Ivory Pleated Ribbon Dress',
    cat: 'Dress',
    price: 385000,
    oldPrice: null,
    stock: 7,
    emoji: '👗',
    img: 'img/desdres2.jpg',
    desc: 'Dress tanpa lengan berwarna ivory dengan detail lipit (pleated) vertikal yang elegan dan aksen dua tali pita di bagian dada. Sangat feminin dan manis.',
    badge: 'Limited',
    sizes: ['S', 'M', 'L','XL'],
  },
  {
    id: 8,
    name: 'Eljel Dark Blue Denim Jacket',
    cat: 'Jaket',
    price: 299000,
    oldPrice: 350000,
    stock: 20,
    emoji: '🧥',
    img: 'img/desbaj3.jpg',
    desc: 'Jaket denim dengan potongan boxy, dilengkapi dua kantong depan besar dan kerah klasik. Cocok untuk tampilan street style.',
    badge: 'New',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 9,
    name: 'Eljel Pink Stripe Crop Longsleeve',
    cat: 'Atasan',
    price: 145000,
    oldPrice: null,
    stock: 35,
    emoji: '🌸',
    img: 'img/desbaj6.jpg',
    desc: 'Kaos crop lengan panjang warna pink pastel dengan detail garis putih di bagian lengan, memberikan kesan sporty chic.',
    badge: 'Trending',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 10,
    name: 'Eljel Brown Fuzzy Knit Sweater',
    cat: 'Atasan',
    price: 215000,
    oldPrice: 259000,
    stock: 35,
    emoji: '🧸',
    img: 'img/desbaj4.jpg',
    desc: 'Sweater rajut bertekstur bulu (fuzzy) warna cokelat tua dengan detail logo bordir "EL" di dada. Sangat nyaman dan hangat.',
    badge: 'Limited',
    sizes: ['S', 'M', 'L', 'XL'],
  },
   {
    id: 11,
    name: 'Eljel White Denim Culottes',
    cat: 'Celana',
    price: 245000,
    oldPrice: 289000,
    stock: 18,
    emoji: '☁️',
    img: 'img/descel2.jpg',
    desc: 'Celana pendek kulot warna putih bersih dengan detail tali serut biru pada pinggang. Nyaman untuk gaya santai.',
    badge: 'Summer Pick',
    sizes:['28', '29', '30', '31'],
  },
  {
    id: 12,
    name: 'Eljel Beige Utility Cargo Shorts',
    cat: 'New Arrivals',
    price: 165000,
    oldPrice: 199000,
    stock: 19,
    emoji: '🍦',
    img: 'img/descel4.jpg',
    desc: 'Celana pendek high-waist warna beige dengan detail kantong kargo besar di bagian depan dan bordir logo "EL" berwarna marun. Memberikan kesan vintage-utility yang chic.',
    badge: 'New',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 13,
    name: 'Eljel Monochrome Striped Tee',
    cat: 'Atasan',
    price: 129000,
    oldPrice: 210000,
    stock: 35,
    emoji: '🏁',
    img: 'img/desbajnw.jpg',
    desc: 'Kaos lengan pendek motif garis horizontal hitam putih dengan logo bordir EL yang ikonik. Item wajib untuk daily wear.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

// ========== LOCALSTORAGE ==========
const DEFAULT_PRODUCTS = JSON.parse(JSON.stringify(products));

function saveProducts() {
  localStorage.setItem('eljel_products', JSON.stringify(products));
}

function loadProducts() {
  const saved = localStorage.getItem('eljel_products');
  if (saved) {
    try {
      products = JSON.parse(saved);
    } catch (e) {
      products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    }
  }
}

function resetProducts() {
  localStorage.removeItem('eljel_products');
  products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  renderAdmin();
  renderProducts();
  renderFeatured();
  showToast('Data produk direset ke default', 'success');
}

// ========== STATE ==========
let cart = [];
let currentUser = null;
let totalOrders = 0;
let totalRevenue = 0;
let selectedPayment = '';
let selectedBank = '';
let selectedEwallet = '';
let selectedCicilan = '';
let selectedMinimarket = '';
let minimarketCode = '';
let bankPin = [];
let editingId = null;
let editingImgData = null;
let activeFilter = 'all';
let currentProduct = null;
let detailQty = 1;

// ========== INIT ==========
window.onload = () => {
  loadProducts();
  setTimeout(() => {
    document.getElementById('loadingOverlay').classList.add('hide');
    renderFeatured();
    renderProducts();
    renderAdmin();
  }, 1500);
};

// ========== NAVIGATION ==========
function showPage(p) {
  document.querySelectorAll('.page').forEach((el) => el.classList.remove('active'));
  document.getElementById('page-' + p).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach((a) => a.classList.remove('active'));
  if (document.getElementById('nav-' + p)) document.getElementById('nav-' + p).classList.add('active');
  if (p === 'cart') renderCart();
  if (p === 'checkout') renderCheckout();
  if (p === 'admin') renderAdmin();
  if (p === 'products') renderProducts();
  if (p === 'home') renderFeatured();
  window.scrollTo(0, 0);
}

function goToCategory(cat) {
  activeFilter = cat;
  showPage('products');
  // Update filter chips after page shown
  setTimeout(() => {
    document.querySelectorAll('.filter-chip').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.filter-chip').forEach((b) => {
      if (b.textContent.trim() === cat) b.classList.add('active');
    });
    renderProducts();
  }, 50);
}

function toggleAuth() {
  if (currentUser) {
    currentUser = null;
    document.getElementById('navUserBtn').textContent = 'Masuk';
    showToast('Berhasil keluar', 'success');
  } else {
    showPage('auth');
  }
}

function scrollToFeatured() {
  document.getElementById('featured-section').scrollIntoView({ behavior: 'smooth' });
}

// ========== RENDER HELPERS ==========
function fmt(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

function catColor(c) {
  const m = {
    Baju: '#F5EBE0',
    Celana: '#E8F0E8',
    Dress: '#F0E8EF',
    'New Arrivals': '#EEE8F5',
  };
  return m[c] || '#F0EAE0';
}

function productImageHTML(p, size = 'normal') {
  if (p.img) {
    return `<img src="${p.img}" alt="${p.name}" class="product-photo">`;
  }
  const fontSize = size === 'detail' ? '8rem' : '4rem';
  return `<span class="product-emoji" style="font-size:${fontSize}">${p.emoji}</span>`;
}

// ========== FEATURED ==========
function renderFeatured() {
  const g = document.getElementById('featuredGrid');
  if (g)
    g.innerHTML = products
      .slice(0, 4)
      .map((p) => productCard(p))
      .join('');
}

// ========== PRODUCTS PAGE ==========
function renderProducts() {
  let fp = [...products];
  const q = document.getElementById('searchInput')?.value?.toLowerCase() || '';
  if (activeFilter !== 'all') fp = fp.filter((p) => p.cat === activeFilter);
  if (q) fp = fp.filter((p) => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q));

  const g = document.getElementById('productsGrid');
  if (g) g.innerHTML = fp.length > 0 ? fp.map((p) => productCard(p)).join('') : '<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--taupe)">Produk tidak ditemukan 😔</div>';

  const c = document.getElementById('productCount');
  if (c) c.textContent = fp.length + ' produk ditemukan';

  const title = document.getElementById('productsPageTitle');
  if (title) title.textContent = activeFilter === 'all' ? 'Semua Produk' : activeFilter;
}

function productCard(p) {
  const sold = p.stock <= 0;
  const low = p.stock > 0 && p.stock <= 10;
  const badgeClass = p.badge === 'Sale' ? ' sale' : p.badge === 'New' ? ' new-arr' : '';
  return `<div class="product-card" onclick="showDetail(${p.id})">
    <div class="product-img" style="background:${catColor(p.cat)}">
      ${p.badge ? `<div class="product-badge${badgeClass}">${p.badge}</div>` : ''}
      <div class="product-wishlist" onclick="wishlistToggle(this,event)">🤍</div>
      ${productImageHTML(p)}
    </div>
    <div class="product-info">
      <div class="product-category">${p.cat}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-price-row">
        <div><span class="product-price">${fmt(p.price)}</span>${p.oldPrice ? `<span class="product-price-old">${fmt(p.oldPrice)}</span>` : ''}</div>
      </div>
      <div class="product-stock${low ? ' low' : ''}">${sold ? 'Stok habis' : low ? `⚠ Stok tersisa ${p.stock}` : `✓ Stok: ${p.stock}`}</div>
      <button class="add-cart-btn"${sold ? ' disabled' : ''} onclick="addToCart(${p.id},event)">${sold ? 'Habis' : '+ Keranjang'}</button>
    </div>
  </div>`;
}

function filterByCategory(cat, btn) {
  activeFilter = cat;
  document.querySelectorAll('.filter-chip').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts();
}

function filterProducts() {
  renderProducts();
}

function wishlistToggle(btn, e) {
  e.stopPropagation();
  btn.textContent = btn.textContent === '🤍' ? '❤️' : '🤍';
}

// ========== PRODUCT DETAIL ==========
function showDetail(id) {
  currentProduct = products.find((p) => p.id === id);
  if (!currentProduct) return;
  const p = currentProduct;
  detailQty = 1;
  const sold = p.stock <= 0;

  // Sizes - celana pakai 28-31, lainnya S/M/L/XL
  const sizesHTML = p.sizes.map((s, i) => `<button class="size-btn${i === 0 ? ' active' : ''}" onclick="selectSize(this,'${s}')">${s}</button>`).join('');

  // Detail image - bisa upload foto
  const imgContent = p.img ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px">` : `<span style="font-size:8rem">${p.emoji}</span>`;

  document.getElementById('detailContent').innerHTML = `
    <div>
      <div class="detail-img detail-img-upload" onclick="triggerDetailImgUpload(${p.id})" title="Klik untuk ganti foto">
        <div id="detailImgWrap">${imgContent}</div>
        <div class="img-overlay">
          <span style="font-size:1.5rem">📷</span>
          <span>Ganti Foto</span>
        </div>
      </div>
      <input type="file" id="detailImgInput" accept="image/*" style="display:none" onchange="handleDetailImgUpload(this,${p.id})">
    </div>
    <div class="detail-info">
      <div class="breadcrumb" onclick="showPage('products')">← Kembali ke <span>Produk</span></div>
      <div class="product-category" style="margin-bottom:0.5rem">${p.cat}</div>
      <h1>${p.name}</h1>
      <div style="display:flex;align-items:baseline;gap:0.5rem;margin-bottom:0.5rem">
        <span class="detail-price">${fmt(p.price)}</span>
        ${p.oldPrice ? `<span class="detail-price-old">${fmt(p.oldPrice)}</span>` : ''}
      </div>
      <div class="detail-stock-info">${
        sold ? '<span style="color:var(--rose)">⚠ Stok habis</span>' : p.stock <= 10 ? `<span style="color:var(--rose)">⚠ Stok tersisa: ${p.stock}</span>` : `<span style="color:var(--sage)">✓ Stok tersedia: ${p.stock}</span>`
      }</div>
      <p class="detail-desc">${p.desc}</p>
      <div class="size-selector">
        <div class="size-label">Pilih Ukuran ${p.cat === 'Celana' ? '(inch)' : ''}</div>
        <div class="size-options">${sizesHTML}</div>
      </div>
      <div class="qty-row">
        <div>
          <div class="size-label" style="margin-bottom:0.5rem">Jumlah</div>
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="changeQty(-1)">−</button>
            <span class="qty-val" id="detailQty">1</span>
            <button class="qty-btn" onclick="changeQty(1)">+</button>
          </div>
        </div>
      </div>
      <div class="detail-actions">
        <button class="btn-add-cart"${sold ? ' disabled' : ''} onclick="addToCartFromDetail()">🛍 Tambah ke Keranjang</button>
        <button class="btn-buy-now"${sold ? ' disabled' : ''} onclick="buyNow()">Beli Sekarang</button>
      </div>
    </div>`;

  showPage('detail');
}

function triggerDetailImgUpload(id) {
  const input = document.getElementById('detailImgInput');
  if (input) input.click();
}

function handleDetailImgUpload(input, id) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    // Update product data
    const p = products.find((x) => x.id === id);
    if (p) p.img = dataUrl;
    // Update display
    const wrap = document.getElementById('detailImgWrap');
    if (wrap) wrap.innerHTML = `<img src="${dataUrl}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:12px">`;
    showToast('Foto produk berhasil diupload! 📷', 'success');
    renderProducts();
    renderFeatured();
    renderAdmin();
  };
  reader.readAsDataURL(file);
}

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
}

function changeQty(d) {
  const p = currentProduct;
  if (!p) return;
  detailQty = Math.max(1, Math.min(p.stock, detailQty + d));
  const el = document.getElementById('detailQty');
  if (el) el.textContent = detailQty;
}

function addToCartFromDetail() {
  if (!currentProduct) return;
  const sz = document.querySelector('.size-btn.active')?.textContent || currentProduct.sizes[0];
  addToCartItem(currentProduct, detailQty, sz);
  detailQty = 1;
}

function buyNow() {
  addToCartFromDetail();
  showPage('checkout');
}

// ========== CART ==========
function addToCart(id, e) {
  if (e) e.stopPropagation();
  const p = products.find((x) => x.id === id);
  if (!p || p.stock <= 0) return;
  addToCartItem(p, 1, p.sizes[0]);
}

function addToCartItem(p, qty, size) {
  if (p.stock < qty) {
    showToast('Stok tidak cukup!');
    return;
  }
  const existing = cart.find((c) => c.id === p.id && c.size === size);
  if (existing) {
    if (existing.qty + qty > p.stock) {
      showToast('Stok tidak cukup!');
      return;
    }
    existing.qty += qty;
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, emoji: p.emoji, img: p.img, size: size || 'M', qty: qty });
  }
  updateCartBadge();
  showToast(p.name + ' ditambahkan ke keranjang 🛍', 'success');
}

function updateCartBadge() {
  document.getElementById('cartBadge').textContent = cart.reduce((s, c) => s + c.qty, 0);
}

function renderCart() {
  const cc = document.getElementById('cartContent');
  if (cart.length === 0) {
    cc.innerHTML = `<div class="empty-cart">
      <div class="empty-cart-icon">🛍️</div>
      <h3>Keranjang Masih Kosong</h3>
      <p>Yuk, temukan produk favoritmu!</p>
      <button class="btn-primary" onclick="showPage('products')">Mulai Belanja</button>
    </div>`;
    return;
  }
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  cc.innerHTML = `<div class="cart-layout">
    <div class="cart-items">
      ${cart
        .map(
          (c) => `<div class="cart-item">
        <div class="cart-item-img">
          ${c.img ? `<img src="${c.img}" alt="${c.name}">` : c.emoji}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${c.name}</div>
          <div class="cart-item-meta">Ukuran: ${c.size}</div>
          <div class="cart-item-price">${fmt(c.price)}</div>
          <div class="cart-item-actions">
            <div class="qty-ctrl">
              <button class="qty-btn" onclick="updateCartQty(${c.id},'${c.size}',-1)">−</button>
              <span class="qty-val">${c.qty}</span>
              <button class="qty-btn" onclick="updateCartQty(${c.id},'${c.size}',1)">+</button>
            </div>
            <button class="cart-remove" onclick="removeFromCart(${c.id},'${c.size}')">Hapus</button>
          </div>
        </div>
      </div>`,
        )
        .join('')}
    </div>
    <div class="order-summary">
      <div class="summary-title">Ringkasan</div>
      ${cart.map((c) => `<div class="summary-row"><span>${c.name} ×${c.qty}</span><span>${fmt(c.price * c.qty)}</span></div>`).join('')}
      <div class="summary-row total"><span>Total</span><span>${fmt(subtotal)}</span></div>
      <button class="checkout-btn" onclick="showPage('checkout')">Checkout →</button>
    </div>
  </div>`;
}

function updateCartQty(id, size, d) {
  const item = cart.find((c) => c.id === id && c.size === size);
  if (!item) return;
  const p = products.find((x) => x.id === id);
  if (d > 0 && item.qty >= p.stock) {
    showToast('Stok tidak cukup!');
    return;
  }
  item.qty = Math.max(1, item.qty + d);
  updateCartBadge();
  renderCart();
}

function removeFromCart(id, size) {
  cart = cart.filter((c) => !(c.id === id && c.size === size));
  updateCartBadge();
  renderCart();
  showToast('Produk dihapus dari keranjang');
}

// ========== CHECKOUT ==========
function renderCheckout() {
  if (cart.length === 0) {
    showPage('cart');
    return;
  }
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const ship = parseInt(document.getElementById('shpCourier')?.value || 12000);
  const total = subtotal + ship;

  document.getElementById('summaryItems').innerHTML = cart.map((c) => `<div class="summary-row"><span>${c.name} ×${c.qty}</span><span>${fmt(c.price * c.qty)}</span></div>`).join('');
  document.getElementById('summarySubtotal').textContent = fmt(subtotal);
  document.getElementById('summaryShipping').textContent = ship === 0 ? 'Gratis' : fmt(ship);
  document.getElementById('summaryTotal').textContent = fmt(total);

  const qa = document.getElementById('qrisAmount');
  if (qa) qa.textContent = 'Total: ' + fmt(total);
  renderQRIS();
  renderCicilan(total);
}

function getCheckoutTotal() {
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const ship = parseInt(document.getElementById('shpCourier')?.value || 12000);
  return subtotal + ship;
}

// ========== PAYMENT ==========
function selectPayment(type) {
  selectedPayment = type;
  document.querySelectorAll('.payment-option').forEach((el) => {
    el.classList.remove('selected');
    el.querySelectorAll('.payment-body').forEach((b) => b.classList.remove('show'));
  });
  document.getElementById('pay-' + type).classList.add('selected');
  document.getElementById('body-' + type).classList.add('show');
}

function selectBank(bank, e) {
  e.stopPropagation();
  selectedBank = bank;
  bankPin = [];
  document.querySelectorAll('.bank-btn').forEach((b) => b.classList.remove('active'));
  e.target.classList.add('active');
  const total = getCheckoutTotal();
  const accounts = {
    BCA: { no: '1234567890', name: 'ELJEL Store' },
    Mandiri: { no: '1234000056789', name: 'ELJEL Store' },
    BRI: { no: '003401234567890', name: 'ELJEL Store' },
  };
  const acc = accounts[bank];
  document.getElementById('bankFormContainer').innerHTML = `
    <div class="bank-info-box">
      <div class="bank-info-row"><span>Bank</span><strong>${bank}</strong></div>
      <div class="bank-info-row"><span>No. Rekening</span><strong>${acc.no}</strong></div>
      <div class="bank-info-row"><span>Atas Nama</span><strong>${acc.name}</strong></div>
    </div>
    <div class="amount-display">
      <div class="amount-label">Jumlah yang Harus Dibayar</div>
      <div class="amount-val">${fmt(total)}</div>
    </div>
    <div style="font-size:0.8rem;font-weight:600;color:var(--taupe);text-align:center;margin-bottom:0.75rem">Masukkan PIN ${bank} (6 digit):</div>
    <div class="pin-input" id="pinDisplay">
      ${Array(6)
        .fill(0)
        .map((_, i) => `<div class="pin-dot" id="pd${i}">·</div>`)
        .join('')}
    </div>
    <div class="pin-numpad">
      ${[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, '⌫'].map((k) => `<button class="pin-key" onclick="enterPin('${k}')">${k}</button>`).join('')}
    </div>
    <div id="pinError" style="color:var(--rose);font-size:0.75rem;text-align:center;margin-top:0.5rem;display:none">PIN salah. Coba lagi.</div>`;
  document.getElementById('bankFormContainer').classList.add('bank-form', 'show');
}

function enterPin(k) {
  if (k === '') return;
  if (k === '⌫') {
    if (bankPin.length > 0) {
      bankPin.pop();
      updatePinDisplay();
    }
    return;
  }
  if (bankPin.length >= 6) return;
  bankPin.push(k);
  updatePinDisplay();
}

function updatePinDisplay() {
  for (let i = 0; i < 6; i++) {
    const d = document.getElementById('pd' + i);
    if (d) {
      d.textContent = bankPin[i] ? '●' : '·';
      d.classList.toggle('filled', !!bankPin[i]);
    }
  }
}

function selectEwallet(ew, e) {
  e.stopPropagation();
  selectedEwallet = ew;
  document.querySelectorAll('.ewallet-btn').forEach((b) => b.classList.remove('active'));
  e.target.classList.add('active');
  document.getElementById('ewalletSelected').style.display = 'block';
  document.getElementById('ewalletName').textContent = ew;
}

function renderQRIS() {
  const qr = document.getElementById('qrisCode');
  if (!qr) return;
  const pat = [
    1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0,
  ];
  qr.innerHTML = `<div class="qris-inner">${pat.map((p) => `<div class="qris-cell${p === 0 ? ' empty' : ''}"></div>`).join('')}</div>`;
}

function renderCicilan(total) {
  const cl = document.getElementById('cicilanList');
  if (!cl) return;
  cl.innerHTML = [3, 6, 12, 18, 24]
    .map(
      (t) =>
        `<div class="cicilan-opt" onclick="selectCicilan(${t},this)">
      <div><span class="tenor">${t} bulan</span> <span style="font-size:0.75rem;color:var(--taupe)">(0% bunga)</span></div>
      <div class="cicilan-amount">${fmt(Math.ceil(total / t))}/bulan</div>
    </div>`,
    )
    .join('');
}

function selectCicilan(tenor, el) {
  selectedCicilan = tenor;
  document.querySelectorAll('.cicilan-opt').forEach((b) => b.classList.remove('active'));
  el.classList.add('active');
}

// ========== MINIMARKET ==========
function generateMinimarketCode() {
  // Buat kode 12 digit unik
  return Math.random().toString().slice(2, 6) + '-' + Math.random().toString().slice(2, 6) + '-' + Math.random().toString().slice(2, 6);
}

function selectMinimarket(market, e) {
  e.stopPropagation();
  selectedMinimarket = market;
  document.querySelectorAll('.minimarket-btn').forEach((b) => b.classList.remove('active'));
  e.target.classList.add('active');

  const total = getCheckoutTotal();
  minimarketCode = generateMinimarketCode();
  const icon = market === 'Alfamart' ? '🔴' : '🟡';

  document.getElementById('minimarketCodeBox').style.display = 'block';
  document.getElementById('minimarketName').innerHTML = `${icon} Pembayaran via <strong>${market}</strong>`;
  document.getElementById('minimarketCode').textContent = minimarketCode;
  document.getElementById('minimarketAmount').innerHTML = `<span>Total yang harus dibayar:</span><strong>${fmt(total)}</strong>`;
  document.getElementById('minimarketNameStep').textContent = market;
}

function copyCode() {
  const code = document.getElementById('minimarketCode').textContent;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => showToast('Kode berhasil disalin! 📋', 'success'));
  } else {
    // Fallback
    const el = document.createElement('textarea');
    el.value = code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast('Kode berhasil disalin! 📋', 'success');
  }
}

// ========== PROCESS ORDER ==========
function processPayment() {
  if (!selectedPayment) {
    showToast('Pilih metode pembayaran terlebih dahulu!');
    return;
  }
  if (!document.getElementById('shpName')?.value) {
    showToast('Lengkapi data pengiriman!');
    return;
  }
  if (selectedPayment === 'bank') {
    if (!selectedBank) {
      showToast('Pilih bank terlebih dahulu!');
      return;
    }
    if (bankPin.length < 6) {
      showToast('Masukkan PIN bank 6 digit!');
      return;
    }
  }
  if (selectedPayment === 'ewallet' && !selectedEwallet) {
    showToast('Pilih e-wallet terlebih dahulu!');
    return;
  }
  if (selectedPayment === 'cicilan' && !selectedCicilan) {
    showToast('Pilih tenor cicilan!');
    return;
  }
  if (selectedPayment === 'minimarket' && !selectedMinimarket) {
    showToast('Pilih minimarket terlebih dahulu!');
    return;
  }

  const pm = document.getElementById('processingModal');
  pm.classList.add('show');
  document.getElementById('processingTitle').textContent = 'Memproses Pembayaran...';
  document.getElementById('processingSub').textContent = 'Mohon tunggu, jangan tutup halaman';

  setTimeout(() => {
    document.getElementById('processingTitle').textContent = 'Pembayaran Berhasil! ✓';
    document.getElementById('processingSub').textContent = 'Menyelesaikan pesanan...';
    setTimeout(() => {
      pm.classList.remove('show');
      completeOrder();
    }, 1500);
  }, 2000);
}

function completeOrder() {
  cart.forEach((c) => {
    const p = products.find((x) => x.id === c.id);
    if (p) p.stock = Math.max(0, p.stock - c.qty);
  });
  totalOrders++;
  totalRevenue += getCheckoutTotal();
  const orderId = '#ELJEL-' + Date.now().toString().slice(-6);
  document.getElementById('successOrderId').textContent = orderId;
  document.getElementById('successTime').textContent = new Date().toLocaleString('id-ID');
  cart = [];
  updateCartBadge();
  selectedPayment = '';
  selectedBank = '';
  selectedEwallet = '';
  selectedCicilan = '';
  selectedMinimarket = '';
  bankPin = [];
  showPage('success');
}

// ========== AUTH ==========
function switchAuthTab(t) {
  document.getElementById('tab-login').classList.toggle('active', t === 'login');
  document.getElementById('tab-register').classList.toggle('active', t === 'register');
  document.getElementById('loginForm').style.display = t === 'login' ? 'flex' : 'none';
  document.getElementById('registerForm').style.display = t === 'register' ? 'flex' : 'none';
}

function doLogin() {
  const e = document.getElementById('loginEmail').value;
  const p = document.getElementById('loginPass').value;
  if (!e || !p) {
    showToast('Isi email dan password!');
    return;
  }
  currentUser = { name: e.split('@')[0], email: e };
  document.getElementById('navUserBtn').textContent = '👤 ' + currentUser.name;
  showToast('Selamat datang, ' + currentUser.name + '!', 'success');
  showPage('home');
}

function doRegister() {
  const n = document.getElementById('regName').value;
  const e = document.getElementById('regEmail').value;
  const p = document.getElementById('regPass').value;
  const cp = document.getElementById('regPassConfirm').value;
  if (!n || !e || !p) {
    showToast('Lengkapi semua data!');
    return;
  }
  if (p !== cp) {
    showToast('Password tidak cocok!');
    return;
  }
  if (p.length < 8) {
    showToast('Password min. 8 karakter!');
    return;
  }
  currentUser = { name: n, email: e };
  document.getElementById('navUserBtn').textContent = '👤 ' + n;
  showToast('Registrasi berhasil! Selamat datang, ' + n, 'success');
  showPage('home');
}

function doGuestLogin() {
  currentUser = { name: 'Tamu', email: '' };
  document.getElementById('navUserBtn').textContent = '👤 Tamu';
  showPage('home');
}

// ========== ADMIN ==========
function renderAdmin() {
  const tbody = document.getElementById('adminTableBody');
  if (!tbody) return;
  tbody.innerHTML = products
    .filter((p) => p != null)
    .map(
      (p) => `
    <tr>
      <td>
        <div class="td-thumb" style="background:${catColor(p.cat)}">
          ${p.img ? `<img src="${p.img}" alt="${p.name}">` : p.emoji}
        </div>
      </td>
      <td>${p.name}</td>
      <td>${p.cat}</td>
      <td>${fmt(p.price)}</td>
      <td>${p.stock}</td>
      <td><span class="badge ${p.stock <= 10 ? 'badge-low' : 'badge-active'}">${p.stock <= 10 ? 'Stok Rendah' : 'Aktif'}</span></td>
      <td><button class="btn-edit" onclick="openEditModal(${p.id})">Edit</button></td>
    </tr>`,
    )
    .join('');
  document.getElementById('statProducts').textContent = products.filter((p) => p != null).length;
  document.getElementById('statOrders').textContent = totalOrders;
  document.getElementById('statRevenue').textContent = 'Rp ' + totalRevenue.toLocaleString('id-ID');
  document.getElementById('statLowStock').textContent = products.filter((p) => p && p.stock <= 10).length;
}

function openAddModal() {
  editingId = null;
  editingImgData = null;
  document.getElementById('modalTitle').textContent = 'Tambah Produk';
  ['mName', 'mPrice', 'mStock', 'mDesc'].forEach((id) => (document.getElementById(id).value = ''));
  document.getElementById('mCat').value = 'Baju';
  document.getElementById('mImgPreview').style.display = 'none';
  document.getElementById('mImgPreview').src = '';
  document.getElementById('mImgPlaceholder').style.display = 'flex';
  document.getElementById('mImgFile').value = '';
  document.getElementById('productModal').classList.add('show');
}

function openEditModal(id) {
  const p = products.find((x) => x.id === id);
  if (!p) return;
  editingId = id;
  editingImgData = p.img || null;
  document.getElementById('modalTitle').textContent = 'Edit Produk';
  document.getElementById('mName').value = p.name;
  document.getElementById('mCat').value = p.cat;
  document.getElementById('mPrice').value = p.price;
  document.getElementById('mStock').value = p.stock;
  document.getElementById('mDesc').value = p.desc;
  // Show existing image
  if (p.img) {
    document.getElementById('mImgPreview').src = p.img;
    document.getElementById('mImgPreview').style.display = 'block';
    document.getElementById('mImgPlaceholder').style.display = 'none';
  } else {
    document.getElementById('mImgPreview').style.display = 'none';
    document.getElementById('mImgPlaceholder').style.display = 'flex';
  }
  document.getElementById('productModal').classList.add('show');
}

function previewModalImg(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    editingImgData = e.target.result;
    document.getElementById('mImgPreview').src = editingImgData;
    document.getElementById('mImgPreview').style.display = 'block';
    document.getElementById('mImgPlaceholder').style.display = 'none';
  };
  reader.readAsDataURL(file);
}

function closeModal() {
  document.getElementById('productModal').classList.remove('show');
}

function getSizesForCategory(cat) {
  return cat === 'Celana' ? ['28', '29', '30', '31'] : ['S', 'M', 'L', 'XL'];
}

function saveProduct() {
  const n = document.getElementById('mName').value;
  const c = document.getElementById('mCat').value;
  const pr = parseInt(document.getElementById('mPrice').value) || 0;
  const st = parseInt(document.getElementById('mStock').value) || 0;
  const de = document.getElementById('mDesc').value;
  if (!n) {
    showToast('Nama produk wajib diisi!');
    return;
  }

  if (editingId) {
    const p = products.find((x) => x.id === editingId);
    Object.assign(p, {
      name: n,
      cat: c,
      price: pr,
      stock: st,
      img: editingImgData || null,
      desc: de,
      sizes: getSizesForCategory(c),
    });
    showToast('Produk berhasil diupdate!', 'success');
  } else {
    products.push({
      id: Date.now(),
      name: n,
      cat: c,
      price: pr,
      stock: st,
      oldPrice: null,
      emoji: c === 'Celana' ? '👖' : c === 'Dress' ? '👗' : '👕',
      img: editingImgData || null,
      desc: de,
      badge: null,
      sizes: getSizesForCategory(c),
    });
    showToast('Produk berhasil ditambahkan!', 'success');
  }
  closeModal();
  saveProducts();
  renderAdmin();
  renderProducts();
  renderFeatured();
}

// ========== TOAST ==========
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast' + (type ? ' ' + type : '');
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 3000);
}

// ========== MODAL CLOSE ON BG CLICK ==========
document.getElementById('productModal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});
