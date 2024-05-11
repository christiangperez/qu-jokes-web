import Modal from 'react-modal';
import './styles.scss';

interface Props {
  cancelButtonDescription?: string;
  acceptButtonDescription?: string;
  modalIsOpen: boolean;
  closeModal: () => void;
  acceptModal: () => void;
}

export const DeleteModal = ({
  cancelButtonDescription = 'Cancel',
  acceptButtonDescription = 'Ok',
  modalIsOpen,
  closeModal,
  acceptModal
}: Props) => {
  Modal.setAppElement('#root');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#1c202b'
    },
    overlay: {
      backgroundColor: 'rgba(60, 60, 60, 0.75)'
    }
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="" style={customStyles}>
      <div className="delete-modal">
        <h2>Delete Joke</h2>
        <span>Are you sure you want to delete this joke?</span>
        <div className="action-buttons">
          <button onClick={closeModal}>{cancelButtonDescription}</button>
          <button onClick={acceptModal}>{acceptButtonDescription}</button>
        </div>
      </div>
    </Modal>
  );
};
