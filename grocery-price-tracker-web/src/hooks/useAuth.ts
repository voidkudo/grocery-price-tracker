import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

const useAuth = () => {
  const user = useSelector((state: RootState) => state.user.value);

  if (user === undefined) {
    throw Error('Not Authorized.');
  }

  return user;
};

export default useAuth;