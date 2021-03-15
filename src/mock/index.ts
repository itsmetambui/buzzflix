import mock from "../utils/mock";
import { personalized } from "./data";
import endpoints from "../utils/endpoints";

mock.onGet(endpoints.getPersonalizedMovies()).reply(() => {
  return [200, personalized];
});

mock.onGet("/movies").reply((config) => {
  const title = config.params.title;
  return [
    200,
    {
      title,
    },
  ];
});
