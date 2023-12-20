import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/variables.css'
import './styles/reset.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App';
import Table2 from './components/ui/Table2'

import { DataContext } from './context';
import TaskWizard from './components/Forms/TaskWizard'
import WorkArea from './components/ui/WorkArea'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

  },
  {
    path: '/credits_list',
    element: <App title='Список' pathLabels={['Договор или продукт', 'Кредит']}><Table2 /></App>
  },
  {
    path: '/credits_list/wizard',
    element: <App pathLabels={['Договор или продукт', 'Кредит']} title='Продукт: Равномерное распределение ОД'> <TaskWizard /></App>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContext>
      <RouterProvider router={router} />
    </DataContext>
  </React.StrictMode>,
)
