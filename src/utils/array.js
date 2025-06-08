const removeObjectFromById = (array, id) => {
  array.splice(
    array.findIndex((el) => el.id === id),
    1
  );
};

export { removeObjectFromById };
