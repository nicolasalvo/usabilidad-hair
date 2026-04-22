<script setup>
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageBanner from '../components/PageBanner.vue'
import ServiceCard from '../components/ServiceCard.vue'

const { t, tm, rt } = useI18n()

const services = computed(() => {
  const serviceMessages = tm('estetica.services')
  return serviceMessages.map((service, index) => ({
    title: rt(service.title),
    description: rt(service.description),
    image: getServiceImage(index)
  }))
})

const getServiceImage = (index) => {
  const images = [
    '/img/estetica.png',
    '/img/banner_estetica.png',
    '/img/hero3.png',
    '/img/banner_peluqueria.png'
  ]
  return images[index] || images[0]
}

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
      :title="t('estetica.title')" 
      :subtitle="t('estetica.subtitle')"
      image="/img/banner_estetica.png"
    />
    
    <section class="content-section container">
      <div class="intro-text reveal">
        <h2 class="section-tag">{{ t('estetica.tag') }}</h2>
        <h1 class="section-title">{{ t('estetica.mainTitle') }}</h1>
        <p class="section-desc">
          {{ t('estetica.desc') }}
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
