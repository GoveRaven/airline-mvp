import type { TChosenService } from '../App';

type TServiceCardProps = {
  name: string;
  description: string;
  price: number;
  onAddService: (service: TChosenService) => void;
};

export function ServiceCard({
  name,
  description,
  price,
  onAddService,
}: TServiceCardProps) {
  const handleClick = () => {
    const data = [{ name, price }];
    onAddService(data);
  };

  return (
    <>
      <div className='service-card'>
        <h3 className='service-card__name'>{name}</h3>
        <p className='service-card__description'>{description}</p>
        <p className='service-card__price'>{price}</p>
        <button className='service-card__btn-add' onClick={() => handleClick()}>
          Добавить
        </button>
      </div>
    </>
  );
}
