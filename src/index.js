import './index.css';

class Popover {
  constructor(trigger, title, content) {
    this.trigger = trigger;
    this.title = title;
    this.content = content;
    this.popoverEl = null;
    this.init();
  }

  init() {
    this.trigger.addEventListener('click', () => this.toggle());
  }

  createPopover() {
    const popover = document.createElement('div');
    popover.classList.add('popover');

    const titleEl = document.createElement('div');
    titleEl.classList.add('popover-title');
    titleEl.textContent = this.title;

    const contentEl = document.createElement('div');
    contentEl.classList.add('popover-content');
    contentEl.textContent = this.content;

    popover.appendChild(titleEl);
    popover.appendChild(contentEl);

    document.body.appendChild(popover);
    this.popoverEl = popover;
  }

  toggle() {
    if (!this.popoverEl) this.createPopover();

    if (this.popoverEl.style.display === 'block') {
      this.popoverEl.style.display = 'none';
    } else {
      this.position();
      this.popoverEl.style.display = 'block';
    }
  }

  position() {
    const rect = this.trigger.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollX = window.scrollX || window.pageXOffset;

    this.popoverEl.style.top = `${rect.top + scrollY - this.popoverEl.offsetHeight}px`;
    this.popoverEl.style.left = `${rect.left + scrollX + rect.width / 2 - this.popoverEl.offsetWidth / 2}px`;
  }
}

const btn = document.getElementById('popoverBtn');
new Popover(btn, 'Popover Title', 'This is the popover content.');
