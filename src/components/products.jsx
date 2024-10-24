import { useEffect, useState } from "react";
import "../main-body.css"
import Product from "./product";
import "./products.css"
import { Col, Row } from "antd";
import { useOutletContext } from "react-router-dom";

const Products = () => {
    const { cartItems, setCartItems, addItemToCart } = useOutletContext();
    //debugger;
    const [items, setItems] = useState([]);
    const [fileContent, setFileContent] = useState("init");

    useEffect(() => {
        // Fetch file
        fetch("https://raw.githubusercontent.com/Vannha93/React-SaleWeb/main/data/1.txt")
            .then((response) => response.text())
            .then((text) => {
                setFileContent(text);
                setItems(parseFileContentToList(text));
            })
            .catch((error) => console.error("Error fetching the file:", error));
    }, []);

    // Convert txt to list item
    const parseFileContentToList = (content) => {
        const lines = content.split("\n");
        const tmp_items = [];
        let item = {};
        for (var i = 0; i <= lines.length - 1; i++) {
            while (lines[i].trim() != "#" && i < lines.length) {
                const line = lines[i].trim();
                if (!item.image && line.includes("[image]")) {
                    item.image = line.replace("[image]", "");
                } else if (!item.name && line.includes("[name]")) {
                    item.name = line.replace("[name]", "");
                } else if (!item.description && line.includes("[description]")) {
                    item.description = line.replace("[description]", "");
                } else if (!item.price && line.includes("[price]")) {
                    item.price = line.replace("[price]", "");
                }

                ++i;
            }
            if (i === lines.length) {
                break;
            }
            if (Object.keys(item).length > 0) {
                tmp_items.push(item);
            }
            item = {}; // reset item
        }
        return tmp_items;
    };

    return (
        <div className="contentStyle">
            <Row className="grid-product-style" gutter={16}>
                {items.map(item => (
                    <Col key={item.key} ali>
                        <p className="item">
                            <Product
                                imageSrc={item.image}
                                productName={item.name}
                                price={item.price}
                                description={item.description}
                                cartItems={cartItems}
                                setCartItems={setCartItems}
                                addItemToCart={addItemToCart}
                            />
                        </p>
                    </Col>
                ))}
            </Row>
        </div >
    );
}

export default Products;