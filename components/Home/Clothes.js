import { useState, useEffect } from "react";
import { Button, Grid, Snackbar, Alert } from "@mui/material";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

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

const Clothes = ({
  selectedProduct,
  handleCardClick,
  products,
  modelImage,
}) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const router = useRouter();
  const { status } = useSession();

  const handleGenerateClick = async () => {
    if (status === "unauthenticated") router.push("/login");
    const selectedClothUrl = JSON.parse(
      localStorage.getItem("selectedProduct")
    ).img_url;
    try {
      const result = await fetch(
        "https://backend-1s2t.onrender.com/klingai/images/kolors-virtual-try-on",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            human_image: modelImage,
            cloth_image: selectedClothUrl,
          }),
        }
      );
      const data = await result.json();
      console.log(data);
      localStorage.setItem("generatedId", data.data?.task_id);
      setSnackbarMessage(result.message || "Image Generated!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      if (result.status === 200) {
        router.push("/generated");
      }
    } catch (error) {
      console.error(error);
      setSnackbarMessage(error.response.message || "Failed to generate image");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleLikeProduct = async (productId, imgUrl) => {
    const userId = localStorage.getItem("user_id");
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API}/fashion/user-fav`,
        {
          user_id: userId,
          item_code: productId,
          img_url: imgUrl,
        }
      );
      setSnackbarMessage("Product added to history successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("An error occurred", error);
      setSnackbarMessage("Failed to add product to history.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSelectProduct = (product) => {
    try {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      setSnackbarMessage("Product selected successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Failed to save product to localStorage", error);
      setSnackbarMessage("Failed to save product. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="w-full justify-center lg:w-[65%] flex flex-col md:items-start px-2 xl:px-5">
      <Grid container spacing={3}>
        {products.map((product) => {
          const isSelected = selectedProduct === product._id;
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={product._id}>
              <div
                onClick={() =>
                  status === "unauthenticated"
                    ? router.push("/login")
                    : handleCardClick(product._id, false)
                }
                className="group border hover:border-orange-500 transition-all duration-300"
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  width: "220px",
                  height: "400px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxSizing: "border-box",
                }}
              >
                <div className="relative h-[320px] shadow-md rounded-t-lg overflow-hidden border group-hover:border-orange-600">
                  <img
                    src={product.img_url}
                    alt={product.item_code}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      border: "1px solid orange",
                      backgroundColor: "#FF733B",
                      borderRadius: "50%",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLikeProduct(product.item_code, product.img_url);
                    }}
                  >
                    <FaRegHeart className="text-white p-1" />
                  </div>

                  <div
                    className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "28px",
                      height: "28px",
                      border: "1px solid orange",
                      borderRadius: "50%",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectProduct(product);
                    }}
                  >
                    <IoMdCheckmark className="text-orange-500 text-lg font-bold" />
                  </div>

                  <div className="absolute bottom-0 right-0 bg-black text-white px-3 py-1 rounded-tl-lg rounded-br-lg text-sm font-bold">
                    ${product.price}
                  </div>
                </div>

                <div className="p-4 text-sm text-gray-700 flex flex-col justify-between">
                  <div className="font-semibold text-gray-800">
                    <p className="text-gray-100 inline-block mr-1">
                      Item Code:
                    </p>
                    <span className="text-gray-500 inline-block">
                      {product.item_code}
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
              </div>
            </Grid>
          );
        })}

        {/* Separate last product */}
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={mockLastProduct.id}>
          <div
            onClick={() =>
              status === "unauthenticated"
                ? router.push("/login")
                : handleCardClick(mockLastProduct.id, true)
            }
            className="group border hover:border-orange-500 transition-all duration-300"
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              width: "220px",
              height: "400px",
              overflow: "hidden",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            <div className="relative h-[320px] shadow-md rounded-t-lg overflow-hidden border group-hover:border-orange-600">
              <img
                src={mockLastProduct.img_url}
                alt={mockLastProduct.item_code}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-1 left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "28px",
                  height: "28px",
                  border: "1px solid orange",
                  backgroundColor: "#FF733B",
                  borderRadius: "50%",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLikeProduct(
                    mockLastProduct.item_code,
                    mockLastProduct.img_url
                  );
                }}
              >
                <FaRegHeart className="text-white p-1" />
              </div>

              <div
                className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "28px",
                  height: "28px",
                  border: "1px solid orange",
                  borderRadius: "50%",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectProduct(mockLastProduct);
                }}
              >
                <IoMdCheckmark className="text-orange-500 text-lg font-bold" />
              </div>
            </div>
          </div>
        </Grid>
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

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Clothes;
