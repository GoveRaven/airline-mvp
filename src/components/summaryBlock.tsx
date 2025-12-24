import type { TChosenService } from '../App';

type TSummaryBlock = {
  chosenSerivce: TChosenService;
};

export function SummaryBlock({ chosenSerivce }: TSummaryBlock) {
  const serviceNumber = chosenSerivce.length;
  const totalPrice = chosenSerivce.reduce((sum, curr) => sum + curr.price, 0);
  const isEmpty = serviceNumber === 0;

  return (
    <div className='summary-block'>
      <h3 className='.summary-block__title'>Итого</h3>
      <div className='summary-block__services'>
        {isEmpty ? (
          <p className='summary-block__services--empty'>Нет выбранных услуг</p>
        ) : (
          <>
            {chosenSerivce.map((service, index) => (
              <div className='summary-block__item' key={index}>
                <span className='summary-block__item-name'>{service.name}</span>
                <span className='summary-block__item-price'>
                  {service.price}
                </span>
              </div>
            ))}
            <div className='.summary-block__totals'>
              <div className='summary-block__row '>
                <span className='summary-block__label'>Количество услуг:</span>
                <span className='summary-block__value'>{serviceNumber}</span>
              </div>
            </div>
            <div className='summary-block__final'>
              <span className='summary-block__final-label'>
                Итоговая сумма:
              </span>
              <span className='summary-block__final-amount'>{totalPrice}</span>
            </div>
          </>
        )}
      </div>
      <button className='summary-block__btn' disabled={isEmpty}>
        Оформить заказ
      </button>
    </div>
  );
}
