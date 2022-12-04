import { all, call, spawn } from "redux-saga/effects";

import { passwordGeneratorSaga } from "./PasswordGeneratorSaga";

export function* rootSaga() {
  const sagas = [passwordGeneratorSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
