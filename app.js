// DM Home Improvement - Bathroom Design Portfolio Interactive Logic (Synced with print_v2.html)

const portfolioData = {
  bronze: [
    {
      id: 'bronze_timeless',
      name: 'The Timeless',
      tagline: 'Soft. Elegant. Enduring.',
      image: 'assets/images/bronze_timeless_render.jpg',
      story: 'Blends white marble inspiration, sophisticated gray cabinetry, and brushed nickel finishes to create a bathroom that feels bright, welcoming, and effortlessly timeless. Designed for everyday living.',
      includes: [
        'Flooring: Marble-Look Waterproof LVP',
        'Vanity: Solid Wood Gray + Quartz Top',
        'Fixtures: Brushed Nickel Hardware',
        'Bathing: White Tub & Surround',
        'Enclosure: 78" Glass Door',
        'Tile Edging: Mitered Schluter Metal'
      ],
      curatorQuote: '“Timeless is about creating elegance without making the room feel formal.”'
    },
    {
      id: 'modern_bronze',
      name: 'The Modern',
      tagline: 'Clean. Crisp. Modern.',
      image: 'assets/images/modern_bronze_render.jpg',
      story: 'Concrete-inspired gray flooring, fresh white vanity, and matte black fixtures introduce crisp contrast and architectural definition for a clean contemporary palette.',
      includes: [
        'Flooring: Concrete-Look Grey LVP',
        'Vanity: Solid Wood White + Quartz Top',
        'Fixtures: Coordinated Matte Black',
        'Bathing: White Tub & Surround',
        'Enclosure: 78" Glass Door',
        'Tile Edging: Mitered Schluter Metal'
      ],
      curatorQuote: '“Modern uses contrast to make simple choices feel intentional.”'
    },
    {
      id: 'bronze_classic',
      name: 'The Classic',
      tagline: 'Warm. Rich. Inviting.',
      image: 'assets/images/bronze_classic_render.jpg',
      story: 'Natural wood-grain flooring grounds the room, while a distinctive navy vanity introduces warmth and enduring personality for a welcoming atmosphere.',
      includes: [
        'Flooring: Natural Wood-Grain LVP',
        'Vanity: Navy Blue Solid Wood + Quartz Top',
        'Fixtures: Stainless / Brushed Nickel',
        'Bathing: White Tub & Surround',
        'Enclosure: 78" Glass Door',
        'Tile Edging: Mitered Schluter Metal'
      ],
      curatorQuote: '“Classic is for someone who wants personality without making the room complicated.”'
    }
  ],
  silver: [
    {
      id: 'silver_timeless',
      name: 'The Timeless Signature',
      tagline: 'Polished. Refined. Enduring. ★ FOUNDER\'S CHOICE',
      image: 'assets/images/silver_timeless_render.jpg',
      story: 'Custom walk-in tile shower featuring polished 12x24 marble wall tile to ceiling, matte floor tile, Muse Grey vanity, and Harlow brushed nickel fixtures. Our #1 most requested remodel package.',
      includes: [
        '★ Founder\'s Pick: Custom 12x24 Walk-In Tile Shower',
        'Shower Walls: Polished Marble 12x24 Tile to Ceiling',
        'Bathroom Floor: Matte Large Format Porcelain',
        'Shower Pan: Slip-Resistant Marble Mosaic',
        'Vanity: Muse Grey Furniture Style with Soft-Close',
        'Fixtures: Harlow Collection Brushed Nickel',
        'Glass Door: 78" Semi-Frameless Glass Door'
      ],
      curatorQuote: '“Timeless Signature is our most requested remodel because it strikes the perfect balance—custom marble tile shower, Harlow fixtures, and timeless elegance.” — Danielle Felice'
    },
    {
      id: 'silver_modern',
      name: 'The Modern Grey',
      tagline: 'Sleek. Tailored. Architectural.',
      image: 'assets/images/silver_modern_grey_render.jpg',
      story: 'Contemporary matte grey porcelain 12x24 wall tile to ceiling, matching grey mesh mosaic shower floor, and bold matte black Harlow fixtures for a modern architectural look.',
      includes: [
        'Walls & Main Floor: Matte Grey Porcelain 12x24 Tile',
        'Shower Pan: Grey Mesh Mosaic Tile',
        'Vanity: Modern Solid Wood + Quartz Top',
        'Fixtures: Harlow Matte Black Fixtures',
        'Glass Door: 78" Semi-Frameless Glass Door',
        'Tile Edging: Color-Matched Schluter Metal'
      ],
      curatorQuote: '“Modern Grey delivers crisp architectural lines and bold contrast while retaining complete white-glove comfort.”'
    },
    {
      id: 'silver_classic',
      name: 'The Classic Neutral',
      tagline: 'Warm. Balanced. Organic.',
      image: 'assets/images/silver_classic_neutral_render.jpg',
      story: 'Warm neutral limestone ceramic wall tile to ceiling, tonal porcelain floor tile, pebble mosaic shower base, and refined brushed champagne bronze metal accents.',
      includes: [
        'Bathroom Walls: Warm Limestone 12x24 Wall Tile to Ceiling',
        'Bathroom Floor: Warm Tonal Porcelain Floor Tile',
        'Shower Pan: Slip-Resistant Pebble Mosaic Base',
        'Vanity: Warm Oak Furniture Vanity + Quartz Top',
        'Fixtures: Harlow Brushed Champagne Bronze Suite',
        'Glass Door: 78" Semi-Frameless Glass Door'
      ],
      curatorQuote: '“Classic Neutral brings organic warmth into a custom tiled shower space.”'
    }
  ],
  gold: [
    {
      id: 'gold_spa',
      name: 'Gold Spa Master Sanctuary',
      tagline: 'Your Everyday Escape — Spa Standard v1.1',
      image: 'assets/images/gold_spa_master_render.jpg',
      story: 'Ultra-luxury spa master suite featuring floor-to-ceiling Calacatta Gold marble, freestanding soaking tub, floating dark walnut double vanity with waterfall quartz, radiant in-floor heating, oversized 30" recessed quartz niche with LED lighting, and 78" custom heavy duty frameless glass.',
      includes: [
        'Radiant In-Floor Heating System',
        'Ceiling-Height Calacatta Marble Tile',
        'Oversized 30" Quartz Niche + LED',
        'Freestanding Double-Ended Soaking Tub',
        '78" Custom Heavy Duty Frameless Glass',
        'Brushed Gold Thermostatic Shower Suite'
      ],
      curatorQuote: '“The Gold Collection is about creating a true master suite sanctuary—luxury without compromise.”'
    }
  ]
};

