import {
  ALERT_SHOW,
  ALERT_HIDE
} from '../constants/alert';

export const alertShow = (message) =>({
  type: ALERT_SHOW,
  message: message,
  show: true
});

export const alertHide = () =>({
  type: ALERT_HIDE,
  message: '',
  show: false
});