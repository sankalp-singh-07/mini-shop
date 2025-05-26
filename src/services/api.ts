import axios from 'axios';

const api = async () => {
	const res = await axios.get('/products.json');
	return res.data;
};

export default api;
