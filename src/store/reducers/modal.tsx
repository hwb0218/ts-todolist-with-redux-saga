import { SHOW_MODAL, HIDE_MODAL } from "../actions/types";
import { ModalAction } from "../actions/modal";

const INITAIL_STATE = {
  isOpen: false,
};

// modal reducer 함수
// action의 타입에 따른 상태 반환을 하기위한 reducer
const modalReducer = (state = INITAIL_STATE, action: ModalAction) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        isOpen: action.payload,
      };
    case HIDE_MODAL:
      return {
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
