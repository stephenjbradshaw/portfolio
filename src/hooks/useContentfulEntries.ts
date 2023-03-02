import {Entry} from "contentful";
import {useEffect, useState} from "react";
import {contentfulClient} from "../utils/contentful";

const useContentfulEntries = <T>() => {
  const [data, setData] = useState<Entry<T>[] | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const {items} = await contentfulClient.getEntries<T>();
        setData(items);
      } catch (err) {
        setIsError(true);
        console.log("Problem fetching from contentful", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {data, isError, isLoading};
};

export default useContentfulEntries;
