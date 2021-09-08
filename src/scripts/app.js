import { Router } from  "./router.js";
import home_template from "../templates/home.html";
import ikcv_template from "../templates/ikcv.html";
import manchkin_counter_template from "../templates/manchkin-counter.html";
import mediatr_extension_template from "../templates/mediatr-extension.html";
import server_structure_template from "../templates/server-structure.html";
import is_being_developed_template from "../templates/is-being-developed.html";
import about_template from "../templates/about.html";


const router = new Router();
router
  .addRoute('/', 'home', home_template)
  .addRoute('/ikcv', 'ikcv', ikcv_template)
  .addRoute('/manchkin-counter', 'manchkin-counter', manchkin_counter_template)
  .addRoute('/mediatr-extension', 'mediatr-extension', mediatr_extension_template)
  .addRoute('/server-structure', 'server-structure', server_structure_template)
  .addRoute('/about', 'about', is_being_developed_template)
  .addListeners();