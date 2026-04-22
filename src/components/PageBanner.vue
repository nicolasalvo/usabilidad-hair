<script setup>
defineProps({
  title: String,
  subtitle: String,
  image: String
})
</script>

<template>
  <section class="page-banner" :style="{ backgroundImage: `url(${image})` }">
    <div class="overlay"></div>
    <div class="container banner-content">
      <h2 class="subtitle">{{ subtitle }}</h2>
      <h1 class="title">{{ title }}</h1>
      <div class="breadcrumbs">
        <RouterLink to="/">HOME</RouterLink>
        <span class="separator">/</span>
        <span class="current">{{ title }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-banner {
  height: 60vh;
  min-height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-top: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.banner-content {
  position: relative;
  z-index: 10;
}

.subtitle {
  font-size: 0.8rem;
  letter-spacing: 0.4em;
  margin-bottom: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
}

.title {
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.breadcrumbs {
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  font-weight: 700;
}

.breadcrumbs a {
  opacity: 0.6;
}

.breadcrumbs a:hover {
  opacity: 1;
}

.separator {
  margin: 0 10px;
  opacity: 0.3;
}

.current {
  color: white;
}
</style>
