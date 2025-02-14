// src/services/userService.js

import axios from 'axios';

export const userService = {
    async getUserProfile(token) {
        const response = await axios.get('https://jwt-be-latestation.onrender.com/auth/user/userProfile', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },

    async getAdminProfile(token) {
        const response = await axios.get('https://jwt-be-latestation.onrender.com/auth/admin/adminProfile', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },

    async getAllUserDetails(token) {
        const response = await axios.get('https://jwt-be-latestation.onrender.com/auth/getAllUserDetails', {
            headers: { Authorization: `Bearer ${token}` }
        });
        return response.data;
    },

    async registerUser(userInfo) {
        const response = await axios.post('https://jwt-be-latestation.onrender.com/auth/addNewUser', userInfo);
        return response.data;
    }
};
