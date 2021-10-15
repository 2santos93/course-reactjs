import moment from 'moment';

const startDate = moment().minutes(0).seconds(0);

export const initValue = {
  formData: {
    start: startDate.toDate(),
    end: startDate.clone().add(1, 'hour').toDate(),
    title: '',
    notes: '',
    user: null,
  },
  error: '',
};

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
