// tag-list.js
import { LitElement, html, css } from 'lit';

class TagList extends LitElement {
  static styles = css`
    .article-tags-module--outer--f7e0f {
      max-width: 960px;
      margin: 20px auto;
    }

    .article-tags-module--list--a63cc {
      display: flex;
      flex-wrap: wrap;
    }

    .article-tags-module--listItem--f2605 {
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      list-style: none;
      box-sizing: inherit;
      background-color: transparent;
      flex: 1 0 calc(25% - 20px);
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

    .article-tags-module--listItem--f2605:hover {
      background-color: #f0f0f0;
      color: #0052be;
      text-decoration: underline;
      border: 2px solid transparent;
    }
  `;

  render() {
    return html`
      <section class="article-tags-module--outer--f7e0f">
        <ul class="article-tags-module--list--a63cc">
          <li class="article-tags-module--listItem--f2605"><a class="tag-module--tag--d9ee2" >Academics</a></li>
          <li class="article-tags-module--listItem--f2605"><a class="tag-module--tag--d9ee2" >Students</a></li>
          <!-- Add more tags as needed -->
        </ul>
      </section>
    `;
  }
}

customElements.define('tag-list', TagList);
