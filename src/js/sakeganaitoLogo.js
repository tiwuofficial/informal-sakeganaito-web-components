class SakeganaitoLogo extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'}).innerHTML = `
      <style>
        :host {
          width: 300px;
        }
        img {
          width: 100%;
        }
      </style>
      
      <a href="https://sakeganaito.connpass.com/">
        <img src="https://connpass-tokyo.s3.amazonaws.com/thumbs/bb/b2/bbb27a002bf72df61c02cd4a22c9b22f.png">
      </a>
    `;
  }
}
customElements.define('sakeganaito-logo', SakeganaitoLogo);
