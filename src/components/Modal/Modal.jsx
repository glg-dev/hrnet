import React from 'react';
import styles from './Modal.module.scss'

const Modal = ({showModal, hideModal, title, content}) => {
  return showModal ? (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.close} onClick={hideModal}>x</div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.content}>{content}</p>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;