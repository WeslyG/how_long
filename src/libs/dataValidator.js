
export const dataValidator = data => {
  return !isNaN(Date.parse(data));
};
