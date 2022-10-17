import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './Layouts/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Quizzes from './components/Quizzes/Quizzes';
import Featured from './components/Featured/Featured';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [

        {
          path: "/",
          loader: async() =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
          element: <Topics></Topics>,
        },
        {
          path: "/featured",
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.featuredId}`) 
        },
        element: <Featured></Featured>
      },
          {
            path: '/featured/:featuredId',
            loader: async({params}) =>{
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.featuredId}`)
          },
            element: <Quizzes></Quizzes>
        },
         {
           path: "/quiz",
           element: <Quiz></Quiz> 
         },
       {
        path: "/blog", 
        element: <Blog></Blog>,
       },
       {
         path: "/statistics",
         loader: async() =>{
           return fetch('https://openapi.programming-hero.com/api/quiz')
         },
         element: <Statistics></Statistics>,
       },
       { path: '*',
         element: <div>Sorry, this route is not found (404)</div>
        },
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
