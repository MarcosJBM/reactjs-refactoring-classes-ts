import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
