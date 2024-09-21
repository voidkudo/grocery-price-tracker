import { useSelector } from "react-redux";
import { RootState } from "../stores/store";

const useAuth = () => {
  const user = useSelector((state: RootState) => state.user.value);

  if (user === undefined) {
    throw Error('Not Authorized.');
  }

  if (user.email === undefined) {
    throw Error('Failed to get email.');
  }

  return user;
};

export default useAuth;