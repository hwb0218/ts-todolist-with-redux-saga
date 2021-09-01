import { SHOW_MODAL, HIDE_MODAL } from "./types";

export const showModal = () => {
  return {
    type: SHOW_MODAL,
    payload: true,
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
    payload: false,
  };
};

export type ModalAction = ReturnType<typeof showModal> | ReturnType<typeof hideModal>;
