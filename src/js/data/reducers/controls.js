import ACTIONS from '../actions';



export const defaultConnectionState = {
  landingGear: 0,
  flaps: 0
};


export default (state=defaultConnectionState, action) => {

  switch (action.type)
  {

    case ACTIONS.RECEIVE_DATA: {
      const { control: {landing_gear, flaps} } = action.payload;

      return {
        ...state,
        landingGear: landing_gear,
        flaps: flaps
      };
    }

    default:
      return state;

  }

};
