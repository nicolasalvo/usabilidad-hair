<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSwitcher from './LanguageSwitcher.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const navigation = [
  { 
    name: 'HOME', 
    path: '/' 
  },
  { 
    name: 'PELUQUERÍA', 
    path: '/peluqueria',
    dropdown: [
      { name: 'COLOR', path: '#' },
      { name: 'CORTE', path: '#' },
      { name: 'PEINADOS', path: '#' },
      { name: 'TRATAMIENTOS', path: '#' },
      { name: 'MECHAS', path: '#' },
      { name: 'ALISADO', path: '#' },
      { name: 'EXTENSIONES', path: '#' },
      { name: 'HOMBRE', path: '#' },
      { name: 'BODAS', path: '#' }
    ]
  },
  { 
    name: 'ESTÉTICA', 
    path: '/estetica',
    dropdown: [
      { name: 'LIMPIEZA FACIAL', path: '#' },
      { name: 'TRATAMIENTOS CORPORALES', path: '#' },
      { name: 'MAQUILLAJE', path: '#' },
      { name: 'MANICURA', path: '#' },
      { name: 'DEPILACIÓN', path: '#' }
    ]
  },
  { 
    name: 'EXPERIENCIAS', 
    path: '/experiencias',
    dropdown: [
      { name: 'TRATAMIENTOS PREMIUM', path: '#' },
      { name: 'BONO REGALO', path: '#' },
      { name: 'ASESORÍA DE IMAGEN', path: '#' }
    ]
  },
  { 
    name: 'BLOG', 
    path: '/blog' 
  },
  { 
    name: 'SALÓN', 
    path: '#',
    dropdown: [
      { name: 'EIXAMPLE', path: '#' },
      { name: 'LES CORTS', path: '#' },
      { name: 'PLAZA LETAMENDI', path: '#' },
      { name: 'GRACIA', path: '#' }
    ]
  },
  { 
    name: 'CONTACTO', 
    path: '/contacto' 
  }
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['header', { 'scrolled': isScrolled }]">
    <div class="container header-content">
      <div class="logo">
        <RouterLink to="/" class="logo-link">
          <div class="logo-icon">
            <svg viewBox="0 0 100 100" class="hd-icon">
              <circle cx="50" cy="50" r="48" fill="none" stroke="black" stroke-width="4"/>
              <text x="50" y="65" text-anchor="middle" font-family="Lato, sans-serif" font-weight="900" font-size="40" fill="black">HD</text>
            </svg>
          </div>
          <div class="logo-text">
            <span class="brand-name">HAIRCUT DAY</span>
            <span class="brand-sub">BARCELONA</span>
          </div>
        </RouterLink>
      </div>
      
      <nav :class="['nav', { 'mobile-open': isMobileMenuOpen }]">
        <div class="mobile-menu-header">
           <RouterLink @click="closeMobileMenu" to="/" class="logo-link mobile-logo">
            <div class="logo-icon">
              <svg viewBox="0 0 100 100" class="hd-icon">
                <circle cx="50" cy="50" r="48" fill="none" stroke="black" stroke-width="4"/>
                <text x="50" y="65" text-anchor="middle" font-family="Lato, sans-serif" font-weight="900" font-size="40" fill="black">HD</text>
              </svg>
            </div>
          </RouterLink>
          <button class="close-btn" @click="closeMobileMenu">✕</button>
        </div>
        <ul>
          <li v-for="item in navigation" :key="item.name" class="nav-item">
            <RouterLink :to="item.path" class="nav-link" @click="closeMobileMenu">
              {{ item.name }}
              <span v-if="item.dropdown" class="arrow-icon">▼</span>
            </RouterLink>
            
            <div v-if="item.dropdown" class="dropdown">
              <ul>
                <li v-for="sub in item.dropdown" :key="sub.name">
                  <a href="#" @click="closeMobileMenu">{{ sub.name }}</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      
      <div class="header-actions">
        <div class="header-lang">
          <LanguageSwitcher />
        </div>
        <a href="#" class="btn btn-reservar header-cta">RESERVAR</a>
        <button class="hamburger" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    <div v-if="isMobileMenuOpen" class="mobile-overlay" @click="closeMobileMenu"></div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  z-index: 1000;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 15px rgba(0,0,0,0.05);
  transition: height 0.3s ease;
}

.header.scrolled {
  height: 70px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

/* Logo Styling */
.logo-link {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 45px;
  height: 45px;
}

.hd-icon {
  width: 100%;
  height: 100%;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 1.2rem;
  letter-spacing: 0.1em;
  color: #000000;
  line-height: 1;
}

.brand-sub {
  font-size: 0.6rem;
  letter-spacing: 0.3em;
  color: #888888;
  margin-top: 2px;
}

/* Navigation Styling */
.nav ul {
  display: flex;
  gap: 25px;
}

.nav-item {
  position: relative;
  padding: 10px 0;
}

.nav-link {
  font-size: 12.3px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #666666;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #000000;
}

.arrow-icon {
  font-size: 8px;
  transform: translateY(1px);
  opacity: 0.5;
}

/* Dropdown Styling */
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  min-width: 200px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  padding: 15px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 100;
  border-top: 2px solid #000000;
}

.nav-item:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown ul {
  flex-direction: column;
  gap: 0;
}

.dropdown li a {
  display: block;
  padding: 10px 25px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #666666;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.dropdown li a:hover {
  background-color: #f9f9f9;
  color: #000000;
  padding-left: 30px;
}

/* Actions Button */
.btn-reservar {
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #000000;
  padding: 12px 25px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;
}

.btn-reservar:hover {
  background-color: transparent;
  color: #000000;
}

/* Hamburger & Mobile Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1100;
}

.hamburger span {
  width: 100%;
  height: 2px;
  background-color: #000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-lang {
  display: block;
}

.mobile-menu-header {
  display: none;
}

@media (max-width: 1150px) {
  .header-actions {
    gap: 12px;
  }

  .hamburger {
    display: flex;
    margin-left: 5px;
  }
  
  .nav {
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100vh;
    background-color: #ffffff;
    z-index: 1200;
    flex-direction: column;
    padding: 30px;
    transition: right 0.4s cubic-bezier(0.5, 0, 0, 1);
    box-shadow: -10px 0 30px rgba(0,0,0,0.1);
    display: flex;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .nav.mobile-open {
    right: 0;
    top: 0;
  }
  
  .nav ul {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 0;
  }

  .nav-item {
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    text-align: left;
  }
  
  .nav-link {
    padding: 15px 0;
    font-size: 14px;
    font-weight: 700;
    justify-content: space-between;
    width: 100%;
    color: #666;
  }
  
  .mobile-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    height: 45px;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #000;
    padding: 5px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .dropdown {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background: #f9f9f9;
    min-width: auto;
    border-top: none;
    padding: 10px 0;
    display: none;
    text-align: left;
  }
  
  .nav-item:hover .dropdown {
    display: block;
  }

  .dropdown li a {
    padding: 10px 25px;
    font-size: 11px;
  }
  
  .header-cta {
    padding: 8px 15px;
    font-size: 10px;
  }
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  z-index: 1150;
  backdrop-filter: blur(4px);
}

@media (max-width: 480px) {
  .header-content {
    padding: 0 15px;
  }
  
  .brand-name {
    font-size: 1rem;
  }

  .logo-text {
    display: none; /* Hide text on very small phones to leave space for language + burger */
  }

  .logo-icon {
    width: 40px;
    height: 40px;
  }
  
  .header-actions .header-cta {
    display: none !important;
  }
}
</style>
