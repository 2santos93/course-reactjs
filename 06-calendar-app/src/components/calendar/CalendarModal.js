import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';

import './Calendar.css';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { modalClose } from '../../actions/ui';
import { startAddEvent, startUpdateEvent } from '../../actions/events';
import { customStyles, initValue } from '../../const/modal';

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const dispatch = useDispatch();
  const {
    ui: { modalOpen },
    calendar,
  } = useSelector((state) => state);

  const titleModal = !calendar.eventSelected ? 'New Event' : 'Edit Event';

  const [state, setState] = useState(initValue);
  const { formData, error } = state;

  useEffect(() => {
    if (!calendar.eventSelected) return setState(initValue);
    setState({
      ...state,
      formData: calendar.eventSelected,
    });
  }, [calendar.eventSelected, setState]);

  const closeModal = () => {
    dispatch(modalClose());
  };

  const onStartDateChange = (date) => {
    setState({
      ...state,
      formData: {
        ...formData,
        start: date,
      },
    });
  };

  const onFinishDateChange = (date) => {
    setState({
      ...state,
      formData: {
        ...formData,
        end: date,
      },
    });
  };

  const onChangeInputHandler = ({ target }) => {
    setState({
      ...state,
      formData: {
        ...formData,
        [target.name]: target.value,
      },
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (moment(formData.end).isSameOrBefore(moment(formData.start))) {
      return setState({
        ...state,
        error: 'The Finish date cannot be less or equal than Start date',
      });
    }

    if (formData.title.trim().length < 2) {
      return setState({
        ...state,
        error: 'The tittle cannot be less than 2 characteres',
      });
    }

    if (calendar.eventSelected) {
      dispatch(
        startUpdateEvent({
          ...formData,
          id: calendar.eventSelected.id,
        })
      );
    } else {
      dispatch(
        startAddEvent({
          ...formData,
        })
      );
    }

    // setState({
    //   ...state,
    //   formData: initValue,
    // });

    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
      >
        <h1> {titleModal} </h1>
        <hr />
        <form className="container" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label>Start date</label>
            <DateTimePicker
              onChange={onStartDateChange}
              value={formData.start}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>End date</label>
            <DateTimePicker
              onChange={onFinishDateChange}
              value={formData.end}
              className="form-control"
              minDate={formData.startDate}
            />
          </div>

          <hr />
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Event Title"
              name="title"
              autoComplete="off"
              onChange={onChangeInputHandler}
              value={formData.title}
            />
            <small id="emailHelp" className="form-text text-muted">
              Short description
            </small>
          </div>

          <div className="form-group">
            <label>Notes</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Notes"
              rows="5"
              name="notes"
              onChange={onChangeInputHandler}
              value={formData.notes}
            />
            <small id="emailHelp" className="form-text text-muted">
              Additional Information
            </small>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save" />
            <span> Save</span>
          </button>
        </form>
      </Modal>
    </div>
  );
};
