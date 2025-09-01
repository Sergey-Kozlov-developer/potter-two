const CharacterItem = ({ character }) => {
	return (
		<div className="hogwarts-card p-4 border-2 border-gryffindor-gold rounded-lg transition-transform hover:scale-105">
			<div className="flex flex-col md:flex-row gap-4">
				<div className="flex-shrink-0">
					<img
						src={
							character.image ||
							"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNjAiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSI2NCIgeT0iNjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zNWVtIj5ubyBpbWFnZTwvdGV4dD48L3N2Zz4="
						}
						alt={character.name}
						className="w-32 h-32 object-cover rounded-full border-2 border-gryffindor-gold mx-auto"
						onError={(e) => {
							if (character.image) {
								e.target.src =
									"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNjAiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSI2NCIgeT0iNjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zNWVtIj5ubyBpbWFnZTwvdGV4dD48L3N2Zz4=";
							}
						}}
					/>
				</div>
				<div className="flex-grow">
					<h3 className="text-lg font-semibold text-gryffindor-gold mb-2">
						{character.name}
					</h3>
					<div className="grid grid-cols-1 gap-1 text-sm">
						<div className="flex justify-between">
							<span className="text-gray-400">Вид:</span>
							<span className="text-white">
								{character.species || "Неизвестно"}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-400">Пол:</span>
							<span className="text-white">
								{character.gender === "male"
									? "Мужской"
									: "Женский"}
							</span>
						</div>
						<div className="flex justify-between">
							<span className="text-gray-400">Факультет:</span>
							<span className="text-white">
								{character.house || "Неизвестно"}
							</span>
						</div>
						{character.dateOfBirth && (
							<div className="flex justify-between">
								<span className="text-gray-400">
									Дата рождения:
								</span>
								<span className="text-white">
									{character.dateOfBirth}
								</span>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className="mt-4 pt-3 border-t border-gray-300">
				<div className="text-sm space-y-1">
					{character.ancestry && (
						<div className="flex justify-between">
							<span className="text-gray-400">
								Происхождение:
							</span>
							<span className="text-white">
								{character.ancestry}
							</span>
						</div>
					)}
					{character.eyeColour && character.eyeColour !== "green" && (
						<div className="flex justify-between">
							<span className="text-gray-400">Цвет глаз:</span>
							<span className="text-white">
								{character.eyeColour}
							</span>
						</div>
					)}
					{character.hairColour && (
						<div className="flex justify-between">
							<span className="text-gray-400">Цвет волос:</span>
							<span className="text-white">
								{character.hairColour}
							</span>
						</div>
					)}
					{character.patronus && (
						<div className="flex justify-between">
							<span className="text-gray-400">Патронус:</span>
							<span className="text-white">
								{character.patronus}
							</span>
						</div>
					)}
					{character.actor && (
						<div className="flex justify-between">
							<span className="text-gray-400">Актер:</span>
							<span className="text-white">
								{character.actor}
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default CharacterItem;
