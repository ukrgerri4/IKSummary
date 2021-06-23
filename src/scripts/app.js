// Application div
const appDiv = "app";
// If no path found will redirect there
const defaultPath = '/';

let routes = {};
let route = (path, templateName, templateResolver) => {
  routes[path] = {
    path: path,
    template: {
      name: templateName,
      resolver: templateResolver
    }
  };
};

let templateResolver = (id) => {
  var app_element = document.getElementById("app");
  let template = document.getElementById(id);
  app_element.innerHTML = template.innerHTML;
  return app_element;
};

route('/', 'home-template', templateResolver);
route('/ikcv', 'ikcv-template', templateResolver);
route('/manchkin-counter', 'manchkin-counter-template', templateResolver);
route('/mediatR-extension', 'mediatR-extension-template', templateResolver);
route('/about-me', 'about-me-template', templateResolver);

let resolveRoute = (path) => {
  try {
    const route = routes[path] || routes[defaultPath];
    route.template.resolver(route.template.name);
    return route.path;
  } catch (error) {
      throw new Error("The route is not defined");
  }
};

let navigateTo = (pathTo) => {
  const path = pathTo || "/";
  const pathResolved = resolveRoute(path);
  history.replaceState(null, null, pathResolved);
};

document.addEventListener('click', (event) => {
  var target = event?.target
  
  if (target.tagName == 'A') {
    event.preventDefault();
    const pathTo = target.getAttribute('href');
    navigateTo(pathTo);
  }
})
window.addEventListener('DOMContentLoaded', (event) => {
  const pathTo = window.location.pathname;
  navigateTo(pathTo);
});
