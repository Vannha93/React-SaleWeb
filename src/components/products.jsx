import "../main-body.css"
import Product from "./product";
import "./products.css"
import { Col, Row } from "antd";

const Products = () => {

    const items = [];
    const colCount = 10;
    for (let index = 0; index < colCount; index++) {
        items.push({
            key: index + 1,
            imageSrc: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
            productName: `Product Name ${index + 1}`,
            price: 100000 + index * 10000 // Tăng giá sản phẩm cho mỗi sản phẩm
        });
    }

    return (
        <div className="contentStyle">
            <Row gutter={20}>
                {items.map(item => (
                    <Col span={8} key={item.key}>
                        <Product
                            imageSrc={item.imageSrc}
                            productName={item.productName}
                            price={item.price}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Products;