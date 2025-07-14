import api from '../api/api';

export const getRegions = () => api.get('/region');
export const createRegion = (data) => api.post('/region', data);
export const updateRegion = (data) => api.put(`/region`, data);
export const inactivarRegion = (id) => api.patch(`/region/${id}/inactive`);
export const activeRegion = (id) => api.patch(`/region/${id}/active`);
