export default (action, ...args) => {
  require(`./${action}`)(...args);
};
