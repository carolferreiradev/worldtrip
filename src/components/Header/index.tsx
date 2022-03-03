import { Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

interface HeaderProps {
  goHomeIcon?: boolean;
}

export function Header({ goHomeIcon = false }: HeaderProps) {
  return (
    <Flex bg="gray.50" h="14" w="100vw" margin="0 auto" alignItems="center">
      {goHomeIcon && (
        <Link href="/" passHref>
          <Icon as={FaChevronLeft} w={5} h={5} cursor="pointer" ml="20"/>
        </Link>
      )}
      <Flex justifyContent="center" alignItems="center" w="100%">
        <Image src="/logo.svg" h={30} alt="logo" />
      </Flex>
    </Flex>
  );
}
