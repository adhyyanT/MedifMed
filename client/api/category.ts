export const getCategories = async () => {
	const resp = await fetch("http://localhost:5179/api/category/categories");
	return resp.json();

	// return t as Category[];
};
