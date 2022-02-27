export class ShAccordion extends MinzeElement {
  reactive = [['open', false]]

  toggleOpen = () => this.open = !this.open

  html = () => `
    <div class="title">
      <slot name="title"></slot>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="currentColor" class="arrow">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>

    <slot name="content"></slot>
  `

  css = () => `
    :host {
      background: rgb(228 228 231);
      font-family: sans-serif;
      border-radius: 2px;
      cursor: pointer;
    }

    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      user-select: none;
      padding: 16px;
    }

    .arrow {
      transition: transform 0.2s ease-in-out;
      transform: ${this.open ? 'rotate(180deg)' : 'rotate(0)'};
    }

    ::slotted([slot=content]) {
      display: ${this.open ? 'block' : 'none'};
      padding: 16px;
    }
  `

  eventListeners = [['.title', 'click', this.toggleOpen]]
}
