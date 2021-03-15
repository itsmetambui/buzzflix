import Link from "next/link";
import Image from "next/image";
import React, { FC, useState } from "react";
import { Box, Heading } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import MovieInfoSection from "./MovieInfoSection";

type MoviePreviewProps = {
  id: string;
  imageUrl: string;
  title: string;
  rating?: number;
  releaseDate: string;
};

const MoviePreview: FC<MoviePreviewProps> = ({
  id,
  imageUrl,
  title,
  rating,
  releaseDate,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Link href={`/movies/${id}`}>
      <a>
        <Box position="relative" onMouseEnter={() => setHover(true)}>
          <Image src={imageUrl} alt={title} height={300} width={200} />
          <Collapse in={hover} animateOpacity>
            <Box
              color="white"
              bg="teal.500"
              position="absolute"
              top={0}
              left={0}
              zIndex={1}
              p={4}
              w="100%"
              h="100%"
              onMouseLeave={() => setHover(false)}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Heading fontSize="xl" mb={4}>
                {title}
              </Heading>
              <Box>
                <MovieInfoSection name="Release Date" value={releaseDate} />
                <MovieInfoSection name="Rating" value={rating?.toString()} />
              </Box>
            </Box>
          </Collapse>
        </Box>
      </a>
    </Link>
  );
};

export default MoviePreview;
