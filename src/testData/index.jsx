export const dict = [{ label: 'Исполнение пункта графика' },
{ label: 'Распределение изменения суммы' },
{ label: 'Пересчет суммы вознаграждения' },
{ label: 'Предоставление кредита' },
{ label: 'Расчет графика кредита с равномерным распределением ОД' },
{ label: 'Начисление вознаграждения' },
{ label: 'Расчет суммы комиссии и суммы выдачи кредита' },
{ label: 'Выполнение расчета по запросу' },
{ label: 'Подготовка сумм требований к выставлению' },
];
export const dict2 = [{ label: 'Сотка', value: '100' }, { label: 'Пятихатка', value: '500' }, { label: 'Косарь', value: '1000' }];

export const tableList = [
  { date: '22.04.2021', ip: '68.245.669.42', port: '8080', state: 'Активно', name: 'Расчет графика кредита с равномерным распределением ОД 1', code: 'EqualLoanSchedulePlanning 1', prim: 'Первоначальное планирование кредита', trfpln: 'Тарифный план “Премиум”', datefrom: '12.07.2021 17:22:00' },
  { date: '22.04.2021', ip: '68.245.669.42', port: '8080', state: 'Не активно', name: 'Расчет графика кредита с равномерным распределением ОД 2', code: 'EqualLoanSchedulePlanning 2', prim: 'Первоначальное планирование кредита', trfpln: 'Тарифный план “Премиум”', datefrom: '12.07.2021 17:22:00' }
];

export const tableHeader = [{ date: "Дата", ip: "IP", port: "Порт", state: "Статус" }];

export const tableList2 = [
  { id: 11, date: 'Равномерное распределение ОД', code: 'MS LOAN E003', datefrom: '03.04.2023', dateto: '22.04.2023', loaner: 'Петров Иван Иванович 20...', amount: '250 000,00'},
  { id: 12, date: 'Равномерное распределение ОД', code: 'MS LOAN E003', datefrom: '03.04.2023', dateto: '22.04.2023', loaner: 'Петров Иван Иванович 20...', amount: '250 000,00'},
  { id: 13, date: 'Равномерное распределение ОД', code: 'MS LOAN E003', datefrom: '03.04.2023', dateto: '22.04.2023', loaner: 'Петров Иван Иванович 20...', amount: '250 000,00'},
  { id: 14, date: 'Равномерное распределение ОД', code: 'MS LOAN E003', datefrom: '03.04.2023', dateto: '22.04.2023', loaner: 'Петров Иван Иванович 20...', amount: '250 000,00'},
  { id: 15, date: 'Равномерное распределение ОД', code: 'MS LOAN E003', datefrom: '03.04.2023', dateto: '22.04.2023', loaner: 'Петров Иван Иванович 20...', amount: '250 000,00'},
  { id: 16, date: 'Равномерное распределение ОД', code: 'MS LOAN E003', datefrom: '03.04.2023', dateto: '22.04.2023', loaner: 'Петров Иван Иванович 20...', amount: '250 000,00'},
  { id: 17, date: 'Равномерное распределение ОД', code: 'MS LOAN E003', datefrom: '03.04.2023', dateto: '22.04.2023', loaner: 'Петров Иван Иванович 20...', amount: '250 000,00'},
  { id: 18, date: 'Равномерное распределение ОД', code: 'MS LOAN E003', datefrom: '03.04.2023', dateto: '22.04.2023', loaner: 'Петров Иван Иванович 20...', amount: '250 000,00'},
  { id: 19, date: 'Равномерное распределение ОД', code: 'MS LOAN E003', datefrom: '03.04.2023', dateto: '22.04.2023', loaner: 'Петров Иван Иванович 20...', amount: '250 000,00'},
  { id: 20, date: 'Равномерное распределение ОД', code: 'MS LOAN E003', datefrom: '03.04.2023', dateto: '22.04.2023', loaner: 'Петров Иван Иванович 20...', amount: '250 000,00'}, 
];

export const tableHeader2 = [{ date: "Дата", code: "Номер", datefrom: "Дата начала", dateto: "Дата завершения", loaner: 'Заемщик', amount: 'Сумма' }];



export const treeData = [
  {
    key: "0",
    label: "Кредиты",
    children: [
      {
        key: "0-0",
        label: "Кредиты 1-1",
        children: [
          {
            key: "0-1-1",
            label: "Кредиты 0-1-1",
            href: "/credits_list"
          },
          {
            key: "0-1-2",
            label: "Кредиты 0-1-2",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Согласование договоров",
    children: [
      {
        key: "1-0",
        label: "Отдел юридических вопросов",
        children: [
          {
            key: "1-0-0",
            label: "Реестр договоров",
          },
          {
            key: "1-0-1",
            label: "Реестр приложений",
            bookmark: true,
          },
          {
            key: "1-0-2",
            label: "Отчеты",
            bookmark: true,
          },
          {
            key: "1-0-3",
            label: "Выписки",
          },
        ]
      },
      {
        key: "1-1",
        label: "Отдел сопровождения сделок",
        children: []
      },
      {
        key: "1-2",
        label: "Отдел безопасности",
        children: []
      },
    ],
  },
  {
    key: "2",
    label: "Карточные продукты",
    children: [],
  },
];

export default { dict, dict2, tableList, tableHeader, treeData, tableList2, tableHeader2 };