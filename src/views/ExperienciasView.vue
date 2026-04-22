<script setup>
import { onMounted } from 'vue'
import PageBanner from '../components/PageBanner.vue'

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
      title="EXPERIENCIAS" 
      subtitle="DISFRUTA DE UNA EXPERIENCIA DE BELLEZA EN BARCELONA TOTALMENTE PERSONALIZADA"
      image="/img/banner_experiencias.png"
    />
    
    <section class="content-section container">
      <div class="intro-text reveal">
        <h2 class="section-tag">MÁS QUE SOLAMENTE BELLEZA</h2>
        <h1 class="section-title">RITUALES DE CUIDADO</h1>
        <p class="section-desc">
          En Hair Cut Day Barcelona creemos que el cuidado personal es una experiencia holística. 
          Nuestras experiencias están diseñadas para regalar o regalarse un momento de desconexión absoluta.
        </p>
      </div>
      
      <div class="experiences-blocks">
        <div class="exp-block reveal">
          <div class="exp-image" style="background-image: url('/img/experiencias.png')"></div>
          <div class="exp-info">
            <h3 class="exp-title">TU NUEVO ESTILO</h3>
            <p class="exp-text">Diseño de imagen y transformación. Un cambio de look asesorado por nuestros mejores estilistas.</p>
            <a href="#" class="btn btn-outline">SABER MÁS</a>
          </div>
        </div>
        
        <div class="exp-block reverse reveal">
          <div class="exp-image" style="background-image: url('/img/hero1.png')"></div>
          <div class="exp-info">
            <h3 class="exp-title">EXPERIENCIA PREMIUM</h3>
            <p class="exp-text">Un bono de belleza completo que incluye tratamiento capilar, manicura y masaje facial.</p>
            <a href="#" class="btn btn-outline">RESERVAR</a>
          </div>
        </div>
        
        <div class="exp-block reveal">
          <div class="exp-image" style="background-image: url('/img/banner_blog.png')"></div>
          <div class="exp-info">
            <h3 class="exp-title">EXPERIENCIAS PARA NOVIAS</h3>
            <p class="exp-text">Pack exclusivo de peinado y maquillaje para que brilles en tu día más especial.</p>
            <a href="#" class="btn btn-outline">CONSULTAR</a>
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
