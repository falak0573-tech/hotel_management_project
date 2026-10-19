/* ===== Azure Haven Resort — Main Script ===== */

const IMG = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&h=500&q=75`;
const IMG_FALLBACK = 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&h=500&q=75';

// ----- Data -----
const ROOMS = [
  {
    id: 'standard-01',
    name: 'Classic Standard Room',
    category: 'standard',
    image: IMG('photo-1618773928121-c32242e63f39'),
    description: 'A cozy retreat with modern amenities, perfect for solo travelers or couples seeking comfort.',
    features: ['Queen Bed', 'AC', 'Mini Bar', 'Smart TV'],
    capacity: 2,
    badge: 'Popular',
    pricePerNight: 3999
  },
  {
    id: 'standard-02',
    name: 'Garden View Room',
    category: 'standard',
    image: IMG('photo-1590490360182-c33d57733427'),
    description: 'Wake up to lush tropical gardens from your private balcony with serene morning views.',
    features: ['Twin Beds', 'Garden View', 'Balcony', 'Coffee Maker'],
    capacity: 2,
    badge: 'Nature',
    pricePerNight: 4499
  },
  {
    id: 'deluxe-01',
    name: 'Deluxe Pool Access Room',
    category: 'deluxe',
    image: IMG('photo-1582719478250-c89cae4dc85b'),
    description: 'Direct pool access with exclusive cabana seating and premium resort amenities.',
    features: ['King Bed', 'Pool Access', 'Rain Shower', 'Lounge'],
    capacity: 2,
    badge: 'Exclusive',
    pricePerNight: 8999
  },
  {
    id: 'deluxe-02',
    name: 'Premium Deluxe Suite',
    category: 'deluxe',
    image: IMG('photo-1600210492486-724fe5c67fb0'),
    description: 'Spacious suite with designer interiors, living area, and panoramic resort views.',
    features: ['King Bed', 'Living Area', 'Bathtub', 'Butler Call'],
    capacity: 3,
    badge: 'Bestseller',
    pricePerNight: 10999
  },
  {
    id: 'suite-01',
    name: 'Executive Suite',
    category: 'suite',
    image: IMG('photo-1578683010236-d716f9a3f461'),
    description: 'Elegant suite with separate living area, workspace, and stunning sunset views.',
    features: ['King Bed', 'Living Room', 'Work Desk', 'Butler Service'],
    capacity: 2,
    badge: 'Premium',
    pricePerNight: 14999
  },
  {
    id: 'suite-02',
    name: 'Presidential Suite',
    category: 'suite',
    image: IMG('photo-1520250497591-112f2f40a3f4'),
    description: 'The pinnacle of luxury — private terrace, jacuzzi, dining room, and personal concierge.',
    features: ['Master Suite', 'Jacuzzi', 'Private Terrace', 'Chef Service'],
    capacity: 4,
    badge: 'Luxury',
    pricePerNight: 24999
  }
];

const MENU = {
  breakfast: [
    { name: 'Azure Sunrise Bowl', price: 450, desc: 'Açaí, granola, fresh berries, coconut flakes, and honey drizzle.', diet: 'veg' },
    { name: 'Eggs Benedict Royale', price: 650, desc: 'Poached eggs, smoked salmon, hollandaise on artisan sourdough.', diet: 'seafood' },
    { name: 'Tropical Fruit Platter', price: 380, desc: 'Seasonal exotic fruits with passion fruit coulis and mint.', diet: 'veg' },
    { name: 'Classic Indian Breakfast', price: 550, desc: 'Masala dosa, idli, vada, sambar, and filter coffee.', diet: 'veg' },
    { name: 'Avocado Toast Supreme', price: 480, desc: 'Smashed avocado, poached egg, cherry tomatoes, microgreens.', diet: 'veg' },
    { name: 'Belgian Waffles', price: 420, desc: 'Crispy waffles with maple syrup, whipped cream, and berries.', diet: 'veg' }
  ],
  lunch: [
    { name: 'Goan Fish Curry Rice', price: 750, desc: 'Traditional pomfret curry with steamed rice and sol kadhi.', diet: 'seafood' },
    { name: 'Azure Caesar Salad', price: 520, desc: 'Romaine, parmesan crisps, anchovy dressing, garlic croutons.', diet: 'seafood' },
    { name: 'Truffle Mushroom Risotto', price: 680, desc: 'Arborio rice, wild mushrooms, truffle oil, aged parmesan.', diet: 'veg' },
    { name: 'Tandoori Chicken Platter', price: 890, desc: 'Char-grilled chicken with mint chutney, naan, and raita.', diet: 'nonveg' },
    { name: 'Mediterranean Mezze Platter', price: 620, desc: 'Hummus, falafel, tabbouleh, pita, olives, and tzatziki.', diet: 'veg' },
    { name: 'Prawn Bisque', price: 580, desc: 'Creamy prawn soup with cognac, crème fraîche, and chives.', diet: 'seafood' }
  ],
  dinner: [
    { name: 'Pan-Seared Scallops', price: 1200, desc: 'Diver scallops, cauliflower purée, crispy pancetta, brown butter.', diet: 'seafood' },
    { name: 'Butter Chicken', price: 950, desc: 'Slow-cooked chicken in rich tomato-butter gravy with naan.', diet: 'nonveg' },
    { name: 'Herb-Crusted Lamb Rack', price: 1450, desc: 'New Zealand lamb, rosemary jus, roasted root vegetables.', diet: 'nonveg' },
    { name: 'Wild Mushroom Gnocchi', price: 890, desc: 'Handmade gnocchi, porcini cream, sage, pecorino romano.', diet: 'veg' },
    { name: 'Whole Roasted Branzino', price: 1350, desc: 'Mediterranean sea bass, lemon caper butter, grilled asparagus.', diet: 'seafood' },
    { name: 'Chef\'s Tasting Menu', price: 2800, desc: 'Seven-course journey through seasonal coastal cuisine.', diet: 'seafood' }
  ],
  drinks: [
    { name: 'Azure Sunset Cocktail', price: 550, desc: 'Rum, passion fruit, orange bitters, topped with prosecco.', diet: 'veg' },
    { name: 'Tropical Breeze Mocktail', price: 320, desc: 'Pineapple, coconut, lime, mint — refreshing and alcohol-free.', diet: 'veg' },
    { name: 'Old Fashioned', price: 650, desc: 'Bourbon, angostura bitters, sugar cube, orange peel.', diet: 'veg' },
    { name: 'Fresh Pressed Juices', price: 250, desc: 'Orange, green detox, or berry blend — made to order.', diet: 'veg' },
    { name: 'Champagne Selection', price: 850, desc: 'Glass of premium French champagne — Moët or Veuve.', diet: 'veg' },
    { name: 'Artisan Coffee Bar', price: 180, desc: 'Espresso, cappuccino, latte — single-origin beans.', diet: 'veg' }
  ]
};

const SAMPLE_REVIEWS = [
  { name: 'Sarah M.', rating: 5, category: 'rooms', message: 'The ocean view room was absolutely stunning. Waking up to the sunrise over the water was magical!', date: '2026-03-15' },
  { name: 'James K.', rating: 5, category: 'restaurant', message: 'The tasting menu at Azure Bistro is world-class. Every course was a masterpiece.', date: '2026-03-10' },
  { name: 'Priya R.', rating: 4, category: 'service', message: 'Staff went above and beyond. The concierge arranged a surprise anniversary dinner for us.', date: '2026-02-28' }
];

// ----- Storage Keys -----
const STORAGE_BOOKINGS = 'azureHaven_bookings';
const STORAGE_FEEDBACK = 'azureHaven_feedback';

// ----- State -----
let selectedRoom = null;
let selectedRating = 0;

// ----- DOM Elements -----
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ----- Utilities -----
function generateBookingId() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let id = 'AH-';
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

function formatDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-IN', {
    weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
  });
}

function getNights(checkIn, checkOut) {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  return Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
}

function getBookings() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_BOOKINGS)) || [];
  } catch {
    return [];
  }
}

function saveBookings(bookings) {
  localStorage.setItem(STORAGE_BOOKINGS, JSON.stringify(bookings));
}

function getFeedback() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_FEEDBACK)) || [];
  } catch {
    return [];
  }
}

function saveFeedback(feedback) {
  localStorage.setItem(STORAGE_FEEDBACK, JSON.stringify(feedback));
}

function showToast(message, type = 'success') {
  const toast = $('#toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function handleImageError(img) {
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = 'true';
  img.src = IMG_FALLBACK;
}

function bindImage(img) {
  img.width = 800;
  img.height = 500;
  img.decoding = 'async';
  img.addEventListener('error', () => handleImageError(img));
}

function updateBookingPrice() {
  if (!selectedRoom) return;

  const checkIn = $('#checkIn').value;
  const checkOut = $('#checkOut').value;
  const nights = checkIn && checkOut && checkOut > checkIn
    ? getNights(checkIn, checkOut)
    : 1;
  const total = selectedRoom.pricePerNight * nights;

  $('#pricePerNight').textContent = `${formatINR(selectedRoom.pricePerNight)} / night`;
  $('#priceNights').textContent = `${nights} night${nights > 1 ? 's' : ''}`;
  $('#priceTotal').textContent = formatINR(total);
}

function setMinDates() {
  const today = new Date().toISOString().split('T')[0];
  const checkIn = $('#checkIn');
  const checkOut = $('#checkOut');
  checkIn.min = today;
  checkOut.min = today;

  const onDateChange = () => {
    if (!checkIn.value) return;
    const nextDay = new Date(checkIn.value);
    nextDay.setDate(nextDay.getDate() + 1);
    checkOut.min = nextDay.toISOString().split('T')[0];
    if (checkOut.value && checkOut.value <= checkIn.value) {
      checkOut.value = nextDay.toISOString().split('T')[0];
    }
    updateBookingPrice();
  };

  checkIn.removeEventListener('change', onDateChange);
  checkOut.removeEventListener('change', onDateChange);
  checkIn.addEventListener('change', onDateChange);
  checkOut.addEventListener('change', onDateChange);
}

// ----- Render Rooms -----
function renderRooms(filter = 'all') {
  const grid = $('#roomsGrid');
  grid.innerHTML = '';

  ROOMS.forEach((room, index) => {
    if (filter !== 'all' && room.category !== filter) return;

    const card = document.createElement('div');
    card.className = 'room-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.dataset.category = room.category;
    card.innerHTML = `
      <div class="room-image">
        <img src="${room.image}" alt="${room.name}" loading="lazy" width="800" height="500">
        <span class="room-badge">${room.badge}</span>
        <span class="room-price-tag">${formatINR(room.pricePerNight)}<small>/night</small></span>
      </div>
      <div class="room-info">
        <h3>${room.name}</h3>
        <p>${room.description}</p>
        <div class="room-features">
          ${room.features.map(f => `<span class="room-feature">${f}</span>`).join('')}
        </div>
        <div class="room-footer">
          <span class="room-capacity">👤 Up to ${room.capacity} guests</span>
          <button class="book-room-btn" data-room-id="${room.id}">Book Now</button>
        </div>
      </div>
    `;

    bindImage(card.querySelector('img'));

    card.querySelector('.book-room-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openBookingModal(room);
    });

    card.addEventListener('click', () => openBookingModal(room));
    grid.appendChild(card);
  });
}

// ----- Booking Modal -----
function openBookingModal(room) {
  selectedRoom = room;
  $('#selectedRoomName').textContent = room.name;
  $('#selectedRoomPreview').innerHTML = `
    <img src="${room.image}" alt="${room.name}" width="120" height="80">
    <div class="preview-info">
      <h4>${room.name}</h4>
      <span>${formatINR(room.pricePerNight)} per night</span>
    </div>
  `;
  bindImage($('#selectedRoomPreview img'));
  $('#bookingForm').reset();
  setMinDates();
  updateBookingPrice();
  $('#bookingModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  $('#bookingModal').classList.remove('active');
  document.body.style.overflow = '';
}

function openSuccessModal(booking) {
  $('#bookingIdDisplay').textContent = booking.bookingId;
  const nights = getNights(booking.checkIn, booking.checkOut);
  $('#successDetails').innerHTML = `
    <p><strong>Guest:</strong> ${booking.guestName}</p>
    <p><strong>Room:</strong> ${booking.roomName}</p>
    <p><strong>Check-in:</strong> ${formatDate(booking.checkIn)}</p>
    <p><strong>Check-out:</strong> ${formatDate(booking.checkOut)}</p>
    <p><strong>Duration:</strong> ${nights} night${nights > 1 ? 's' : ''}</p>
    <p><strong>Guests:</strong> ${booking.guestCount}</p>
    <p><strong>Rate:</strong> ${formatINR(booking.pricePerNight)} / night</p>
    <p><strong>Total Paid:</strong> <span class="price-highlight">${formatINR(booking.totalAmount)}</span></p>
  `;
  $('#successModal').classList.add('active');
}

function closeSuccessModal() {
  $('#successModal').classList.remove('active');
  document.body.style.overflow = '';
  renderBookingHistory();
}

function handleBookingSubmit(e) {
  e.preventDefault();

  if (!selectedRoom) return;

  const checkIn = $('#checkIn').value;
  const checkOut = $('#checkOut').value;

  if (checkOut <= checkIn) {
    showToast('Check-out must be after check-in date.', 'error');
    return;
  }

  const nights = getNights(checkIn, checkOut);
  const totalAmount = selectedRoom.pricePerNight * nights;

  const booking = {
    bookingId: generateBookingId(),
    roomId: selectedRoom.id,
    roomName: selectedRoom.name,
    roomImage: selectedRoom.image,
    pricePerNight: selectedRoom.pricePerNight,
    totalAmount,
    guestName: $('#guestName').value.trim(),
    guestEmail: $('#guestEmail').value.trim(),
    guestPhone: $('#guestPhone').value.trim(),
    guestCount: $('#guestCount').value,
    checkIn,
    checkOut,
    specialRequests: $('#specialRequests').value.trim(),
    status: 'confirmed',
    bookedAt: new Date().toISOString()
  };

  const bookings = getBookings();
  bookings.unshift(booking);
  saveBookings(bookings);

  closeBookingModal();
  openSuccessModal(booking);
  showToast('Booking confirmed successfully!');
}

// ----- Restaurant Menu -----
function renderMenu(category = 'breakfast') {
  const content = $('#menuContent');
  const items = MENU[category] || [];
  content.innerHTML = items.map(item => `
    <div class="menu-item">
      <div class="menu-item-header">
        <h4>${item.name}</h4>
        <span class="price">${formatINR(item.price)}</span>
      </div>
      <p>${item.desc}</p>
      <span class="diet-tag ${item.diet}">${item.diet}</span>
    </div>
  `).join('');
}

// ----- Feedback -----
function renderReviews() {
  const stored = getFeedback();
  const all = [...stored, ...SAMPLE_REVIEWS].slice(0, 9);
  const grid = $('#reviewsGrid');

  if (all.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:#64748b;grid-column:1/-1">No reviews yet. Be the first!</p>';
    return;
  }

  grid.innerHTML = all.map(r => `
    <div class="review-card">
      <div class="review-header">
        <strong>${r.name}</strong>
        <span class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
      </div>
      <span class="review-category">${r.category}</span>
      <p>${r.message}</p>
      <div class="review-date">${r.date ? formatDate(r.date) : 'Recently'}</div>
    </div>
  `).join('');
}

function handleFeedbackSubmit(e) {
  e.preventDefault();

  if (selectedRating === 0) {
    showToast('Please select a star rating.', 'error');
    return;
  }

  const feedback = {
    name: $('#feedbackName').value.trim(),
    email: $('#feedbackEmail').value.trim(),
    category: $('#feedbackCategory').value,
    message: $('#feedbackMessage').value.trim(),
    rating: selectedRating,
    date: new Date().toISOString().split('T')[0]
  };

  const all = getFeedback();
  all.unshift(feedback);
  saveFeedback(all);

  $('#feedbackForm').reset();
  selectedRating = 0;
  updateStars();
  renderReviews();
  showToast('Thank you for your feedback!');
}

function updateStars() {
  $$('#starsInput .star').forEach(star => {
    star.classList.toggle('active', parseInt(star.dataset.rating) <= selectedRating);
  });
}

// ----- Booking History -----
function renderBookingHistory(searchTerm = '') {
  const bookings = getBookings();
  const list = $('#historyList');
  const empty = $('#emptyHistory');
  const stats = $('#historyStats');

  const term = searchTerm.toLowerCase().trim();
  const filtered = term
    ? bookings.filter(b =>
        b.guestName.toLowerCase().includes(term) ||
        b.guestEmail.toLowerCase().includes(term) ||
        b.bookingId.toLowerCase().includes(term) ||
        b.roomName.toLowerCase().includes(term)
      )
    : bookings;

  const confirmed = filtered.filter(b => b.status === 'confirmed').length;
  const cancelled = filtered.filter(b => b.status === 'cancelled').length;

  stats.innerHTML = `
    <div class="history-stat"><strong>${filtered.length}</strong><span>Total Bookings</span></div>
    <div class="history-stat"><strong>${confirmed}</strong><span>Confirmed</span></div>
    <div class="history-stat"><strong>${cancelled}</strong><span>Cancelled</span></div>
  `;

  const existingCards = list.querySelectorAll('.history-card');
  existingCards.forEach(c => c.remove());

  if (filtered.length === 0) {
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';

  filtered.forEach(booking => {
    const nights = getNights(booking.checkIn, booking.checkOut);
    const card = document.createElement('div');
    card.className = 'history-card';
    card.innerHTML = `
      <div class="history-image">
        <img src="${booking.roomImage}" alt="${booking.roomName}" width="120" height="80" loading="lazy">
      </div>
      <div class="history-details">
        <h4>${booking.roomName}</h4>
        <div class="booking-id-small">${booking.bookingId}</div>
        <div class="history-meta">
          <span>👤 ${booking.guestName}</span>
          <span>📅 ${formatDate(booking.checkIn)} → ${formatDate(booking.checkOut)}</span>
          <span>🌙 ${nights} night${nights > 1 ? 's' : ''}</span>
          <span>👥 ${booking.guestCount} guest${booking.guestCount > 1 ? 's' : ''}</span>
          <span>💰 ${formatINR(booking.totalAmount || 0)}</span>
        </div>
      </div>
      <div class="history-actions">
        <span class="status-badge ${booking.status}">${booking.status}</span>
        ${booking.status === 'confirmed' ? `<button class="btn-cancel" data-id="${booking.bookingId}">Cancel</button>` : ''}
      </div>
    `;

    bindImage(card.querySelector('img'));

    const cancelBtn = card.querySelector('.btn-cancel');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => cancelBooking(booking.bookingId));
    }

    list.appendChild(card);
  });
}

function cancelBooking(bookingId) {
  if (!confirm('Are you sure you want to cancel this booking?')) return;

  const bookings = getBookings();
  const index = bookings.findIndex(b => b.bookingId === bookingId);
  if (index !== -1) {
    bookings[index].status = 'cancelled';
    saveBookings(bookings);
    renderBookingHistory($('#historySearch').value);
    showToast('Booking cancelled.');
  }
}

function clearAllHistory() {
  if (!confirm('This will permanently delete all booking history. Continue?')) return;
  localStorage.removeItem(STORAGE_BOOKINGS);
  renderBookingHistory();
  showToast('Booking history cleared.');
}

// ----- Navigation -----
function initNavbar() {
  const navbar = $('#navbar');
  const navToggle = $('#navToggle');
  const navLinks = $('#navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  $$('.nav-link, .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = $$('section[id]');
  const navLinksAll = $$('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinksAll.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(s => observer.observe(s));
}

// ----- Event Listeners -----
function initEvents() {
  // Room filters
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRooms(btn.dataset.filter);
    });
  });

  // Menu tabs
  $$('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.menu-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenu(tab.dataset.menu);
    });
  });

  // Booking modal
  $('#closeBookingModal').addEventListener('click', closeBookingModal);
  $('#bookingModal').addEventListener('click', (e) => {
    if (e.target === $('#bookingModal')) closeBookingModal();
  });
  $('#bookingForm').addEventListener('submit', handleBookingSubmit);

  // Success modal
  $('#closeSuccessModal').addEventListener('click', closeSuccessModal);
  $('#successModal').addEventListener('click', (e) => {
    if (e.target === $('#successModal')) closeSuccessModal();
  });
  $('#copyBookingId').addEventListener('click', () => {
    const id = $('#bookingIdDisplay').textContent;
    navigator.clipboard.writeText(id).then(() => showToast('Booking ID copied!'));
  });

  // Feedback
  $$('#starsInput .star').forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.dataset.rating);
      updateStars();
    });
    star.addEventListener('mouseenter', () => {
      const rating = parseInt(star.dataset.rating);
      $$('#starsInput .star').forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.rating) <= rating);
      });
    });
  });

  $('#starsInput').addEventListener('mouseleave', updateStars);
  $('#feedbackForm').addEventListener('submit', handleFeedbackSubmit);

  // History
  $('#historySearch').addEventListener('input', (e) => {
    renderBookingHistory(e.target.value);
  });
  $('#clearHistory').addEventListener('click', clearAllHistory);

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookingModal();
      closeSuccessModal();
    }
  });
}

// ----- Init -----
document.addEventListener('DOMContentLoaded', () => {
  renderRooms();
  renderMenu('breakfast');
  renderReviews();
  renderBookingHistory();
  initNavbar();
  initEvents();
  setMinDates();
});
