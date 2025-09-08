import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "https://hp-api.onrender.com/api/characters/";
const ITEMS_PER_PAGE = 6;

export function useHPApi() {
	const [data, setData] = useState([]); // получение данных с бэка
	const [loading, setLoading] = useState(true); // сьаьус загрузки
	const [error, setError] = useState(); // ошибки загрузки
	const [currentPage, setCurrentPage] = useState(0); // пагинация
	const [pageCount, setPageCount] = useState(0); // пагинация
	const [sortType, setSortType] = useState({
		name: "Студенты",
		sortProperty: "students",
	});
	// сортировка по учетелям, студентам и факультетам
	const selectSort =
		sortType.sortProperty === "students" ||
		sortType.sortProperty === "staff"
			? sortType.sortProperty
			: `house/${sortType.name}`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await axios.get(`${BASE_URL}${selectSort}`);
				// получаем все данный
				const fetchedData = response.data;
				// вычисляем кол-во страниц
				const totalPage = Math.ceil(
					fetchedData.length / ITEMS_PER_PAGE
				);
				setPageCount(totalPage);
				// данные для текущей страницы
				const startIndex = currentPage * ITEMS_PER_PAGE;
				const endIndex = startIndex + ITEMS_PER_PAGE;
				const paginateData = fetchedData.slice(startIndex, endIndex);
				setData(paginateData);

				setError(null);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Unknown error");
				setData([]);
				setPageCount(0);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [currentPage, sortType]);
	// Функция для изменения страницы
	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};
	return {
		data,
		loading,
		error,
		pageCount,
		currentPage: currentPage + 1,
		handlePageChange,
		sortType,
		setSortType,
	};
}
