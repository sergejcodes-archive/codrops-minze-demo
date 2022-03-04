export class ShWelcome extends MinzeElement {
  attrs = ['name']

  html = () => `
    <div>
      <p class="text">Welcome back</p>
      <h2 class="headline">${this.name ?? ''}</h2>
    </div>

    <sh-button class="button">
      Set up automation
    </sh-button>

    <img src="assets/icon-sun.svg" class="icon">
  `

  css = () => `
    :host {
      width: 100%;
      background: rgb(228 228 231);
      border-radius: 2px;
      overflow: hidden;
      position: relative;
      padding: 24px;
      margin-bottom: 48px;
    }

    .text {
      font-size: 18px;
      margin: 0;
    }

    .headline {
      font-size: 30px;
      margin: 0;
    }

    .button {
      margin-top: 32px;
    }

    .icon {
      width: 512px;
      height: 512px;
      opacity: 5%;
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translate(0, 50%);
    }
  `
}
