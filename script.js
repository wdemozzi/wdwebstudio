/**
 * WD WEB STUDIO — Scripts Interativos
 * Umuarama — Paraná — Brasil
 * Autoridade, Estratégia e Engenharia
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

  // 3. Menu Mobile Drawer Acessível
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  const closeMobileDrawer = () => {
    if (!mobileDrawer || !mobileBtn) return;
    mobileDrawer.classList.remove('open');
    mobileBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    const icon = mobileBtn.querySelector('[data-lucide]');
    if (icon) {
      icon.setAttribute('data-lucide', 'menu');
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  };

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';

      const icon = mobileBtn.querySelector('[data-lucide]');
      if (icon) {
        icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }

      if (isOpen) {
        // Move o foco para o primeiro link acessível
        const firstLink = mobileDrawer.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    // Fechar ao teclar Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeMobileDrawer();
        mobileBtn.focus();
      }
    });

    // Fechar ao clicar em qualquer link interno
    const mobileLinks = mobileDrawer.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileDrawer();
      });
    });
  }

  // 4. Banner de Consentimento de Cookies
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

  // 5. Acordeão FAQ Acessível
  const faqButtons = document.querySelectorAll('.faq-button');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentItem = button.closest('.faq-item');
      if (!currentItem) return;
      const isActive = currentItem.classList.contains('active');

      // Fecha outros itens
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== currentItem) {
          item.classList.remove('active');
          const otherBtn = item.querySelector('.faq-button');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Alterna o atual
      if (isActive) {
        currentItem.classList.remove('active');
        button.setAttribute('aria-expanded', 'false');
      } else {
        currentItem.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 6. Formulário de Diagnóstico / Auditoria com Validação
  const auditForm = document.getElementById('auditForm');
  if (auditForm) {
    auditForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('auditName');
      const phoneInput = document.getElementById('auditPhone');
      const segmentInput = document.getElementById('auditSegment');
      const urlInput = document.getElementById('auditUrl');
      const goalInput = document.getElementById('auditGoal');

      const name = nameInput?.value.trim() || '';
      const phone = phoneInput?.value.trim() || '';
      const segment = segmentInput?.value || '';
      const currentUrl = urlInput?.value.trim() || 'Ainda não possui site';
      const goal = goalInput?.value || 'Diagnóstico Geral';

      // Validação visual simples e acessível
      let hasError = false;
      [nameInput, phoneInput, segmentInput].forEach(field => {
        if (field && !field.value.trim()) {
          field.style.borderColor = '#E05D52';
          hasError = true;
        } else if (field) {
          field.style.borderColor = 'var(--border-color)';
        }
      });

      if (hasError) {
        return;
      }

      // Mensagem estruturada e contextualizada para WhatsApp da WD Web Studio
      const msg = `*SOLICITAÇÃO DE ANÁLISE — WD WEB STUDIO*
---------------------------------------
*Nome:* ${name}
*WhatsApp:* ${phone}
*Segmento:* ${segment}
*Site Atual:* ${currentUrl}
*Principal Objetivo:* ${goal}
---------------------------------------
_Olá! Preenchi o formulário no site da WD Web Studio e gostaria de receber uma análise da minha presença digital._`;

      const encodedMsg = encodeURIComponent(msg);
      const waNumber = '5544991823532';
      const waUrl = `https://wa.me/${waNumber}?text=${encodedMsg}`;

      const submitBtn = auditForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>Encaminhando...</span>`;
        submitBtn.disabled = true;

        setTimeout(() => {
          window.open(waUrl, '_blank', 'noopener,noreferrer');
          submitBtn.innerHTML = `<span>✓ Encaminhado para o WhatsApp</span>`;
          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
          }, 3500);
        }, 500);
      } else {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    });
  }
});
