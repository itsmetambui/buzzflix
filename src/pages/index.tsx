import { Box } from "@chakra-ui/layout";
import { GetStaticProps } from "next";
import { FC } from "react";
import Header from "../components/Header";
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
  return (
    <Box>
      <Header></Header>
    </Box>
  );
};

export default Index;
