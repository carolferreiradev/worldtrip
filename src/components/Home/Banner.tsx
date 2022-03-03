import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function BannerHome() {
  return (
    <Box
      bgImage={"url('/background.svg')"}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height={[250, 400]}
      w="100vw"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        height={[250, 400]}
        maxW={1480}
        margin="0 auto"
      >
        <Box p={"4"}>
          <Text fontSize="2xl" color="gray.50" mb="4">
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text fontSize="sm" color="gray.50">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Box
          position="relative"
          w="100%"
          h="100%"
          display={["none", "none", "flex"]}
        >
          <Image
            src="/airplane.svg"
            position="absolute"
            right={["10", "10", "5", "20"]}
            bottom="-5"
            alt="airplane"
          />
        </Box>
      </Flex>
    </Box>
  );
}
