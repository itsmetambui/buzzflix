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
    py={[2, 2, 4]}
    justifyContent="space-between"
    zIndex={1}
  >
    <Link href="/">
      <a>
        <Heading
          color="teal.300"
          fontSize={["md", "md", "xl"]}
          fontWeight="extrabold"
        >
          BUZZFLIX
        </Heading>
      </a>
    </Link>

    <ColorModeSwitcher />
  </Container>
);

export default Header;
