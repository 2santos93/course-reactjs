import { initialState } from '../const/calendar';
import { types } from '../types/types';

export const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eventAdd:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case types.eventUpdate:
      return {
        ...state,
        events: state.events.map((event) => {
          if (event.id !== action.payload.id) return event;
          return action.payload;
        }),
      };

    case types.eventDelete:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
        eventSelected: null,
      };

    case types.eventSelect:
      return {
        ...state,
        eventSelected: action.payload,
      };

    case types.eventGet:
      return {
        ...state,
        events: action.payload,
      };

    default:
      return state;
  }
};
