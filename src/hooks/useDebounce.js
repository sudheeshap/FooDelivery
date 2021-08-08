export default function useDebounce(fn, delay, immediate) {
  let timeout;

  return (...args) => {
    const context = this;

    clearTimeout(timeout);

    if (!timeout && immediate) {
      fn.apply(context, args);
    }

    timeout = setTimeout(() => {
      if (!immediate) {
        fn.apply(context, args);
      }

      timeout = null;
    }, delay);
  };
}
