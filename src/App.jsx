import SpecialPage from './app/special/page/SpecialPage';
import Footer from './components/Footer';
import Header from './components/Header';
import CartProvider from './providers/CartProvider';
import ReservationProvider from './providers/ReservationProvider';

export default function App(){
    // there will be a header and footer in all the components
    return (
        <div className='App'>
            <Header></Header>
            <CartProvider>
                <ReservationProvider>
                    <Router>
                        {/* this are the things that will change */}
                        {/* in the real part the register will be the one there */}
                        <Route path='/' element={<SpecialPage />} />
                    </Router>
                </ReservationProvider>
            </CartProvider>
            <Footer></Footer>
        </div>

    )
}