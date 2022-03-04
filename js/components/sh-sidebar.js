export class ShSidebar extends MinzeElement {
  html = () => `
    <div class="logo">
      <img src="assets/logo.svg">
    </div>

    <nav class="nav">
      <div class="nav__entry nav__entry--active">
        <img src="assets/icon-home.svg">
      </div>

      <div class="nav__entry">
        <img src="assets/icon-view-grid.svg">
      </div>

      <div class="nav__entry">
        <img src="assets/icon-user.svg">
      </div>

      <div class="nav__entry">
        <img src="assets/icon-cog.svg">
      </div>
    </nav>
  `

  css = () => `
    :host {
      width: 100px;
      height: 100vh;
      flex-shrink: 0;
      background: rgb(39 39 42);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    }

    @media (min-width: 768px) {
      :host {
        width: 120px;
      }
    }

    .logo {
      width: 100%;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid rgb(82 82 91);
    }

    .nav {
      padding: 32px 0;
    }

    .nav__entry {
      width: 100%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 50%;
      position: relative;
      margin: 16px 0;
    }

    .nav__entry--active {
      opacity: 100%;
    }

    .nav__entry--active::before {
      content: '';
      width: 8px;
      height: 100%;
      background: rgb(255 255 255);
      border-radius: 0 9999px 9999px 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
    }
  `
}