import React, { FC } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/button";

type MainMovieProps = {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
};

const MainMovie: FC<MainMovieProps> = ({
  id,
  title,
  description,
  imageUrl,
}) => {
  return (
    <Box h={[250, 250, "100vh"]} w="full" position="relative">
      <Image src={imageUrl} layout="fill" alt={title}></Image>
      <Flex
        position="absolute"
        top="0"
        left={0}
        w="40%"
        height="100%"
        px={[4, 8, 16]}
        bgGradient="linear(to-r, rgba(0,0,0,0.59), rgba(0,0,0,0.19))"
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Heading
          fontSize={["4xl", "4xl", "9xl"]}
          color="teal.300"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          {title}
        </Heading>
        <Text mb={8} fontSize="xl" color="white">
          {description}
        </Text>
        <Link href={`/movies/${id}`}>
          <Button>Watch now</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default MainMovie;
