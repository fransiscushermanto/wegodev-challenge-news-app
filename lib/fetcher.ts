import axios from "axios";

export async function getHeadlineNews() {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.NEWS_API_KEY}`,
    );

    return res.data.articles;
  } catch (error) {
    throw new Error('Request Failed!');
  }
}

export async function getNewsByCategory(category: string) {
    try {
        const res = await axios.get(
          `https://newsapi.org/v2/everything?q=${category}&apiKey=${process.env.NEWS_API_KEY}`,
        );
      
        return res.data.articles;
    } catch (error) {
        throw new Error('Request Failed';)
    }
}
