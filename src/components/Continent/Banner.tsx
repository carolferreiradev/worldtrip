import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface BannerHomeProps {
  title: string;
  continentImageUrl: string;
}

export function BannerHome({ continentImageUrl, title }: BannerHomeProps) {
  return (
    <Box
      bgImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)),url(${continentImageUrl})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height={400}
      w="100vw"
    >
      <Flex
        pb="24"
        alignItems="end"
        height={400}
        maxW={1480}
        margin="0 auto"
        pl="4"
        pr="4"
      >
        <Box>
          <Text
            fontSize="3xl"
            color="gray.50"
            mb="4"
            textTransform="capitalize"
            fontWeight="bold"
          >
            {title}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
