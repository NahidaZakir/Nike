import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Homepage from './component/Home/Homepage';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey} from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: grey[200],
    }
  }
});

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
       <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
      
    </div>
  );
}

export default App;
