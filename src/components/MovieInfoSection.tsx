import { Text } from "@chakra-ui/layout";
import React, { FC } from "react";

type MovieInfoSectionProps = {
  name: string;
  value?: string;
};

const MovieInfoSection: FC<MovieInfoSectionProps> = ({
  name,
  value = "N/A",
}) => {
  return (
    <>
      <Text fontWeight="bold">{name}</Text>
      <Text fontSize="md">{value}</Text>
    </>
  );
};

export default MovieInfoSection;
