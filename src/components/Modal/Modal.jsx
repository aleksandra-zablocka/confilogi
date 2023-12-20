// import React from 'react';
// import css from './Modal.module.scss';
// import { PopUp1 } from 'components/PopUp1/PopUp1';

// export const Modal = ({ isOpen, onClose }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className={css.modal__overlay} onClick={onClose}>
//       <div className={css.modal__content} onClick={e => e.stopPropagation()}>
//         <PopUp1 />

//         <button className={css.modal__contentButton} onClick={onClose} />
//       </div>
//     </div>
//   );
// };

// import React, { useState, useEffect } from 'react';
// import css from './Modal.module.scss';
// import { PopUp1 } from 'components/PopUp1/PopUp1';

// export const Modal = ({ isOpen, onClose }) => {
//   const [shouldOpen, setShouldOpen] = useState(false);

//   useEffect(() => {
//     let timeoutId;

//     timeoutId = setTimeout(() => {
//       setShouldOpen(true);
//     }, 5000);

//     return () => clearTimeout(timeoutId);
//   }, []);

//   if (!isOpen && shouldOpen) {
//     return (
//       <div className={css.modal__overlay} onClick={onClose}>
//         <div className={css.modal__content} onClick={e => e.stopPropagation()}>
//           <PopUp1 />
//           <button className={css.modal__contentButton} onClick={onClose} />
//         </div>
//       </div>
//     );
//   }

//   return null;
// };

import React, { useEffect } from 'react';
import css from './Modal.module.scss';
import { PopUp1 } from 'components/PopUp1/PopUp1';

export const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleOverlayClick = e => {
      if (isOpen && e.target.classList.contains(css.modal__overlay)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [isOpen, onClose]);

  return isOpen ? (
    <div className={css.modal__overlay}>
      <div className={css.modal__content} onClick={e => e.stopPropagation()}>
        <PopUp1 />
        <button className={css.modal__contentButton} onClick={onClose} />
      </div>
    </div>
  ) : null;
};
