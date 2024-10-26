import { ShoppingCartOutlined } from "@ant-design/icons"
import "./header.css"
import { Badge, Button, Form, Input, Modal } from "antd"
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

    const handleOk = (values) => {
        setIsOpenCart(false);

        const orderData = {
            customerInfo: values,
            cartItems,
            totalAmount: 1,
        };
        alert("Đơn hàng của bạn đã được đặt thành công!");
        form.resetFields();
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

    const [form] = Form.useForm();

    const handleOrderSubmit = (values) => {
        const orderData = {
            customerInfo: values,
            cartItems,
            totalAmount: 1,
        };
        alert("Đơn hàng của bạn đã được đặt thành công!");
        form.resetFields();
    };

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
                okText="Đặt Hàng"
                style={cartModalStyle}
            >
                <div style={{ padding: "20px" }}>
                    <MyCart
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                        addItemToCart={addItemToCart}
                    />

                    <h3>Thông Tin Khách Hàng</h3>
                    <Form form={form} onFinish={handleOrderSubmit} layout="vertical">
                        <Form.Item
                            label="Tên khách hàng"
                            name="customerName"
                            rules={[{ required: true, message: "Vui lòng nhập tên khách hàng" }]}
                        >
                            <Input placeholder="Tên khách hàng" />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
                        >
                            <Input placeholder="Số điện thoại" />
                        </Form.Item>

                        <Form.Item
                            label="Địa chỉ"
                            name="address"
                            rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
                        >
                            <Input placeholder="Địa chỉ" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ type: "email", message: "Email không hợp lệ" }]}
                        >
                            <Input placeholder="Email (không bắt buộc)" />
                        </Form.Item>

                        {/* <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Đặt Hàng
                            </Button>
                        </Form.Item> */}
                    </Form>
                </div>
            </Modal>
        </>
    )

}

export default HeaderContent