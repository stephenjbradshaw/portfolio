import {Entry} from "contentful";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {contentfulClient} from "../utils/contentful";

interface Params {
  contentType: string;
  slug?: string;
  isFeatured?: boolean;
}

const useGetEntries = <T>({contentType, slug, isFeatured}: Params) => {
  const [data, setData] = useState<Entry<T>[] | []>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {i18n} = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const results = await contentfulClient.getEntries<T>({
          locale: i18n.resolvedLanguage,
          content_type: contentType,
          "fields.slug[in]": slug,
          "fields.isFeatured": isFeatured,
        });
        const {items} = results;
        setData(items);
      } catch (err) {
        setIsError(true);
        console.log("Problem fetching from contentful", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [contentType, i18n.resolvedLanguage, isFeatured, slug]);

  return {data, isError, isLoading};
};

export default useGetEntries;
