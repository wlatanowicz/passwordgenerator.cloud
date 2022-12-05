import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { allPasswords } from "../redux/selectors/passwords";
import { generatorConfig } from "../redux/selectors/generatorConfig";
import { updateGeneratorConfig } from "../redux/actions/generatorConfig";

const ConfigEditor = (props) => {
  const dispatch = useDispatch();
  const currentConfig = useSelector(generatorConfig);
  const passwords = useSelector(allPasswords);

  const minLength = 8;
  const maxLength = 64;
  const lengths = [...Array(maxLength + 1 - minLength).keys()].map(
    (k) => k + minLength
  );

  const counts = [1, 4, 16, 32];

  return (
    <fieldset>
      <legend>Configuration</legend>
      <p>
        <label htmlFor="count">Number of passwords</label>&nbsp;
        <select
          id="count"
          value={currentConfig.count}
          onChange={(e) =>
            dispatch(updateGeneratorConfig("count", e.target.value))
          }
        >
          {counts.map((count) => {
            return (
              <option value={count} key={count}>
                {count}
              </option>
            );
          })}
        </select>
      </p>
      <p>
        <label htmlFor="length">Number of characters</label>&nbsp;
        <select
          id="length"
          value={currentConfig.length}
          onChange={(e) =>
            dispatch(updateGeneratorConfig("length", e.target.value))
          }
        >
          {lengths.map((numberOfChars) => {
            return (
              <option value={numberOfChars} key={numberOfChars}>
                {numberOfChars}
              </option>
            );
          })}
        </select>
      </p>
      <p>
        <label htmlFor="useLowerCaseLetters">
          Use lower-case letters (a-z)
        </label>
        &nbsp;
        <input
          id="useLowerCaseLetters"
          type="checkbox"
          checked={currentConfig.useLowerCaseLetters}
          onChange={(e) =>
            dispatch(
              updateGeneratorConfig("useLowerCaseLetters", e.target.checked)
            )
          }
        />
      </p>
      <p>
        <label htmlFor="useUpperCaseLetters">
          Use upper-case letters (A-Z)
        </label>
        &nbsp;
        <input
          id="useUpperCaseLetters"
          type="checkbox"
          checked={currentConfig.useUpperCaseLetters}
          onChange={(e) =>
            dispatch(
              updateGeneratorConfig("useUpperCaseLetters", e.target.checked)
            )
          }
        />
      </p>
      <p>
        <label htmlFor="useDigits">Use digits (0-9)</label>&nbsp;
        <input
          id="useDigits"
          type="checkbox"
          checked={currentConfig.useDigits}
          onChange={(e) =>
            dispatch(updateGeneratorConfig("useDigits", e.target.checked))
          }
        />
      </p>
      <p>
        <label htmlFor="useSpecials">
          Use special chars (!@#$%^*-+:;/\?,.)
        </label>
        &nbsp;
        <input
          id="useSpecials"
          type="checkbox"
          checked={currentConfig.useSpecials}
          onChange={(e) =>
            dispatch(updateGeneratorConfig("useSpecials", e.target.checked))
          }
        />
      </p>
      <p>
        <button
          onClick={(e) =>
            dispatch(updateGeneratorConfig("generate-clicked", true))
          }
        >
          {passwords.length > 0 ? "Regenerate!" : "Generate!"}
        </button>
      </p>
    </fieldset>
  );
};

export default ConfigEditor;
