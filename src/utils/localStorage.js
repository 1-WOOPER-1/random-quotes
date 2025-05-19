const localStorageSetItem = (key, value) => {
  if (typeof key !== "string") {
    console.error("Error: Key must be a string");
    return;
  }
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error("Error setting item in localStorage", error);
  }
};

const localStorageGetItem = (key) => {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
};

const localStorageRemoveItem = (key) => {
  localStorage.removeItem(key);
};

const localStorageClear = () => {
  localStorage.clear();
};

export {
  localStorageSetItem,
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageClear,
};
