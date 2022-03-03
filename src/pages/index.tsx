import {
  Box,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { BannerHome } from "../components/Home/Banner";
import { IconWithText } from "../components/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import {
  FaCocktail,
  FaUmbrellaBeach,
  FaBuilding,
  FaGlobeAmericas,
  FaLandmark,
  FaCircle,
} from "react-icons/fa";
import { SliderHome } from "../components/Home/Slider";

export default function Home() {
  const [isLargerThan750] = useMediaQuery("(max-width: 750px)");
  return (
    <>
      <Header />

      <BannerHome />

      <Flex
        justifyContent="space-between"
        flexWrap="wrap"
        maxW={1480}
        margin="0 auto"
        pt="10"
        pb="10"
        pr="4"
        pl="4"
      >
        <IconWithText
          width={isLargerThan750 ? "50%" : "auto"}
          description="vida noturna"
          icon={isLargerThan750 ? FaCircle : FaCocktail}
        />
        <IconWithText
          width={isLargerThan750 ? "50%" : "auto"}
          description="praia"
          icon={isLargerThan750 ? FaCircle : FaUmbrellaBeach}
        />
        <IconWithText
          width={isLargerThan750 ? "50%" : "auto"}
          description="moderno"
          icon={isLargerThan750 ? FaCircle : FaBuilding}
        />
        <IconWithText
          width={isLargerThan750 ? "50%" : "auto"}
          description="clássico"
          icon={isLargerThan750 ? FaCircle : FaLandmark}
        />
        <IconWithText
          width={isLargerThan750 ? "100%" : "auto"}
          description="e mais..."
          icon={isLargerThan750 ? FaCircle : FaGlobeAmericas}
        />
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        maxW={1480}
        margin="0 auto"
        pt="10"
        pb="10"
      >
        <Box height={1} width={90} bg="gray.500" />

        <Text textAlign="center" mt="10" fontSize="3xl">
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Flex>

      <Flex
        maxW={1480}
        margin="0 auto"
        width="100%"
        pt="10"
        pb="10"
        height={isLargerThan750 ? 550 : "auto"}
      >
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          loop={true}
        >
          <SwiperSlide>
            <SliderHome
              description="Se alguma vez vi magia, foi na África."
              urlRef="/continent/africa"
              urlBg="/africa.jpg"
              title="África"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderHome
              description="A juventude da América é a sua mais velha tradição."
              urlRef="/continent/america"
              urlBg="/america.jpg"
              title="Ámerica"
              
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderHome
              description="Uma longa viagem começa por um passo."
              urlRef="/continent/asia"
              urlBg="/asia.jpg"
              title="Ásia"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderHome
              description="O continente mais antigo."
              urlRef="/continent/europe"
              urlBg="/europe.jpg"
              title="Europa"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderHome
              description="Descobrindo todos os dias que a alma pode ser colorida em nuances infinitas."
              urlRef="/continent/oceania"
              title="Oceania"
              urlBg="/oceania.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
}
