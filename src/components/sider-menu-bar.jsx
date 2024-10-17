
import './sider-menu-bar.css';
import {
    LaptopOutlined,
    DesktopOutlined,
    BarsOutlined,
    RightOutlined
} from '@ant-design/icons';
import cpuIcon from "../../icon/cpu_icon_160215.ico"
import { Menu } from 'antd';
const items = [
    {
        key: '1',
        icon: <LaptopOutlined />,
        label: 'Laptop',
    },
    {
        key: '2',
        icon: <DesktopOutlined />,
        label: "Màn hình máy tính",
    },
    {
        key: '3',
        label: 'Linh kiện máy tính',
        icon: <img src={cpuIcon} alt="cpu" style={{ width: 16 }} />,
        children: [
            {
                key: '3.1',
                label: 'CPU',
                icons: <RightOutlined />
            },
            {
                key: '3.2',
                label: 'Mainboard',
                icons: <RightOutlined />
            },
            {
                key: '3.3',
                label: 'VGA',
                icons: <RightOutlined />
            },
            {
                key: '3.4',
                label: 'RAM',
                icons: <RightOutlined />
            },
            {
                key: '3.5',
                label: 'Nguồn',
                icons: <RightOutlined />
            },
            {
                key: '3.6',
                label: 'Lưu trữ',
                icons: <RightOutlined />,
                children: [
                    {
                        key: '3.6.1',
                        label: 'SSD',
                    },
                    {
                        key: '3.6.2',
                        label: 'HDD',
                    },
                    {
                        key: '3.6.3',
                        label: 'USB',
                    },
                    {
                        key: '3.6.4',
                        label: 'Thẻ nhớ',
                    },
                ],
            },

        ],
    },
    {
        key: '4',
        label: 'Phụ kiện',
        icon: <BarsOutlined />,
        children: [
            {
                key: '4.1',
                label: 'Bàn phím',
            },
            {
                key: '4.2',
                label: 'Chuột',
            },
            {
                key: '4.3',
                label: 'Tai nghe',
            },
            {
                key: '4.4',
                label: 'Webcam',
            },
        ],
    },
    {
        key: 'link',
        icon: <RightOutlined />,
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Ant Design
            </a>
        ),
    },
];
const SiderMenuBar = () => {
    return (
        <>
            <Menu className="menu-style"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                items={items}
                mode='inline'
            />
        </>
    );
};
export default SiderMenuBar;
