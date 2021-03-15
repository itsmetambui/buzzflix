import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import axios from "./axios";
import endPoints from "./endpoints";

type Option = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  payload?: any;
  withAuth?: boolean;
};

export const fetcher = async <T>({
  url,
  options,
}: {
  url: string;
  options: AxiosRequestConfig;
  withMock?: boolean;
  instance?: AxiosInstance;
}): Promise<T> =>
  new Promise((resolve, reject) => {
    axios({
      url,
      ...options,
    })
      .then((response: AxiosResponse<T>) => {
        if (response.status === 200) {
          resolve(response.data);
        }
        reject(response.data);
      })
      .catch((error: AxiosError<T>) => {
        reject(error);
      });
  });

export const makeOptions = ({
  method = "GET",
  payload,
}: Option): AxiosRequestConfig => {
  const options: AxiosRequestConfig = {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  if (method === "POST" && payload) {
    options.data = payload;
  }

  return options;
};

export const getPersonalizedMovies = async () =>
  fetcher<{ mainMovie: Movie; genres: Genre[] }>({
    url: endPoints.getPersonalizedMovies(),
    options: makeOptions({
      method: "GET",
    }),
  });

export const getMovies = async () =>
  fetcher<Movie[]>({
    url: endPoints.getMovies(),
    options: makeOptions({
      method: "GET",
    }),
  });

export const getMovieDetails = async (title: string) =>
  fetcher<Movie>({
    url: endPoints.getMovie(title),
    options: makeOptions({
      method: "GET",
    }),
  });
