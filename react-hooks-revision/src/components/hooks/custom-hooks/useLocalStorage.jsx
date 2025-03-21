import React, { useState } from "react";

const isBrowser = typeof window != "undefined";

const useLocalStorage = (key, initialValue) => {
  if (!isBrowser) {
    return [initialValue, () => {}, () => {}]; // Return initial value and empty functions if not in browser
  }

  if (!key) {
    throw new Error("useLocalStorage requires a key");
  }
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState(initial);

  const set = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;

      setValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
      setValue(undefined);
    } catch (error) {
      console.error(error);
    }
  };

  return [value, set, remove];
};

export default useLocalStorage;
