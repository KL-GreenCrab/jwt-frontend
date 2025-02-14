// src/services/authService.js

import axios from 'axios';

export const authService = {
    async authenticateAndGetToken(username, password) {
        const response = await axios.post('http://localhost:8080/auth/generateToken', { username, password });
        return response.data;
    }
};
