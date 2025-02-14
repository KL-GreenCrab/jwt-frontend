// src/services/userService.js

import axios from 'axios';

export const userService = {
    async getUserProfile(token) {
        const response = await axios.get('http://localhost:8080/auth/user/userProfile', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },

    async getAdminProfile(token) {
        const response = await axios.get('http://localhost:8080/auth/admin/adminProfile', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },

    async getAllUserDetails(token) {
        const response = await axios.get('http://localhost:8080/auth/getAllUserDetails', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },

    async registerUser(userInfo) {
        const response = await axios.post('http://localhost:8080/auth/addNewUser', userInfo);
        return response.data;
    }
};
