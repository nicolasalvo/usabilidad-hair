<script setup>
import { onMounted } from 'vue'
import PageBanner from '../components/PageBanner.vue'

const posts = [
  {
    title: 'OLAPLEX BARCELONA: TODO LO QUE DEBES SABER',
    excerpt: 'Descubre el tratamiento que ha revolucionado el cuidado del cabello dañado.',
    image: '/img/banner_blog.png',
    date: '15 JUN 2026'
  },
  {
    title: 'PRÓTESIS CAPILARES: LA SOLUCIÓN DEFINITIVA',
    excerpt: 'Hablamos sobre cómo recuperar la densidad capilar de forma natural.',
    image: '/img/hero2.png',
    date: '28 MAY 2026'
  },
  {
    title: 'TENDENCIAS DE CORTE PARA ESTE VERANO',
    excerpt: 'Desde el Bob clásico hasta los estilos más vanguardistas.',
    image: '/img/banner_peluqueria.png',
    date: '10 MAY 2026'
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
      title="BLOG" 
      subtitle="TENDENCIAS, CONSEJOS Y ESTILO"
      image="/img/banner_blog.png"
    />
    
    <section class="content-section container">
      <div class="blog-grid">
        <article v-for="post in posts" :key="post.title" class="blog-card reveal">
          <div class="card-image" :style="{ backgroundImage: `url(${post.image})` }"></div>
          <div class="card-content">
            <span class="post-date text-dim">{{ post.date }}</span>
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-excerpt">{{ post.excerpt }}</p>
            <a href="#" class="read-more">LEER MÁS <span class="arrow">→</span></a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.content-section {
  padding: var(--spacing-xl) 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.blog-card {
  display: flex;
  flex-direction: column;
}

.card-image {
  height: 250px;
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
  filter: grayscale(100%);
  transition: filter 0.4s ease;
}

.blog-card:hover .card-image {
  filter: grayscale(0%);
}

.post-date {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 1rem;
}

.post-title {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.4;
  letter-spacing: 0.1em;
}

.post-excerpt {
  color: var(--color-text-dim);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.read-more {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.arrow {
  margin-left: 5px;
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
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }
}
</style>
