import { Text, VStack } from "@chakra-ui/react";

interface ContinentAboutItemProps {
  number: number;
  label: string;
}

export function ContinentAboutItem({ number, label }: ContinentAboutItemProps) {
  return (
    <VStack spacing={-2} fontWeight="semibold">
      <Text fontSize="48px" color="yellow.500">
        {number}
      </Text>
      <Text fontSize="24px">{label}</Text>
    </VStack>
  );
}
