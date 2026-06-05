/* ============================================================
   DIMORA VIEW PROPERTIES — Shared App Logic & Data
   ============================================================ */

/* ── SEED DATA ── */
const LOCATIONS = [
  { name: 'Lagos', country: 'Nigeria', count: '340 Properties', badge: 'Hot', img: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=600&auto=format&fit=crop&q=80' },
  { name: 'Abuja', country: 'Nigeria', count: '210 Properties', badge: 'Rising', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80' },
  { name: 'Dubai', country: 'UAE', count: '158 Properties', badge: 'Luxury', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=80' },
  { name: 'London', country: 'UK', count: '94 Properties', badge: 'Premium', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&auto=format&fit=crop&q=80' },
  { name: 'Port Harcourt', country: 'Nigeria', count: '126 Properties', badge: 'New', img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&auto=format&fit=crop&q=80' },
  { name: 'Accra', country: 'Ghana', count: '88 Properties', badge: 'Trending', img: 'https://images.unsplash.com/photo-1585813540765-b7fa68e0c977?w=600&auto=format&fit=crop&q=80' },
  { name: 'Nairobi', country: 'Kenya', count: '72 Properties', badge: 'New', img: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&auto=format&fit=crop&q=80' },
];

const PROPERTY_TYPES = [
  { icon: '🏢', name: 'Apartments', desc: 'Modern city-centre apartments from studio to 5-bedroom penthouses in prime locations.', count: '480+ listings' },
  { icon: '🏡', name: 'Villas & Duplexes', desc: 'Spacious, architecturally stunning homes in gated estates and private compounds.', count: '220+ listings' },
  { icon: '🏗️', name: 'Off-Plan', desc: 'Invest early at developer prices and earn equity before completion.', count: '95+ projects' },
  { icon: '🏬', name: 'Commercial', desc: 'Office spaces, retail units, and mixed-use developments for business owners.', count: '130+ listings' },
  { icon: '🌳', name: 'Land', desc: 'Verified, documented plots of land in fast-appreciating corridors.', count: '340+ plots' },
  { icon: '🌊', name: 'Waterfront', desc: 'Exclusive waterfront and ocean-view residences in elite coastal districts.', count: '58+ listings' },
  { icon: '🏨', name: 'Short-Let', desc: 'Fully managed short-let properties generating consistent monthly rental income.', count: '185+ listings' },
  { icon: '🏙️', name: 'Penthouse', desc: 'Ultra-premium rooftop residences with panoramic views and private amenities.', count: '34+ listings' },
];

const SEED_LISTINGS = [
  { id: 1, name: 'Horizon Court Residences', loc: 'Victoria Island, Lagos', city: 'Lagos', type: 'Apartments', price: '₦185M', beds: 4, baths: 4, sqm: 320, img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&auto=format&fit=crop&q=80', tag: 'For Sale', invest: true, yield: '12.4% Annual Yield', desc: 'A refined collection of four-bedroom residences overlooking the Atlantic, with floor-to-ceiling glazing, private terraces and 24-hour concierge.' },
  { id: 2, name: 'Serenova Villa Estate', loc: 'Maitama, Abuja', city: 'Abuja', type: 'Villas & Duplexes', price: '₦350M', beds: 5, baths: 6, sqm: 560, img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&auto=format&fit=crop&q=80', tag: 'Premium', invest: false, yield: null, desc: 'An architecturally striking five-bedroom villa set within a gated Maitama estate, featuring a private pool, home cinema and landscaped gardens.' },
  { id: 3, name: 'The Peninsula Suites', loc: 'Dubai Marina, UAE', city: 'Dubai', type: 'Apartments', price: '$780K', beds: 3, baths: 3, sqm: 210, img: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=900&auto=format&fit=crop&q=80', tag: 'Investment', invest: true, yield: '16.8% Annual Yield', desc: 'High-yield marina-front suites in one of Dubai\'s most sought-after towers, fully managed for short-let income.' },
  { id: 4, name: 'Creekside Townhomes', loc: 'Lekki Phase 1, Lagos', city: 'Lagos', type: 'Villas & Duplexes', price: '₦95M', beds: 3, baths: 3, sqm: 185, img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80', tag: 'For Sale', invest: true, yield: '10.2% Annual Yield', desc: 'Contemporary three-bedroom townhomes in the heart of Lekki Phase 1, walking distance to schools, dining and the waterfront.' },
  { id: 5, name: 'Ivory Tower Penthouse', loc: 'Ikoyi, Lagos', city: 'Lagos', type: 'Penthouse', price: '₦620M', beds: 6, baths: 7, sqm: 780, img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&auto=format&fit=crop&q=80', tag: 'Luxury', invest: false, yield: null, desc: 'A full-floor penthouse crowning Ikoyi\'s skyline, with wraparound terraces, private lift access and panoramic lagoon views.' },
  { id: 6, name: 'GreenPark Apartments', loc: 'Wuse 2, Abuja', city: 'Abuja', type: 'Apartments', price: '₦65M', beds: 2, baths: 2, sqm: 120, img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&auto=format&fit=crop&q=80', tag: 'Investment', invest: true, yield: '13.7% Annual Yield', desc: 'Smartly designed two-bedroom apartments in central Wuse 2, ideal for first-time investors seeking dependable rental returns.' },
  { id: 7, name: 'Marina Bay Offices', loc: 'Victoria Island, Lagos', city: 'Lagos', type: 'Commercial', price: '₦480M', beds: 0, baths: 4, sqm: 640, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=80', tag: 'Commercial', invest: true, yield: '11.5% Annual Yield', desc: 'Grade-A office floors in a landmark VI tower with premium fit-out, dedicated parking and blue-chip tenant covenants.' },
  { id: 8, name: 'Thames Riverside Flat', loc: 'Canary Wharf, London', city: 'London', type: 'Apartments', price: '£540K', beds: 2, baths: 2, sqm: 95, img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&auto=format&fit=crop&q=80', tag: 'Premium', invest: true, yield: '8.4% Annual Yield', desc: 'A bright riverside apartment in Canary Wharf with concierge, gym and direct transport links to the City.' },
  { id: 9, name: 'Cantonments Garden Villa', loc: 'Cantonments, Accra', city: 'Accra', type: 'Villas & Duplexes', price: '$420K', beds: 4, baths: 4, sqm: 380, img: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=900&auto=format&fit=crop&q=80', tag: 'For Sale', invest: false, yield: null, desc: 'A serene four-bedroom villa in Accra\'s diplomatic Cantonments district, with mature gardens and staff quarters.' },
  { id: 10, name: 'Banana Island Waterfront', loc: 'Banana Island, Lagos', city: 'Lagos', type: 'Waterfront', price: '₦1.2B', beds: 7, baths: 8, sqm: 1100, img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&auto=format&fit=crop&q=80', tag: 'Luxury', invest: false, yield: null, desc: 'An extraordinary waterfront mansion on Banana Island with private jetty, infinity pool and bespoke interiors throughout.' },
  { id: 11, name: 'Eko Atlantic Off-Plan', loc: 'Eko Atlantic, Lagos', city: 'Lagos', type: 'Off-Plan', price: '₦210M', beds: 3, baths: 3, sqm: 240, img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&auto=format&fit=crop&q=80', tag: 'Off-Plan', invest: true, yield: '17.0% Projected Yield', desc: 'Secure equity at developer pricing in a flagship Eko Atlantic tower, delivering in 2027 with staged payment plans.' },
  { id: 12, name: 'Verdant Acres Plot', loc: 'Epe, Lagos', city: 'Lagos', type: 'Land', price: '₦28M', beds: 0, baths: 0, sqm: 648, img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&auto=format&fit=crop&q=80', tag: 'Land', invest: true, yield: '20%+ Appreciation', desc: 'Verified, fully documented plots in the fast-growing Epe corridor with governor\'s consent and survey in place.' },
];

const INVEST_CARDS = [
  { icon: '📈', title: 'Capital Appreciation', desc: 'Our properties in high-demand corridors consistently outperform market averages, delivering 15–25% capital growth over 3-year cycles.' },
  { icon: '💰', title: 'Rental Income (Pedal Program)', desc: 'Properties on our Pedal program are fully managed and short-let, generating predictable monthly income with zero landlord stress.' },
  { icon: '🔐', title: 'Secure Titles & Documentation', desc: 'Every Dimora View listing comes with verified titles, governor\'s consent, survey plans, and legal due diligence completed.' },
  { icon: '🌐', title: 'Global Portfolio Diversification', desc: 'Spread your investment across Lagos, Dubai, London and Accra — building multi-currency asset portfolios that hedge against local volatility.' },
];

const TESTIMONIALS = [
  { text: 'The Pedal program changed my financial life. My Lekki apartment now earns ₦1.8M monthly while I live in London. Dimora View handles everything.', name: 'Chisom Adeyemi', role: 'Investor · London', init: 'CA', stars: 5 },
  { text: 'I was sceptical about investing in Dubai from Nigeria. The team walked me through every step — documentation, FX transfer, management. Seamless.', name: 'Emeka Okafor', role: 'Property Investor', init: 'EO', stars: 5 },
  { text: 'We found our dream family home in Maitama at exactly our budget. No pressure, just genuine guidance. Highly recommended.', name: 'Aisha Bello', role: 'Homebuyer · Abuja', init: 'AB', stars: 5 },
  { text: 'The ROI data they provided was accurate — our short-let villa has been delivering 15.2% net yield since acquisition. Incredible.', name: 'Tunde Fashola', role: 'Real Estate Investor', init: 'TF', stars: 5 },
  { text: 'Professional, transparent, and incredibly knowledgeable. Dimora View is redefining what a real estate agency should be in Africa.', name: 'Ngozi Williams', role: 'Property Developer', init: 'NW', stars: 5 },
  { text: 'I bought off-plan through them in 2022. The property value has appreciated by over 40% already and we haven\'t even moved in.', name: 'Biodun Adegoke', role: 'Business Owner', init: 'BA', stars: 5 },
];

const PARTNERS = [
  'Sterling Bank', 'Stanbic IBTC', 'Emirates NBD', 'Knight Frank', 'JLL Africa',
  'LASAA', 'FCDA', 'Citi Group', 'PwC Nigeria', 'DSCR Realty', 'ARM Properties', 'Nestoria Africa',
];

const RETURN_DATA = [
  { yr: 'Y1', val: 10 }, { yr: 'Y2', val: 12 }, { yr: 'Y3', val: 13.5 },
  { yr: 'Y5', val: 15 }, { yr: 'Y10', val: 18 },
];

/* ── STORAGE LAYER (makes the whole site dynamic & editable from Admin) ── */
const LS_KEY = 'dimora_listings_v1';

function getListings() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    }
  } catch (e) { /* storage unavailable — fall back to seed */ }
  return SEED_LISTINGS.slice();
}
function saveListings(list) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(list)); return true; }
  catch (e) { return false; }
}
function resetListings() {
  try { localStorage.removeItem(LS_KEY); return true; } catch (e) { return false; }
}
function getListingById(id) {
  return getListings().find(l => String(l.id) === String(id));
}

/* ── FAVOURITES ── */
const FAV_KEY = 'dimora_favs_v1';
function getFavs() { try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); } catch (e) { return []; } }
function toggleFav(id) {
  let favs = getFavs();
  id = Number(id);
  if (favs.includes(id)) favs = favs.filter(f => f !== id); else favs.push(id);
  try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); } catch (e) {}
  return favs.includes(id);
}

/* ── CARD TEMPLATES ── */
function listingCardHTML(l) {
  const saved = getFavs().includes(Number(l.id)) ? 'saved' : '';
  const heart = getFavs().includes(Number(l.id)) ? '♥' : '♡';
  return `
  <a class="listing-card" href="property.html?id=${l.id}">
    <div class="listing-img">
      <img src="${l.img}" alt="${l.name}" loading="lazy" />
      <span class="listing-tag ${l.invest ? 'invest' : ''}">${l.tag}</span>
      <button class="listing-fav ${saved}" aria-label="Save property"
        onclick="event.preventDefault();event.stopPropagation();this.classList.toggle('saved');this.textContent=toggleFav(${l.id})?'♥':'♡';">${heart}</button>
    </div>
    <div class="listing-body">
      <div class="listing-price">${l.price} <span>/ property</span></div>
      <div class="listing-name">${l.name}</div>
      <div class="listing-loc">📍 ${l.loc}</div>
      <div class="listing-meta">
        ${l.beds ? `<span class="meta-item">🛏 ${l.beds} Beds</span>` : ''}
        ${l.baths ? `<span class="meta-item">🚿 ${l.baths} Baths</span>` : ''}
        <span class="meta-item">📐 ${l.sqm} m²</span>
      </div>
      ${l.yield ? `<div class="yield-badge">📊 ${l.yield}</div>` : ''}
    </div>
  </a>`;
}

function locCardHTML(l) {
  return `
  <a class="loc-card" href="listings.html?loc=${encodeURIComponent(l.name)}">
    <img src="${l.img}" alt="${l.name} real estate" loading="lazy" />
    <div class="loc-overlay">
      <span class="loc-badge">${l.badge}</span>
      <div class="loc-name">${l.name}</div>
      <div class="loc-count">${l.count}</div>
      <div class="loc-arrow">→</div>
    </div>
  </a>`;
}

/* ── SCROLL-SNAP CAROUSEL (works for both desktop buttons + mobile swipe) ── */
function initCarousel(wrapSel, prevSel, nextSel) {
  const wrap = document.querySelector(wrapSel);
  if (!wrap) return;
  const step = () => {
    const card = wrap.querySelector('.loc-card, .listing-card');
    return card ? card.getBoundingClientRect().width + 24 : 320;
  };
  const prev = prevSel && document.querySelector(prevSel);
  const next = nextSel && document.querySelector(nextSel);
  if (prev) prev.addEventListener('click', () => wrap.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => wrap.scrollBy({ left: step(), behavior: 'smooth' }));
}

/* one-time "toggle in/out" nudge to hint swipe-ability on mobile */
function nudgeCarousel(sel) {
  if (window.innerWidth > 900) return;
  const wrap = document.querySelector(sel);
  if (!wrap) return;
  setTimeout(() => {
    wrap.scrollTo({ left: 70, behavior: 'smooth' });
    setTimeout(() => wrap.scrollTo({ left: 0, behavior: 'smooth' }), 650);
  }, 900);
}

/* ── NAV / MOBILE MENU ── */
function initChrome() {
  const nav = document.getElementById('mainNav');
  if (nav && !nav.classList.contains('solid')) {
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));
  }
  const burger = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (burger && menu) {
    burger.addEventListener('click', () => { menu.classList.add('open'); document.body.style.overflow = 'hidden'; });
    const close = document.getElementById('mobileClose');
    if (close) close.addEventListener('click', closeMobile);
  }
}
function closeMobile() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ── MODAL ── */
function openModal() { const m = document.getElementById('modalBackdrop'); if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; } }
function closeModal() { const m = document.getElementById('modalBackdrop'); if (m) { m.classList.remove('open'); document.body.style.overflow = ''; } }
function handleBackdropClick(e) { if (e.target === document.getElementById('modalBackdrop')) closeModal(); }
function submitBooking() {
  closeModal();
  showToast('✓ Your booking request has been received! We\'ll contact you within 24 hours.');
}

/* ── TOAST ── */
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3500);
}

