import './my-cart.css';

const MyCart = (props) => {
    const { cartItems, setCartItems, addItemToCart } = props;
    //debugger;
    // const tmpCartItems = [
    //     {
    //         id: 1,
    //         image: "../../image/1.png",
    //         name: "Sản phẩm 1",
    //         quantity: 2,
    //         price: 100000,
    //     },
    //     {
    //         id: 2,
    //         image: "../../image/1.png",
    //         name: "Sản phẩm 2",
    //         quantity: 1,
    //         price: 150000,
    //     },
    //     {
    //         id: 3,
    //         image: "../../image/1.png",
    //         name: "Sản phẩm 3",
    //         quantity: 3,
    //         price: 50000,
    //     },
    // ];

    const calculateTotal = (items) => {
        //debugger;
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

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
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img src={item.image} alt={item.name} />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price.toLocaleString("vi-VN")} đ</td>
                            <td>{(item.price * item.quantity).toLocaleString("vi-VN")} đ</td>
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