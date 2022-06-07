export const characterLimit = function (str, limit = 50) {
  if (!str || str <= limit) return str;
  return `${str.slice(0, limit)}...`;
};
