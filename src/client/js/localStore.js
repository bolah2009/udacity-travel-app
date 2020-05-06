const dataStore = () => {
  const getData = () => {
    const localStore = localStorage.getItem('trip-data');
    if (localStore) {
      return JSON.parse(localStore);
    }
    return [];
  };

  const store = getData();

  const isNotEmpty = () => !!store.length;

  const setData = (data, index = store.length) => {
    store[index] = data;
    localStorage.setItem('trip-data', JSON.stringify(store));
    return true;
  };

  const deleteData = index => {
    if (index >= store.length) {
      return false;
    }
    store.splice(index, 1);
    localStorage.setItem('trip-data', JSON.stringify(store));
    return true;
  };

  return {
    store,
    isNotEmpty,
    deleteData,
    setData,
  };
};

export default dataStore;
