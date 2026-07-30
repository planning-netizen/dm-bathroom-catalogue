// DM Home Improvement - Bathroom Design Portfolio Interactive Logic

const portfolioData = {
  bronze: [
    {
      id: 'ashford',
      name: 'The Ashford',
      tagline: 'Clean. Comfortable. Timeless.',
      image: 'assets/images/ashford.jpg',
      story: 'The Ashford blends warm neutrals, clean lines, and thoughtfully coordinated finishes to create a bathroom that feels bright, welcoming, and effortlessly timeless. Designed for everyday living, it offers a refined look that complements a wide variety of homes.',
      includes: [
        'Coordinated white transitional vanity',
        'Luxury marble-look vinyl plank flooring',
        'Pristine white tub and shower surround',
        'Brushed nickel plumbing fixtures',
        'Coordinated mirror and vanity light',
        'Hardware and accessories',
        'Soft greige wall color tone'
      ],
      specs: [
        { element: 'Harlow Vanity Collection', desc: 'Transitional styling with clean lines and timeless white finish.' },
        { element: 'Harlow Mirror Collection', desc: 'Framed mirror designed to coordinate seamlessly with vanity.' },
        { element: 'Harlow Lighting Collection', desc: 'Elegant dual-sconce lighting that completes the design.' },
        { element: 'Marble Look LVP Collection', desc: 'Durable waterproof flooring with natural marble aesthetic.' },
        { element: 'Brushed Nickel Fixtures', desc: 'Versatile finish complementing every element of the room.' }
      ],
      hotspots: [
        { top: '55%', left: '35%', title: 'Harlow Vanity & Quartz', text: 'Bright white cabinetry with stain-resistant quartz top' },
        { top: '85%', left: '50%', title: 'Marble-Look LVP', text: 'Waterproof luxury vinyl plank with warm grey veining' },
        { top: '35%', left: '42%', title: 'Brushed Nickel Faucet', text: 'Precision engineered dual-lever faucet in brushed nickel' },
        { top: '25%', left: '35%', title: 'Harlow Framed Mirror', text: 'Matching white framed accent mirror with anti-fog coating' },
        { top: '40%', left: '75%', title: 'Tub Surround', text: 'Clean white ceramic surround with built-in niche' }
      ]
    },
    {
      id: 'brighton',
      name: 'The Brighton',
      tagline: 'Warm. Modern. Welcoming.',
      image: 'assets/images/brighton.jpg',
      story: 'The Brighton pairs rich natural wood textures with striking matte black accents to create a contemporary sanctuary. Thoughtfully balanced for modern homes, it brings warmth and architectural character into everyday living.',
      includes: [
        'Natural warm oak floating vanity',
        'Subtle grey quartz countertop',
        'Matte black architectural fixtures',
        'Textured grey porcelain tile wall accent',
        'Round LED backlit mirror',
        'Matte black hardware set'
      ],
      specs: [
        { element: 'Brighton Oak Vanity', desc: 'Warm oak veneer with push-to-open soft close drawers.' },
        { element: 'Matte Black Fixture Line', desc: 'Minimalist wall-mounted fixtures in matte black finish.' },
        { element: 'Halo LED Mirror', desc: 'Integrated ambient backlighting for warm evening light.' },
        { element: 'Stone Texture LVP', desc: 'Deep grey slate-inspired waterproof flooring planks.' }
      ],
      hotspots: [
        { top: '58%', left: '30%', title: 'Warm Oak Vanity', text: 'Natural grain finish with moisture seal coating' },
        { top: '35%', left: '30%', title: 'Wall-Mounted Black Faucet', text: 'Matte black wall-mount brass spout' },
        { top: '22%', left: '30%', title: 'Halo LED Mirror', text: 'Warm 2700K ambient LED glow with touch dimmer' },
        { top: '45%', left: '70%', title: 'Textured Tile Wall', text: 'Large format tactile porcelain accent tile' }
      ]
    },
    {
      id: 'somerset',
      name: 'The Somerset',
      tagline: 'Classic. Refined. Elegant.',
      image: 'assets/images/somerset.jpg',
      story: 'The Somerset brings timeless classic elegance into focus with rich navy cabinetry, polished chrome details, and vintage-inspired marble tile work. A sophisticated choice for master suites.',
      includes: [
        'Classic navy blue double vanity',
        'Polished chrome high-arc fixtures',
        'White subway tile surround',
        'Hexagonal marble mosaic floor',
        'Dual glass shade wall sconces'
      ],
      specs: [
        { element: 'Somerset Navy Vanity', desc: 'Deep classic navy lacquer with soft-close solid wood doors.' },
        { element: 'Polished Chrome Collection', desc: 'Reflective brilliant chrome fixtures with cross handles.' },
        { element: 'Hex Marble Flooring', desc: 'Authentic Carrara marble hexagonal tile mosaic.' },
        { element: 'Heritage Sconce Light', desc: 'Glass shade sconces providing balanced glow.' }
      ],
      hotspots: [
        { top: '60%', left: '40%', title: 'Navy Blue Double Vanity', text: 'Solid hardwood frame in classic navy finish' },
        { top: '38%', left: '42%', title: 'Polished Chrome Fixtures', text: 'High-shine traditional cross-handle faucets' },
        { top: '88%', left: '45%', title: 'Hexagon Marble Floor', text: 'Hand-set Carrara marble hexagon tile' },
        { top: '30%', left: '78%', title: 'Classic Subway Surround', text: 'Beveled edge white porcelain subway tile' }
      ]
    }
  ],
  silver: [
    {
      id: 'sterling',
      name: 'The Sterling',
      tagline: 'Custom. Refined. Timeless.',
      image: 'assets/images/ashford.jpg',
      story: 'The Sterling collection elevates everyday luxury with custom furniture-grade cabinetry, quartz slab surrounds, and champagne bronze fixtures for a warm metallic sheen.',
      includes: [
        'Custom furniture-style vanity',
        'Seamless quartz slab tub wall',
        'Champagne bronze plumbing collection',
        'Frameless glass shower enclosure',
        'Custom vanity lighting'
      ],
      specs: [
        { element: 'Sterling Custom Vanity', desc: 'Soft-close dovetail drawers with velvet organizer inserts.' },
        { element: 'Champagne Bronze Collection', desc: 'Muted warm gold tone with fingerprint resistant coat.' },
        { element: 'Quartz Slab Surround', desc: 'Full slab backsplashes without grout line maintenance.' }
      ],
      hotspots: [
        { top: '55%', left: '35%', title: 'Furniture-Grade Vanity', text: 'Tailored solid wood craftsmanship' },
        { top: '35%', left: '42%', title: 'Champagne Bronze Faucet', text: 'Luxury warm metallic finish' }
      ]
    }
  ],
  gold: [
    {
      id: 'riviera',
      name: 'The Riviera',
      tagline: 'Luxury Without Compromise.',
      image: 'assets/images/riviera.jpg',
      story: 'The Riviera represents the pinnacle of residential spa design. Featuring a freestanding soaking tub, floor-to-ceiling Calacatta gold marble tile, brushed brass fixtures, and cove ambient lighting.',
      includes: [
        'Freestanding deep soaking acrylic tub',
        'Floor-to-ceiling Calacatta marble porcelain slab walls',
        'Brushed brass floor-mount tub filler',
        'Zero-threshold curbless rain shower suite',
        'Architectural cove light illumination'
      ],
      specs: [
        { element: 'Riviera Soaking Tub Suite', desc: 'Ergonomic double-ended soaking tub for ultimate relaxation.' },
        { element: 'Calacatta Marble Slabs', desc: 'High-definition gold vein marble walls.' },
        { element: 'Brushed Brass Master Line', desc: 'Thermostatic multi-jet shower system.' }
      ],
      hotspots: [
        { top: '65%', left: '45%', title: 'Freestanding Soaking Tub', text: 'Insulated double-wall acrylic soaking tub' },
        { top: '40%', left: '20%', title: 'Calacatta Gold Marble', text: 'Book-matched Italian marble vein porcelain slabs' },
        { top: '55%', left: '68%', title: 'Brushed Brass Tub Filler', text: 'Floor-mounted high-flow filler with hand sprayer' }
      ]
    }
  ]
};

