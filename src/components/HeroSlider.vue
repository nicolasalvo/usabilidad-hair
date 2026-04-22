<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const slides = [
  {
    image: '/img/hero1.png',
    title: 'THE EXPERIENCE OF YOUR LIFE',
    subtitle: 'LUXURY HAIR SALON'
  },
  {
    image: '/img/hero2.png',
    title: 'CRAFTING BEAUTY',
    subtitle: 'PROFESSIONAL STYLING'
  },
  {
    image: '/img/hero3.png',
    title: 'INNER RADIANCE',
    subtitle: 'AESTHETIC CARE'
  }
]

let interval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <section class="hero">
    <div 
      v-for="(slide, index) in slides" 
      :key="index"
      :class="['slide', { 'active': currentSlide === index }]"
      :style="{ backgroundImage: `url(${slide.image})` }"
    >
      <div class="overlay"></div>
      <div class="container slide-content">
        <h2 class="subtitle">{{ slide.subtitle }}</h2>
        <h1 class="title">{{ slide.title }}</h1>
        <div class="cta">
          <a href="#" class="btn btn-primary">DESCUBRE MÁS</a>
        </div>
      </div>
    </div>
    
    <div class="indicators">
      <span 
        v-for="(_, index) in slides" 
        :key="index" 
        :class="['indicator', { 'active': currentSlide === index }]"
        @click="currentSlide = index"
      ></span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  padding: 0;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease-in-out, transform 10s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.slide.active {
  opacity: 1;
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.slide-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
}

.subtitle {
  font-size: clamp(0.7rem, 2vw, 0.9rem);
  letter-spacing: 0.4em;
  margin-bottom: 1rem;
  font-weight: 300;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease 0.5s;
}

.title {
  font-size: clamp(1.8rem, 8vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 2rem;
  font-weight: 900;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease 0.8s;
  padding: 0 15px;
}

.cta {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease 1.1s;
}

.slide.active .subtitle,
.slide.active .title,
.slide.active .cta {
  opacity: 1;
  transform: translateY(0);
}

.indicators {
  position: absolute;
  bottom: 40px;
  left: 10%;
  display: flex;
  gap: 15px;
  z-index: 20;
}

.indicator {
  width: 40px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: var(--transition-fast);
}

.indicator.active {
  background-color: white;
  width: 60px;
}

@media (max-width: 768px) {
  .indicators {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
