/** A dialog belongs to one gallery, but lives under body to escape page styles. */
class PortfolioGallery extends HTMLElement {
  private cleanup?: () => void;
  connectedCallback() {
    if (this.cleanup) return;
    const abort = new AbortController();
    const options = { signal: abort.signal };
    const all = Array.from(this.querySelectorAll<HTMLButtonElement>('[data-full-src]'))
      .filter(item => item.closest('portfolio-gallery') === this);
    const items = all.filter(item => (item.dataset.lightbox ?? this.dataset.lightbox) !== 'false');
    all.forEach(item => { item.disabled = !items.includes(item); });
    let dialog: HTMLDialogElement | undefined;
    let trigger: HTMLButtonElement | undefined;
    let index = 0, revision = 0;
    let oldOverflow = '';
    let gesture: { x: number; y: number } | undefined;
    const restore = () => {
      revision++;
      document.documentElement.style.overflow = oldOverflow;
      dialog?.querySelector('.portfolio-lightbox-image')?.replaceChildren();
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
    const render = () => {
      if (!dialog) return;
      const item = items[index], token = ++revision;
      const holder = dialog.querySelector<HTMLElement>('.portfolio-lightbox-image')!;
      const status = dialog.querySelector<HTMLElement>('.portfolio-lightbox-status')!;
      const retry = dialog.querySelector<HTMLButtonElement>('.portfolio-lightbox-retry')!;
      dialog.querySelector<HTMLElement>('.portfolio-lightbox-caption')!.textContent = item.dataset.caption || '';
      status.textContent = 'Loading photograph…';
      retry.hidden = true;
      const image = new Image();
      image.alt = item.dataset.fullAlt || '';
      if (item.dataset.width) image.width = Number(item.dataset.width);
      if (item.dataset.height) image.height = Number(item.dataset.height);
      image.decoding = 'async';
      image.draggable = false;
      image.hidden = true;
      image.addEventListener('load', () => {
        if (token !== revision) return;
        image.hidden = false;
        status.textContent = '';
      }, { once: true });
      image.addEventListener('error', () => {
        if (token !== revision) return;
        holder.replaceChildren();
        status.textContent = 'This photograph could not be loaded.';
        retry.hidden = false;
      }, { once: true });
      holder.replaceChildren(image);
      // No full-size source appears in img/src until its photograph is opened.
      image.src = item.dataset.fullSrc!;
    };
    const move = (step: number) => { index = (index + step + items.length) % items.length; render(); };
    const open = (item: HTMLButtonElement) => {
      trigger = item;
      index = items.indexOf(item);
      if (!dialog) {
        const template = this.querySelector<HTMLTemplateElement>('[data-lightbox-template]')!;
        dialog = template.content.querySelector('dialog')!.cloneNode(true) as HTMLDialogElement;
        document.body.append(dialog);
        const close = dialog.querySelector<HTMLButtonElement>('.portfolio-lightbox-close')!;
        close.addEventListener('click', () => dialog!.close(), options);
        dialog.querySelector('.portfolio-lightbox-prev')!.addEventListener('click', () => move(-1), options);
        dialog.querySelector('.portfolio-lightbox-next')!.addEventListener('click', () => move(1), options);
        dialog.querySelector('.portfolio-lightbox-retry')!.addEventListener('click', render, options);
        for (const nav of dialog.querySelectorAll<HTMLButtonElement>('.portfolio-lightbox-prev,.portfolio-lightbox-next')) nav.hidden = items.length < 2;
        dialog.addEventListener('close', restore, options);
        dialog.addEventListener('keydown', event => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault(); if (items.length > 1) move(event.key === 'ArrowLeft' ? -1 : 1);
          }
          if (event.key === 'Tab') {
            const focusable = Array.from(dialog!.querySelectorAll<HTMLButtonElement>('button')).filter(b => !b.hidden && !b.disabled);
            const first = focusable[0], last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
          }
        }, options);
        let backdropStart = false;
        const outside = (target: EventTarget | null) => target === dialog || target === dialog!.querySelector('.portfolio-lightbox-stage');
        dialog.addEventListener('pointerdown', e => { backdropStart = outside(e.target); }, options);
        dialog.addEventListener('click', e => { if (backdropStart && outside(e.target)) dialog!.close(); }, options);
        dialog.addEventListener('touchstart', e => {
          gesture = e.touches.length === 1 && (window.visualViewport?.scale ?? 1) <= 1
            ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : undefined;
        }, { ...options, passive: true });
        dialog.addEventListener('touchmove', e => { if (e.touches.length !== 1) gesture = undefined; }, { ...options, passive: true });
        dialog.addEventListener('touchcancel', () => { gesture = undefined; }, options);
        dialog.addEventListener('touchend', e => {
          if (!gesture || e.touches.length || (window.visualViewport?.scale ?? 1) > 1) return;
          const dx = e.changedTouches[0].clientX - gesture.x, dy = e.changedTouches[0].clientY - gesture.y;
          gesture = undefined;
          if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5 && items.length > 1) { backdropStart = false; move(dx < 0 ? 1 : -1); }
        }, { ...options, passive: true });
      }
      oldOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
      dialog.showModal();
      render();
    };
    for (const item of items) item.addEventListener('click', () => open(item), options);
    this.cleanup = () => {
      if (dialog?.open) { dialog.close(); restore(); }
      abort.abort(); dialog?.remove();
    };
  }
  disconnectedCallback() { this.cleanup?.(); this.cleanup = undefined; }
}
if (!customElements.get('portfolio-gallery')) customElements.define('portfolio-gallery', PortfolioGallery);
