import { call, put, all, takeLatest } from 'redux-saga/effects';
import {toast} from 'react-toastify';
import * as actions from './action';
import * as types from '../types';

// eslint-disable-next-line no-unused-vars
const requisicao = () => new Promise((resolve, reject) =>{
  setTimeout(() => {
    reject();
  }, 2000);
});

function* exampleRequest() {
  try{
    yield call(requisicao);
    yield put(actions.ClickButtonSuccess());
  }catch{
    toast.error('Deu erro');
    yield put(actions.ClickButtonFailure());
  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest),
])
