const getURLWithQueryParams = (base: string, params: { [key: string]: string }): string => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&');

  return `${base}?${query}`;
};

export default getURLWithQueryParams;
