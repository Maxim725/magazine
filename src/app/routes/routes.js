import About from "../../pages/about";
import Catalog from "../../pages/catalog";
import Home from "../../pages/home";

export const routes = [
	{ path: '/', component: Home, name: Home.name },
	{ path: '/catalog', component: Catalog, name: Catalog.name },
	{ path: '/about', component: About, name: About.name }
]

export const navbarLinks = routes.map(({ component, path, ...props }) => ({ ...props, to: path }))


