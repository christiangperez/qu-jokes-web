import './styles.scss';

interface Props {
  title: string;
  subtitle: string;
}

export const PageTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="page-title">
      <h2>{title}</h2>
      <h1>{subtitle}</h1>
    </div>
  );
};
