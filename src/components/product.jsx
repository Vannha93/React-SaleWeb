import { Image } from 'antd';
import "./product.css"

const Product = (props) => {

    const { imageSrc, productName, price } = props;

    function formatPrice(price) {
        return price.toLocaleString('vi-VN') + ' vnđ'; // Định dạng theo chuẩn tiếng Việt, dấu chấm ngăn cách
    }


    return (
        <div className='product-style'>
            <Image
                style={{ width: '200px', height: '200px' }}
                src={imageSrc}
            />
            <hr />
            <h2 className='produce-name-style'>
                {productName}
            </h2>
            <div className='price-style'>
                {formatPrice(price)}
            </div>
        </div>
    );
};

export default Product;