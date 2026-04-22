<script setup>
import { ref } from 'vue'

const languages = [
  { 
    code: 'es', 
    name: 'Español', 
    flag: `
      <svg viewBox="0 0 750 500">
        <rect width="750" height="500" fill="#c60b1e"/>
        <rect width="750" height="250" y="125" fill="#ffc400"/>
      </svg>`
  },
  { 
    code: 'ca', 
    name: 'Català', 
    flag: `
      <svg viewBox="0 0 9 6">
        <rect width="9" height="6" fill="#fadb14"/>
        <rect width="9" height="0.66" y="0.66" fill="#d4141c"/>
        <rect width="9" height="0.66" y="2" fill="#d4141c"/>
        <rect width="9" height="0.66" y="3.33" fill="#d4141c"/>
        <rect width="9" height="0.66" y="4.66" fill="#d4141c"/>
      </svg>`
  },
  { 
    code: 'en', 
    name: 'English', 
    flag: `
      <svg viewBox="0 0 60 30">
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
      </svg>`
  }
]

const currentLanguage = ref(languages[0])
const isOpen = ref(false)

const selectLanguage = (lang) => {
  currentLanguage.value = lang
  isOpen.value = false
}
</script>

<template>
  <div class="language-switcher" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <div class="current-lang">
      <div class="flag-icon" v-html="currentLanguage.flag"></div>
      <span class="lang-code">{{ currentLanguage.code.toUpperCase() }}</span>
    </div>
    
    <div :class="['lang-dropdown', { 'show': isOpen }]">
      <div 
        v-for="lang in languages.filter(l => l.code !== currentLanguage.code)" 
        :key="lang.code"
        class="lang-option"
        @click="selectLanguage(lang)"
      >
        <div class="flag-icon" v-html="lang.flag"></div>
        <span class="lang-name">{{ lang.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.language-switcher {
  position: relative;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
}

.current-lang {
  display: flex;
  align-items: center;
  gap: 8px;
}

.flag-icon {
  width: 20px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  overflow: hidden;
  border-radius: 2px;
}

.flag-icon :deep(svg) {
  width: 100%;
  height: auto;
}

.lang-code {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #000;
}

.lang-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: #ffffff;
  min-width: 120px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 100;
  border: 1px solid #f0f0f0;
  padding: 8px 0;
}

.lang-dropdown.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 15px;
  transition: background 0.2s ease;
}

.lang-option:hover {
  background: #f8f8f8;
}

.lang-name {
  font-size: 11px;
  font-weight: 600;
  color: #333;
}

/* Mobile adjustments (if needed, but mainly controlled by AppHeader) */
@media (max-width: 1150px) {
  .lang-dropdown {
    right: auto;
    left: 0;
  }
}
</style>
