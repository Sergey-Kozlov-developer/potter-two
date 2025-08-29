import { Link, useLocation } from "react-router";

function Navigation() {
	// получаем локацию
	const location = useLocation();
	// активный клик
	const isActive = (path) => location.pathname === path;

	return (
		<nav className="bg-white shadow-sm">
			<div className="container mx-auto px-4">
				<div className="flex space-x-8">
					<Link
						to="/"
						className={`py-4 px-2 border-b-2 transition-colors ${
							isActive("/")
								? "border-blue-500 text-blue-600"
								: "border-transparent text-gray-600 hover:text-gray-900"
						}`}
					>
						Главная
					</Link>

					<Link
						to="/characters"
						className={`py-4 px-2 border-b-2 transition-colors ${
							isActive("/characters")
								? "border-blue-500 text-blue-600"
								: "border-transparent text-gray-600 hover:text-gray-900"
						}`}
					>
						Персонажи
					</Link>

					<Link
						to="/about"
						className={`py-4 px-2 border-b-2 transition-colors ${
							isActive("/about")
								? "border-blue-500 text-blue-600"
								: "border-transparent text-gray-600 hover:text-gray-900"
						}`}
					>
						О проекте
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
