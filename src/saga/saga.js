import { all, call } from "redux-saga/effects";
import DemoSaga from "./demo.saga";
function* rootSaga() {
  yield all([
    call(DemoSaga)
  ]);
}

export default rootSaga;
