import { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import axios from "axios";
import { useRouter } from "next/router";

const Clothes = ({ selectedProduct, handleCardClick }) => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const handleGenerateClick = () => {
    router.push("/generated");
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");

    if (storedEmail != null) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_API}/api/fashion/clothes/email/${storedEmail}`
          );
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products", error);
        }
      };
      fetchProducts();
    }
  }, []);

  const mockLastProduct = {
    id: 9,
    img_url: "/group-4@2x.png",
    price: "100$",
    item_code: "SP-240100",
    type: "Dress",
    brand: "Dolce & Gabbana",
    color_id: "Orange",
    style_id: "Casual",
  };

  const productsWithLastProduct = [...products, mockLastProduct];

  return (
    <div className="w-full justify-center lg:w-[65%] flex flex-col md:items-start px-2 xl:px-5">
      <Grid container spacing={3}>
        {productsWithLastProduct.map((product, index) => {
          const isSelected =
            selectedProduct === product._id || selectedProduct === product.id;
          const isLastProduct = index === productsWithLastProduct.length - 1;
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={3}
              key={product.id || product._id}
            >
              <div
                onClick={() =>
                  handleCardClick(product.id || product._id, isLastProduct)
                }
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifySelf: "center",
                  width: "220px",
                  height: "400px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div
                  className="relative h-[320px] shadow-md rounded-t-lg overflow-hidden"
                  style={{
                    border: isSelected ? "2px solid orange" : "",
                    borderRadius: "0.5rem",
                  }}
                >
                  <img
                    src={product.img_url}
                    alt={product.item_code || product.code}
                    className="w-full h-full object-cover"
                  />
                  {isSelected && (
                    <>
                      <div
                        className="absolute top-0 right-0 rounded-md p-1"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          borderLeft: "1px solid orange",
                          borderBottom: "1px solid orange",
                        }}
                      >
                        <IoMdCheckmark className="text-orange-500 text-lg font-bold" />
                      </div>
                      <div
                        className="absolute top-0 left-0 rounded-md"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          borderRight: "1px solid orange",
                          borderBottom: "1px solid orange",
                          backgroundColor: "#FF733B",
                        }}
                      >
                        <FaRegHeart className=" font-bold text-white p-1" />
                      </div>
                    </>
                  )}

                  {!isLastProduct && (
                    <div className="absolute bottom-0 right-0 bg-black text-white px-3 py-1 rounded-tl-lg rounded-br-lg text-sm font-bold">
                      ${product.price}
                    </div>
                  )}
                </div>

                {/* Product information section without shadow */}
                {!isLastProduct && (
                  <div className="p-4 text-sm text-gray-700 flex flex-col justify-between">
                    <div className="font-semibold text-gray-800">
                      <p className="text-gray-100 inline-block mr-1">
                        Item Code:
                      </p>
                      <span className="text-gray-500 inline-block">
                        {product.item_code || product.code}
                      </span>
                    </div>
                    <div className="text-gray-100">{product.type}</div>
                    <div className="font-semibold text-gray-800">
                      {product.style_id}
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="capitalize text-darkorange">
                        {product.color_id}
                      </span>
                      <span className="ml-2 h-2 w-2 bg-darkorange rounded-full"></span>
                    </div>
                  </div>
                )}
              </div>
            </Grid>
          );
        })}
      </Grid>

      <div className="md:my-[3rem] -mt-10 my-6 mx-auto pl-[21px] pr-0">
        <Button
          onClick={handleGenerateClick}
          className="w-[200px] flex-1"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18px",
            background: "#ff733b",
            borderRadius: "60px",
            "&:hover": { background: "#ff733b" },
            height: 54,
          }}
        >
          Generate
        </Button>
      </div>
    </div>
  );
};

export default Clothes;
