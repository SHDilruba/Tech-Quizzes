import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './Layouts/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [

        {
          path: "/",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Topics></Topics>,
       },
       {
          path: "/blog",
          element: <Blog></Blog>,
       },
       {
         path: "statistics",
         element: <Statistics></Statistics>,
       },
       { path: '*', element: <div>Sorry, this route is not found (404)</div>},
    ]
  },
])
  return (
    <div className="App">
         <RouterProvider router={router}></RouterProvider>   
    </div>
  );
}

export default App;
