import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading.jsx";
import CharacterItem from "../../components/Character/CharacterItem.jsx";
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
					<h2 className="text-2xl font-magic text-gryffindor-gold mb-8 text-center">
						Персонажи
					</h2>
					{/* List characters */}

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{characters.map((item) => (
							<CharacterItem key={item.id} character={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Characters;
