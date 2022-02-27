export class ShHeader extends MinzeElement {
  html = () => `
    <div>
      <h1 class="headline"><slot name="headline"></slot></h1>
      <p class="sub-headline"><slot name="sub-headline"></slot></p>
    </div>

    <slot name="nav"></slot>
  `

  css = () => `
    :host {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgb(212 212 216);
      padding: 0 24px;
    }

    @media (min-width: 768px) {
      :host {
        padding: 0 48px;
      }
    }

    .headline {
      font-size: 30px;
      font-weight: bold;
      margin: 0;
    }

    .sub-headline {
      font-size: 18px;
      margin: 0;
    }

    ::slotted(nav) {
      display: flex;
      gap: 16px;
    }
  `
}