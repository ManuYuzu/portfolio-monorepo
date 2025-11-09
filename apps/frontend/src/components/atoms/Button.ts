import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

function buttonTemplate({
  message,
  count,
  onClick,
}: {
  message: string;
  count: number;
  onClick: () => void;
}) {
  return html` <button @click=${onClick}>${message}: ${count}</button> `;
}

function buttonStyles() {
  return css`
    button {
      background-color: #0078d4;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
  `;
}

@customElement('button-element')
export class ButtonElement extends LitElement {
  static styles = buttonStyles();

  @property({ type: String })
  declare message: string;
  @property({ type: Number })
  declare count: number;

  constructor() {
    super();
    this.message = 'Button';
    this.count = 0;
  }

  private _handleClick = () => {
    this.count++;
  };

  private _renderButton() {
    return buttonTemplate({
      message: this.message,
      count: this.count,
      onClick: this._handleClick,
    });
  }

  render() {
    return this._renderButton();
  }
}
