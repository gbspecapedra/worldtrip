import { Box, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

export function Slider() {
  return (
    <Flex as="section" direction="column" justify="center" align="center">
      <Divider w="90px" borderColor="gray.500" size="2px" />
      <VStack py="4rem">
        <Heading fontWeight="500">
          <VStack>
            <Text>Vamos nessa? </Text>
            <Text>Então escolha seu continente</Text>
          </VStack>
        </Heading>
        <Box h="450px">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper>
        </Box>
      </VStack>
    </Flex>
  );
}
