import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
  Grid,
  Box,
  Modal,
} from "@mui/material";
import Image from "next/image";
import FrameComponent from "../../components/frame-component";
import { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { Divider } from "@mantine/core";

const products = [
  {
    id: 1,
    image: "/0476126dc3be4080824b7d3ea6abb41e-ghostjpg3@3x.png",
    price: "100$",
    type: "Dress",
    code: "SP-240100",
    brand: "Dolce & Gabbana",
    colour: "Orange",
  },
  {
    id: 2,
    image: "/1276c66ca75e48f3b4776dd460759352-ghostjpg@3x.png",
    price: "100$",
    type: "Dress",
    code: "SP-240100",
    brand: "Dolce & Gabbana",
    colour: "Orange",
  },
  {
    id: 3,
    image: "1a9e20d1b77a400ca18ebf959d45f78a-ghostjpg@3x.png",
    price: "100$",
    type: "Dress",
    code: "SP-240100",
    brand: "Dolce & Gabbana",
    colour: "Orange",
  },
  {
    id: 4,
    image: "/bfbda01a64784a5092ded083c58a4cbb-ghostjpg@3x.png",
    price: "100$",
    type: "Dress",
    code: "SP-240100",
    brand: "Dolce & Gabbana",
    colour: "Orange",
  },
  {
    id: 5,
    image: "/567c41cfcb6e4a88b796e0e41a5fdd48-ghostjpg@3x.png",
    price: "100$",
    type: "Dress",
    code: "SP-240100",
    brand: "Dolce & Gabbana",
    colour: "Orange",
  },
  {
    id: 6,
    image: "/640c58f6aa994950b4baf2401b1f0951-ghostjpg@3x.png",
    price: "100$",
    type: "Dress",
    code: "SP-240100",
    brand: "Dolce & Gabbana",
    colour: "Orange",
  },
  {
    id: 7,
    image: "/9dab7b5311234ae380534c882ef3e9e1-ghostjpg@3x.png",
    price: "100$",
    type: "Dress",
    code: "SP-240100",
    brand: "Dolce & Gabbana",
    colour: "Orange",
  },
  {
    id: 8,
    image: "/623cf127514741ffaf16ebdd96c0b2f5-ghostjpg@3x.png",
    price: "100$",
    type: "Dress",
    code: "SP-240100",
    brand: "Dolce & Gabbana",
    colour: "Orange",
  },
];

const rightSideProducts = [
  {
    id: 1,
    image: "/d9aed753ae46dd64394ad526519c6b0f.png",
    price: "100$",
    type: "T-Shirt",
    brand: "PAUL SMITH",
    colour: "Black",
  },
  {
    id: 2,
    image: "/d99fee6717030557abb3b07e8223cc89.png",
    price: "100$",
    type: "Shorts",
    brand: "PAUL SMITH",
    colour: "Black",
  },
  {
    id: 3,
    image: "1a9e20d1b77a400ca18ebf959d45f78a-ghostjpg@3x.png",
    price: "100$",
    type: "Dress",
    brand: "Dolce & Gabbana",
    colour: "Orange",
  },
  {
    id: 4,
    image: "/bfbda01a64784a5092ded083c58a4cbb-ghostjpg@3x.png",
    price: "100$",
    type: "Dress",
    brand: "DRIES VAN NOTEN",
    colour: "Orange",
  },
];

const GeneratedPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (id) => {
    setSelectedProduct(id);
  };

  return (
    <div className="w-full max-w-full bg-white overflow-hidden flex flex-col items-start justify-start text-left text-lg text-white font-inter">
      <section className="flex flex-col items-start justify-start w-full text-left text-5xl text-black font-inter">
        <div className="max-w-full flex flex-wrap items-start justify-start lg:ml-24 ml-4 gap-2">
          <div className="flex flex-row w-full max-w-full flex-wrap gap-2 lg:gap-6 items-center mt-2 mb-8">
            {/* Filter Icon */}
            <LuFilter className="text-orange-500 w-6 h-6" />

            {/* Date Label */}
            <p className="text-lg text-gray-100">Date</p>

            {/* Date Select */}
            <FormControl
              variant="outlined"
              className="w-[100px] sm:w-[120px] md:w-[140px]"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255, 165, 0, 0.1)", // Light orange background
                  borderRadius: "50px", // Rounded border
                  height: "34px",
                },
              }}
            >
              <InputLabel className="-mt-2">Today</InputLabel>
              <Select
                label="Select"
                className="text-gray-700"
                sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}
              >
                <MenuItem value="Option1">Option 1</MenuItem>
                <MenuItem value="Option2">Option 2</MenuItem>
                <MenuItem value="Option3">Option 3</MenuItem>
              </Select>
            </FormControl>

            {/* Search Field */}
            <TextField
              placeholder="Search"
              variant="outlined"
              className="w-[100px] sm:w-[120px] md:w-[140px] text-gray-700"
              InputProps={{
                style: {
                  height: "34px",
                  backgroundColor: "rgba(9, 15, 50, 0.05)",
                  borderRadius: "50px",
                  fontSize: "14px",
                  color: "rgba(0, 0, 0, 0.6)",
                },
              }}
            />

            {/* Color Selector */}
            <div className="flex items-center gap-1 text-sm">
              <p className="font-bold">Color</p>
              <p className="mr-1">All</p>
              <div className="grid grid-cols-5 gap-1">
                <div className="w-4 h-4 rounded-full bg-darkorange"></div>
                <div className="w-4 h-4 rounded-full bg-green"></div>
                <div className="w-4 h-4 rounded-full bg-pink"></div>
                <div className="w-4 h-4 rounded-full bg-yellow"></div>
                <div className="w-4 h-4 rounded-full bg-black"></div>
                <div className="w-4 h-4 rounded-full bg-purple-700"></div>
                <div className="w-4 h-4 rounded-full bg-purple-300"></div>
                <div className="w-4 h-4 rounded-full bg-blue"></div>
                <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
              </div>
            </div>

            {/* Brand Select */}
            <FormControl
              variant="standard"
              size="small"
              className="w-[80px] -mt-4"
            >
              <InputLabel>Brand</InputLabel>
              <Select label="Brand">
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Dolce & Gabbana">Dolce & Gabbana</MenuItem>
              </Select>
            </FormControl>

            {/* Recommended Button */}
            <Button
              variant="standard"
              className="text-black border-darkorange flex gap-1 text-sm font-bold"
            >
              Latest
              <Image
                loading="lazy"
                width={12}
                height={12}
                alt=""
                src="/group-7.svg"
              />
            </Button>
          </div>
        </div>

        <div className="flex md:w-full mx-auto flex-col md:flex-row max-w-full md:items-start justify-evenly gap-5">
          {/* left side */}
          <div className=" justify-center lg:w-[60%] flex flex-col md:items-start md:px-5">
            <div className="text-lg text-gray-100 flex gap-4 lg:ml-12 ml-4">
              <p>{new Date().toISOString().split("T")[0]}</p>
              <p>Generate # 23</p>
            </div>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 2 }}
              className="mb-16"
            >
              {products.map((product, index) => {
                const isSelected = selectedProduct === product.id;
                return (
                  <Grid
                    item
                    xs={6} // Full width on extra-small screens
                    sm={6} // Two cards per row on small screens
                    md={6} // Two cards per row on medium screens
                    lg={4} // Three cards per row on large screens and up
                    key={product.id}
                  >
                    <div
                      onClick={() => handleCardClick(product.id)}
                      className="w-[160px] h-full lg:w-[260px] lg:h-[380px] max-w-[260px] max-h-[380px]"
                      style={{
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifySelf: "center",
                        overflow: "hidden",
                        cursor: "pointer",
                        border: isSelected ? "2px solid orange" : "", // Border change on selection
                        borderRadius: "0.5rem",
                      }}
                    >
                      <div className="relative h-full shadow-md rounded-lg overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.brand}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>

          {/* right sidea */}
          <div className="lg:w-[35%] border rounded-lg mb-16">
            <h1 className="text-5xl text-center font-bold mb-6 ">
              Clothes From Generation
            </h1>
            <Grid
              container
              spacing={2}
              className="bg-[#fff1eb] py-4 lg:py-8 px-4 lg:px-10"
            >
              {rightSideProducts.map((product) => {
                const isSelected = selectedProduct === product.id;
                return (
                  <Grid
                    item
                    xs={6} // Two cards per row on extra-small screens
                    sm={4} // Three cards per row on small screens
                    md={6} // Two cards per row on medium screens
                    lg={4} // Three cards per row on large screens and up
                    key={product.id}
                  >
                    <div
                      onClick={() => handleCardClick(product.id)}
                      className={`p-2 rounded-lg cursor-pointer ${
                        isSelected
                          ? "border-2 border-orange-500"
                          : "border border-gray-200"
                      }`}
                    >
                      <div
                        className="relative mx-auto h-[140px] w-[120px] rounded-lg overflow-hidden mb-2"
                        style={{ border: "1px solid orange" }}
                      >
                        <img
                          src={product.image}
                          alt={product.brand}
                          className="w-full h-full object-contain" // Ensures image fits without cropping
                        />
                      </div>
                      {/* <div className="text-gray-700 text-sm"> */}
                      <div className="mx-auto flex flex-col items-center">
                        <div className="text-gray-100 text-sm">
                          {product.type}
                        </div>
                        <div className="text-lg text-orange-500">
                          {product.brand}
                        </div>
                        <div className="text-sm font-bold text-gray-500">
                          Color {product.colour}
                        </div>
                        <div className="font-bold text-sm text-orange-500">
                          {product.price}
                        </div>
                      </div>

                      {/* </div> */}
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneratedPage;
