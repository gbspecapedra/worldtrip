import { GetStaticProps } from "next";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";
import { TravelType } from "../components/TravelType";
import { api } from "../services/api";

type Continent = {
  id: string;
  name: string;
  call: string;
  callImage: string;
};

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
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
        <Carousel continents={continents} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api
    .get<Continent[]>(`/continents`)
    .then((response) => response.data);

  return {
    props: { continents: response },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
