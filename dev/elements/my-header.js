import {html, css, LitElement} from 'lit';

import {FaStyles} from '../../assets/js/fontawesome';

class MyHeader extends LitElement {
  static styles = [
    FaStyles,
    css`
      :host {
        display: block;
        background-color: #172b4d;
        color: #fff;
        padding: 16px;
      }

      .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .header-left {
        display: flex;
        gap: 16px;
        align-items: center;
      }

      .logo {
        max-width: 120px;
      }

      nav {
        display: flex;
        align-items: center;
      }

      a {
        color: #fff;
        text-decoration: none;
        margin-right: 16px;
      }

      .header-right {
        display: flex;
        gap: 16px;
        align-items: center;
      }

      input {
        padding: 8px;
        border: none;
        border-radius: 4px;
        margin-right: 16px;
      }

      .profile-pic {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    `,
  ];

  render() {
    return html`
      <div class="header-container">
        <div class="header-left">
          <i class="fa-solid fa-table-cells"></i>
          <img class="logo" src="../assets/image/site.logo" />
          <nav>
            <a href="#">Home</a>
            <a href="#">Recent</a>
            <a href="#">Spaces</a>
            <a href="#">Teams</a>
            <a href="#">Apps</a>
            <a href="#">Templates</a>

            <my-button iconClassName="fa-solid fa-plus">Create</my-button>
          </nav>
        </div>

        <div class="header-right">
          <input type="text" placeholder="Search" />
          <img
            class="profile-pic"
            src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:d3694960-c828-4137-b742-43fdc61bc866/b6f4a044-564c-4ba3-99ca-f9058ae39b72/128"
          />
        </div>
      </div>
    `;
  }
}

customElements.define('my-header', MyHeader);
