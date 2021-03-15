import { Box, Heading } from "@chakra-ui/layout";
import Link from "next/link";
import Image from "next/image";
import React, { FC } from "react";
import Slider from "react-slick";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";

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
  const slidesToShow = useBreakpointValue({ base: 2, sm: 2, md: 6, lg: 8 });
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
        {movies.map((movie) => (
          <Box key={movie.id} p={0.5}>
            <Link href={`/movies/${movie.id.split("/")[2]}`}>
              <a>
                <Image
                  src={movie.title.image.url}
                  alt={movie.title.title}
                  height={300}
                  width={200}
                />
              </a>
            </Link>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default GenreMovies;
