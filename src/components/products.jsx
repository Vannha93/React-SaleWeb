import "../main-body.css"
import Product from "./product";
import "./products.css"
import { Col, Row } from "antd";

const Products = () => {

    const items = [];
    const itemCount = 16;
    for (let index = 0; index < itemCount; index++) {
        items.push({
            key: index + 1,
            imageSrc: "../../image/1.png",
            productName: `Product Name mario  mario  mario  mario  mario  mario  mario  mario  mario ${index + 1}`,
            price: 100000 + index * 10000 // Tăng giá sản phẩm cho mỗi sản phẩm
        });
    }
    return (
        <div className="contentStyle">
            <Row className="grid-product-style" gutter={16}>
                {items.map(item => (
                    <Col key={item.key} ali>
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