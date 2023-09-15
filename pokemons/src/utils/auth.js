export const saveUserCredentials = (username) => {
    localStorage.setItem('username', username);
  };
  
  export const getUserCredentials = () => {
    return localStorage.getItem('username');
  };
  
  export const removeUserCredentials = () => {
    localStorage.removeItem('username');
  };
  