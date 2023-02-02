import { API_KEY, CONTEXT_KEY } from "@env";

export const search = async (term: string, searchType: string) => {
  console.log(process.env.API_KEY);
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}${
      searchType && `&searchType=image`
    }`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));
  console.log(data);
};
