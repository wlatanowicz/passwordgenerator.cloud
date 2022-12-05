import "./PasswordList.css";

import { allPasswords } from "../redux/selectors/passwords";
import { copyTextToClipboard } from "../utils/clipboard";
import { useSelector } from "react-redux";
import { useState } from "react";

const PasswordItem = ({ password }) => {
  const [copied, setCopied] = useState(false);
  const passwordClicked = () => {
    setCopied(true);
    copyTextToClipboard(password);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <p
      className="password_item"
      onClick={() => passwordClicked()}
      title="Click to copy to clipboard"
    >
      {password} {copied && <span className="copied">copied</span>}
    </p>
  );
};

const PasswordList = (props) => {
  const passwords = useSelector(allPasswords);
  if (passwords.length === 0) {
    return null;
  }
  return (
    <fieldset>
      <legend>Your random password{passwords.length > 1 ? "s" : ""}</legend>
      {passwords.map((password) => {
        return <PasswordItem password={password} key={password} />;
      })}
    </fieldset>
  );
};

export default PasswordList;
