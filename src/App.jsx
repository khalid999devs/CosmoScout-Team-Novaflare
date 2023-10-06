import { createContext, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

const ThemeContext = createContext('');

function App() {
  const [user, setUser] = useState({
    name: 'Ana Rose',
    itinerary: {
      location: {
        title: 'Location',
        items: ['Carolis Basin Venus', '-', '-', '-', '-', '-', '-'],
      },
      hotel: {
        title: 'Hotel',
        items: [],
      },
      entertaiment: {
        title: 'Entertainment',
        items: [],
      },
      transport: { title: 'Transport', items: [] },
    },
  });

  return (
    <ThemeContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      <main className='h-auto w-full'>
        <Outlet />
      </main>
    </ThemeContext.Provider>
  );
}

export const contextConsumer = () => {
  return useContext(ThemeContext);
};

export default App;
