import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { SliderItem } from "./SliderItem";

import { Box, Divider, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import { ContinentCarouselModel } from "../../models";

SwiperCore.use([Navigation, Pagination]);

interface CarouselProps {
  continents: ContinentCarouselModel[];
}

export function Carousel({ continents }: CarouselProps) {
  return (
    <Flex as="section" direction="column" w="100%" align="center">
      <Divider w="90px" borderColor="gray.500" size="2px" />

      <Flex direction="column" w="100%">
        <Heading fontWeight="500" py="4rem">
          <VStack>
            <Text>Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
          </VStack>
        </Heading>

        <Box h="450px" w="100%" maxW={1240} mx="auto" mb="4rem">
          <Swiper slidesPerView={1} navigation pagination>
            {continents?.map((continent) => (
              <SwiperSlide key={continent.id}>
                <SliderItem continent={continent} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
    </Flex>
  );
}
