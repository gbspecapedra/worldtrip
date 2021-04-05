import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { ContinentAboutItem } from "./ContinentAboutItem";

type City = {
  id: string;
  name: string;
  image: string;
  country: string;
};

export type Continent = {
  id: string;
  name: string;
  bannerImage: string;
  about: string;
  countries: number;
  languages: number;
  cities100: number;
  cities: City[];
};

interface ContinentDetailProps {
  continent: Continent;
}

export function ContinentDetail({ continent }: ContinentDetailProps) {
  return (
    <Flex as="section" direction="column" w="100%" maxW={1160} mx="auto">
      <Box
        display="grid"
        gridGap="70px"
        gridTemplateColumns="repeat(2, 1fr)"
        py="80px"
      >
        <Flex w="100%" maxW="600px" align="stretch">
          <Text fontSize="24px" color="gray.500">
            {continent.about}
          </Text>
        </Flex>
        <Flex w="100%" justify="space-between" align="center">
          <ContinentAboutItem number={continent.countries} label="países" />
          <ContinentAboutItem number={continent.languages} label="línguas" />
          <ContinentAboutItem
            number={continent.cities100}
            label="cidades +100"
          />
        </Flex>
      </Box>

      <Box>
        <Heading fontWeight="500">Cidades +100</Heading>
      </Box>
    </Flex>
  );
}
