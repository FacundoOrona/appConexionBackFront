export const saveUserSession = (username) => {
    localStorage.setItem('username', username);
};

export const getUserSession = () => {
    return localStorage.getItem('username');
};

export const clearUserSession = () => {
    localStorage.removeItem('username');
};
