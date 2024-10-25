import { useOutletContext } from "react-router-dom";
import Products from "../components/products";
import "../main-body.css"

const HomePage = () => {
    const { cartItems, setCartItems, addItemToCart } = useOutletContext();

    return (
        <div className="contentStyle">
            <Products
            />
        </div>
    );
}

export default HomePage;