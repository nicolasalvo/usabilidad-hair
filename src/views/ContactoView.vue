<script setup>
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PageBanner from '../components/PageBanner.vue'

const { t } = useI18n()

const locations = computed(() => [
  {
    name: t('nav.salon_items.eixample'),
    address: 'Carrer de Mallorca, 214',
    phone: '+34 931 190 286'
  },
  {
    name: t('nav.salon_items.les_corts'),
    address: 'Carrer de la Infanta Carlota de Joaquín, 23',
    phone: '+34 933 158 578'
  },
  {
    name: t('nav.salon_items.letamendi'),
    address: 'Carrer d’Enric Granados, 15',
    phone: '+34 932 506 637'
  }
])

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
      :title="t('contacto.title')" 
      :subtitle="t('contacto.subtitle')"
      image="/img/banner_contacto.png"
    />
    
    <section class="content-section container">
      <div class="contact-grid">
        <div class="contact-form-side reveal">
          <h2 class="form-title">{{ t('contacto.formTitle') }}</h2>
          <form class="contact-form" @submit.prevent>
            <div class="form-row">
              <div class="form-group">
                <label>{{ t('contacto.labels.nombre') }}</label>
                <input type="text" :placeholder="t('contacto.placeholders.nombre')">
              </div>
              <div class="form-group">
                <label>{{ t('contacto.labels.apellidos') }}</label>
                <input type="text" :placeholder="t('contacto.placeholders.apellidos')">
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>{{ t('contacto.labels.email') }}</label>
                <input type="email" :placeholder="t('contacto.placeholders.email')">
              </div>
              <div class="form-group">
                <label>{{ t('contacto.labels.telefono') }}</label>
                <input type="tel" :placeholder="t('contacto.placeholders.telefono')">
              </div>
            </div>
            
            <div class="form-group">
              <label>{{ t('contacto.labels.comentarios') }}</label>
              <textarea :placeholder="t('contacto.placeholders.comentarios')"></textarea>
            </div>
            
            <button class="btn btn-primary">{{ t('contacto.labels.enviar') }}</button>
          </form>
        </div>
        
        <div class="locations-side reveal">
          <h2 class="form-title">{{ t('contacto.salonesTitle') }}</h2>
          <div class="location-items">
            <div v-for="loc in locations" :key="loc.name" class="location-item">
              <h3 class="loc-name">{{ loc.name }}</h3>
              <p class="loc-address">{{ loc.address }}</p>
              <p class="loc-phone">{{ loc.phone }}</p>
              <a href="#" class="view-map">{{ t('contacto.common.verMapa') }}</a>
            </div>
          </div>
          
          <div class="contact-meta">
            <p><strong>{{ t('contacto.common.horario') }}:</strong> {{ t('contacto.common.lunesSabado') }} 10:00 - 21:00</p>
            <p><strong>EMAIL:</strong> hola@haircutday.com</p>
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

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 5rem;
}

.form-title {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  letter-spacing: 0.2em;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.form-group label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-primary);
}

.form-group input, .form-group textarea {
  padding: 1rem;
  border: 1px solid #eee;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

.form-group input:focus, .form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-group textarea {
  height: 150px;
  resize: vertical;
}

.location-items {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.location-item {
  border-left: 1px solid #eee;
  padding-left: 2rem;
}

.loc-name {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
}

.loc-address, .loc-phone {
  font-size: 0.9rem;
  color: var(--color-text-dim);
  line-height: 1.6;
}

.view-map {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: underline;
  margin-top: 0.5rem;
  display: inline-block;
}

.contact-meta {
  font-size: 0.85rem;
  line-height: 2;
  color: var(--color-text-dim);
  border-top: 1px solid #eee;
  padding-top: 2rem;
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
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    padding: 0 15px;
  }
}

@media (max-width: 576px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
