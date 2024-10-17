import { useState } from "react";

// Component để đọc file txt và render các item
const ItemList = () => {
    const [items, setItems] = useState([]);

    // Hàm xử lý khi file được chọn
    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const fileContent = e.target.result;
                const parsedItems = parseFileContentToList(fileContent);
                setItems(parsedItems);
            };

            reader.readAsText(file);
        }
    };

    // Hàm parse nội dung file txt thành danh sách item
    const parseFileContentToList = (content) => {
        const lines = content.split("\n"); // Tách nội dung file thành các dòng
        const items = [];

        let item = {};

        for (var i = 0; i <= lines.length; i++) {
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
            ++i;
            items.push(item); // add item
            item = {}; // new item

            if (Object.keys(item).length > 0) {
                items.push(item);
            }
        }

        return items;
    };

    return (
        <div>
            <h1>Upload Item List</h1>
            <input type="file" accept=".txt" onChange={handleFileUpload} />

            <div className="item-list">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <div key={index} className="item">
                            <p>========================</p>
                            <img
                                src={item.image}
                                alt="image"
                                style={{ width: "100px", height: "100px" }}
                            />
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>{item.price} VNĐ</p>
                        </div>
                    ))
                ) : (
                    <p>No items to display</p>
                )}
            </div>
        </div>
    );
};

export default ItemList;
