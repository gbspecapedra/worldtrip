import { Flex } from "@chakra-ui/react";
import { ItemTravel } from "./ItemTravel";

export function TravelType() {
  return (
    <Flex as="section" w="100%" justify="space-around" align="center" py="5rem">
      <ItemTravel label="vida noturna" image="cocktail" />
      <ItemTravel label="praia" image="surf" />
      <ItemTravel label="moderno" image="building" />
      <ItemTravel label="clássico" image="museum" />
      <ItemTravel label="e mais..." image="earth" />
    </Flex>
  );
}
