import { Outlet } from "react-router";
import Navigation from "../Navigation/Navigation.jsx";

function Layout() {
	return (
		<div className="min-h-screen bg-gray-100">
			<Navigation />
			<main className="container mx-auto px-4 py-8">
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
