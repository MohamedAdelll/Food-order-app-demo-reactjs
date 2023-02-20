import Menu from "./Components/Menu/Menu";
// import Modal from "./Components/UI/Modal/Modal";
import Header from "./Components/Layout/Header";
import { CartContextProvider } from './store/cart-context';
import { ModalContextProvider } from './store/modal-context';
import Cart from './Components/Cart/Cart';


function App() {
  // const [showModal, setShowModal] = useState(false);

  // function handleCloseModal() {
  //   setShowModal(false);
  // }

  return (
    <ModalContextProvider>
      <CartContextProvider>
        <Header />
        <Menu></Menu>
        <Cart></Cart>
      </CartContextProvider>
    </ModalContextProvider>
  );
}

export default App;
