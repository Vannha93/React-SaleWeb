import { useEffect, useState } from "react";
import "../main-body.css"
import Product from "./product";
import "./products.css"
import { Col, Row } from "antd";
import { useOutletContext } from "react-router-dom";

const Products = (props) => {
    const { cartItems, setCartItems, addItemToCart } = useOutletContext();
    const { data, productType } = props;
    const [items, setItems] = useState([]);
    const [fileContent, setFileContent] = useState("init");


    useEffect(() => {
        // Fetch file
        fetch(data)
            .then((response) => response.text())
            .then((text) => {
                setFileContent(text);
                setItems(parseFileContentToList(text));
            })
            .catch((error) => console.error("Error fetching the file:", error));
    }, [data]);

    // Convert txt to list item
    const parseFileContentToList = (content) => {
        const lines = content.split("\n");
        const tmp_items = [];
        let item = {
            image: [],
            name: "",
            description: [],
            price: 0
        };
        for (var i = 0; i <= lines.length - 1; i++) {
            while (lines[i].trim() != "#" && i < lines.length) {
                const line = lines[i].trim();
                if (line.includes("[image]")) {
                    item.image.push(line.replace("[image]", ""));
                } else if (line.includes("[name]")) {
                    item.name = line.replace("[name]", "");
                } else if (line.includes("[description]")) {
                    item.description.push(line.replace("[description]", ""));
                } else if (line.includes("[price]")) {
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
            item = {
                image: [],
                name: "",
                description: [],
                price: 0
            };; // reset item
        }

        return tmp_items;
    };

    return (
        <>
            <h2 className={"type-name"}>
                {productType}
            </h2>
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
        </>
    );
}

export default Products;