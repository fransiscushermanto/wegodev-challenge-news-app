import { Box, Image } from "@chakra-ui/react";
import { css, cx } from "@emotion/css";
import { Text } from "@chakra-ui/react";
import React from "react";
import { handleLongText } from "../lib";
import { INews } from "./../pages/index";
import { format } from "date-fns";

interface IProps extends INews {
  imgSrc: string;
  className?: string;
}

const styles = {
  headlineCardWrapper: css`
    width: 18.75rem;
    min-width: 18.75rem;
    max-width: 18.75rem;
    height: 21.25rem;
    max-height: 21.25rem;
    margin: 0 0.625rem;
    &:nth-child(1) {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  `,
  newsImgWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 11.25rem;
    max-height: 11.25rem;
    width: 100%;
  `,
  newsImg: css`
    width: 100%;
    height: 100%;
    border-radius: 15px;
  `,
  title: css`
    font-weight: bold;
    line-clamp: 2;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  link: css`
    color: #ff4500;
    text-decoration: underline;
    margin-left: auto;
  `,
};

const HeadlineNewsCard = ({
  imgSrc,
  title,
  className,
  description,
  publishedAt,
  author,
  source,
  url,
}: IProps) => {
  return (
    <a
      className={cx(styles.headlineCardWrapper, className)}
      target="__blank"
      href={url}
    >
      <Box className={styles.newsImgWrapper}>
        <Image
          objectFit="fill"
          className={styles.newsImg}
          src={imgSrc}
          alt={"news"}
          fallbackSrc="https://via.placeholder.com/300x180"
        />
      </Box>
      <Box pl={1} pr={1} mt={2}>
        <Box mb={2}>
          <Text className={styles.title} mb={2} fontSize="larger" title={title}>
            {title}
          </Text>
          <Text>{handleLongText(description, 75)}</Text>
        </Box>
        <Box>
          <Box display={"flex"} alignItems={"center"}>
            <Text fontSize={"small"}>
              {format(new Date(publishedAt), "EE, dd MMMM yyyy")}
            </Text>
            {source && (
              <>
                <Text ml={1} mr={1}>
                  |
                </Text>
                <Text fontSize={"small"}>{source?.name}</Text>
              </>
            )}
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Text
              maxW={170}
              overflow={"hidden"}
              whiteSpace={"nowrap"}
              textOverflow={"ellipsis"}
              fontSize={"small"}
            >
              {author ? author : "Anonymous"}
            </Text>
          </Box>
        </Box>
      </Box>
    </a>
  );
};

export default HeadlineNewsCard;
