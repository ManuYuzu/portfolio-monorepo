import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../atoms/Button';

@customElement('sample-element')
export class SampleElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
      background: #aaaaaa;
      font-family: sans-serif;
    }
    h2 {
      color: #0078d4;
      margin: 0 0 0.5rem 0;
    }
  `;

  @property()
  declare message: string;

  constructor() {
    super();
    this.message = "¡I'm being build!";
  }

  render() {
    return html`
      <h2>Sample Element</h2>
      <p>${this.message}</p>
      <button-element message="Click Me"></button-element>
    `;
  }
}