let currentTier = 'bronze';
let currentDesignId = 'ashford';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTierTabs();
  initCustomizer();
  initFAQ();
  initConsultationForm();
  renderShowcase();
});

// Navigation scroll highlight & mobile toggle
function initNavigation() {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }
}

// Tier Selection Tabs
function initTierTabs() {
  const tabs = document.querySelectorAll('.tier-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTier = tab.dataset.tier;
      currentDesignId = portfolioData[currentTier][0].id;
      renderShowcase();
    });
  });
}

// Render Main Showcase Viewport
function renderShowcase() {
  const designs = portfolioData[currentTier];
  const designBar = document.getElementById('design-selector-bar');
  designBar.innerHTML = '';

  designs.forEach(d => {
    const btn = document.createElement('button');
    btn.className = `design-btn ${d.id === currentDesignId ? 'active' : ''}`;
    btn.textContent = d.name;
    btn.addEventListener('click', () => {
      currentDesignId = d.id;
      renderShowcase();
    });
    designBar.appendChild(btn);
  });

  const design = designs.find(d => d.id === currentDesignId) || designs[0];

  document.getElementById('showcase-badge').textContent = `${currentTier.toUpperCase()} COLLECTION`;
  document.getElementById('showcase-name').textContent = design.name;
  document.getElementById('showcase-tag').textContent = design.tagline;
  document.getElementById('showcase-story').textContent = design.story;
  
  const img = document.getElementById('showcase-image');
  img.src = design.image;
  img.alt = `${design.name} Rendering`;

  // Render Includes
  const includesList = document.getElementById('includes-list');
  includesList.innerHTML = '';
  design.includes.forEach(inc => {
    const li = document.createElement('li');
    li.textContent = inc;
    includesList.appendChild(li);
  });

  // Render Specs Table
  const specsBody = document.getElementById('specs-table-body');
  specsBody.innerHTML = '';
  design.specs.forEach(s => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td><strong>${s.element}</strong></td><td>${s.desc}</td>`;
    specsBody.appendChild(tr);
  });

  // Render Hotspots
  const hotspotsLayer = document.getElementById('hotspots-layer');
  hotspotsLayer.innerHTML = '';
  design.hotspots.forEach((h, idx) => {
    const pin = document.createElement('div');
    pin.className = 'hotspot-pin';
    pin.style.top = h.top;
    pin.style.left = h.left;
    pin.innerHTML = `
      <span>${idx + 1}</span>
      <div class="hotspot-tooltip">
        <strong>${h.title}</strong><br>${h.text}
      </div>
    `;
    hotspotsLayer.appendChild(pin);
  });

  // Personalize button trigger
  const personalizeBtn = document.getElementById('btn-personalize-this');
  personalizeBtn.textContent = `Personalize ${design.name} Design`;
  personalizeBtn.onclick = () => {
    document.getElementById('custom-base-select').value = design.id;
    updateCustomizerSummary();
    document.getElementById('personalize').scrollIntoView({ behavior: 'smooth' });
  };
}

// Live Personalization Customizer Engine
function initCustomizer() {
  const baseSelect = document.getElementById('custom-base-select');
  baseSelect.addEventListener('change', updateCustomizerSummary);

  setupSwatchPicker('cabinet-swatches', 'cabinet-val', 'cabinet');
  setupSwatchPicker('hardware-swatches', 'hardware-val', 'hardware');
  setupSwatchPicker('flooring-swatches', 'flooring-val', 'flooring');
  setupSwatchPicker('paint-swatches', 'paint-val', 'paint');

  document.getElementById('btn-save-config').addEventListener('click', () => {
    const prefSelect = document.getElementById('pref-collection');
    const selectedBase = document.getElementById('sum-base').textContent;
    const cabinet = document.getElementById('sum-cabinet').textContent;
    const hardware = document.getElementById('sum-hardware').textContent;
    
    prefSelect.value = `Customized - ${selectedBase}`;
    document.getElementById('notes').value = `Personalized Specs: Cabinetry (${cabinet}), Hardware/Fixtures (${hardware}), Flooring (${document.getElementById('sum-flooring').textContent}), Paint (${document.getElementById('sum-paint').textContent}).`;
    
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
}

function setupSwatchPicker(containerId, labelId, specKey) {
  const container = document.getElementById(containerId);
  const btns = container.querySelectorAll('.swatch-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.dataset.option;
      document.getElementById(labelId).textContent = val;
      updateCustomizerSummary();
    });
  });
}

function updateCustomizerSummary() {
  const baseVal = document.getElementById('custom-base-select');
  const baseText = baseVal.options[baseVal.selectedIndex].text;
  
  document.getElementById('sum-base').textContent = baseText;
  document.getElementById('sum-cabinet').textContent = document.getElementById('cabinet-val').textContent;
  document.getElementById('sum-hardware').textContent = document.getElementById('hardware-val').textContent;
  document.getElementById('sum-flooring').textContent = document.getElementById('flooring-val').textContent;
  document.getElementById('sum-paint').textContent = document.getElementById('paint-val').textContent;

  // Swap preview image based on base selection
  const imgMap = {
    ashford: 'assets/images/ashford.jpg',
    brighton: 'assets/images/brighton.jpg',
    somerset: 'assets/images/somerset.jpg',
    riviera: 'assets/images/riviera.jpg'
  };
  const imgEl = document.getElementById('custom-preview-img');
  if (imgMap[baseVal.value]) {
    imgEl.src = imgMap[baseVal.value];
  }
}

// FAQ Accordion
function initFAQ() {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Consultation Form & Modal Summary
function initConsultationForm() {
  const form = document.getElementById('consultation-form');
  const modal = document.getElementById('summary-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalDone = document.getElementById('modal-done-btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('full-name').value;
    const email = document.getElementById('email-addr').value;
    const phone = document.getElementById('phone-num').value;
    const collection = document.getElementById('pref-collection').value;
    const notes = document.getElementById('notes').value;

    const modalBody = document.getElementById('modal-body-content');
    modalBody.innerHTML = `
      <div style="background:#FAF9F6; padding:20px; border-radius:8px; border:1px solid #E2E8F0; margin-bottom:20px;">
        <h4 style="color:#C5A059; margin-bottom:10px;">Consultation Request Confirmed</h4>
        <p><strong>Homeowner:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
        <p><strong>Selected Collection:</strong> ${collection}</p>
        ${notes ? `<p style="margin-top:10px;"><strong>Vision Notes:</strong> ${notes}</p>` : ''}
      </div>
      <p style="font-size:0.9rem; color:#64748B; text-align:center;">
        Thank you for submitting your consultation request! Design Curator <strong>Danielle Felice</strong> will reach out to confirm your appointment details.
      </p>
    `;

    modal.showModal();
  });

  if (modalClose) modalClose.addEventListener('click', () => modal.close());
  if (modalDone) modalDone.addEventListener('click', () => modal.close());
}
