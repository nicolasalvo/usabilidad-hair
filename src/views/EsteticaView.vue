<script setup>
import { onMounted } from 'vue'
import PageBanner from '../components/PageBanner.vue'
import ServiceCard from '../components/ServiceCard.vue'

const services = [
  {
    title: 'MANICURA Y PEDICURA',
    description: 'Tratamientos completos para tus manos y pies. Esmaltado tradicional o permanente con las mejores marcas.',
    image: '/img/estetica.png'
  },
  {
    title: 'INDIBA DEEP BEAUTY',
    description: 'Tecnología de radiofrecuencia para rejuvenecimiento facial y corporal. Resultados visibles desde la primera sesión.',
    image: '/img/banner_estetica.png'
  },
  {
    title: 'LIMPIEZA DE CUTIS',
    description: 'Tratamientos faciales personalizados para hidratar, iluminar y oxigenar tu piel.',
    image: '/img/hero3.png'
  },
  {
    title: 'MICROBLADING',
    description: 'Diseño de cejas pelo a pelo para una mirada perfecta y natural.',
    image: '/img/banner_peluqueria.png'
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active')
    })
  })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="page-view">
    <PageBanner 
      title="ESTÉTICA" 
      subtitle="UN CENTRO DE ESTÉTICA EN BARCELONA PENSADO PARA TI"
      image="/img/banner_estetica.png"
    />
    
    <section class="content-section container">
      <div class="intro-text reveal">
        <h2 class="section-tag">BELLEZA INTEGRAL</h2>
        <h1 class="section-title">CUIDADO Y BIENESTAR</h1>
        <p class="section-desc">
          En nuestro salón de estética en Barcelona encontrarás los tratamientos más innovadores 
          de la mano de profesionales expertas en el cuidado de la piel y el cuerpo.
        </p>
      </div>
      
      <div class="services-grid">
        <div v-for="service in services" :key="service.title" class="reveal">
          <ServiceCard 
            :title="service.title" 
            :description="service.description" 
            :image="service.image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.content-section {
  padding: var(--spacing-xl) 0;
}

.intro-text {
  text-align: center;
  margin-bottom: var(--spacing-lg);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
}

.section-tag {
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 0.5em;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.section-desc {
  max-width: 700px;
  margin: 0 auto;
  color: var(--color-text-dim);
  font-size: 1.1rem;
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
