import { SHOW_LOADER, HIDE_LOADER } from "./loader.actionTypes";

const initialState = {
  isLoading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
