import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNTk0NWU4ZGQyMzAxMDRlNDk5MjllZiIsInVzZXJuYW1lIjoibmd1eWVuZGFpIiwiaWF0IjoxNTY2MTU2ODY3LCJleHAiOjE1NjYxNjA0Njd9.98eJE54YWXYNlE3U0O4YPrtSFVEsOeKV1lYFtLbZYGI'

export const repo = axios.create({
    baseURL: `http://localhost:3000/api`,
    headers: { 'x-access-token': `${window.localStorage.getItem('accessToken') || token}` }
});
/* eslint-disable */

repo.interceptors.response.use(response => {
    return response
}, error => {
    const statusCode = error.response.status
    if (statusCode === 401 || statusCode === 403) {
        // hanlde is here or redirect to login page
        return
    }
});