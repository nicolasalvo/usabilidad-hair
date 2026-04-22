<script setup>
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageBanner from '../components/PageBanner.vue'

const { t, tm, rt } = useI18n()

const posts = computed(() => {
  const postMessages = tm('blog.posts')
  const dates = ['15 JUN 2026', '28 MAY 2026', '10 MAY 2026']
  const images = ['/img/banner_blog.png', '/img/hero2.png', '/img/banner_peluqueria.png']
  
  return postMessages.map((post, index) => ({
    title: rt(post.title),
    excerpt: rt(post.excerpt),
    image: images[index] || images[0],
    date: dates[index] || dates[0]
  }))
})

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
      :title="t('blog.title')" 
      :subtitle="t('blog.subtitle')"
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
            <a href="#" class="read-more">
              {{ $t('common.leerMas') || $t('common.readMore') }} 
              <span class="arrow">→</span>
            </a>
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
