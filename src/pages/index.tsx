import { GetStaticProps } from "next";
import { FC } from "react";
import { Container } from "../components/Container";
import { getPersonalizedMovies } from "../utils/apis";

type IndexProps = {
  personalizedMovies: { mainMovie: Movie; genres: Genre[] };
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const personalizedMovies = await getPersonalizedMovies();
  return {
    props: { personalizedMovies },
  };
};

const Index: FC<IndexProps> = ({ personalizedMovies }) => {
  console.log(personalizedMovies);
  return <Container height="100vh">Index</Container>;
};

export default Index;
