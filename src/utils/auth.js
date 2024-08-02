export const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

export const isLoggedIn = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const accessToken = getCookie('accessToken');
    return user && accessToken;
  };