import mock from "../utils/mock";
import { moviesMap, personalized, movies } from "./data";
import endpoints from "../utils/endpoints";

mock.onGet(endpoints.getPersonalizedMovies()).reply(() => {
  return [200, personalized];
});

mock.onGet("/movies").reply((config) => {
  const title = config?.params?.title;
  return [200, title ? moviesMap[title] : movies];
});
