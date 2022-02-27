export class ShButton extends MinzeElement {
  attrs = ['href', 'target', 'rel']

  html = () => `
    <a
      ${this.href ? `href="${this.href}"` : ''}
      ${this.target ? `href="${this.target}"` : ''}
      ${this.rel ? `href="${this.rel}"` : ''}
    >
      <slot></slot>
    </a>
  `

  css = () => `
    :host {
      display: inline-block;
      background: rgb(63, 63, 70);
      color: rgb(255 255 255);
      cursor: pointer;
      border-radius: 2px;
      transition: background 0.2s ease-in-out;
      padding: 8px 16px;
    }

    :host(:hover) {
      background: rgb(82, 82, 91);
    }
  `
}