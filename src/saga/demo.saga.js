import { delay, put, takeLatest, takeLeading } from "redux-saga/effects";
import { DemoActions } from "./demo.slice";

function* DemoSaga() {
    yield takeLeading(DemoActions.demoTakeLeading, demoTakeLeading);
    yield takeLatest(DemoActions.demoTakeLatest, demoTakeLatest);
}

function* demoTakeLatest({ payload }) {
    const { onSuccess, action } = payload;
    yield put(DemoActions.setIsCall(true));
    yield delay(1000);
    onSuccess(`Saga Call::${action}`);
    yield put(DemoActions.setIsCall(false));
}

function* demoTakeLeading({ payload }) {
    const { onSuccess, action } = payload;
    yield put(DemoActions.setIsCall(true));
    yield delay(1000);
    onSuccess(`Saga Call::${action}`);
    yield put(DemoActions.setIsCall(false));
}

export default DemoSaga;
