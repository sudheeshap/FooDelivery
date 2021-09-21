export default function useDebounce(
  callback: Function,
  delay: number,
  immediate?: boolean,
) {
  let timeout: number | null;

  return (...args: Object[]) => {
    timeout && window.clearTimeout(timeout);

    if (!timeout && immediate) {
      callback.apply(args);
    }

    timeout = window.setTimeout(() => {
      if (!immediate) {
        callback.apply(args);
      }

      timeout = null;
    }, delay);
  };
}
