import { useState } from 'react';
import Start from './Start.jsx';


import GirlStart from './GirlStart.jsx';

export default function App() {
  const [opened, setOpened] = useState(false);
  return opened ? (
    <GirlStart />
  ) : (
    <Start onOpen={() => setOpened(true)} />
  );
}