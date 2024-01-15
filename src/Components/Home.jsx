import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import "./Home.css";
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const items = [
    {
      id: 1,
      name: "Jony",
      image:
        "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    },
    {
      id: 2,
      name: "Bonnie",
      image:
        "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
    },
    {
      id: 3,
      name: "Amelia",
      image:
        "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp",
    },
    {
      id: 4,
      name: "Romee",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      id: 5,
      name: "Tessa",
      image:
        "https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg",
    },
    {
      id: 6,
      name: "Oliver",
      image:
        "https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg",
    },
    {
      id: 7,
      name: "Madhusmita",
      image:
        "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
    },
    {
      id: 8,
      name: "Ashutosh",
      image:
        "https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg",
    },
    {
      id: 3,
      name: "Sweta",
      image:
        "https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp",
    },
    {
      id: 4,
      name: "Ikia",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      id: 5,
      name: "Teffol",
      image:
        "https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg",
    },
    {
      id: 6,
      name: "Naveen",
      image:
        "https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg",
    },
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value === "") {
      setFilteredItems([]);
      setSelectedItems([]);
    } else {
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  const handleItemClick = (item) => {
    // Remove the selected item from filteredItems and add it to selectedItems
    setFilteredItems((prevFilteredItems) =>
      prevFilteredItems.filter((i) => i !== item)
    );

    // Check if the item is not already in selectedItems
    if (!selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleChipDelete = (chipToDelete) => {
    setSelectedItems(selectedItems.filter((chip) => chip !== chipToDelete));
    setFilteredItems([...filteredItems, chipToDelete]);
  };

  return (
    <div className="container">
      <h1>Search Your Text</h1>
      <TextField
        className="field"
        size="small"
        InputProps={{
          endAdornment: (
            <div style={{ display: "flex", gap: 5 }}>
              {selectedItems.map((selectedItem) => (
                <Chip
                  key={selectedItem.id}
                  label={`${selectedItem.name}`}
                  onDelete={() => handleChipDelete(selectedItem)}
                  avatar={
                    <img
                      src={selectedItem.image}
                      alt="images"
                      className="img"
                    />
                  }
                />
              ))}
            </div>
          ),
        }}
        label="Type to search"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="list-container">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="data"
          >
            <img src={item.image} alt="images" className="img" />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
