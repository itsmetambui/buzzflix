import { Box } from "@chakra-ui/layout";
import { GetStaticProps } from "next";
import { FC } from "react";
import GenreMovies from "../components/GenreMovies";
import Header from "../components/Header";
import HeroMovie from "../components/HeroMovie";
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
        <HeroMovie
          id={mainMovie.id.split("/")[2]}
          imageUrl={mainMovie.title.image.url}
          title={mainMovie.title.title}
          description={mainMovie.plotSummary?.text}
        />
      </Box>
      <Box px={[8, 8, 16]} py={8}>
        {genres.map((genre) => (
          <Box key={genre.genreName} py={8}>
            <GenreMovies genreName={genre.genreName} movies={genre.movies} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Index;