/* ── SCROLL REVEAL ── */
function initReveal() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

/* ── SHARED PARTIALS (footer + booking modal) injected so every page matches ── */
function footerHTML() {
  return `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo">Dimora View Properties</a>
        <p>Premium real estate across Nigeria and beyond. We connect visionary buyers with exceptional properties and investment opportunities.</p>
        <div class="footer-socials">
          <a href="#" class="social-btn" aria-label="Instagram">&#9679;</a>
          <a href="#" class="social-btn" aria-label="LinkedIn">in</a>
          <a href="#" class="social-btn" aria-label="Twitter">𝕏</a>
          <a href="#" class="social-btn" aria-label="WhatsApp">W</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Properties</h4>
        <ul>
          <li><a href="category.html?type=Apartments">Apartments</a></li>
          <li><a href="category.html?type=Villas%20%26%20Duplexes">Villas &amp; Duplexes</a></li>
          <li><a href="category.html?type=Commercial">Commercial</a></li>
          <li><a href="category.html?type=Land">Land</a></li>
          <li><a href="category.html?type=Off-Plan">Off-Plan</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="about.html#team">Our Team</a></li>
          <li><a href="investment.html">Investment Reports</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="admin.html">Admin Portal</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="contact.html">Lagos Office</a></li>
          <li><a href="contact.html">Abuja Office</a></li>
          <li><a href="mailto:hello@dimoraview.com">hello@dimoraview.com</a></li>
          <li><a href="tel:+2348000000000">+234 800 000 0000</a></li>
          <li><a href="contact.html">Book Viewing</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Dimora View Properties. All rights reserved.</span>
      <span><a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Terms of Use</a> &nbsp;·&nbsp; <a href="#">Cookie Policy</a></span>
    </div>
  </footer>`;
}

