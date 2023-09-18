export const assign = (source, target) => {
  Object.entries(source).forEach(([key, value]) => {
    target[key] = value;
  });
  return target;
};
