import { all, fork } from 'redux-saga/effects';
import { todosSaga } from './todos/saga';

export default function* rootSaga() {
  yield all([
    fork(todosSaga),
    // Sau này có saga nào mới (userSaga, authSaga...) thì thêm vào đây
  ]);
}