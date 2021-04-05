import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { api } from "../../services/api";

import { Flex, Heading } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { ContinentDetail } from "../../components/ContinentDetail";

import { ContinentModel } from "../../models";

interface ContinentProps {
  continent: ContinentModel;
}

export default function ContinentPage({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | worldtrip</title>
        <meta name="description" content={continent.about} />
        <meta name="image" content={continent.bannerImage} />
      </Head>

      <Flex direction="column" h="100vh" w="100%" maxW={1440} mx="auto">
        <Header isContinent />

        <Flex
          as="section"
          w="100%"
          h="500px"
          bgImage={`url('${continent.bannerImage}')`}
          justify="left"
          align="flex-end"
        >
          <Flex
            w="100%"
            h="500px"
            maxW={1160}
            mx="auto"
            justify="left"
            align="flex-end"
          >
            <Heading
              color="gray.50"
              fontWeight="semibold"
              fontSize="3rem"
              mb="4rem"
            >
              {continent.name}
            </Heading>
          </Flex>
        </Flex>

        <ContinentDetail continent={continent} />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const response = await api
    .get<ContinentModel[]>(`continents/${id}`)
    .then((response) => response.data);

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: { continent: response },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
