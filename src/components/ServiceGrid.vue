<script setup>
const services = [
  {
    title: 'PELUQUERÍA',
    image: '/img/peluqueria.png',
    link: '#'
  },
  {
    title: 'ESTÉTICA',
    image: '/img/estetica.png',
    link: '#'
  },
  {
    title: 'EXPERIENCIAS',
    image: '/img/experiencias.png',
    link: '#'
  },
  {
    title: 'EL SALÓN',
    image: '/img/salon.png',
    link: '#'
  }
]
</script>

<template>
  <section class="service-grid-section">
    <div class="grid">
      <div 
        v-for="service in services" 
        :key="service.title" 
        class="service-item"
      >
        <div 
          class="service-image" 
          :style="{ backgroundImage: `url(${service.image})` }"
        ></div>
        <div class="service-content">
          <h3 class="service-title">{{ service.title }}</h3>
          <a :href="service.link" class="service-link">
            VER MÁS 
            <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-grid-section {
  padding: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 60vh;
  min-height: 400px;
}

.service-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(255,255,255,0.1);
}

.service-item:last-child {
  border-right: none;
}

.service-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  filter: grayscale(100%);
}

.service-item:hover .service-image {
  transform: scale(1.1);
  filter: grayscale(0%);
}

.service-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  transition: background 0.3s ease;
}

.service-item:hover::after {
  background: rgba(0, 0, 0, 0.2);
}

.service-content {
  position: relative;
  z-index: 5;
  text-align: center;
  color: white;
}

.service-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.2em;
}

.service-link {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.4s ease;
  display: inline-block;
}

.service-item:hover .service-link {
  opacity: 1;
  transform: translateY(0);
}

.arrow {
  margin-left: 5px;
  transition: transform 0.3s ease;
  display: inline-block;
}

.service-link:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 992px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    height: auto;
    padding: 0 15px;
    gap: 15px;
  }
  .service-item {
    height: 40vh;
  }
}

@media (max-width: 576px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
