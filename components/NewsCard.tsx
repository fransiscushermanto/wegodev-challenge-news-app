import { Box, Image, Text } from "@chakra-ui/react";
import { css } from "@emotion/css";
import React from "react";
import { handleLongText } from "../lib";
import { INews } from "../pages";
import { format } from "date-fns";

interface IProps extends INews {
  imgSrc: string;
  className?: string;
}

const styles = {
  newsCardWrapper: css`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    max-width: 100%;
    max-height: 9.375rem;

    padding: 0.625rem;
    border: 1px solid #e2e8f0;
    border-radius: 10px;

    margin-bottom: 1rem;
  `,
  newsImgWrapper: css`
    width: 7.5rem;
    min-width: 7.5rem;
    max-width: 7.5rem;
    height: 7.5rem;
    max-height: 7.5rem;

    margin-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  `,
  newsImg: css`
    height: 100%;
    width: 100%;
    border-radius: 10px;
  `,
  newsDetailWrapper: css`
    flex: 1;
  `,
  title: css`
    font-weight: bold;
    line-clamp: 1.2;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  description: css`
    line-height: 1.2;
  `,
};

const NewsCard = ({title, description, publishedAt, source, author, imgSrc, url}:IProps) => {
  return (
    <a target="__blank" href={url} className={styles.newsCardWrapper}>
      <Box className={styles.newsImgWrapper}>
        <Image
          objectFit="fill"
          className={styles.newsImg}
          src={imgSrc}
          alt={"news"}
          fallbackSrc="https://via.placeholder.com/120x120"
        />
      </Box>
      <Box className={styles.newsDetailWrapper}>
        <Box mb={2}>
          <Text className={styles.title} mb={2} fontSize="larger" title={title}>
            {handleLongText(title, 30)}
          </Text>
          <Text fontSize={"xs"} className={styles.description}>
            {handleLongText(description, 40)}
          </Text>
        </Box>
        <Box>
          <Box display={"flex"} alignItems={"center"}>
            <Text fontSize={"xx-small"}>
              {format(new Date(publishedAt), "EE, dd MMMM yyyy")}
            </Text>
            {source && (
              <>
                <Text fontSize={"xx-small"} ml={1} mr={1}>
                  |
                </Text>
                <Text
                  maxWidth={75}
                  overflow={"hidden"}
                  whiteSpace={"nowrap"}
                  textOverflow={"ellipsis"}
                  fontSize={"xx-small"}
                >
                  {source?.name}
                </Text>
              </>
            )}
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Text
              maxW={170}
              overflow={"hidden"}
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              fontSize={"xx-small"}
            >
              {author ? author : "Anonymous"}
            </Text>
          </Box>
        </Box>
      </Box>
    </a>
  );
};

export default NewsCard;
