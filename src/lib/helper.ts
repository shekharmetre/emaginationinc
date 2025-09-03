export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}


function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getUniquePageItems<T>(
  data: T[],
  page: number,
  usedIndexes: number[],
  pageSize: number = 10
): T[] {
  console.log("this is used indexes", usedIndexes)
  // filter out already u
  const maxPage = Math.ceil(data.length / pageSize);
  if (page > maxPage) return [];
  const availableIndexes = data
    .map((_, i) => i)
    .filter((i) => !usedIndexes.includes(i));

  if (availableIndexes.length === 0) return [];
  // shuffle available indexes randomly
  const shuffled = shuffle(availableIndexes);

  // pick first N items for this "page"
  const newIndexes = shuffled.slice(0, pageSize);

  // add to usedIndexes (so next time they won’t repeat)
  usedIndexes.push(...newIndexes);

  return newIndexes.map((i) => data[i]);
}
