import { addPassword, removeAllPasswords } from "../redux/actions/passwords";
import { call, put, select, takeEvery } from "redux-saga/effects";

import { UPDATE_GENERATOR_CONFIG } from "../redux/actionTypes";
import { generateRandomPassword } from "../algorithm/generator";
import { generatorConfig } from "../redux/selectors/generatorConfig";

function* generateAllPasswords(action) {
  const config = yield select(generatorConfig);
  yield put(removeAllPasswords());
  for (let i = 0; i < config.count; i++) {
    yield call(generateOnePassword);
  }
}

function* generateOnePassword() {
  const config = yield select(generatorConfig);

  let alphabet = "";

  if (config.useLowerCaseLetters) {
    alphabet += "abcdefghijklnopqrstuvwxyz";
  }
  if (config.useUpperCaseLetters) {
    alphabet += "ABCDEFGHIJKLNOPQRSTUVWXYZ";
  }
  if (config.useDigits) {
    alphabet += "0123456789";
  }
  if (config.useSpecials) {
    alphabet += "!@#$%^*-+:;/\\?,.";
  }

  if (alphabet.length === 0) {
    return;
  }

  const password = generateRandomPassword(alphabet, config.length);
  yield put(addPassword(password));
}

export function* passwordGeneratorSaga() {
  yield takeEvery(UPDATE_GENERATOR_CONFIG, generateAllPasswords);
}
