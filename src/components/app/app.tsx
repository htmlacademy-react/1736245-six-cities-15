import Main from '../../pages/main/main';
// import Login from '../../pages/login/login';
// import Offer from '../../pages/offer/offer';
// import Favorites from '../../pages/favorites/favorites';

type TPlacesToStay = {
  placesToStay: number;
}

function App({placesToStay}: TPlacesToStay) {
  return (
    <>
      <Main placesToStay = {placesToStay}/>
      {/* <Login/>
      <Offer/>
      <Favorites/> */}
    </>
  );
}

export default App;
