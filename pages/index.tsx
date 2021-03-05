import { GetStaticProps } from "next";
import Head from "next/head";
import ContentLayout from "../components/layouts/ContentLayout";
import React from "react";
import { useNav } from "../components/providers/NavProvider";
import { getHeadlineNews, getNewsByCategory } from "../lib";
import { QueryClient, useQuery, useInfiniteQuery } from "react-query";
import { Spinner } from "@chakra-ui/spinner";
import { dehydrate } from "react-query/hydration";
import { css } from "@emotion/css";
import HeadlineNewsCard from "../components/HeadlineNewsCard";
import CardSlider from "../components/CardSlider";
import { Box, Text } from "@chakra-ui/react";
import NewsCard from "../components/NewsCard";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

export interface INews {
  source?: {
    id: string;
    name: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

const styles = {
  ulHeadline: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  li: css`
    list-style-type: none;
  `,
  errorMessageContainer: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  spinnerContainer: css`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 8px;
    border-radius: 50%;
  `,
  loadMoreSpinnerContainer: css`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
};

export const getStaticProps: GetStaticProps = async ({}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("headlineNews", getHeadlineNews);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  const [active] = useNav();

  const viewportLoadMoreRef = React.useRef();

  const {
    data: headlineNews,
    isError: isErrorHeadlineNews,
    isFetching: isFetchingHeadlineNews,
    isSuccess: isSuccessHeadlineNews,
  } = useQuery(["headlineNews", active], getHeadlineNews);

  const {
    data: news,
    isFetching: isFetchingNews,
    isFetchingNextPage,
    isSuccess: isSuccessNews,
    isError: isErrorNews,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["news", active],
    ({ pageParam = 1 }) =>
      getNewsByCategory({ category: active, page: pageParam }),
    {
      getNextPageParam: (lastPage) => lastPage.nextId ?? false,
    },
  );

  useIntersectionObserver({
    target: viewportLoadMoreRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  console.log(news);
  return (
    <ContentLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {(isFetchingHeadlineNews || isFetchingNews) && !isFetchingNextPage && (
        <Box className={styles.spinnerContainer}>
          <Spinner thickness="3px" size={"lg"} bgColor={"white"} />
        </Box>
      )}
      {(isErrorHeadlineNews || isErrorNews) &&
        (!isFetchingHeadlineNews || !isFetchingNews) && (
          <Box
            className={styles.errorMessageContainer}
          >
            <Text fontSize={"3xl"} fontWeight={"bold"}>
              Oopss... An error occured
            </Text>
          </Box>
        )}
      {(!isErrorHeadlineNews || !isErrorNews) && (
        <Box>
          {isSuccessHeadlineNews && Array.isArray(headlineNews) && (
            <>
              <Text fontWeight={"bold"} fontSize={"3xl"} mb={2}>
                Top Headlines
              </Text>
              <CardSlider style={{ marginBottom: "1.875rem" }}>
                {headlineNews?.map((item: INews, i) => (
                  <HeadlineNewsCard
                    key={i}
                    description={item.description}
                    title={item.title}
                    imgSrc={item.urlToImage}
                    author={item.author}
                    publishedAt={item.publishedAt}
                    source={item.source}
                    url={item.url}
                  />
                ))}
              </CardSlider>
            </>
          )}

          {isSuccessNews &&
            Array.isArray(news.pages) &&
            news?.pages.map(
              (page, i) => (
                console.log(page),
                (
                  <React.Fragment key={i}>
                    {page.data.map((item: INews, i) => (
                      <NewsCard
                        key={i}
                        description={item.description}
                        title={item.title}
                        imgSrc={item.urlToImage}
                        author={item.author}
                        publishedAt={item.publishedAt}
                        source={item.source}
                        url={item.url}
                      />
                    ))}
                  </React.Fragment>
                )
              ),
            )}
        </Box>
      )}
      <Box ref={viewportLoadMoreRef}>
        {isFetchingNextPage && (
          <Box className={styles.loadMoreSpinnerContainer}>
            <Spinner thickness="3px" size={"lg"} bgColor={"white"} />
          </Box>
        )}
      </Box>
    </ContentLayout>
  );
}
