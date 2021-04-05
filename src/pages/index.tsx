import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelType } from "../components/TravelType";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Flex direction="column" h="100vh" w="100%" maxW={1440} mx="auto">
        <Header />

        <Banner />

        <TravelType />
      </Flex>
    </>
  );
}
