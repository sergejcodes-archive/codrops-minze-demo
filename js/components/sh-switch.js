export class ShSwitch extends MinzeElement {
  reactive = [['active', false]]

  toggleActive = () => this.active = !this.active

  html = () => `
    <div class="indicator"></div>
  `

  css = () => `
    :host {
      width: 48px;
      height: 25px;
      display: flex;
      background: rgb(255 255 255);
      border: 1px solid rgb(228 228 231);
      border-radius: 9999px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      padding: 2px;
    }

    .indicator {
      width: 20px;
      height: 20px;
      background: ${this.active ? 'rgb(161, 161, 170)' : 'rgb(228 228 231)'};
      border-radius: 9999px;
      position: relative;
      transform: translateX(${this.active ? 'calc(100% + 2px)' : '0'});
      transition: all 0.2s ease-in-out;
    }
  `

  eventListeners = [[this, 'click', this.toggleActive]]
}
