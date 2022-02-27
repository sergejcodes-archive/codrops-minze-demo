export class ShContent extends MinzeElement {
  css = () => `
    :host {
      max-width: 1600px;
      padding: 24px;
      margin: 0 auto;
    }

    @media (min-width: 768px) {
      :host {
        padding: 48px;
      }
    }
  `
}