import { Box } from "@chakra-ui/layout";
import { GetStaticProps } from "next";
import { FC } from "react";
import Header from "../components/Header";
import MainMovie from "../components/MainMovie";
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

const Index: FC<IndexProps> = ({
  personalizedMovies: { mainMovie, genres },
}) => {
  return (
    <Box>
      <Header></Header>
      <Box pt={[16, 16, 0]}>
        <MainMovie
          id={mainMovie.id}
          imageUrl={mainMovie.title.image.url}
          title={mainMovie.title.title}
          description={mainMovie.plotSummary.text}
        />
      </Box>
    </Box>
  );
};

export default Index;
