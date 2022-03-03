import { Flex, Icon, Text, useMediaQuery, FlexProps } from "@chakra-ui/react";
import { ElementType, ReactElement } from "react";

interface IconWithText extends FlexProps {
  icon: ElementType;
  description: string;
}

export function IconWithText({ description, icon, ...rest }: IconWithText) {
  const [isLargerThan750] = useMediaQuery("(max-width: 750px)");
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      <Icon
        as={icon}
        w={isLargerThan750 ? 5 : 20}
        h={isLargerThan750 ? 5 : 20}
        color="yellow.300"
      />
      <Text mt="5" textAlign="center" textTransform="lowercase">
        {description}
      </Text>
    </Flex>
  );
}
