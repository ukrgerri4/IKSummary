export class Router {

  constructor() {
    this.self = this;
    this.rootDivId = 'app';
    this.defaultPath = '/';
    this.routes = {}; 
  }

  templateResolver = (id) => {
    const app_element = document.getElementById(this.rootDivId);
    const template = document.getElementById(id);
    app_element.innerHTML = template.innerHTML;
    return app_element;
  };

  addRoute = (path, templateName) => {
    this.self.routes[path] = {
      path: path,
      template: {
        name: templateName,
        resolver: this.self.templateResolver
      }
    };
    return this;
  }

  resolveRoute = (path) => {
    try {
      var x = this.self.routes[path];
      const route = this.self.routes[path] || this.self.routes[this.self.defaultPath];
      route.template.resolver(route.template.name);
      return route.path;
    } catch (error) {
        throw new Error("The route is not defined");
    }
  };

  navigateTo = (pathTo) => {
    const path = pathTo || this.self.defaultPath;
    const pathResolved = this.self.resolveRoute(path);
    history.replaceState(null, null, pathResolved);
  };

  /* 
   * Added listener for all <a> tag click
   * In case internal redirect i.e url do NOT starts with 'http' navigates to template 
  */ 
  addListeners = () => {
    window.addEventListener('click', (event) => {
      var eventTarget = event?.target
      
      if (eventTarget.tagName == 'A') {
        event.preventDefault();
        const pathTo = eventTarget.getAttribute('href');
				if (pathTo.startsWith("http")) {
					const target = eventTarget.getAttribute('target');
					window.open(pathTo, target);
				}
				else {
					this.self.navigateTo(pathTo);
				}
      }
    })
    window.addEventListener('DOMContentLoaded', (event) => {
      const pathTo = window.location.pathname;
      this.self.navigateTo(pathTo);
    });
  }
}
