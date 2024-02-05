import {LitElement, css, html} from 'lit';
import {FaStyles} from '../../assets/js/fontawesome';

class MyFeedCard extends LitElement {
  static styles = [
    css`
      .card {
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 20px 16px;
        display: flex;
        gap: 16px;
      }

      .card:hover {
        background-color: #eee;
        cursor: pointer;
      }

      .card__content__right {
        width: 100%;
      }

      .card__user {
        font-size: 14px;
      }

      .card__user__name {
        font-weight: 500;
      }

      .card__user__action,
      .card__user__time {
        color: grey;
      }

      .card__user__name:hover {
        cursor: pointer;
        text-decoration: underline;
      }

      .card__space-name {
        font-size: 12px;
      }

      .card__timepassed {
        font-size: 9px;
        color: rgb(68, 84, 111);
      }

      .profile-pic {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }

      .horizontal__row {
        width: 100%;
        height: 1px;
        margin: 10px 0;
        background-color: #ddd;
      }

      .card__document i {
        font-size: 22px;
        color: rgb(12, 102, 228);
      }

      .card__document__title {
        font-size: 16px;
        font-weight: 500;
        margin-left: 5px;
      }

      .card__document__owner {
        color: grey;
        font-size: 12px;
      }
    `,
    FaStyles,
  ];

  static properties = {
    documentName: {type: String},
    spaceName: {type: String},
    lastVisited: {type: String},
  };

  getTimePassed = () => '21 hours ago';

  render() {
    return html`
      <div class="card">
        <div class="card__content__left">
          <img
            class="profile-pic"
            src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/712020:d3694960-c828-4137-b742-43fdc61bc866/b6f4a044-564c-4ba3-99ca-f9058ae39b72/128"
          />
        </div>
        <div class="card__content__right">
          <div class="card__user">
            <span class="card__user__name">Anil Khadka</span>
            <span class="card__user__action"> edited</span>
            <span class="card__user__time">• 5 minutes ago</span>
          </div>

          <div class="horizontal__row"></div>

          <div>
            <div class="card__document">
              <i class="fa-solid fa-file-lines"></i>
              <span class="card__document__title">${this.documentName}</span>
            </div>
            <p class="card__document__owner">Owned by Anil Khadka • Vyaguta</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('my-feed-card', MyFeedCard);
