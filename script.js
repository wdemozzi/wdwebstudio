/**
 * WD WEB STUDIO — Scripts Interativos
 * Umuarama — Paraná — Brasil
 * Autoridade, Conformidade e Performance
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar Ícones Lucide
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // 2. Header Scroll Effect
  const header = document.querySelector('.header-main');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.style.borderBottomColor = 'rgba(24, 201, 139, 0.2)';
        header.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.5)';
      } else {
        header.style.borderBottomColor = 'var(--border-color)';
        header.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 3. Menu Mobile Drawer
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
      const icon = mobileBtn.querySelector('[data-lucide]');
      if (icon) {
        icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }
    });

    // Fechar ao clicar em qualquer link interno
    const mobileLinks = mobileDrawer.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileBtn.querySelector('[data-lucide]');
        if (icon) {
          icon.setAttribute('data-lucide', 'menu');
          if (typeof lucide !== 'undefined') lucide.createIcons();
        }
      });
    });
  }

  // 4. Banner de Consentimento de Cookies (LGPD)
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieAcceptBtn = document.getElementById('cookieAcceptBtn');
  const cookieDeclineBtn = document.getElementById('cookieDeclineBtn');
  const COOKIE_STORAGE_KEY = 'wd_studio_cookie_consent';

  if (cookieBanner) {
    const currentConsent = localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!currentConsent) {
      setTimeout(() => {
        cookieBanner.classList.add('show');
      }, 700);
    }

    if (cookieAcceptBtn) {
      cookieAcceptBtn.addEventListener('click', () => {
        localStorage.setItem(COOKIE_STORAGE_KEY, 'accepted');
        cookieBanner.classList.remove('show');
      });
    }

    if (cookieDeclineBtn) {
      cookieDeclineBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem(COOKIE_STORAGE_KEY, 'essential_only');
        cookieBanner.classList.remove('show');
      });
    }
  }

  // 5. Acordeão FAQ
  const faqButtons = document.querySelectorAll('.faq-button');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentItem = button.closest('.faq-item');
      const isActive = currentItem.classList.contains('active');

      // Fecha todos os outros itens
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== currentItem) {
          item.classList.remove('active');
        }
      });

      // Alterna o atual
      if (isActive) {
        currentItem.classList.remove('active');
      } else {
        currentItem.classList.add('active');
      }
    });
  });

  // 6. Formulário de Diagnóstico / Auditoria
  const auditForm = document.getElementById('auditForm');
  if (auditForm) {
    auditForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('auditName')?.value.trim() || '';
      const phone = document.getElementById('auditPhone')?.value.trim() || '';
      const segment = document.getElementById('auditSegment')?.value || 'Não informado';
      const currentUrl = document.getElementById('auditUrl')?.value.trim() || 'Ainda não possui site';
      const goal = document.getElementById('auditGoal')?.value || 'Diagnóstico Geral';

      // Monta mensagem estruturada para WhatsApp da WD Web Studio
      const msg = `*SOLICITAÇÃO DE ANÁLISE ESTRATÉGICA — WD WEB STUDIO*
---------------------------------------
*Nome:* ${name}
*WhatsApp:* ${phone}
*Segmento:* ${segment}
*Site Atual:* ${currentUrl}
*Principal Objetivo:* ${goal}
---------------------------------------
_Olá! Preenchi o formulário no site da WD Web Studio e gostaria de solicitar uma análise estratégica da minha presença digital._`;

      const encodedMsg = encodeURIComponent(msg);
      // Número comercial da WD Web Studio (Umuarama/PR)
      const waNumber = '5544991823532';
      const waUrl = `https://wa.me/${waNumber}?text=${encodedMsg}`;

      // Feedback visual no botão
      const submitBtn = auditForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>Iniciando Análise...</span>`;
        submitBtn.disabled = true;

        setTimeout(() => {
          window.open(waUrl, '_blank', 'noopener,noreferrer');
          submitBtn.innerHTML = `<span>✓ Encaminhado com Sucesso</span>`;
          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          }, 3500);
        }, 600);
      } else {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    });
  }
});
