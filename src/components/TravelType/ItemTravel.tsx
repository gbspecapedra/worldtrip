import { Image, Text, VStack } from "@chakra-ui/react";

interface ItemTravelProps {
  label: string;
  image: string;
}

export function ItemTravel({ label, image }: ItemTravelProps) {
  return (
    <VStack>
      <Image src={`/images/${image}.svg`} />
      <Text fontSize="1.5rem" fontWeight="semibold">
        {label}
      </Text>
    </VStack>
  );
}
