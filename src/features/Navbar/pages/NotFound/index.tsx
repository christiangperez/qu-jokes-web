import { PageTitle } from '../../../../components/PageTitle';
import './styles.scss';

export const NotFoundScreen = () => {
  return (
    <div className="not-found">
      <PageTitle title="Not Found" subtitle="You are in a wrong route" />
    </div>
  );
};
