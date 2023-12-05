// polaris-chip-redo.js
import { LitElement, html, css } from 'lit';

class PolarisChipRedo extends LitElement {
  static properties = {
    name: { type: String },
    link: { type: String },
  };

  static styles = css`
    .tag-module {
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      list-style: none;
      box-sizing: inherit;
      background-color: transparent;
      font-family: Roboto, sans-serif;
      font-size: 17px;
      font-weight: 700;
      justify-content: center;
      letter-spacing: 0.03em;
      line-height: 19px;
      text-align: center;
      text-decoration: none;
      padding: 8px;
      margin: 5px;
      transition: background-color 0.3s, color 0.3s, text-decoration 0.3s, border 0.3s;
      border: 2px solid #444;
      color: #000;
      display: flex;
      align-items: center;
    }

    .tag-module:hover {
      background-color: #f0f0f0;
      color: #0052be;
      text-decoration: underline;
      border: 2px solid transparent;
    }
  `;

  render() {
    return html`
      <a class="tag-module" href="${this.link}">
        <slot>${this.name}</slot>
      </a>
    `;
  }
}

customElements.define('polaris-chip-redo', PolarisChipRedo);
