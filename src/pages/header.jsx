import { ShoppingCartOutlined } from "@ant-design/icons"
import "./header.css"
import { Badge, Button, Modal } from "antd"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import MyCart from "./my-cart"

const HeaderContent = (props) => {

    const { cartItems, setCartItems, addItemToCart } = props;
    const [isOpenCart, setIsOpenCart] = useState(false);
    //debugger;
    const showModal = () => {
        setIsOpenCart(true);
    };

    const handleOk = () => {
        setIsOpenCart(false);
    };

    const handleCancel = () => {
        setIsOpenCart(false);
    };

    const cartModalStyle = {
        top: 0,
        right: 0,
        overflow: 'auto',
        position: "fixed",
        width: '100vh',
        height: "100vh",
        margin: 0,
    }

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const totalCount = cartItems.length;
        setCartCount(totalCount);
    }, [cartItems]);

    return (
        <>
            <div className="header">
                <NavLink to="/" className="logo">
                    <img src="../../image/logo/logo.webp" alt="Logo" />
                </NavLink>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="cart-icon" onClick={showModal}>
                    <Badge count={cartCount} showZero>
                        <ShoppingCartOutlined style={{ fontSize: '48px', color: '#3e4041' }} />
                    </Badge>
                </div>
            </div>
            <Modal
                title="Thông tin giỏ hàng"
                open={isOpenCart}
                onOk={handleOk}
                onCancel={handleCancel}
                mask={false} // Không hiện lớp che mờ xung quanh
                style={cartModalStyle}
            >
                <div style={{ padding: "20px" }}>
                    <MyCart
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        addItemToCart={addItemToCart}
                    />
                </div>
            </Modal>
        </>
    )

}

export default HeaderContent