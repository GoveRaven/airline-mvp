import type { TChosenService } from '../App';
import type { TServiceData } from '../consts/serviceData';
import { ServiceCard } from './serviceCard';

type TServiceCardsList = {
  serviceData: TServiceData;
  onAddService: (service: TChosenService) => void;
};

export function ServiceCardsList({
  serviceData,
  onAddService,
}: TServiceCardsList) {
  return (
    <>
      <div className='service-cards-list'>
        <h3 className='service-cards-list__title'>Доступные услуги</h3>
        {serviceData.map((service) => (
          <ServiceCard
            name={service.name}
            description={service.description}
            price={service.price}
            key={service.id}
            onAddService={onAddService}
          ></ServiceCard>
        ))}
      </div>
    </>
  );
}
