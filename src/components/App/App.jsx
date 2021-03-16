import React from 'react';
import { ItineraryCardList } from '../ItineraryCardList'
import { QueryClient, QueryClientProvider } from 'react-query'
import Header from '../Header';
import STYLES from './App.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const queryClient = new QueryClient();

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <QueryClientProvider client={queryClient}>
        <ItineraryCardList />
      </QueryClientProvider>
      {/* TODO: Add a component to display results here */}
    </main>
  </div>
);

export default App;
