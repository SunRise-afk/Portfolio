import {
  SET_POPUP_VISIBILITY,
  SET_TG_MODAL_ViSIBILITY,
} from "./actionCreatorsTypes";
const initialState = {
  popUpVisibility: false,
  isTelegramModalVisible: false,
};
export const setPopUpVisibilityAC = () => {
  return {
    type: SET_POPUP_VISIBILITY,
  };
};
export const setTGModalVisibilityAC = () => {
  return {
    type: SET_TG_MODAL_ViSIBILITY,
  };
};

export const appStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPUP_VISIBILITY: {
      return {
        ...state,
        popUpVisibility: !state.popUpVisibility,
      };
    }
    case SET_TG_MODAL_ViSIBILITY: {
      return {
        ...state,
        isTelegramModalVisible: !state.isTelegramModalVisible,
      };
    }
    default:
      return state;
  }
};
