import './sider-menu-bar.css';
import { LaptopOutlined, DesktopOutlined, BarsOutlined, RightOutlined, HomeOutlined } from '@ant-design/icons';
import cpuIcon from "../../icon/cpu_icon_160215.ico";
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const items = [
    {
        key: '/',
        icon: <HomeOutlined />,
        label: <Link to="/">Home</Link>,
    },
    {
        key: '/Laptop',
        icon: <LaptopOutlined />,
        label: <Link to="/Laptop">Laptop</Link>,
    },
    {
        key: '/Monitor',
        icon: <DesktopOutlined />,
        label: <Link to="/Screen">Màn hình máy tính</Link>,
    },
    {
        key: '/Components',
        label: 'Linh kiện máy tính',
        icon: <img src={cpuIcon} alt="cpu" style={{ width: 16 }} />,
        children: [
            {
                key: '/CPU',
                label: <Link to="/CPU">CPU</Link>,
                icon: <RightOutlined />
            },
            {
                key: '/Mainboard',
                label: <Link to="/Mainboard">Mainboard</Link>,
                icon: <RightOutlined />
            },
            {
                key: '/VGA',
                label: <Link to="/VGA">VGA</Link>,
                icon: <RightOutlined />
            },
            {
                key: '/RAM',
                label: <Link to="/RAM">RAM</Link>,
                icon: <RightOutlined />
            },
            {
                key: '/Power',
                label: <Link to="/Power">Nguồn</Link>,
                icon: <RightOutlined />
            },
            {
                key: '/Storage',
                label: 'Lưu trữ',
                icon: <RightOutlined />,
                children: [
                    {
                        key: '/SSD',
                        label: <Link to="/SSD">SSD</Link>,
                    },
                    {
                        key: '/HDD',
                        label: <Link to="/HDD">HDD</Link>,
                    },
                    {
                        key: '/USB',
                        label: <Link to="/USB">USB</Link>,
                    },
                    {
                        key: '/MemoryCard',
                        label: <Link to="/MemoryCard">Thẻ nhớ</Link>,
                    },
                ],
            },
        ],
    },
    {
        key: '/Accessories',
        label: 'Phụ kiện',
        icon: <BarsOutlined />,
        children: [
            {
                key: '/Keyboard',
                label: <Link to="/Keyboard">Bàn phím</Link>,
            },
            {
                key: '/Mouse',
                label: <Link to="/Mouse">Chuột</Link>,
            },
            {
                key: '/Headphone',
                label: <Link to="/Headphone">Tai nghe</Link>,
            },
            {
                key: '/Webcam',
                label: <Link to="/Webcam">Webcam</Link>,
            },
        ],
    },
];

const SiderMenuBar = () => {
    const location = useLocation(); // get current location

    return (
        <Menu
            className="menu-style"
            mode="inline"
            selectedKeys={[location.pathname]} // set selectedKeys base on current location
            items={items}
        />
    );
};

export default SiderMenuBar;
