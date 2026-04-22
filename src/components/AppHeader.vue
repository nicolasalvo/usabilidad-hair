<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

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
        <a href="/">HAIRCUT DAY</a>
      </div>
      
      <nav class="nav">
        <ul>
          <li><RouterLink to="/">HOME</RouterLink></li>
          <li><RouterLink to="/peluqueria">PELUQUERÍA</RouterLink></li>
          <li><RouterLink to="/estetica">ESTÉTICA</RouterLink></li>
          <li><RouterLink to="/experiencias">EXPERIENCIAS</RouterLink></li>
          <li><RouterLink to="/blog">BLOG</RouterLink></li>
          <li><RouterLink to="/contacto">CONTACTO</RouterLink></li>
        </ul>
      </nav>
      
      <div class="actions">
        <a href="#" class="btn btn-primary">RESERVAR</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 1000;
  transition: var(--transition-medium, 0.4s ease);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}

.header.scrolled {
  background-color: var(--color-secondary);
  color: var(--color-primary);
  height: 70px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo a {
  font-family: var(--font-heading);
  font-weight: 900;
  font-size: 1.5rem;
  letter-spacing: 0.2em;
}

.nav ul {
  display: flex;
  gap: var(--spacing-md);
}

.nav a {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.5rem 0;
  position: relative;
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: currentColor;
  transition: var(--transition-fast);
}

.nav a:hover::after,
.nav a.router-link-active::after {
  width: 100%;
}

.btn {
  font-size: 0.7rem;
  padding: 0.6rem 1.5rem;
}

/* Specific button styles for the header transition */
.header:not(.scrolled) .btn-primary {
  background-color: white;
  color: black;
  border-color: white;
}

.header:not(.scrolled) .btn-primary:hover {
  background-color: transparent;
  color: white;
}

@media (max-width: 992px) {
  .nav {
    display: none; /* In a real app we'd have a hamburger menu */
  }
}
</style>
