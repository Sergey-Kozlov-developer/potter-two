import Loading from "../../components/Loading/Loading.jsx";
import CharacterItem from "../../components/Character/CharacterItem.jsx";
import { useHPApi } from "../../hooks/useHPApi.js";
import Error from "../../components/Error/Error.jsx";
import PaginationComponent from "../../components/Pagination/PaginationComponent.jsx";

function Characters() {
	const { data, loading, error, pageCount, handlePageChange, currentPage } =
		useHPApi();

	if (loading) return <Loading />;
	if (error) return <Error message={error} />;

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#0E1A40] to-[#1A472A] py-8 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="parchment p-6 rounded-lg">
					<h2 className="text-2xl font-magic text-gryffindor-gold mb-8 text-center">
						Персонажи
					</h2>
					{/* List characters */}

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{data.map((item) => (
							<CharacterItem key={item.id} character={item} />
						))}
					</div>
					{pageCount > 1 && (
						<PaginationComponent
							onPageChange={handlePageChange}
							pageCount={pageCount}
							currentPage={currentPage}
						/>
					)}
				</div>
				<div className="text-center text-gray-600 text-sm mt-4">
					Страница {currentPage} из {pageCount}
				</div>
			</div>
		</div>
	);
}

export default Characters;
