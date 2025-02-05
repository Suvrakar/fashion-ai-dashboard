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
import { useEffect, useState } from "react";
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

// export const rightSideProducts = [
//   {
//     id: 1,
//     image: "/d9aed753ae46dd64394ad526519c6b0f.png",
//     price: "100$",
//     type: "T-Shirt",
//     brand: "PAUL SMITH",
//     colour: "Black",
//   },
//   {
//     id: 2,
//     image: "/d99fee6717030557abb3b07e8223cc89.png",
//     price: "100$",
//     type: "Shorts",
//     brand: "PAUL SMITH",
//     colour: "Black",
//   },
//   {
//     id: 3,
//     image: "1a9e20d1b77a400ca18ebf959d45f78a-ghostjpg@3x.png",
//     price: "100$",
//     type: "Dress",
//     brand: "Dolce & Gabbana",
//     colour: "Orange",
//   },
//   {
//     id: 4,
//     image: "/bfbda01a64784a5092ded083c58a4cbb-ghostjpg@3x.png",
//     price: "100$",
//     type: "Dress",
//     brand: "DRIES VAN NOTEN",
//     colour: "Orange",
//   },
// ];

const GeneratedPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
  const [uploadedClothes, setUploadedClothes] = useState([]);

  const handleCardClick = (id) => {
    setSelectedProduct(id);
  };

  useEffect(() => {
    const fetchGeneratedImage = async () => {
      const generatedCloth = localStorage.getItem("generatedId");
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/klingai/images/kolors-virtual-try-on/${generatedCloth}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log(data);

        if (data.code === 0 && data.data.task_result.images.length > 0) {
          setGeneratedImageUrl(data.data.task_result.images[0].url);
        }
      } catch (error) {
        console.error("Failed to fetch generated image:", error);
      }
    };

    const fetchUploadedClothes = async () => {
      const email = localStorage.getItem("email");
      try {
        // Fetch the history of uploaded cloth IDs
        const historyResponse = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/klingai/images/history?user_email=${email}`
        );
        const historyData = await historyResponse.json();

        // Fetch the cloth details for each cloth ID
        const clothesData = await Promise.all(
          historyData.map(async (item) => {
            const clothResponse = await fetch(
              `${process.env.NEXT_PUBLIC_BASE_API}/api/fashion/clothes/${item.cloth_id}`
            );
            console.log(clothResponse);
            return clothResponse.json();
          })
        );

        console.log(clothesData);
        setUploadedClothes(clothesData);
      } catch (error) {
        console.error("Failed to fetch uploaded clothes:", error);
      }
    };

    fetchGeneratedImage();
    fetchUploadedClothes();
  }, []);

  return (
    <div className="w-full max-w-full bg-white overflow-hidden flex flex-col items-start justify-start text-left text-lg text-white font-inter">
      <section className="w-full flex flex-col items-start justify-start text-left text-5xl text-black font-inter">
        <GeneratedPageFilter />

        <GeneratedPageContent
          products={products}
          rightSideProducts={uploadedClothes}
          handleCardClick={handleCardClick}
          selectedProduct={selectedProduct}
          generationNumber={23}
          page={"generated"}
          generatedImageUrl={generatedImageUrl}
        />
      </section>
    </div>
  );
};

export default GeneratedPage;
