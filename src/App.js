import ModalContextProvider from './store/modal-context';
import CartContextProvider from './store/cart-context';
import DataContextProvider from './store/data-context';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

export default function App() {
    return (
        <ModalContextProvider>
            <DataContextProvider>
                <CartContextProvider>
                    <Header />
                    <main>
                        <Meals />
                    </main>
                    <Cart />
                </CartContextProvider>
            </DataContextProvider>
        </ModalContextProvider>
    );
}
