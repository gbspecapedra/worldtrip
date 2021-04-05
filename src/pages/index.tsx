import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { TravelType } from "../components/TravelType";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
        <meta
          name="description"
          content="5 Continentes, infinitas possibilidades."
        />
        <meta name="image" content="/images/americas/call.png" />
      </Head>

      <Flex direction="column" h="100vh" w="100%" maxW={1440} mx="auto">
        <Header />
        <Banner />
        <TravelType />
        <Slider />
      </Flex>
    </>
  );
}
