import { GetStaticProps } from "next";
import Head from "next/head";
import ContentLayout from "../components/layouts/ContentLayout";
import React, { useCallback, useEffect, useState } from "react";
import { useNav } from "../components/providers/NavProvider";
import { getHeadlineNews, getNewsByCategory } from "../lib";
import { QueryClient, useQuery } from "react-query";
import { Spinner } from "@chakra-ui/spinner";
import { dehydrate } from "react-query/hydration";

interface INews {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("news", getHeadlineNews);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  const [active] = useNav();

  const fetchNews = useCallback(async () => {
    const res =
      active !== "all" && active
        ? await getNewsByCategory(active)
        : await getHeadlineNews();
    return res;
  }, [active]);

  const {
    data: news,
    isError,
    isLoading,
    isFetching,
    isFetchedAfterMount,
    isSuccess,
    refetch,
  } = useQuery(active ? ["news", active] : "news", fetchNews, {enabled: false});

  useEffect(() => {
    if (active) {
      refetch();
    }
  }, [active])

  return (
    <ContentLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {isSuccess &&
          news?.map((item: INews) => (
            <li key={item.title}>
              {item.title}
              <hr></hr>
            </li>
          ))}
      </ul>
    </ContentLayout>
  );
}
