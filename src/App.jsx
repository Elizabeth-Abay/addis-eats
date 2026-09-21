import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MenuPage from './app/menu/page/menu';
import SpecialPage from './app/special/page/SpecialPage';
import Footer from './components/Footer';
import Header from './components/Header';
import CartProvider from './providers/CartProvider';
import MenuProvider from './providers/MenuProvider';
import ReservationProvider from './providers/ReservationProvider';

// ! fill in the checkout page here

export default function App(){
    // there will be a header and footer in all the components
    return (
        <div className='App'>
            <MenuProvider>
                <CartProvider>
                    <ReservationProvider>
                        <Router>
                            <Header></Header>
                            <Routes>
                                {/* this are the things that will change */}
                                {/* in the real part the register will be the one there */}
                                <Route path='/' element={<SpecialPage />} />
                                <Route path='/menu' element={<MenuPage />} />

                                <Route path='/checkout-page' element={} />
                            </Routes>
                            
                            <Footer></Footer>
                        
                        </Router>
                    </ReservationProvider>
                </CartProvider>
            </MenuProvider>
            
        </div>

    )
}