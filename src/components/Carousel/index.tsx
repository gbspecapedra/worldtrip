import { Swiper, SwiperSlide } from "swiper/react";

import { Box, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import SwiperCore, { Pagination, Navigation } from "swiper";
import { SliderItem } from "./SliderItem";

SwiperCore.use([Navigation, Pagination]);

export function Carousel() {
  return (
    <Flex
      as="section"
      direction="column"
      w="100%"
      justify="space-around"
      align="center"
    >
      <Divider w="90px" borderColor="gray.500" size="2px" />

      <Flex direction="column" w="100%">
        <Heading fontWeight="500" py="4rem">
          <VStack>
            <Text>Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
          </VStack>
        </Heading>

        <Box h="450px" w="100%" maxW={1240} mx="auto">
          <Swiper slidesPerView={1} navigation pagination>
            <SwiperSlide key="1">
              <SliderItem />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    </Flex>
  );
}
