<template>
  <section class="partners-section">
    <div class="container">
      <h2 class="section-title">NUESTRAS MARCAS</h2>
      <div class="partners-grid">
        <div class="partner-item">L'ORÉAL</div>
        <div class="partner-item">KÉRASTASE</div>
        <div class="partner-item">GHD</div>
        <div class="partner-item">KLORANE</div>
        <div class="partner-item">MOROCCANOIL</div>
        <div class="partner-item">REDUX</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partners-section {
  padding: var(--spacing-lg) 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.section-title {
  text-align: center;
  font-size: 0.8rem;
  color: var(--color-accent);
  margin-bottom: var(--spacing-md);
}

.partners-grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  opacity: 0.6;
}

.partner-item {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: 0.2em;
  color: #333;
  transition: opacity 0.3s ease;
  cursor: default;
}

.partner-item:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .partners-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
  }
}

@media (max-width: 480px) {
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
