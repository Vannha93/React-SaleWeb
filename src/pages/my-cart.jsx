import { DeleteOutlined } from '@ant-design/icons';
import './my-cart.css';

const MyCart = (props) => {
    const { cartItems, setCartItems, addItemToCart } = props;

    const calculateTotal = (items) => {
        //debugger;
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const handleDeleteItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    }

    return (
        <div className="cart-page">
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Thành tiền</th>
                        <th>Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.image[0]} alt={item.name} />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price.toLocaleString("vi-VN")} đ</td>
                            <td>{(item.price * item.quantity).toLocaleString("vi-VN")} đ</td>
                            <td><DeleteOutlined style={{ cursor: 'pointer', color: 'black' }} onclick={() => { handleDeleteItem(item.id) }} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="total">
                <h3>
                    Tổng cộng: {calculateTotal(cartItems).toLocaleString("vi-VN")} đ
                </h3>
            </div>
        </div>
    );
};

export default MyCart