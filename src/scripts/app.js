import { Router } from  "./router.js";

const router = new Router();
router
  .addRoute('/', 'home-template')
  .addRoute('/ikcv', 'ikcv-template')
  .addRoute('/manchkin-counter', 'manchkin-counter-template')
  .addRoute('/mediatR-extension', 'mediatR-extension-template')
	.addRoute('/server-structure', 'server-structure-template')
  .addRoute('/about-me', 'is-being-developed-template') // about-me-template
  .addListeners();

console.debug(router);