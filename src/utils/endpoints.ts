export const makeQueryString: (queryObject: object) => string = (
  queryObject
) => {
  const cleanedObject = { ...queryObject };
  Object.keys(cleanedObject).forEach(
    // @ts-ignore
    (key) => cleanedObject[key] === undefined && delete cleanedObject[key]
  );
  const queryString = new URLSearchParams(cleanedObject).toString();
  return queryString ? `?${queryString}` : "";
};

const endPoints = {
  getPersonalizedMovies: () => "/movies/personalized",
  getMovie: (title: string) => `/movies${makeQueryString({ title })}`,
};

export default endPoints;
