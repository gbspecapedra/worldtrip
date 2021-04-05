import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" h={20} w="100%" justify="center" align="center">
      <Image src="/images/logo.svg" alt="worldtrip" />
    </Flex>
  );
}
