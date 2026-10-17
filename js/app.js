/**
 * SVEONARA - Main Interactive Application Logic
 * Swedish IPTV Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  initLiveViewersCounter();
  initPricingWithConnections();
  initDeviceSetupGuide();
  initTwoColumnFaq();
  initMobileMenu();
  initSocialProofToast();
  initTrialModal();
  initWhatsAppLinks();
});

/**
 * 1. Live Viewers Counter (Simulates live viewers like in reference Image 1)
 */
function initLiveViewersCounter() {
  const counterEl = document.getElementById('live-viewers-count');
  if (!counterEl) return;

  let currentCount = 2847;
  counterEl.textContent = currentCount.toLocaleString('sv-SE');

  setInterval(() => {
    // Random subtle fluctuation between -3 and +4
    const change = Math.floor(Math.random() * 8) - 3;
    currentCount = Math.max(2810, Math.min(2895, currentCount + change));
    counterEl.textContent = currentCount.toLocaleString('sv-SE');
  }, 4500);
}

/**
 * 2. Helper to generate WhatsApp URL with Swedish text
 */
function getWhatsAppUrl(customMessage) {
  const cfg = window.SVEONARA_CONFIG || {};
  const phone = (cfg.brand && cfg.brand.whatsappNumber) || "19027036354";
  const msg = encodeURIComponent(customMessage || (cfg.brand && cfg.brand.whatsappDefaultMessage) || "Hej Swedish Nara!");
  return `https://wa.me/${phone}?text=${msg}`;
}

function initWhatsAppLinks() {
  const cfg = window.SVEONARA_CONFIG || {};
  const displayNum = (cfg.brand && cfg.brand.whatsappDisplay) || "+1 902 703 6354";

  // Inject formatted number into any text container displaying WhatsApp number
  document.querySelectorAll('[data-whatsapp-number]').forEach(el => {
    el.textContent = displayNum;
  });

  document.querySelectorAll('[data-whatsapp-btn]').forEach(btn => {
    const customMsg = btn.getAttribute('data-msg');
    btn.setAttribute('href', getWhatsAppUrl(customMsg));
    btn.setAttribute('target', '_blank');
    btn.setAttribute('rel', 'noopener noreferrer');
  });

  const floatingBtn = document.getElementById('floating-whatsapp-btn');
  if (floatingBtn) {
    floatingBtn.setAttribute('href', getWhatsAppUrl("Hej Swedish Nara! Jag behöver hjälp eller har en fråga om era IPTV-abonnemang."));
    floatingBtn.setAttribute('target', '_blank');
  }
}

/**
 * 3. Render and Manage Pricing Cards with Interactive Connection Selector
 * (Inspired by the multi-connection selector in Image 1)
 */
