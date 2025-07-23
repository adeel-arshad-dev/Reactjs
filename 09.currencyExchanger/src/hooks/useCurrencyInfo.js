
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
let setLoading= function(){}
    useEffect(() => {
    setLoading(true);
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.rates) {
          setData(res.rates);
        } else {
          setData({});
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setData({});
        setLoading(false);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
