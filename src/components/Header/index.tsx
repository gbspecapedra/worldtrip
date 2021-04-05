import { IoIosArrowBack } from "react-icons/io";
import { Flex, Icon, IconButton, Image, Link } from "@chakra-ui/react";

interface HeaderProps {
  isContinent?: boolean;
}

export function Header({ isContinent = false }: HeaderProps) {
  return (
    <Flex as="header" h={20} w="100%" justify="center" align="center" py="1rem">
      {isContinent && (
        <Link href="/" passHref>
          <IconButton
            aria-label="Back to home"
            icon={<Icon as={IoIosArrowBack} />}
            fontSize="24"
            variant="unstyled"
            mr="2"
          />
        </Link>
      )}
      <Image src="/images/logo.svg" alt="worldtrip" />
    </Flex>
  );
}
