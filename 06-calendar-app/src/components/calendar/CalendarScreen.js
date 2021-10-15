import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { NavBar } from '../ui/NavBar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';

import moment from 'moment';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { modalOpen } from '../../actions/ui';
import {
  startDeleteEvent,
  selectEvent,
  startGetEvents,
} from '../../actions/events';
import { FabButton } from '../ui/FabButton';

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem('lastView') || 'month'
  );

  const { events, eventSelected } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetEvents());
  }, [events]);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      // event style
      backgroundColor: '#007bffb3',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
      color: 'white',
    };

    return { style };
  };

  const onDoubleClick = () => {
    dispatch(modalOpen());
  };

  const onSelectEvent = (event) => {
    dispatch(selectEvent(event));
  };

  const onView = (view) => {
    setLastView(view);
    localStorage.setItem('lastView', view);
  };

  const onAddClickHandler = () => {
    dispatch(selectEvent(null));
    dispatch(modalOpen());
  };

  const onDeleteClickHandler = () => {
    dispatch(startDeleteEvent(eventSelected.id));
  };

  const onSelectSlot = () => {
    dispatch(selectEvent(null));
  };

  return (
    <div className="calendar">
      <NavBar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="calendar-content"
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onSelectSlot={onSelectSlot}
        onView={onView}
        view={lastView}
        selectable={true}
        components={{
          event: CalendarEvent,
        }}
      />
      {eventSelected && (
        <FabButton
          onClickHandler={onDeleteClickHandler}
          classStyle="delete-button"
          icon="fa-trash-alt"
        />
      )}
      <FabButton
        onClickHandler={onAddClickHandler}
        classStyle="add-button"
        icon="fa-plus"
      />
      <CalendarModal />
    </div>
  );
};
