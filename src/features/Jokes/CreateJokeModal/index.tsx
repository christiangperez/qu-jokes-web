import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { IJoke } from '../../../interfaces';
import './styles.scss';

interface Props {
  title?: string;
  cancelButtonDescription?: string;
  acceptButtonDescription?: string;
  modalIsOpen: boolean;
  closeModal: () => void;
  acceptModal: (joke: IJoke) => void;
}

export const CreateJokeModal = ({ title = '', modalIsOpen, closeModal, acceptModal }: Props) => {
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

  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (setup && punchline && type) {
      acceptModal({ setup, punchline, type, id: 0 });
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      setSetup('');
      setPunchline('');
      setType('');
    }
  }, [modalIsOpen]);

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="" style={customStyles}>
      <div className="create-joke-modal">
        <h2>{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="field-container">
            <label>
              Setup:
              <input type="text" value={setup} onChange={(e) => setSetup(e.target.value)} required />
            </label>
          </div>
          <div className="field-container">
            <label>
              Punchline:
              <input type="text" value={punchline} onChange={(e) => setPunchline(e.target.value)} required />
            </label>
          </div>
          <div className="field-container">
            <label>
              Type:
              <select value={type} onChange={(e) => setType(e.target.value)} required>
                <option value="">Select a Type</option>
                <option value="General">General</option>
                <option value="Programming">Programming</option>
                <option value="Knock-knock">Knock-knock</option>
                <option value="Dad">Dad</option>
              </select>
            </label>
          </div>
          <div className="action-buttons">
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
