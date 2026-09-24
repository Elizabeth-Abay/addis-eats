import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MyErrorFallback from "./components/ErrorBoundary";
import Footer from './components/Footer';
import Header from './components/Header';
import FullPageSpinner from "./components/Spinner";

// lazy loading
const StepOne = lazy( () => import('./app/cart/pages/step-one'))
const StepTwo = lazy(() => import('./app/cart/pages/step-two'));
const ThankYouPage = lazy(() => import('./app/cart/pages/thank-you')) ;
const MenuPage = lazy(() => import('./app/menu/page/menu')) ;
const MyAccountPage = lazy(() => import('./app/my-acc/pages/myAccountPage')) ;
const ItemNotFound = lazy(() => import('./app/orders/pages/NotFoundPage')) ;
const OrderPage = lazy(() => import('./app/orders/pages/OrderPage')) ;
const SpecialPage = lazy(() => import('./app/special/page/SpecialPage')) ;
const MenuProvider = lazy(() => import('./providers/MenuProvider')) ;
const OrderProvider = lazy(() => import( './providers/OrderProvider'));
const ReservationProvider = lazy(() => import( './providers/ReservationProvider'));

// ! fill in the checkout page here

export default function App(){
    // there will be a header and footer in all the components
    return (
        <div className='App'>
                <OrderProvider>
                <MenuProvider>
                    <ReservationProvider>
                        <Suspense fallback={<FullPageSpinner/>} >
                            <Router>
                                <ErrorBoundary FallbackComponent={MyErrorFallback}>
                                    <Header></Header>
                            <Routes>
                                {/* this are the things that will change */}
                                {/* in the real part the register will be the one there */}
                                <Route path='/' element={<SpecialPage />} />
                                <Route path='/menu' element={<MenuPage />} />
                                <Route path='/item/:itemId' element={<OrderPage />} />

                                <Route path='/cart' element={<StepOne/>} />
                                <Route path='/checkout-page' element={<StepTwo/>} />

                                <Route path='/thank-you' element={<ThankYouPage />}/>
                                <Route path='/item-not-found' element={<ItemNotFound />} />
                                <Route path='/my-account' element={<MyAccountPage />} />

                            </Routes>
                            
                            <Footer></Footer>
                        
                        
                                </ErrorBoundary>
                            </Router>
                            
                        </Suspense>
        
                    </ReservationProvider>
            </MenuProvider>
            </OrderProvider>
        
        </div>

    )
}