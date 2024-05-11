import { SnackbarProvider } from 'notistack';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <div className="app">
      <SnackbarProvider
        maxSnack={1}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
      >
        <AppRouter />
      </SnackbarProvider>
    </div>
  );
};

export default App;
