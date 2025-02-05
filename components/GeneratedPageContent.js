import { Grid, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

const GeneratedPageContent = ({
  products,
  rightSideProducts,
  handleCardClick,
  selectedProduct,
  generationNumber,
  page,
  generatedImageUrl,
}) => {
  console.log(rightSideProducts);
  return (
    <div className="flex mx-auto items-center flex-col md:flex-row max-w-full md:items-start justify-evenly lg:gap-5 w-full">
      {/* Left Side */}
      <div className="lg:w-[65%] flex justify-center flex-col md:items-start md:px-5">
        <div className="flex justify-start items-center w-full mt-4 gap-4">
          <div className="text-lg text-gray-100 flex gap-4 lg:ml-12 ml-4">
            <p>{new Date().toISOString().split("T")[0]}</p>
            <p>Generate # {generationNumber}</p>
          </div>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className="px-2"
            startIcon={<AiOutlineDownload />}
          >
            Download All Images
          </Button>
        </div>
        <div className="flex mx-4 items-center w-full">
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            className="mb-16"
          >
            {generatedImageUrl && (
              <Grid item xs={4}>
                <div className="relative w-full h-[400px] max-w-[600px]">
                  <img
                    src={generatedImageUrl}
                    alt="Generated Image"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Grid>
            )}
          </Grid>
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`lg:w-[25%] mt-6 border rounded-lg bg-[#fff1eb]  ${
          page === "history" && "lg:mt-8"
        }`}
      >
        {page === "generated" && (
          <h1 className="text-5xl text-center font-bold mb-6 ">
            Uploaded Clothes
          </h1>
        )}
        {page !== "generated" && <p className="mt-12" />}

        <Grid className="py-4 lg:py-8 px-4 lg:px-10">
          {rightSideProducts.map((product) => (
            <Grid item xs={6} sm={6} md={6} lg={4} key={product._id}>
              <div
                onClick={() => handleCardClick(product._id)}
                className={`p-2 rounded-lg cursor-pointer w-full ${
                  selectedProduct === product._id
                    ? "border-2 border-orange-500"
                    : "border border-gray-200"
                }`}
              >
                <div className="mx-auto h-[140px] w-[120px] rounded-lg overflow-hidden mb-2">
                  <img
                    src={product.img_url}
                    alt={product.item_code}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mx-auto flex flex-col items-center">
                  <div className="text-gray-100 text-sm">
                    {product.category_id}
                  </div>
                  <div className="text-lg text-orange-500">
                    {product.style_id}
                  </div>
                  <div className="text-sm font-bold text-gray-500">
                    Color {product.color_id}
                  </div>
                  <div className="font-bold text-sm text-orange-500">
                    ${product.price}
                  </div>
                </div>

                {page === "history" && (
                  <div className="mt-2 flex justify-center">
                    <a
                      href={product.img_url}
                      download={`Product-${product._id}.jpg`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="outlined"
                        color="primary"
                        startIcon={<AiOutlineDownload />}
                        size="small"
                      >
                        Download
                      </Button>
                    </a>
                  </div>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default GeneratedPageContent;
