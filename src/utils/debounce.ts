export function debounce<T extends Function>(cb: T, wait = 20) {
  let h: NodeJS.Timeout | number = 0;
  const callable = (...args: Array<unknown>) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };
  return <T>(<unknown>callable);
}
