import { Router } from  "./router.js";

const router = new Router();
router
  .addRoute('/', 'home-template')
  .addRoute('/ikcv', 'ikcv-template')
  .addRoute('/manchkin-counter', 'manchkin-counter-template')
  .addRoute('/mediatR-extension', 'mediatR-extension-template')
  .addRoute('/about-me', 'about-me-template')
  .addListeners();

console.log(router);