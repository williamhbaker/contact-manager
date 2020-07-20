import React from 'react';
import ReactDOM from 'react-dom';

const modalNode = document.getElementById('modal');

const Modal = ({
  title,
  children,
  onCancelClick,
}) => (
  ReactDOM.createPortal(
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card" style={{maxWidth: '30rem'}}>
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={onCancelClick} />
        </header>
        <section className="modal-card-body">
          {children}
        </section>
      </div>
    </div>,
    modalNode
  )
);

export default Modal;