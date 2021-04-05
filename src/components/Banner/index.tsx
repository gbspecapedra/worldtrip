import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      as="section"
      w="100%"
      h="335px"
      bgGradient="linear(to-t, #072E4B, #01162B)"
      justify="space-around"
      align="center"
    >
      <VStack spacing={5} maxW={520} align="flex-start" color="gray.50">
        <Heading fontWeight="500">
          5 Continentes,
          <Text>infinitas possibilidades.</Text>
        </Heading>
        <Text fontSize="1.25rem">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </VStack>
      <Image src="/images/airplane.svg" mt="7rem" />
    </Flex>
  );
}
