import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

type MovieDetailProps = {
  movie: { id: string };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<MovieDetailProps, Params> = async (
  context
) => {
  const params = context.params!;
  const movie = { id: params.id };
  return {
    props: { movie },
  };
};

const MovieDetailPage: React.FC<MovieDetailProps> = ({ movie: { id } }) => {
  return <div>ID: {id}</div>;
};

export default MovieDetailPage;
