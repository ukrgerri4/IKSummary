import { Router } from  "./router.js";

const router = new Router();
router
  .addRoute('/', 'home-template')
  .addRoute('/ikcv', 'is-being-developed-template') // ikcv-template
  .addRoute('/manchkin-counter', 'is-being-developed-template') // manchkin-counter-template
  .addRoute('/mediatR-extension', 'mediatR-extension-template')
  .addRoute('/about-me', 'is-being-developed-template') // about-me-template
  .addListeners();

console.debug(router);