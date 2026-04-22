<script setup>
import { onMounted } from 'vue'
import HeroSlider from '../components/HeroSlider.vue'
import ServiceGrid from '../components/ServiceGrid.vue'
import IntroSection from '../components/IntroSection.vue'
import PartnerLogos from '../components/PartnerLogos.vue'

// Intersection Observer for reveal animations
onMounted(() => {
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="home-view">
    <HeroSlider />
    
    <div class="reveal">
      <ServiceGrid />
    </div>
    
    <div class="reveal">
      <IntroSection />
    </div>
    
    <div class="reveal">
      <PartnerLogos />
    </div>
  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.2s cubic-bezier(0.5, 0, 0, 1), transform 1.2s cubic-bezier(0.5, 0, 0, 1);
  will-change: opacity, transform;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
