type DebounceFunction<T extends (...args: any[]) => any> = (
  func: T,
  delay: number
) => (...args: Parameters<T>) => void;

export const debounce: DebounceFunction<(...args: any[]) => void> = (
  func,
  delay
) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args) => {
    clearTimeout(timeoutId);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const hasKeyword = (keywordFilter: string) => {
  keywordFilter = keywordFilter.trim().toLowerCase();
  return (text: string) => {
    text = text.trim().toLowerCase();
    return text.indexOf(keywordFilter) > -1;
  };
};
