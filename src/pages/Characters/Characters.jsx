import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
// import Error from '../../components/Error';

function Characters() {
	const [characters, setCharacter] = useState([]);
	const [loading, setLoading] = useState(true);
	// const [error, setError] = useState();
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://hp-api.onrender.com/api/characters"
				);
				setCharacter(response.data);
				setLoading(false);
			} catch (error) {
				console.log("Error: ", error.message);
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	if (loading) return <Loading />;
	// if (error) return <Error message={error} />

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#0E1A40] to-[#1A472A] py-8 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="parchment p-6 rounded-lg">
					<div className="text-4xl mb-4 text-center">👨‍🎓</div>
					<h2 className="text-2xl font-magic text-gryffindor-gold mb-8 text-center">
						Персонажи
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{characters.map((item) => (
							<div
								key={item.id}
								className="hogwarts-card p-4 border-2 border-gryffindor-gold rounded-lg transition-transform hover:scale-105"
							>
								<div className="flex flex-col md:flex-row gap-4">
									<div className="flex-shrink-0">
										<img
											src={item.image}
											alt={item.name}
											className="w-32 h-32 object-cover rounded-full border-2 border-gryffindor-gold mx-auto"
											onError={(e) => {
												e.target.src =
													"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNjAiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSI2NCIgeT0iNjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zNWVtIj5ubyBpbWFnZTwvdGV4dD48L3N2Zz4=";
											}}
										/>
									</div>
									<div className="flex-grow">
										<h3 className="text-lg font-semibold text-gryffindor-gold mb-2">
											{item.name}
										</h3>
										<div className="grid grid-cols-1 gap-1 text-sm">
											<div className="flex justify-between">
												<span className="text-gray-400">
													Вид:
												</span>
												<span className="text-white">
													{item.species ||
														"Неизвестно"}
												</span>
											</div>
											<div className="flex justify-between">
												<span className="text-gray-400">
													Пол:
												</span>
												<span className="text-white">
													{item.gender === "male"
														? "Мужской"
														: "Женский"}
												</span>
											</div>
											<div className="flex justify-between">
												<span className="text-gray-400">
													Факультет:
												</span>
												<span className="text-white">
													{item.house || "Неизвестно"}
												</span>
											</div>
											{item.dateOfBirth && (
												<div className="flex justify-between">
													<span className="text-gray-400">
														Дата рождения:
													</span>
													<span className="text-white">
														{item.dateOfBirth}
													</span>
												</div>
											)}
										</div>
									</div>
								</div>

								<div className="mt-4 pt-3 border-t border-gray-300">
									<div className="text-sm space-y-1">
										{item.ancestry && (
											<div className="flex justify-between">
												<span className="text-gray-400">
													Происхождение:
												</span>
												<span className="text-white">
													{item.ancestry}
												</span>
											</div>
										)}
										{item.eyeColour &&
											item.eyeColour !== "green" && (
												<div className="flex justify-between">
													<span className="text-gray-400">
														Цвет глаз:
													</span>
													<span className="text-white">
														{item.eyeColour}
													</span>
												</div>
											)}
										{item.hairColour && (
											<div className="flex justify-between">
												<span className="text-gray-400">
													Цвет волос:
												</span>
												<span className="text-white">
													{item.hairColour}
												</span>
											</div>
										)}
										{item.patronus && (
											<div className="flex justify-between">
												<span className="text-gray-400">
													Патронус:
												</span>
												<span className="text-white">
													{item.patronus}
												</span>
											</div>
										)}
										{item.actor && (
											<div className="flex justify-between">
												<span className="text-gray-400">
													Актер:
												</span>
												<span className="text-white">
													{item.actor}
												</span>
											</div>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Characters;
