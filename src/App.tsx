import * as React from 'react';

/** Components */
import AppRouter from './navigation/routes';

/** Ant design stylesheet */
import 'antd/dist/antd.css';

const App: React.FC = () => {
  return <AppRouter />;
};

export default App;