function bookingModalHTML() {
  return `
  <div class="modal-backdrop" id="modalBackdrop" onclick="handleBackdropClick(event)">
    <div class="modal">
      <button class="modal-close" onclick="closeModal()">✕</button>
      <h3>Book a Viewing</h3>
      <p>Fill in your details and one of our agents will reach out within 24 hours to arrange your visit.</p>
      <div class="form-group"><label>Full Name</label><input type="text" placeholder="Your name" /></div>
      <div class="form-group"><label>Email</label><input type="email" placeholder="you@email.com" /></div>
      <div class="form-group"><label>Phone</label><input type="tel" placeholder="+234 000 000 0000" /></div>
      <div class="form-group">
        <label>Property Interest</label>
        <select><option>Residential</option><option>Commercial</option><option>Investment / Rental</option><option>Land</option></select>
      </div>
      <div class="form-group">
        <label>Preferred Location</label>
        <select><option>Lagos</option><option>Abuja</option><option>Port Harcourt</option><option>Dubai</option><option>London</option><option>Accra</option></select>
      </div>
      <div class="form-group"><label>Message (Optional)</label><textarea rows="3" placeholder="Any specifics or questions…"></textarea></div>
      <button class="btn-primary" style="width:100%;text-align:center;" onclick="submitBooking()">Submit Request</button>
    </div>
  </div>`;
}

function mountPartials() {
  const f = document.getElementById('footer-mount');
  if (f) f.innerHTML = footerHTML();
  const m = document.getElementById('modal-mount');
  if (m) m.innerHTML = bookingModalHTML();
}

/* helper */
function qs(name) { return new URLSearchParams(location.search).get(name); }
