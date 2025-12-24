import { useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { ServiceCardsList } from './components/serviceCardsList';
import { SummaryBlock } from './components/summaryBlock';
import { SERVICES } from './consts/serviceData';

export type TChosenService = { name: string; price: number }[];

function App() {
  const [chosenSerivce, setChosenServices] = useState<TChosenService>([]);

  const handleAddService = (service: TChosenService) => {
    setChosenServices([...chosenSerivce, ...service]);
  };

  return (
    <>
      <Header></Header>
      <ServiceCardsList
        serviceData={SERVICES}
        onAddService={handleAddService}
      ></ServiceCardsList>
      <SummaryBlock chosenSerivce={chosenSerivce}></SummaryBlock>
    </>
  );
}

export default App;
