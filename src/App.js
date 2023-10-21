import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Homepage from './component/Home/Homepage';


function App() {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element: <Main></Main>,
        children:[
          {
            path:'/',
            element:<Homepage></Homepage>
          }
        ]
      }
    ]
  )
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
