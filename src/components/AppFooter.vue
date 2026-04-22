<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-col brand-col">
        <h2 class="footer-logo">HAIRCUT DAY</h2>
        <p class="brand-desc">Tu salón de confianza en Barcelona. Donde el estilo y la exclusividad se encuentran.</p>
        <div class="social-links">
          <a href="#" class="social-link">IG</a>
          <a href="#" class="social-link">FB</a>
          <a href="#" class="social-link">YT</a>
        </div>
      </div>
      
      <div class="footer-col">
        <h3 class="col-title">SERVICIOS</h3>
        <ul class="footer-links">
          <li><a href="#">Peluquería</a></li>
          <li><a href="#">Estética</a></li>
          <li><a href="#">Experiencias</a></li>
          <li><a href="#">Extensiones</a></li>
          <li><a href="#">Novias</a></li>
        </ul>
      </div>
      
      <div class="footer-col">
        <h3 class="col-title">INFORMACIÓN</h3>
        <ul class="footer-links">
          <li><a href="#">Nuestro Salón</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Aviso Legal</a></li>
          <li><a href="#">Política de Privacidad</a></li>
        </ul>
      </div>
      
      <div class="footer-col">
        <h3 class="col-title">ENCUÉNTRANOS</h3>
        <p class="contact-info">
          Carrer de Mallorca, 214<br>
          08008 Barcelona<br><br>
          T: +34 931 190 286<br>
          E: hola@haircutday.com
        </p>
        <div class="booking-cta">
          <a href="#" class="btn btn-primary">PIDE CITA</a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container flex-bottom">
        <p>&copy; 2026 HAIRCUT DAY. Todos los derechos reservados.</p>
        <p>Made with &hearts; in Barcelona</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: white;
  padding-top: var(--spacing-xl);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  margin-bottom: 1.5rem;
}

.brand-desc {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  max-width: 250px;
}

.col-title {
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  letter-spacing: 0.2em;
  color: white;
}

.footer-links li {
  margin-bottom: 0.8rem;
}

.footer-links a {
  color: #888;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
}

.contact-info {
  color: #888;
  font-size: 0.85rem;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  font-weight: 700;
  font-size: 0.8rem;
  color: white;
}

.booking-cta .btn {
  border-color: white;
  background-color: white;
  color: black;
  width: 100%;
  text-align: center;
}

.booking-cta .btn:hover {
  background-color: transparent;
  color: white;
}

.footer-bottom {
  border-top: 1px solid #222;
  padding: 1.5rem 0;
  font-size: 0.75rem;
  color: #555;
}

.flex-bottom {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .flex-bottom {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
</style>
