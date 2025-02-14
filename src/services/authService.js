// src/services/authService.js

import axios from 'axios';

export const authService = {
    async authenticateAndGetToken(username, password) {
        const response = await axios.post('https://jwt-be-latestation.onrender.com/auth/generateToken', { username, password });
        return response.data;
    }
};
