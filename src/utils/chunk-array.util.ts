const chunkArray = <T>(arr: T[] | null | undefined, size: number) => {
  if (arr == null) {
    return [] as T[][];
  }

  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  );
};

export default chunkArray;
