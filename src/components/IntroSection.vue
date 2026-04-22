<template>
  <section class="intro-section">
    <div class="container text-center">
      <div class="reveal-content">
        <h2 class="section-tag">{{ $t('home.intro.tag') }}</h2>
        <h1 class="main-title" v-html="$t('home.intro.title').replace(' ', '<br>')"></h1>
        <div class="divider"></div>
        <p class="description">
          {{ $t('home.intro.desc') }}
        </p>
        <div class="action">
          <a href="#" class="btn btn-outline">{{ $t('common.conocenos') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--color-bg-light);
}

.section-tag {
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 0.5em;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
}

.main-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 2rem;
  color: var(--color-primary);
}

.divider {
  width: 50px;
  height: 2px;
  background-color: var(--color-primary);
  margin: 0 auto 2.5rem;
}

.description {
  max-width: 600px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: var(--color-text-dim);
  font-weight: 300;
  line-height: 1.8;
}

.btn-outline {
  padding: 1rem 3rem;
  border-width: 2px;
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: white;
}
</style>
