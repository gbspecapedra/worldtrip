import Link from "next/link";

import {
  Box,
  Flex,
  Heading,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";

export function SliderItem() {
  return (
    <Flex
      h="450px"
      justify="center"
      align="center"
      backgroundImage={`url('/images/europa/call.png')`}
    >
      <Link href="/" passHref>
        <ChakraLink color="transparent">
          <VStack spacing={4}>
            <Heading
              color="gray.50"
              _hover={{ color: "yellow.500" }}
              fontSize="3rem"
              fontWeight="bold"
            >
              Europa
            </Heading>
            <Text color="gray.100" fontSize="1.5rem" fontWeight="bold">
              O continente mais antigo
            </Text>
          </VStack>
        </ChakraLink>
      </Link>
    </Flex>
  );
}
