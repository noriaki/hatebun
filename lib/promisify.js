/* eslint-disable no-param-reassign, no-underscore-dangle */

export const promisify = (method) => {
  const promisedMethod = (...args) => new Promise((resolve, reject) => (
    method(...args, (err, ...rets) => (!err ? resolve(...rets) : reject(err)))
  ));
  promisedMethod.__base = method;
  return promisedMethod;
};

export const promisifyAll = (base, methods = []) => {
  methods.forEach((method) => {
    base[`__${method}`] = base[method];
    base[method] = (...args) => new Promise((resolve, reject) => (
      base[method].call(base, ...args, (err, ...rets) => (
        !err ? resolve(...rets) : reject(err)
      ))
    ));
  });
  return base;
};

export default {
  promisify,
  promisifyAll,
};
