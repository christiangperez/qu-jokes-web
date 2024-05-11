import { MdEmail } from 'react-icons/md';
import { PageTitle } from '../../components/PageTitle';
import christianImage from '../../assets/images/christian.jpeg';
import './styles.scss';

const AboutScreen = () => {
  return (
    <div className="about">
      <PageTitle title="About" subtitle="Qu Challenge" />
      <main className="content">
        <div className="christian-image">
          <img src={christianImage} alt="christian" />
        </div>
        <div className="description">
          <p>
            This Challenge Project was created by Christian Perez in order to solve a challenge for the company Qu
            Beyond.
          </p>
          <p>Technologies used: React JS,Typescript, SASS, React Router.</p>
        </div>
      </main>

      <footer className="feedback">
        <p>Please send me your feedback here:</p>
        <a href="mailto:christiangperez@gmail.com" target="_blank" rel="noreferrer">
          <MdEmail />
          <div>christiangperez@gmail.com</div>
        </a>
      </footer>
    </div>
  );
};

export default AboutScreen;
