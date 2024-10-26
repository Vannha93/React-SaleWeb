import { Carousel, Image, Modal } from 'antd';
import "./product.css"
import { useState } from 'react';

const Product = (props) => {

    const [open, setOpen] = useState(false);
    const { id, imageSrc, productName, price, description, cartItems, setCartItems, addItemToCart } = props;
    //debugger;
    const carouselContainerStyle = {
        width: "500px",
        height: "300px",
        margin: "0 auto",
        overflow: "hidden",
    };

    const carouselItemStyle = {
        width: "100%",
        height: "100%",

        textAlign: "center",
        background: "#364d79",
        color: "#fff",
    };

    const imageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    };

    function formatPrice(price) {
        return price.toLocaleString('vi-VN') + ' vnđ';
    }

    const handleOk = () => {
        const item = {
            id: id,
            image: imageSrc,
            name: productName,
            quantity: 1,
            price: price
        };
        addItemToCart(item);
        setOpen(false);
        alert("Thêm vào giỏ hàng thành công!");
    }

    return (
        <>
            <div className='item' onClick={() => setOpen(true)} >
                <div className='product-style'>
                    <img
                        style={{ width: '200px', height: '200px' }}
                        src={imageSrc[0]}
                    />
                    <hr />
                    <h2 className='produce-name-style'>
                        {productName}
                    </h2>
                    <div className='price-style'>
                        {formatPrice(price)}
                    </div>
                </div>
            </div >
            <Modal
                title={productName}
                centered
                open={open}
                onOk={() => handleOk()}
                okText="Thêm vào giỏ hàng"
                cancelText="Đóng"
                onCancel={() => setOpen(false)}
                width={1000}
                maskClosable={false}
            >
                <div className="modal-content">
                    <div className="image-slide-form">
                        <Carousel arrows infinite={false}>
                            {imageSrc.map((item) => (
                                <div style={carouselContainerStyle} key={item.key}>
                                    <h3 className="contentStyle">
                                        <img
                                            src={item}
                                            alt="image"
                                            style={imageStyle}
                                        />
                                    </h3>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="detailContent">
                        <h1>Thông tin chi tiết</h1>
                        <h2 style={{ textAlign: "left" }}>Mô tả: </h2>
                        <p style={{ textAlign: "left" }}>
                            {description}
                        </p>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Product;