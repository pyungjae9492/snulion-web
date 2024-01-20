import { NextRouter } from 'next/router';
import ReactGA from 'react-ga4';

export const logPageview = (router: NextRouter) => {
  console.log('router.pathname', router.pathname);
  ReactGA.send({
    hitType: 'pageview',
    page: router.pathname,
  });
};

interface IEventTrigger {
  action: string;
  category: string;
  label: string;
  value?: number;
}
export const logEvent = ({ action, category, label, value }: IEventTrigger) => {
  ReactGA.event({
    action: action,
    category: category,
    label: label,
    value: value,
  });
};
