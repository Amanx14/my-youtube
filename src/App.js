import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const approuter = createBrowserRouter([
  {
    path : "",
    element : <Body />,
    children : [
      {
        path : "",
        element : <MainContainer />
      }, 
      {
        path : "watch",
        element : <WatchPage />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={approuter} />
      </div>
    </Provider>
  );
}

export default App;
