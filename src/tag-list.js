// tag-list.js
import { LitElement, html, css } from 'lit';

class TagList extends LitElement {
  static styles = css`
    .Container {
      max-width: 960px;
      margin: 20px auto;
    }

    .Burbur {
      display: flex;
      flex-wrap: wrap;
    }

    .Block {
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

    .Block:hover {
      background-color: #f0f0f0;
      color: #0052be;
      text-decoration: underline;
      border: 2px solid transparent;
    }
  `;

  render() {
    return html`
      <section class="Container">
        <ul class="Burbur">
          <li class="Block"><a class="tag-module--tag--d9ee2" href=https://www.psu.edu/news/academics >Academics</a></li>
          <li class="Block"><a class="tag-module--tag--d9ee2" href=https://www.psu.edu/news/students>Students</a></li>
          <li class="Block"><a class="tag-module--tag--d9ee2" href=https://www.psu.edu/news/visitors-and-neighbors>Visitors and Neighbors</a></li>
          <li class="Block"><a class="tag-module--tag--d9ee2" href=https://www.psu.edu/news/faculty-and-staff >Faculty and Staff</a></li>
          <li class="Block"><a class="tag-module--tag--d9ee2" href=https://www.psu.edu/news/business-and-industry>Business and Industry</a></li>
          <li class="Block"><a class="tag-module--tag--d9ee2" href=https://www.psu.edu/news/alumni>Alumni</a></li>
          <li class="Block"><a class="tag-module--tag--d9ee2" href=https://www.psu.edu/news/university-park>University Park</a></li>
          <li class="Block"><a class="tag-module--tag--d9ee2" href=https://www.psu.edu/news/latest-news>Latest News</a></li>
          <li class="Block"><a class="tag-module--tag--d9ee2" href=https://www.psu.edu/news/rankings>Rankings</a></li>
          <li class="Block"><a class="tag-module--tag--d9ee2" href=https://www.psu.edu/news/impact>Impact</a></li>
          <li class="Block"><a class="tag-module--tag--d9ee2" href=https://www.psu.edu/news/global>Global</a></li>
          <li class="Block"><a class="tag-module--tag--d9ee2" href=https://www.psu.edu/news/global-programs>Global Programs</a></li>

        </ul>
      </section>
    `;
  }
}

customElements.define('tag-list', TagList);
