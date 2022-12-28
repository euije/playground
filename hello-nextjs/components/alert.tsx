/*
    Suppose that you want to create an Alert component 
    which accepts type, which can be 'success' or 'error'.

    If it's 'success', you want the text color to be green.
    If it's 'error', you want the text color to be red.
*/

import styles from "../styles/alert.module.css";
import cn from 'classnames';

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  );
}
