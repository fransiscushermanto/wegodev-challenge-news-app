import axios from "axios";

export async function getHeadlineNews() {
  try {
    const res = await axios.get(
      process.env.NODE_ENV === "production"
        ? `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        : `http://localhost:3000/api/news`,
    );

    return res.data.articles;
  } catch (error) {
    throw new Error("Request Failed!");
  }
}

export async function getNewsByCategory(category: string) {
  try {
    const res = await axios.get(
      process.env.NODE_ENV === "production"
        ? `https://newsapi.org/v2/everything?q=${category}&language=en&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        : "http://localhost:3000/api/news",
    );

    return res.data.articles;
  } catch (error) {
    throw new Error("Request Failed");
  }
}
