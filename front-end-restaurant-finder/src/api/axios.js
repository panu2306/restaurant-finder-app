import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export const getRestaurants = async () => {
    const response = await api.get('/restaurants')
    return response.data
}
