import { IoMdInformationCircleOutline } from "react-icons/io";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Tooltip,
  SimpleGrid,
  Wrap,
  Image,
  VStack,
} from "@chakra-ui/react";
import { ContinentAboutItem } from "./ContinentAboutItem";
import { CircleFlag } from "react-circle-flags";

type City = {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
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
      <SimpleGrid columns={2} spacing="5rem" py="5rem">
        <Flex w="100%" maxW="600px" align="stretch">
          <Text fontSize="1.5rem" color="gray.500">
            {continent.about}
          </Text>
        </Flex>
        <Flex w="100%" justify="space-between" align="center">
          <ContinentAboutItem number={continent.countries} label="países" />
          <ContinentAboutItem number={continent.languages} label="línguas" />
          <ContinentAboutItem
            number={continent.cities100}
            label="cidades +100"
            icon={
              <Tooltip
                hasArrow
                placement="top"
                label="Cidades entre as 100 mais visitadas do mundo"
                fontSize="md"
              >
                <Icon as={IoMdInformationCircleOutline} color="gray.400" />
              </Tooltip>
            }
          />
        </Flex>
      </SimpleGrid>

      <Box>
        <Heading fontWeight="500">Cidades +100</Heading>

        <Wrap spacing="3rem" mt="2.5rem" justify="center">
          {continent.cities.map((city) => (
            <Box _hover={{ boxShadow: "2xl" }}>
              <Image
                src={city.image}
                borderTopEndRadius="0.25rem"
                borderTopStartRadius="0.25rem"
              />
              <Flex
                flex="1"
                p="6"
                justify="space-between"
                borderColor="yellow.500"
                borderWidth="1px"
                borderTop="none"
              >
                <VStack align="left">
                  <Text fontSize="1.25rem" fontWeight="semibold">
                    {city.name}
                  </Text>
                  <Text color="gray.400">{city.country}</Text>
                </VStack>
                <CircleFlag countryCode={city.code} height="30" width="30" />
              </Flex>
            </Box>
          ))}
        </Wrap>
      </Box>
    </Flex>
  );
}
