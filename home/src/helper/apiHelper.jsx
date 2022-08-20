
export const getStorage = (sKey) =>  localStorage.getItem(sKey)

export const setStorage = (sKey, data) =>
  localStorage.setItem(sKey, data);

export const removeStorage = (sKey) => localStorage.setItem(sKey);

export const clearLocalStorage = (sKey) => localStorage.removeItem(sKey);

