import ReactPaginate from "react-paginate";

export default function PaginationComponent({
	onPageChange,
	pageCount,
	currentPage,
}) {
	if (pageCount <= 1) return null;
	return (
		<div className="flex justify-center mt-8">
			<ReactPaginate
				breakLabel="..."
				nextLabel=">"
				previousLabel="<"
				onPageChange={onPageChange}
				pageRangeDisplayed={3}
				pageCount={Math.ceil(pageCount)}
				forcePage={currentPage - 1}
				renderOnZeroPageCount={null}
				containerClassName="flex items-center gap-2"
				pageLinkClassName="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
				previousLinkClassName="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
				nextLinkClassName="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
				breakLinkClassName="flex items-center justify-center w-8 h-8 text-gray-500"
				activeLinkClassName="bg-red-700 text-white border-red-700 hover:bg-red-800"
				disabledClassName="opacity-50 cursor-not-allowed"
			/>
		</div>
	);
}
