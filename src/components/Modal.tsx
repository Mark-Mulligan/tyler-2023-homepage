// React
import { type FC } from 'react';

// Styles
import styles from './Modal.module.css';

interface IProps {
  handleClose: () => void;
}

const Modal: FC<IProps> = ({ handleClose }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modal}>
        <div className={styles.closeModal} onClick={handleClose}>
          <span>X</span>
        </div>
        <h2>Character List</h2>
        <ul className={styles.characterList}>
          <li>Mario - Mark</li>
          <li>Luigi - Tyler</li>
          <li>Peach - Kahlan </li>
          <li> Toad - Marco</li>
          <li>Toadette - Rachel</li>
          <li> Bowser - Faris</li>
          <li>Birdo - Dani</li>
          <li>Yoshi - Chance</li>
          <li>Dry Bones - William</li>
          <li>Koopa - Travis</li>
          <li>Dixie Kong - Stefanee</li>
          <li>Daisy - Chelsea</li>
          <li>Shy Guy - Geoffrey</li>
          <li>Rosalina - Macklemore</li>
          <li>Donkey Kong - Marklemore</li>
          <li>Wario - Mike </li>
          <li>Waluigi - Casey</li>
          <li>Pauline - Ronnie</li>
          <li>Piranha Plant - Conner</li>
          <li>King Boo - Kelsey</li>
          <li>TBD - Tayler BreAnn</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
