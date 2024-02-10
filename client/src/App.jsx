import { Suspense, lazy } from 'react'
import './App.css'
import Main from "./pages/Main.jsx"
import { routes } from './routes/routes.js'
import SuspenseLoader from './components/common/SuspenseLoader.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from "react-router-dom"


// import ErrorComponent from './components/common/errorcomponent.jsx'
const ErrorComponent = lazy(()=> import('./components/common/ErrorComponent.jsx'))

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
        <Route path={routes.main.path} element={<routes.main.element />}>
          <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<ErrorComponent />} />
          <Route path={routes.view.path} element={<routes.view.element />} errorElement={<ErrorComponent />} />
        </Route>


        <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
      </Route>
    )
  )
  return (
  <div><Suspense fallback={<SuspenseLoader/>}>
    <RouterProvider router={router} />
  </Suspense></div>
  )
}

export default App
