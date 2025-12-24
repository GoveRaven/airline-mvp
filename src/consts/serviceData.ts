export type TServiceData = {
  id: number;
  name: string;
  description: string;
  price: number;
}[];

export const SERVICES: TServiceData = [
  {
    id: 1,
    name: 'Дополнительный багаж',
    description: 'Увеличьте норму багажа на 20 кг',
    price: 1500,
  },
  {
    id: 2,
    name: 'Выбор места',
    description: 'Забронируйте место возле окна или в проходе',
    price: 890,
  },
  {
    id: 3,
    name: 'Приоритетная посадка',
    description: 'Первым пройдите на борт самолёта',
    price: 1200,
  },
  {
    id: 4,
    name: 'Страховка путешествия',
    description: 'Защита от отмены и задержек рейса',
    price: 2500,
  },
  {
    id: 5,
    name: 'VIP Лаунж доступ',
    description: 'Отдохните в комфортном аэропортовом лаунже',
    price: 3500,
  },
  {
    id: 6,
    name: 'Приоритетная доставка багажа',
    description: 'Получите свой багаж первым после прилёта',
    price: 750,
  },
  {
    id: 7,
    name: 'Питание на борту',
    description: 'Горячее питание и напитки в полёте',
    price: 1800,
  },
];
