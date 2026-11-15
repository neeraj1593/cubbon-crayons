// Add the public Payhip product URL for each story when checkout is ready.
const productLinks = {
  idli: '',
  amma: '',
  ajja: '',
  park: ''
};

const dialog = document.querySelector('#story-dialog');
const buyButton = document.querySelector('#dialog-buy');
const dialogStatus = document.querySelector('#dialog-status');
const cards = [...document.querySelectorAll('.card')];

function payhipLink(product) {
  try {
    const url = new URL(productLinks[product]);
    if (url.protocol === 'https:' && url.hostname === 'payhip.com' && /^\/b\/[^/]+\/?$/.test(url.pathname)) {
      return url.href;
    }
  } catch {
    // An empty or invalid listing URL leaves the product in preview mode.
  }
  return '';
}

if (cards.some(card => payhipLink(card.dataset.product))) {
  document.querySelector('#store-status').lastChild.textContent = ' Select a story to view availability';
}

if (typeof dialog.showModal === 'function') {
  for (const card of cards) {
    const details = card.querySelector('.detail');
    details.setAttribute('aria-label', `Story details for ${card.dataset.title}`);
    details.hidden = false;
    details.addEventListener('click', () => {
      const cover = card.querySelector('img');
      document.querySelector('#dialog-cover').src = cover.src;
      document.querySelector('#dialog-title').textContent = card.dataset.title;
      document.querySelector('#dialog-kannada').textContent = card.querySelector('.kannada').textContent;
      document.querySelector('#dialog-theme').textContent = card.querySelector('.tag').textContent;
      document.querySelector('#dialog-description').textContent = card.querySelector('.description').textContent;
      document.querySelector('#dialog-format').textContent = card.querySelector('.card-bottom > span').textContent;

      const url = payhipLink(card.dataset.product);
      buyButton.hidden = !url;
      dialogStatus.hidden = Boolean(url);
      if (url) buyButton.href = url;
      else buyButton.removeAttribute('href');
      dialog.showModal();
    });
  }
}
