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

export function getUniquePageItems(
  data: { asset_id: string; display_name: string; filename: string; format: string; secure_url: string; }[],
  page: number,
  usedIndexes: number[],
  pageSize = 10
): { id: string; name: string; filename: string; format: string; url: string; }[] {
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

  const pageItems = newIndexes.map((i) => data[i]);

  return pageItems.map((img: { asset_id: string; display_name: string; filename: string; format: string; secure_url: string; }) => ({
    id: img?.asset_id,
    name: img.display_name || img.filename,
    filename: img.filename,
    format: img.format,
    url: img.secure_url,
  }));
}
