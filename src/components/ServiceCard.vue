<script setup>
defineProps({
  title: String,
  description: String,
  image: String
})
</script>

<template>
  <div class="service-card">
    <div class="card-image" :style="{ backgroundImage: `url(${image})` }">
      <div class="card-overlay">
        <a href="#" class="btn btn-outline">RESERVAR</a>
      </div>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  background: white;
  transition: var(--transition-medium, 0.4s ease);
}

.card-image {
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  filter: grayscale(100%);
  transition: filter 0.6s ease;
}

.service-card:hover .card-image {
  filter: grayscale(0%);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay .btn-outline {
  color: white;
  border-color: white;
}

.card-content {
  padding: 1.5rem 0;
}

.card-title {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
  letter-spacing: 0.1em;
}

.card-desc {
  font-size: 0.85rem;
  color: var(--color-text-dim);
  line-height: 1.6;
}
</style>
