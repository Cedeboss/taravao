import React, { ComponentType, Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminLayout from './components/layouts/admin/AdminLayout';
import PublicLayout from './components/layouts/public/PublicLayout';
import HomeAdmin from './pages/admin/dashboard/HomeAdmin';
import LoginPage from './pages/public/auth/Login';
import RegisterPage from './pages/public/auth/Register';
import UserListPage from './pages/admin/users/UserList';
import TodoListPage from './pages/admin/todos/TodoList';
import HomePage from './pages/public/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import 'remixicon/fonts/remixicon.css'
import Messages from './pages/admin/Messages/Messages';
import Service from './pages/public/Service';
import Achievement from './pages/public/Achievement';
import Auth from './pages/admin/auth/Auth';
import NotFound from './pages/public/NotFound';

const Studio = React.lazy(() => 
delayForDemo
(import("./pages/public/Studio")))
const Contact = React.lazy(() => import("./pages/public/Contact"))



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AdminLayout />}>
            <Route
              path='/admin'
              element={
                // <RequireAuth>
                <HomeAdmin />
                // {/* </RequireAuth> */}
              }
            />
            <Route
              path='/messages'
              element={
                // <RequireAuth>
                <Messages />
                // {/* </RequireAuth> */}
              }
            />
            <Route
              path='/utilisateurs'
              element={
                // <RequireAuth>
                <UserListPage />
                // {/* </RequireAuth> */}
              }
            />
            <Route
              path='/taches'
              element={
                // <RequireAuth>
                <TodoListPage />
                // {/* </RequireAuth> */}
              }
            />
          </Route>
          <Route path='/admin-connexion' element={<Auth />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/studio' element={<Studio />} />
            <Route path='/nos-prestations' element={<Service />} />
            <Route path='/nos-realisations' element={<Achievement />} />
            <Route path='/connexion' element={<LoginPage />} />
            <Route path='/enregistrement' element={<RegisterPage />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
reportWebVitals();


async function delayForDemo (promise: Promise<{ default: ComponentType<string>; }>): Promise<{ default: ComponentType<string | any>; }> {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  }).then(() => promise);
}

