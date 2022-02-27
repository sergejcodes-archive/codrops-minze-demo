export class ShWrap extends MinzeElement {
  attrs = ['headline', 'vertical', 'width', 'nowrap']

  html = () => `
    <h2 class="headline">${this.headline ?? ''}</h2>

    <div class="wrap">
      <slot></slot>
    </div>
  `

  css = () => `
    :host {
      width: 100%;
      margin-bottom: 24px;
    }

    @media (min-width: 768px) {
      :host {
        margin-bottom: 48px;
      }
    }

    @media (min-width: 768px) {
      :host {
        width: ${this.width ?? '100%'};
      }
    }

    .headline {
      margin: 0 0 24px;
    }

    .wrap {
      display: flex;
      flex-wrap: wrap;
      flex-direction: ${this.vertical ? 'column' : 'row'};
      gap: 24px;
    }

    @media (min-width: 768px) {
      .wrap {
        flex-wrap: ${this.nowrap ? 'nowrap' : 'wrap'};
      }
    }
  `
}