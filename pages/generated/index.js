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
import { useState } from "react";
import { LuFilter } from "react-icons/lu";
import GeneratedPageFilter from "../../components/GeneratedPageFilter";
import GeneratedPageContent from "../../components/GeneratedPageContent";

export const products = [
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

export const rightSideProducts = [
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
      <section className="w-full flex flex-col items-start justify-start text-left text-5xl text-black font-inter">
        <GeneratedPageFilter />

        <GeneratedPageContent
          products={products}
          rightSideProducts={rightSideProducts}
          handleCardClick={handleCardClick}
          selectedProduct={selectedProduct}
          generationNumber={23}
          page={"generated"}
        />
      </section>
    </div>
  );
};

export default GeneratedPage;
