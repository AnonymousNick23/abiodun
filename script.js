const properties = [
 {id:1,title:"The Willow Residence",location:"Lekki",area:"Lekki Phase 1, Lagos",type:"Duplex",beds:4,baths:4,price:85000000,priceText:"₦85,000,000",status:"For Sale",image:"https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85"},
 {id:2,title:"The Palm House",location:"Ikoyi",area:"Old Ikoyi, Lagos",type:"Detached house",beds:5,baths:5,price:220000000,priceText:"₦220,000,000",status:"For Sale",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"},
 {id:3,title:"The Haven Apartment",location:"Ikeja",area:"Alausa, Ikeja",type:"Apartment",beds:2,baths:2,price:4500000,priceText:"₦4,500,000 / year",status:"For Rent",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"},
 {id:4,title:"Olive Court",location:"Ajah",area:"Sangotedo, Ajah",type:"Terrace",beds:3,baths:3,price:65000000,priceText:"₦65,000,000",status:"For Sale",image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"},
 {id:5,title:"The Crest Penthouse",location:"Lekki",area:"Victoria Island, Lagos",type:"Apartment",beds:3,baths:3,price:12000000,priceText:"₦12,000,000 / year",status:"For Rent",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"},
 {id:6,title:"Sapphire Gardens",location:"Abuja",area:"Maitama, Abuja",type:"Detached house",beds:5,baths:6,price:185000000,priceText:"₦185,000,000",status:"For Sale",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"},
 {id:7,title:"The Courtyard",location:"Ikeja",area:"Magodo, Lagos",type:"Duplex",beds:4,baths:4,price:9500000,priceText:"₦9,500,000 / year",status:"For Rent",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=85"},
 {id:8,title:"Coastal View",location:"Ajah",area:"Lekki-Ajah Expressway",type:"Apartment",beds:2,baths:2,price:3800000,priceText:"₦3,800,000 / year",status:"For Rent",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"},
 {id:9,title:"The Ivory Duplex",location:"Lekki",area:"Chevron Drive, Lekki",type:"Duplex",beds:5,baths:5,price:145000000,priceText:"₦145,000,000",status:"For Sale",image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"},
 {id:10,title:"Gardenia Place",location:"Ikeja",area:"Omole Phase 2, Lagos",type:"Terrace",beds:3,baths:3,price:72000000,priceText:"₦72,000,000",status:"For Sale",image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85"},
 {id:11,title:"The Maple Residence",location:"Abuja",area:"Gwarinpa, Abuja",type:"Detached house",beds:4,baths:4,price:98000000,priceText:"₦98,000,000",status:"For Sale",image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85"},
 {id:12,title:"Urban Nest",location:"Lekki",area:"Oniru, Lagos",type:"Apartment",beds:1,baths:1,price:3200000,priceText:"₦3,200,000 / year",status:"For Rent",image:"https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1000&q=85"},
 {id:13,title:"The Oak House",location:"Ajah",area:"Thomas Estate, Ajah",type:"Duplex",beds:4,baths:4,price:78000000,priceText:"₦78,000,000",status:"For Sale",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"},
 {id:14,title:"Parkview Apartments",location:"Ikoyi",area:"Parkview Estate, Ikoyi",type:"Apartment",beds:3,baths:3,price:15000000,priceText:"₦15,000,000 / year",status:"For Rent",image:"https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85"},
 {id:15,title:"Meadowlands",location:"Abuja",area:"Lokogoma, Abuja",type:"Land",beds:0,baths:0,price:25000000,priceText:"₦25,000,000",status:"For Sale",image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"},
 {id:16,title:"The Residence 24",location:"Lekki",area:"Osapa London, Lekki",type:"Terrace",beds:4,baths:4,price:105000000,priceText:"₦105,000,000",status:"For Sale",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"},
 {id:17,title:"Palm Grove Plot",location:"Ajah",area:"Abijo, Lagos",type:"Land",beds:0,baths:0,price:18000000,priceText:"₦18,000,000",status:"For Sale",image:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"},
 {id:18,title:"The Alder Apartment",location:"Ikeja",area:"Opebi, Ikeja",type:"Apartment",beds:2,baths:2,price:5000000,priceText:"₦5,000,000 / year",status:"For Rent",image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"},
 {id:19,title:"Cedar Park Home",location:"Abuja",area:"Jabi, Abuja",type:"Detached house",beds:4,baths:5,price:130000000,priceText:"₦130,000,000",status:"For Sale",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"},
 {id:20,title:"The Solace Terrace",location:"Lekki",area:"Ikate, Lekki",type:"Terrace",beds:3,baths:3,price:8500000,priceText:"₦8,500,000 / year",status:"For Rent",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=85"}
];

const slides = properties.slice(0,10);
let currentSlide = 0;
let activeCategory = "all";
let visibleCount = 12;
let filteredProperties = [...properties];

const $ = (selector) => document.querySelector(selector);
const propertyGrid = $("#propertyGrid");
const modal = $("#bookingModal");
const toast = $("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2300);
}
function renderSlide() {
  const item = slides[currentSlide];
  $("#featuredImage").style.backgroundImage = `url("${item.image}")`;
  $("#featuredLocation").textContent = item.area.toUpperCase();
  $("#featuredTitle").textContent = item.title;
  $("#featuredType").textContent = `${item.beds ? item.beds + " Bedroom " : ""}${item.type}`;
  $("#featuredPrice").textContent = item.priceText;
  $("#slideCount").innerHTML = `${String(currentSlide+1).padStart(2,"0")} <i>/ 10</i>`;
  $("#sliderProgress").style.width = `${(currentSlide+1)*10}%`;
}
function moveSlide(direction) {
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  renderSlide();
}
$("#prevSlide").addEventListener("click", () => moveSlide(-1));
$("#nextSlide").addEventListener("click", () => moveSlide(1));
let slideTimer = window.setInterval(() => moveSlide(1), 5500);
$("#featuredSlider").addEventListener("mouseenter", () => window.clearInterval(slideTimer));
$("#featuredSlider").addEventListener("mouseleave", () => slideTimer = window.setInterval(() => moveSlide(1), 5500));

function propertyCard(item) {
  const specs = item.type === "Land" ? "Land · Development opportunity" : `${item.beds} beds <span>·</span> ${item.baths} baths <span>·</span> ${item.type}`;
  return `<article class="property-card">
    <div class="property-photo" style="background-image:url('${item.image}')">
      <span class="property-badge">${item.status.toUpperCase()}</span>
      <button class="save-property" aria-label="Save ${item.title}" data-save="${item.id}">♡</button>
    </div>
    <div class="property-info">
      <div class="property-location">${item.area.toUpperCase()}</div>
      <h3>${item.title}</h3>
      <div class="property-specs">${specs}</div>
      <div class="property-bottom"><span class="property-price">${item.priceText}</span><button class="book-button" data-book="${item.id}">BOOK NOW ↗</button></div>
    </div>
  </article>`;
}
function applyFilters() {
  const type = $("#typeFilter").value;
  const location = $("#locationFilter").value;
  const sort = $("#sortFilter").value;
  filteredProperties = properties.filter(item =>
    (activeCategory === "all" || item.type === activeCategory) &&
    (type === "all" || item.type === type) &&
    (location === "all" || item.location === location)
  );
  if (sort === "low") filteredProperties.sort((a,b) => a.price-b.price);
  if (sort === "high") filteredProperties.sort((a,b) => b.price-a.price);
  visibleCount = 12;
  renderProperties();
}
function renderProperties() {
  const visible = filteredProperties.slice(0, visibleCount);
  propertyGrid.innerHTML = visible.length ? visible.map(propertyCard).join("") : `<div class="empty-state">No properties match those filters. Try another location or property type.</div>`;
  $("#resultsText").textContent = `Showing ${visible.length} of ${filteredProperties.length} properties`;
  $("#propertyTotal").textContent = `${filteredProperties.length} PROPERTIES`;
  $("#loadMore").style.display = visibleCount >= filteredProperties.length ? "none" : "inline-flex";
}
$("#categoryFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".filter-pill").forEach(pill => pill.classList.toggle("active", pill === button));
  applyFilters();
});
$("#typeFilter").addEventListener("change", applyFilters);
$("#locationFilter").addEventListener("change", applyFilters);
$("#sortFilter").addEventListener("change", applyFilters);
$("#searchButton").addEventListener("click", () => {
  activeCategory = "all";
  document.querySelectorAll(".filter-pill").forEach(pill => pill.classList.toggle("active", pill.dataset.category === "all"));
  applyFilters();
  $("#explore").scrollIntoView({behavior:"smooth"});
});
$("#loadMore").addEventListener("click", () => {
  visibleCount = Math.min(visibleCount + 8, 50);
  renderProperties();
});
propertyGrid.addEventListener("click", (event) => {
  const bookButton = event.target.closest("[data-book]");
  const saveButton = event.target.closest("[data-save]");
  if (bookButton) openBooking(Number(bookButton.dataset.book));
  if (saveButton) {
    saveButton.classList.toggle("saved");
    saveButton.textContent = saveButton.classList.contains("saved") ? "♥" : "♡";
    showToast(saveButton.classList.contains("saved") ? "Property saved to your favourites." : "Removed from favourites.");
  }
});

function openBooking(id) {
  const item = properties.find(property => property.id === id);
  if (!item) return;
  $("#modalImage").style.backgroundImage = `url("${item.image}")`;
  $("#modalProperty").innerHTML = `<strong>${item.title}</strong><span>${item.area} · ${item.type} · ${item.priceText}</span>`;
  $("#modalDescription").textContent = `Send an enquiry about ${item.title} directly to our property team on WhatsApp.`;
  const message = `Hello Abiodun Real Estate, I want to rent this property: ${item.title}.\nDescription: ${item.area} | ${item.type} | ${item.beds ? item.beds + " bedrooms" : "Land"} | ${item.priceText}.\nImage link: ${item.image}\nPlease share more details and the next steps.`;
  $("#whatsappLink").href = `https://wa.me/2348164406684?text=${encodeURIComponent(message)}`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeBooking() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
$("#modalClose").addEventListener("click", closeBooking);
modal.addEventListener("click", (event) => { if (event.target === modal) closeBooking(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeBooking(); closeMobileMenu(); } });

const menuToggle = $(".menu-toggle");
const mobileMenu = $("#mobileMenu");
const menuBackdrop = $("#menuBackdrop");
function openMobileMenu() {
  mobileMenu.classList.add("open"); menuBackdrop.classList.add("open");
  mobileMenu.setAttribute("aria-hidden","false"); menuToggle.setAttribute("aria-expanded","true");
  document.body.style.overflow = "hidden";
}
function closeMobileMenu() {
  mobileMenu.classList.remove("open"); menuBackdrop.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden","true"); menuToggle.setAttribute("aria-expanded","false");
  if (!modal.classList.contains("open")) document.body.style.overflow = "";
}
menuToggle.addEventListener("click", openMobileMenu);
$("#closeMenu").addEventListener("click", closeMobileMenu);
menuBackdrop.addEventListener("click", closeMobileMenu);
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMobileMenu));

document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
  document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
  link.classList.add("active");
}));
$("#year").textContent = new Date().getFullYear();
renderSlide();
renderProperties();
