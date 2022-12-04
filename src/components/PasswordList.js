import { allPasswords } from "../redux/selectors/passwords";
import { useSelector } from "react-redux";

const PasswordList = (props) => {
  const passwords = useSelector(allPasswords);
  if (passwords.length === 0){
    return null;
  }
  return (
    <fieldset>
        <legend>Your random password{ passwords.length > 1 ? "s" : ""}</legend>
      {passwords.map((password) => {
        return <p>{password}</p>;
      })}
    </fieldset>
  );
};

export default PasswordList;
