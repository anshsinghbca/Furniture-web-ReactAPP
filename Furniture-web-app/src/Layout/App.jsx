

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useSelector } from 'react-redux';
import "../index.css";
import { Outlet } from 'react-router-dom';
import Fetchitem from '../Components/Fetchitem';
import LoadingSpinner from "../Components/LoadingSpinner";


function App() {
  const fetchstatus = useSelector((state) => state.fetchStatus);

  return (
    <>
      <Header />
      <Fetchitem />
      {fetchstatus.currentlyFetching ? <LoadingSpinner/> : <Outlet />}
<Footer />
    </>
  )
}

export default App;
