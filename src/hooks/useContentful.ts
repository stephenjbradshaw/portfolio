import {useEffect, useState} from "react";

const useContentful = (query: string) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({query}),
        }
      );
      const {data, errors} = await response.json();
      if (errors) {
        setIsError(true);
        console.log("Problem fetching from contentful", errors);
      } else {
        setData(data);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  return {data, isError, isLoading};
};

export default useContentful;
