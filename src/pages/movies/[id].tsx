import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import Header from "../../components/Header";
import { moviesMap } from "../../mock/data";
import { getMovieDetails, getMovies } from "../../utils/apis";

type MovieDetailProps = {
  movie: Movie;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getMovies()).map((movie) => ({
    params: { id: movie.id.split("/")[2] },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<MovieDetailProps, Params> = async (
  context
) => {
  const id = context.params!.id;
  // TODO: fix mocking
  // const movie = await getMovieDetails(id);
  const movie = moviesMap[id];

  return {
    props: { movie },
  };
};

const MovieDetailPage: React.FC<MovieDetailProps> = ({ movie }) => {
  return (
    <Box>
      <Header />
      <Flex px={16} py={32} minH="100vh">
        <Box position="relative" mr={16}>
          <Image
            src={movie.title.image.url}
            alt={movie.title.title}
            height={500}
            width={350}
          />
        </Box>
        <Box flex={1}>
          <Heading
            fontSize="2xl"
            fontWeight="bold"
            textTransform="uppercase"
            mb={8}
          >
            {movie.title.title}
          </Heading>
          <Text mb={8} fontSize="md">
            {movie.plotSummary?.text}
          </Text>
          <Text mb={8} fontSize="md">
            <Text fontWeight="bold">Release date</Text>
            {movie.releaseDate}
          </Text>
          <Text mb={8} fontSize="md">
            <Text fontWeight="bold">Rating</Text>
            {movie.ratings.rating}
          </Text>
          {/* TODO: get real cast from ibmd */}
          <Text mb={8} fontSize="md">
            <Text fontWeight="bold">Casts</Text>
            Michael Smith, Anton Cropper, Christopher Misiano, and more...
          </Text>
          <Button>Watch now</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default MovieDetailPage;
