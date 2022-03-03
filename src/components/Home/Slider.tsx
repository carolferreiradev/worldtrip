import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface SliderHomeProps {
  urlBg: string;
  urlRef: string;
  title: string;
  description: string;
}

const SliderHomeRef: ForwardRefRenderFunction<
  HTMLInputElement,
  SliderHomeProps
> = ({ urlBg, description, urlRef, title }, ref) => {
  return (
    <Box
      bgImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.55), rgba(28, 20, 1, 0.55)),url(${urlBg})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height={600}
      maxW="100%"
    >
      <Link href={urlRef} passHref>
        <Box as="a">
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            h="100%"
          >
            <Text
              color="white"
              fontWeight="bold"
              fontSize="4xl"
              p={4}
              textAlign="center"
            >
              {title}
            </Text>
            <Text
              color="white"
              fontWeight="bold"
              fontSize="lg"
              p={4}
              textAlign="center"
            >
              {description}
            </Text>
          </Flex>
        </Box>
      </Link>
    </Box>
  );
};
export const SliderHome = forwardRef(SliderHomeRef);
