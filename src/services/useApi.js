import { useEffect, useState } from "react";

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchApi = () => {
    fetch(url, {
        headers: {
            "x-apisports-key": "9d9d0f29039d2f857ac61de0bdc4ab3e", // 7b8d6498aa4ac5cf539c81e0bd35af7c
        },
    })

    .then(response => {
      return response.json();
    })
    .then(json => {
      setLoading(false);
      setData(json);
      console.log(json);
    })
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data }
};

export default useApi;