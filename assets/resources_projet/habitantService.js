import api from './api';

const addHabitant = async (data) => {
 const response = await api.post('/habitants', data);
 return response.data;
};

export { addHabitant };