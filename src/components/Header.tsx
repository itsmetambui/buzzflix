import { Heading } from "@chakra-ui/react";
import Link from "next/link";

import Container from "./Container";
import ColorModeSwitcher from "./ColorModeSwitcher";

const Header = () => (
  <Container
    flexDirection="row"
    position="fixed"
    top="0"
    width="100%"
    px={[4, 4, 8]}
    py={4}
    justifyContent="space-between"
  >
    <Link href="/">
      <Heading color="teal.500" fontSize="xl" fontWeight="extrabold">
        BUZZFLIX
      </Heading>
    </Link>

    <ColorModeSwitcher />
  </Container>
);

export default Header;
