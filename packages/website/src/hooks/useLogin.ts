import axios from "axios";
import { profile } from "#api";
import { useEffect, useState } from "react";

export const useLogin = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isLogin, setLogin] = useState<boolean>();
  const [queryResult, setQueryResult] = useState<any>();

  useEffect(() => {
    axios
      .get(profile, { withCredentials: true })
      .then((res) => {
        setLogin(true);
        setQueryResult(res.data as unknown);
      })
      .catch(() => {
        setLogin(false);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, isLogin, queryResult };
};
