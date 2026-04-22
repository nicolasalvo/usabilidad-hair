<script setup>
import { onMounted } from 'vue'
import PageBanner from '../components/PageBanner.vue'
import ServiceCard from '../components/ServiceCard.vue'

const services = [
  {
    title: 'CORTE DE PELO',
    description: 'Transforma tu estilo con nuestros expertos en corte. Diseñamos el look que mejor se adapta a tus facciones.',
    image: '/img/peluqueria.png'
  },
  {
    title: 'COLORACIÓN ARTÍSTICA',
    description: 'Balayage, Babylights o colores sólidos. Utilizamos productos de alta gama como L’Oréal y Kérastase.',
    image: '/img/hero2.png'
  },
  {
    title: 'EXTENSIONES',
    description: 'Aporta volumen y longitud con nuestras extensiones de cabello natural de la más alta calidad.',
    image: '/img/hero1.png'
  },
  {
    title: 'KERATINA Y ALISADOS',
    description: 'Elimina el encrespamiento y consigue un cabello sedoso y brillante con nuestros tratamientos de alisado.',
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
      title="PELUQUERÍA" 
      subtitle="EN HAIRCUTDAY SOMOS DE LAS MEJORES PELUQUERÍAS BARCELONA"
      image="/img/banner_peluqueria.png"
    />
    
    <section class="content-section container">
      <div class="intro-text reveal">
        <h2 class="section-tag">NUESTROS SERVICIOS</h2>
        <h1 class="section-title">LA MEJOR VERSIÓN DE TI</h1>
        <p class="section-desc">
          Descubre por qué nuestros clientes nos sitúan entre las mejores peluquerías de Barcelona. 
          Un equipo apasionado, productos de élite y un ambiente diseñado para tu relax.
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
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
