import axios from "axios";

export async function getHeadlineNews() {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
    );
    return res.data.articles;
  } catch (error) {
    throw new Error("An Error occured");
  }
}

export async function getNewsByCategory({
  category,
  page = 1,
}: {
  category: string;
  page: number;
}) {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${category}&page=${page}&language=en&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
    );

    return {
      data: res.data.articles,
      nextId: res.data.articles.length > 0 ? page + 1 : null,
    };
  } catch (error) {
    throw new Error("An Error occured");
  }
}