function initPricingWithConnections() {
  const container = document.getElementById('pricing-grid');
  if (!container || !window.SVEONARA_CONFIG) return;

  const packages = window.SVEONARA_CONFIG.pricing.packages;
  const currency = window.SVEONARA_CONFIG.pricing.currency;

  container.innerHTML = packages.map((pkg, pIndex) => {
    const isPopular = pkg.popular;
    const cardClass = isPopular ? 'glass-card-gold relative z-10 scale-100 lg:scale-105 mt-6 lg:mt-0' : 'glass-card';
    const cardPadding = isPopular ? 'pt-10 pb-7 px-6 sm:px-7' : 'p-6 sm:p-7';
    const btnClass = isPopular ? 'btn-swedish-gold shadow-xl' : 'btn-swedish-blue shadow-lg';
    
    // Default connection is 1 Enhet
    const defaultConn = pkg.connections[0];
    const initialWaMsg = `Hej Swedish Nara! Jag vill beställa ${pkg.name} för ${defaultConn.label} till priset ${defaultConn.price} kr.`;
    const initialWaUrl = getWhatsAppUrl(initialWaMsg);

    return `
      <div id="pkg-card-${pkg.id}" class="${cardClass} ${cardPadding} rounded-3xl flex flex-col justify-between transition-all duration-300">
        
        ${isPopular ? `
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 text-[11px] font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-xl flex items-center gap-1.5 border border-yellow-200 whitespace-nowrap z-30" style="white-space: nowrap;">
            <i class="fa-solid fa-crown text-[10px]"></i>
            <span>${pkg.badge}</span>
          </div>
        ` : `
          <div class="inline-block self-start bg-sky-950/80 text-sky-300 border border-sky-500/30 text-xs font-bold px-3 py-1 rounded-full mb-3">
            ${pkg.badge}
          </div>
        `}

        <div>
          <!-- Plan Name & Discount Badge -->
          <div class="flex items-center justify-between mb-3 gap-2">
            <h3 class="text-xl sm:text-2xl font-black text-white font-heading">${pkg.name}</h3>
            ${pkg.savePercent ? `
              <span class="text-[11px] font-black text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-1 rounded-lg shrink-0">
                Spara ${pkg.savePercent}%
              </span>
            ` : ''}
          </div>

          <!-- Price Display (dynamically updated when changing connection) -->
          <div class="my-4 pb-4 border-b border-slate-700/60">
            <div class="flex items-baseline gap-1.5">
              <span id="price-display-${pkg.id}" class="text-4xl sm:text-5xl font-black text-white tracking-tight">${defaultConn.price}</span>
              <span class="text-xl font-bold text-yellow-400">${currency}</span>
              ${pkg.originalPrice ? `<span class="text-xs text-slate-400 ml-2 line-through">${pkg.originalPrice} ${currency}</span>` : ''}
            </div>
            ${pkg.bonusText ? `
              <p class="text-xs font-bold text-yellow-300 mt-1 flex items-center gap-1.5">
                <i class="fa-solid fa-gift text-xs"></i> ${pkg.bonusText}
              </p>
            ` : ''}
          </div>

          <!-- Multi-Connection Selector (Inspired by Image 1) -->
          <div class="mb-5 bg-slate-900/80 p-2 rounded-xl border border-slate-800">
            <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 px-1">
              Välj antal enheter samtidigt:
            </label>
            <div class="grid grid-cols-3 gap-1.5 text-center">
              ${pkg.connections.map((c, cIdx) => `
                <button 
                  type="button"
                  onclick="selectConnection('${pkg.id}', ${c.devices}, ${c.price}, '${c.label}', '${pkg.name}')"
                  class="conn-pill-${pkg.id} py-1.5 px-2 rounded-lg text-xs font-bold transition ${cIdx === 0 ? 'bg-sky-600 text-white shadow' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}"
                  data-devices="${c.devices}"
                >
                  ${c.label}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Feature List -->
          <ul class="space-y-2.5 mb-6 text-xs sm:text-sm">
            ${pkg.features.map(f => `
              <li class="flex items-start gap-2.5 text-slate-300">
                <i class="fa-solid fa-circle-check ${isPopular ? 'text-yellow-400' : 'text-sky-400'} mt-0.5 text-sm shrink-0"></i>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- CTA Action -->
        <div class="space-y-2.5 pt-3 border-t border-slate-700/50">
          <a id="btn-wa-${pkg.id}" href="${initialWaUrl}" target="_blank" rel="noopener noreferrer" class="w-full ${btnClass} py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-center text-sm font-bold uppercase tracking-wide">
            <i class="fa-brands fa-whatsapp text-lg"></i>
            <span>Beställ Nu</span>
          </a>
          <button onclick="openTrialModal('${pkg.name}')" class="w-full text-xs text-slate-400 hover:text-white py-1 transition text-center flex items-center justify-center gap-1">
            <span>Eller begär ett gratis 24h test först</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </button>
        </div>

      </div>
    `;
  }).join('');
}

/**
 * Handle connection pill click
 */
window.selectConnection = function(pkgId, devices, price, connLabel, pkgName) {
  // Update price number
  const priceDisplay = document.getElementById(`price-display-${pkgId}`);
  if (priceDisplay) priceDisplay.textContent = price;

  // Update button active state
  document.querySelectorAll(`.conn-pill-${pkgId}`).forEach(btn => {
    if (parseInt(btn.getAttribute('data-devices')) === devices) {
      btn.classList.remove('bg-slate-800', 'text-slate-300');
      btn.classList.add('bg-sky-600', 'text-white', 'shadow');
    } else {
      btn.classList.remove('bg-sky-600', 'text-white', 'shadow');
      btn.classList.add('bg-slate-800', 'text-slate-300');
    }
  });

  // Update WhatsApp link with new configuration
  const waBtn = document.getElementById(`btn-wa-${pkgId}`);
  if (waBtn) {
    const waMsg = `Hej Sveonara! Jag vill beställa ${pkgName} för ${connLabel} till priset ${price} kr.`;
    waBtn.setAttribute('href', getWhatsAppUrl(waMsg));
  }
};

/**
 * 4. Interactive Device Setup Guide Accordion (Inspired by Image 4)
 */
function initDeviceSetupGuide() {
  const items = document.querySelectorAll('.device-guide-item');
  items.forEach(item => {
    const trigger = item.querySelector('.device-guide-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * 5. Two-Column FAQ Accordion (Inspired by Image 5)
 */
function initTwoColumnFaq() {
  const faqItems = document.querySelectorAll('.accordion-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Close other items in the same column or global
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * 6. Mobile Menu
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

/**
 * 7. Social Proof Toast
 */
function initSocialProofToast() {
  const toast = document.getElementById('social-toast');
  if (!toast || !window.SVEONARA_CONFIG) return;

  const orders = window.SVEONARA_CONFIG.socialProofRecentOrders || [];
  if (!orders.length) return;

  let index = 0;
  function showNextToast() {
    const order = orders[index % orders.length];
    index++;

    toast.querySelector('#toast-name-city').textContent = `${order.name} från ${order.city}`;
    toast.querySelector('#toast-plan').textContent = `Beställde ${order.plan}`;
    toast.querySelector('#toast-time').textContent = order.time;

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 6000);
  }

  setTimeout(() => {
    showNextToast();
    setInterval(showNextToast, 24000);
  }, 7000);
}

/**
 * 8. Free Trial Modal Logic
 */
window.openTrialModal = function(preferredPlan = '') {
  const modal = document.getElementById('trial-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.closeTrialModal = function() {
  const modal = document.getElementById('trial-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
};

function initTrialModal() {
  const form = document.getElementById('trial-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const device = form.querySelector('#trial-device').value;
    const name = form.querySelector('#trial-name').value || 'Kund';

    const msg = `Hej Sveonara! Jag heter ${name} och vill begära ett gratis 24h test för min enhet: ${device}. Tack!`;
    const waUrl = getWhatsAppUrl(msg);
    window.open(waUrl, '_blank');
    closeTrialModal();
  });
}
