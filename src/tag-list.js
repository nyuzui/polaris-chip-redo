// tag-list.js
import { LitElement, html, css } from 'lit';
import './polaris-chip-redo';

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
  `;

  render() {
    return html`
      <section class="Container">
        <ul class="Burbur">
          <polaris-chip-redo name="Academics" link="https://www.psu.edu/news/academics"></polaris-chip-redo>
          <polaris-chip-redo name="Students" link="https://www.psu.edu/news/students"></polaris-chip-redo>
          <polaris-chip-redo name="Visitors and Neighbors" link="https://www.psu.edu/news/visitors-and-neighbors"></polaris-chip-redo>
          <polaris-chip-redo name="Faculty and Staff" link="https://www.psu.edu/news/business-and-industry"></polaris-chip-redo>
          <polaris-chip-redo name="Alumni" link="https://www.psu.edu/news/Alumni"></polaris-chip-redo>
          <polaris-chip-redo name="University Park" link="https://www.psu.edu/news/University-Park"></polaris-chip-redo>
          <polaris-chip-redo name="Latest News" link="https://www.psu.edu/news/Latest-News"></polaris-chip-redo>
          <polaris-chip-redo name="Rankings" link="https://www.psu.edu/news/Rankings"></polaris-chip-redo>
          <polaris-chip-redo name="Impact" link="https://www.psu.edu/news/Impact"></polaris-chip-redo>
          <polaris-chip-redo name="Global" link="https://www.psu.edu/news/Global"></polaris-chip-redo>
          <polaris-chip-redo name="Global Programs" link="https://www.psu.edu/news/Global-Programs"></polaris-chip-redo>


        </ul>
      </section>
    `;
  }
}

customElements.define('tag-list', TagList);
