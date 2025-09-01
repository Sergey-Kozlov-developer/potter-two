import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Characters from "./pages/Characters/Characters.jsx";
import About from "./pages/About/About.jsx";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "characters",
				element: <Characters />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);
