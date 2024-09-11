import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './Theme/DataTheme';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetUser } from './redux/Authentication/Action';
import { findCart } from './redux/Cart/Action';
import { Routers } from './routers/Routers';
import { getRestaurantsByUserId } from './redux/Restaurant/Action';

function App() {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');

  const auth = useSelector(state => state.auth);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(GetUser(auth?.jwt || jwt))
    dispatch(findCart(auth?.jwt || jwt))
  }, [auth.jwt, cart.cartItems.length])

  useEffect(() => {
    dispatch(getRestaurantsByUserId(auth.jwt || jwt))
  }, [auth.user])


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
      <AuthPage />
    </ThemeProvider>
  );
}

export default App;
