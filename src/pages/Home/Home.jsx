function Home() {
	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<div className="hogwarts-card p-8 md:p-12 max-w-4xl w-full relative overflow-hidden">
				{/* Декоративные элементы с индивидуальными задержками анимации */}
				<div
					className="floating-icons top-4 left-4 text-[#D3A625]"
					style={{ animationDelay: "0s" }}
				>
					⚡
				</div>
				<div
					className="floating-icons bottom-4 right-4 text-[#1A472A]"
					style={{ animationDelay: "0.5s" }}
				>
					🐍
				</div>
				<div
					className="floating-icons top-4 right-10 text-[#0E1A40]"
					style={{ animationDelay: "0.2s" }}
				>
					🔮
				</div>
				<div
					className="floating-icons bottom-8 left-10 text-[#ECB939]"
					style={{ animationDelay: "0.7s" }}
				>
					📜
				</div>

				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-6xl font-magic text-[#D3A625] mb-6">
						Wizarding World API
					</h1>
					<div className="w-48 h-1 bg-gradient-to-r from-[#740001] via-[#1A472A] to-[#0E1A40] mx-auto mb-8"></div>
					<p className="text-xl text-white mb-10">
						Полная информация о вселенной Гарри Поттера
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
					<div className="parchment p-6 rounded-lg">
						<div className="text-4xl mb-4 text-center">👨‍🎓</div>
						<h2 className="text-xl font-semibold mb-3 text-center">
							Персонажи
						</h2>
						<ul className="list-disc pl-5 text-sm space-y-2">
							<li>Имена и альтернативные имена</li>
							<li>Вид (человек, полувеликан, гоблин и др.)</li>
							<li>Пол и дата рождения</li>
							<li>Факультеты Хогвартса</li>
							<li>Актеры, сыгравшие роли</li>
							<li>Патронусы</li>
							<li>Изображения персонажей</li>
						</ul>
					</div>

					<div className="parchment p-6 rounded-lg">
						<div className="text-4xl mb-4 text-center">✨</div>
						<h2 className="text-xl font-semibold mb-3 text-center">
							Детали персонажей
						</h2>
						<ul className="list-disc pl-5 text-sm space-y-2">
							<li>
								Волшебная палочка (дерево, сердцевина, длина)
							</li>
							<li>Год поступления в Хогвартс</li>
							<li>Животные-компаньоны</li>
							<li>Ученические и преподавательские роли</li>
							<li>Принадлежность к Пожирателям Смерти</li>
							<li>Принадлежность к Ордену Феникса</li>
							<li>Статус жив/мертв</li>
						</ul>
					</div>
				</div>

				<div className="text-center">
					<button className="spell-button px-8 py-4 rounded-full text-lg">
						Исследовать API
					</button>
					<p className="text-sm text-gray-300 mt-4">
						На основе hp-api.onrender.com
					</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
