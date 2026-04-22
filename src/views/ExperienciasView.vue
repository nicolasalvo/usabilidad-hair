<script setup>
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageBanner from '../components/PageBanner.vue'

const { t, tm, rt } = useI18n()

const experiences = computed(() => {
  const blockMessages = tm('experiencias.blocks')
  return blockMessages.map((block, index) => ({
    title: rt(block.title),
    text: rt(block.text),
    image: getExperienceImage(index),
    action: getExperienceAction(index)
  }))
})

const getExperienceImage = (index) => {
  const images = [
    '/img/experiencias.png',
    '/img/hero1.png',
    '/img/banner_blog.png'
  ]
  return images[index] || images[0]
}

const getExperienceAction = (index) => {
  const actions = ['common.descubreMas', 'common.reservar', 'common.conocenos']
  return actions[index] || 'common.descubreMas'
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
      :title="t('experiencias.title')" 
      :subtitle="t('experiencias.subtitle')"
      image="/img/banner_experiencias.png"
    />
    
    <section class="content-section container">
      <div class="intro-text reveal">
        <h2 class="section-tag">{{ t('experiencias.tag') }}</h2>
        <h1 class="section-title">{{ t('experiencias.mainTitle') }}</h1>
        <p class="section-desc">
          {{ t('experiencias.desc') }}
        </p>
      </div>
      
      <div class="experiences-blocks">
        <div 
          v-for="(exp, index) in experiences" 
          :key="exp.title" 
          :class="['exp-block', 'reveal', { 'reverse': index % 2 !== 0 }]"
        >
          <div class="exp-image" :style="{ backgroundImage: `url(${exp.image})` }"></div>
          <div class="exp-info">
            <h3 class="exp-title">{{ exp.title }}</h3>
            <p class="exp-text">{{ exp.text }}</p>
            <a href="#" class="btn btn-outline">{{ t(exp.action) }}</a>
          </div>
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
  margin-bottom: var(--spacing-xl);
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

.experiences-blocks {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.exp-block {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
}

.exp-block.reverse {
  flex-direction: row-reverse;
}

.exp-image {
  flex: 1;
  height: 500px;
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
  transition: filter 0.6s ease;
}

.exp-block:hover .exp-image {
  filter: grayscale(0%);
}

.exp-info {
  flex: 1;
  padding: 2rem;
}

.exp-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  letter-spacing: 0.2em;
}

.exp-text {
  font-size: 1.1rem;
  color: var(--color-text-dim);
  line-height: 1.8;
  margin-bottom: 2.5rem;
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

@media (max-width: 992px) {
  .exp-block, .exp-block.reverse {
    flex-direction: column;
    gap: var(--spacing-lg);
  }
  .exp-image {
    width: 100%;
    height: 350px;
  }
}
</style>
