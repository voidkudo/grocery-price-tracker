import { useLocation } from "react-router-dom";

const useParam = (key = 'value') => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const value = params.get(key) ?? undefined;

  return value;
};

export default useParam;