let currentTier = 'silver';
let currentDesignId = 'silver_timeless';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTierTabs();
  renderSubTabs();
  renderShowcase();
});

function initNavigation() {
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }
}

function initTierTabs() {
  const tabs = document.querySelectorAll('.tier-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTier = tab.dataset.tier;
      currentDesignId = portfolioData[currentTier][0].id;
      renderSubTabs();
      renderShowcase();
    });
  });
}

function renderSubTabs() {
  const subBar = document.getElementById('design-selector-bar');
  if (!subBar) return;

  subBar.innerHTML = '';
  const designs = portfolioData[currentTier];

  designs.forEach(d => {
    const btn = document.createElement('button');
    btn.className = `design-btn ${d.id === currentDesignId ? 'active' : ''}`;
    btn.innerText = d.name;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.design-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDesignId = d.id;
      renderShowcase();
    });
    subBar.appendChild(btn);
  });
}

function renderShowcase() {
  const designs = portfolioData[currentTier];
  const design = designs.find(d => d.id === currentDesignId) || designs[0];

  const badgeText = currentTier === 'silver' ? 'SILVER SIGNATURE ★ FOUNDER\'S GO-TO PICK' : `${currentTier.toUpperCase()} COLLECTION`;
  document.getElementById('showcase-badge').innerText = badgeText;
  document.getElementById('showcase-name').innerText = design.name;
  document.getElementById('showcase-tag').innerText = design.tagline;
  document.getElementById('showcase-image').src = design.image;
  document.getElementById('showcase-story').innerText = design.story;
  document.getElementById('showcase-curator-quote').innerText = design.curatorQuote;

  const includesList = document.getElementById('includes-list');
  includesList.innerHTML = '';
  design.includes.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    if (item.includes('Founder')) {
      li.style.fontWeight = 'bold';
      li.style.color = '#001A33';
    }
    includesList.appendChild(li);
  });
}
