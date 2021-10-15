import { request } from '../helpers/requets';
import { methods } from '../types/methods';
import { types } from '../types/types';

export const startAddEvent = (event) => {
  return async (dispatch) => {
    const response = await request(
      `${process.env.REACT_APP_API_URL}/events/`,
      methods.POST,
      event,
      true
    );
    dispatch(addEvent(response.event));
  };
};

export const addEvent = (event) => ({
  type: types.eventAdd,
  payload: event,
});

export const selectEvent = (event) => ({
  type: types.eventSelect,
  payload: event,
});

export const startUpdateEvent = (event) => {
  return async (dispatch) => {
    const response = await request(
      `${process.env.REACT_APP_API_URL}/events/${event.id}`,
      methods.PUT,
      event,
      true
    );

    dispatch(updateEvent(response.event));
  };
};

export const updateEvent = (event) => ({
  type: types.eventUpdate,
  payload: event,
});

export const startDeleteEvent = (id) => {
  return async (dispatch) => {
    await request(
      `${process.env.REACT_APP_API_URL}/events/${id}`,
      'DELETE',
      null,
      true
    );

    dispatch(deleteEvent(id));
  };
};

export const deleteEvent = (id) => ({
  type: types.eventDelete,
  payload: id,
});

export const startGetEvents = () => {
  return async (dispatch) => {
    const data = await request(
      `${process.env.REACT_APP_API_URL}/events`,
      methods.GET,
      null,
      true
    );

    dispatch(getEvents(data.events));
  };
};

const getEvents = (events) => ({
  type: types.eventGet,
  payload: events,
});
