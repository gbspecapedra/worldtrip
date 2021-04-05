import { Text, VStack } from "@chakra-ui/react";
import { ReactElement } from "react";

interface ContinentAboutItemProps {
  number: number;
  label: string;
  icon?: ReactElement;
}

export function ContinentAboutItem({
  number,
  label,
  icon,
}: ContinentAboutItemProps) {
  return (
    <VStack spacing={-2} fontWeight="semibold">
      <Text fontSize="3rem" color="yellow.500">
        {number}
      </Text>
      <Text fontSize="1.5rem">
        {label} {!!icon && icon}
      </Text>
    </VStack>
  );
}
