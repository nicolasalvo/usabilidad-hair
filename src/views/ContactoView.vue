<script setup>
import { onMounted, computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import PageBanner from '../components/PageBanner.vue'

const { t } = useI18n()

const formData = reactive({
  nombre: '',
  apellidos: '',
  email: '',
  telefono: '',
  comentarios: ''
})

const errors = reactive({
  nombre: false,
  apellidos: false,
  email: false,
  telefono: false,
  comentarios: false
})

const isEmailValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const submitted = ref(false)

const validateForm = () => {
  let isValid = true
  
  // Reset all errors
  Object.keys(errors).forEach(key => errors[key] = false)
  
  // Name
  if (!formData.nombre.trim()) {
    errors.nombre = true
    isValid = false
  }
  
  // Surnames
  if (!formData.apellidos.trim()) {
    errors.apellidos = true
    isValid = false
  }
  
  // Email
  if (!formData.email.trim()) {
    errors.email = true
    isValid = false
  } else if (!isEmailValid(formData.email)) {
    errors.email = 'format'
    isValid = false
  }
  
  // Phone
  if (!formData.telefono.trim()) {
    errors.telefono = true
    isValid = false
  } else if (formData.telefono.replace(/\s/g, '').length !== 9) {
    errors.telefono = 'length'
    isValid = false
  }
  
  // Comments
  if (!formData.comentarios.trim()) {
    errors.comentarios = true
    isValid = false
  }
  
  return isValid
}

const submitForm = () => {
  if (validateForm()) {
    console.log('Form submitted:', formData)
    submitted.value = true
    // Reset form
    Object.keys(formData).forEach(key => formData[key] = '')
    // Reset errors
    Object.keys(errors).forEach(key => errors[key] = false)
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      submitted.value = false
    }, 5000)
  }
}

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
          
          <div v-if="submitted" class="success-message">
            {{ t('contacto.validation.success') }}
          </div>

          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group" :class="{ 'has-error': errors.nombre }">
                <label>{{ t('contacto.labels.nombre') }} *</label>
                <input 
                  type="text" 
                  v-model="formData.nombre"
                  :placeholder="t('contacto.placeholders.nombre')"
                  @input="errors.nombre = false"
                >
                <span v-if="errors.nombre" class="error-text">{{ t('contacto.validation.required') }}</span>
              </div>
              <div class="form-group" :class="{ 'has-error': errors.apellidos }">
                <label>{{ t('contacto.labels.apellidos') }} *</label>
                <input 
                  type="text" 
                  v-model="formData.apellidos"
                  :placeholder="t('contacto.placeholders.apellidos')"
                  @input="errors.apellidos = false"
                >
                <span v-if="errors.apellidos" class="error-text">{{ t('contacto.validation.required') }}</span>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group" :class="{ 'has-error': errors.email }">
                <label>{{ t('contacto.labels.email') }} *</label>
                <input 
                  type="email" 
                  v-model="formData.email"
                  :placeholder="t('contacto.placeholders.email')"
                  @input="errors.email = false"
                >
                <span v-if="errors.email === true" class="error-text">{{ t('contacto.validation.required') }}</span>
                <span v-if="errors.email === 'format'" class="error-text">{{ t('contacto.validation.email') }}</span>
              </div>
              <div class="form-group" :class="{ 'has-error': errors.telefono }">
                <label>{{ t('contacto.labels.telefono') }} *</label>
                <input 
                  type="tel" 
                  v-model="formData.telefono"
                  :placeholder="t('contacto.placeholders.telefono')"
                  @input="errors.telefono = false"
                >
                <span v-if="errors.telefono === true" class="error-text">{{ t('contacto.validation.required') }}</span>
                <span v-if="errors.telefono === 'length'" class="error-text">{{ t('contacto.validation.telefono') }}</span>
              </div>
            </div>
            
            <div class="form-group" :class="{ 'has-error': errors.comentarios }">
              <label>{{ t('contacto.labels.comentarios') }} *</label>
              <textarea 
                v-model="formData.comentarios"
                :placeholder="t('contacto.placeholders.comentarios')"
                @input="errors.comentarios = false"
              ></textarea>
              <span v-if="errors.comentarios" class="error-text">{{ t('contacto.validation.required') }}</span>
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

.form-group input.error, .form-group textarea.error {
  border-color: #ff4d4d;
}

.error-text {
  color: #ff4d4d;
  font-size: 0.65rem;
  font-weight: 700;
  margin-top: 0.2rem;
  letter-spacing: 0.05em;
}

.has-error input, .has-error textarea {
  border-color: #ff4d4d !important;
}

.success-message {
  background-color: #f0fdf4;
  color: #166534;
  padding: 1rem;
  border-left: 4px solid #22c55e;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
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
