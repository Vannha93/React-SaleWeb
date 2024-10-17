
import Product from "../components/product";
import "../main-body.css"

const HomePage = () => {
    const imageSrc = "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";
    const productName = "Product Name mario  mario  mario  mario  mario  mario  mario  mario  mario";
    const price = 100000;

    return (
        <div className="contentStyle">
            <Product
                imageSrc={imageSrc}
                productName={productName}
                price={price}
            />
        </div>
    );
}

export default HomePage;