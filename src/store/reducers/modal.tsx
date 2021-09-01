import { SHOW_MODAL, HIDE_MODAL } from "../actions/types";
import { ModalAction } from "../actions/modal";

const INITAIL_STATE = {
  isOpen: false,
};

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
