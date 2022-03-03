import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { BannerHome } from "../../components/Continent/Banner";
import { Header } from "../../components/Header";
import { IContinent, getCountriesByContinent } from "../api/restcountries";

export default function Continent() {
  const [countries, setCountries] = useState<IContinent>({} as IContinent);
  const router = useRouter();
  const continentSelected = router.asPath.split("/continent/")[1];

  useEffect(() => {
    (async () => {
      const response = await getCountriesByContinent(continentSelected);
      if (response) {
        setCountries(response);
      }
    })();
  }, [continentSelected]);

  return (
    <>
      <Header goHomeIcon />
      <BannerHome
        title={countries?.nameContinent}
        continentImageUrl={`/${continentSelected}.jpg`}
      />
      <SimpleGrid
        columns={[1, 1, 1, 2]}
        spacing={[10, 20, 20, 20, 60]}
        height={["auto", 400]}
        w="100vw"
        maxW={1480}
        margin="0 auto"
        pt="10"
        pb="10"
        pl="4"
        pr="4"
      >
        <Flex
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize={[12, 16]}>{countries?.description}</Text>
        </Flex>
        <Flex height="100%" justifyContent="space-between">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="yellow.300" fontSize={[30, 48]}>
              {countries?.listCountries?.length}
            </Text>
            <Text fontWeight="bold">países</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="yellow.300" fontSize={[30, 48]}>
              60
            </Text>
            <Text fontWeight="bold">línguas</Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="yellow.300" fontSize={[30, 48]}>
              27
            </Text>
            <Text
              fontWeight="bold"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              cidades +100
              <Tooltip label="10 cities" aria-label="A tooltip">
                <Box>
                  <Icon as={FaExclamationCircle} ml={2} w={4} h={4} />
                </Box>
              </Tooltip>
            </Text>
          </Flex>
        </Flex>
      </SimpleGrid>

      <Box mt={["0", "36", 0]}>
        <Text
          w="100vw"
          maxW={1480}
          margin="0 auto"
          fontSize={["3xl", "4xl"]}
          pt={["5 ", "10"]}
          pb={["5 ", "10"]}
          pl="4"
          pr="4"
        >
          Cidades +100
        </Text>

        <SimpleGrid
          columns={[1, 2, 3, 4]}
          spacing={10}
          w="100vw"
          maxW={1480}
          margin="0 auto"
          pt="10"
          pl="4"
          pr="4"
          pb="10"
        >
          {countries?.listCountries?.map((country, index) => {
            return (
              <Flex
                justifyContent="space-between"
                flexDir="column"
                key={`${country.name}${index}`}
                border="1px"
                borderColor="gray.100"
                borderRadius={4}
              >
                <Image
                  src={country.coatOfArms ? country.coatOfArms : country.flag}
                  objectFit="contain"
                  alt="Country"
                  borderBottom="1px"
                  borderColor="gray.100"
                  height={[150, 150, 150, 200]}
                />
                <Flex
                  justifyContent="space-between"
                  gap={10}
                  boxShadow="md"
                  p="6"
                  rounded="md"
                  bg="white"
                >
                  <Flex justifyContent="space-between" flexDir="column">
                    <Text fontSize={[14, 14, 14, 20]} fontWeight="600">
                      {country.capital}
                    </Text>
                    <Text fontSize={[12, 12, 12, 16]} fontWeight="500">
                      {country.name}
                    </Text>
                  </Flex>
                  <Flex
                    borderRadius="full"
                    boxSize={["20px", "20px", "20px", "40px"]}
                    bg="white"
                    boxShadow="dark-lg"
                  >
                    <Image
                      borderRadius="full"
                      src={country.flag}
                      boxSize={["20px", "20px", "20px", "40px"]}
                      boxShadow="sm"
                      alt="Country"
                    />
                  </Flex>
                </Flex>
              </Flex>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
}
