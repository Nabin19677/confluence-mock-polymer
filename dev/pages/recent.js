import {LitElement, html, css} from 'lit';
import {recent} from '../../mocks/recent-activities';

class MyRecent extends LitElement {
  static styles = [
    css`
      .activities {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    `,
  ];

  render() {
    return html`
      <h5>RECENT</h5>

      <div class="activities">
        ${recent.map((activity) => {
          return html`
            <div class="activity-card">
              <my-recent-activity-card
                .spaceName="${activity.spaceName}"
                .lastVisited="${activity.lastVisited}"
                .documentName="${activity.documentName}"
              ></my-recent-activity-card>
            </div>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('my-recent', MyRecent);
