import { Box, Heading } from "@chakra-ui/layout";
import React, { FC } from "react";
import Slider from "react-slick";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";

import MoviePreview from "./MoviePreview";

const Arrow = (props: any) => {
  const { className, style, onClick } = props;
  const color = useColorModeValue("gray.500", "white");
  return (
    <Box
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      _before={{
        color,
      }}
    />
  );
};

const GenreMovies: FC<Genre> = ({ genreName, movies }) => {
  const slidesToShow = useBreakpointValue({ base: 2, sm: 4, md: 6, lg: 8 });
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  return (
    <Box>
      <Heading
        fontSize="lg"
        fontWeight="extrabold"
        textTransform="uppercase"
        mb={4}
      >
        {genreName}
      </Heading>
      <Slider {...settings}>
        {movies.map(({ id, title, releaseDate, ratings }) => (
          <Box key={id} p={0.5}>
            <MoviePreview
              id={id.split("/")[2]}
              title={title.title}
              imageUrl={title.image.url}
              releaseDate={releaseDate}
              rating={ratings.rating}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default GenreMovies;
