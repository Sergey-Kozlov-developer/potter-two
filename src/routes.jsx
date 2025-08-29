import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import About from "./pages/About";

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
