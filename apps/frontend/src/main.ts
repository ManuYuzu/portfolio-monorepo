import './style.css';
import './sample-element';

const app = document.getElementById('app');
if (app) {
  const el = document.createElement('sample-element');
  app.appendChild(el);
}
