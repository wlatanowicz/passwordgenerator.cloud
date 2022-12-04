import { allPasswords } from "../redux/selectors/passwords";
import { useSelector } from "react-redux";

const PasswordList = (props) => {
  const passwords = useSelector(allPasswords);
  return (
    <div>
      {passwords.map((password) => {
        return <p>{password}</p>;
      })}
    </div>
  );
};

export default PasswordList;
