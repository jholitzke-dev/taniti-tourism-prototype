function closeAllFaqItems() {
  document.querySelectorAll('.faq-item.open').forEach(item => {
    item.classList.remove('open');
  });
}

window.addEventListener('pageshow', closeAllFaqItems);

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  if (menu && nav) {
    menu.addEventListener('click', () => nav.classList.toggle('open'));
  }

  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.filters');
      group.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      document.querySelectorAll('[data-category]').forEach(card => {
        const cats = card.dataset.category.split(' ');
        card.classList.toggle('hidden', !(filter === 'all' || cats.includes(filter)));
      });
    });
  });

  closeAllFaqItems();
  
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const currentItem = q.closest('.faq-item');

      document.querySelectorAll('.faq-item.open').forEach(item => {
        if (item !== currentItem) {
          item.classList.remove('open');
        }
      });

      currentItem.classList.toggle('open');
    });
  });

  const modal = document.querySelector('.modal');

  document.querySelectorAll('[data-modal]').forEach(el =>
    el.addEventListener('click', e => {
      e.preventDefault();
      modal?.classList.add('show');
    })
  );

  document.querySelectorAll('.modal-close,.modal').forEach(el =>
    el.addEventListener('click', e => {
      if (e.target === el) {
        modal?.classList.remove('show');
      }
    })
  );
});
