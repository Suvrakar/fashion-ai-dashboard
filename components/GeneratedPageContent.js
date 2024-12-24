import { Grid, Button } from "@mui/material";
import { AiOutlineDownload } from "react-icons/ai";

const GeneratedPageContent = ({
  products,
  rightSideProducts,
  handleCardClick,
  selectedProduct,
  generationNumber,
  page,
}) => {
  return (
    <div className="flex mx-auto items-center flex-col md:flex-row max-w-full md:items-start justify-evenly lg:gap-5">
      {/* Left Side */}
      <div className="lg:w-[60%] flex justify-center flex-col md:items-start md:px-5">
        <div className="text-lg text-gray-100 flex gap-4 lg:ml-12 ml-4">
          <p>{new Date().toISOString().split("T")[0]}</p>
          <p>Generate # {generationNumber}</p>
        </div>
        <div className="flex justify-center mx-4 items-center w-full">
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            className="mb-16"
          >
            {products.map((product) => {
              const isSelected = selectedProduct === product.id;
              return (
                <Grid item xs={6} sm={6} md={6} lg={4} key={product.id}>
                  <div
                    onClick={() => handleCardClick(product.id)}
                    className="relative w-[160px] h-full lg:w-[260px] lg:h-[380px] max-w-[260px] max-h-[380px]"
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                      cursor: "pointer",
                      border: isSelected ? "2px solid orange" : "",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.brand}
                      className="w-full h-full object-cover"
                    />
                    {/* Conditionally Render the Download Button */}
                    {page === "history" && (
                      <div className="absolute bottom-2 right-2">
                        <a
                          href={product.image}
                          download={`Product-${product.id}.jpg`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="contained"
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
              );
            })}
          </Grid>
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`lg:w-[35%] border rounded-lg ${
          page === "history" && "lg:mt-8"
        }`}
      >
        {page === "generated" && (
          <h1 className="text-5xl text-center font-bold mb-6 ">
            Clothes From Generation
          </h1>
        )}
        {page !== "generated" && <p className="mt-12" />}

        <Grid
          container
          spacing={2}
          className="bg-[#fff1eb] py-4 lg:py-8 px-4 lg:px-10"
        >
          {rightSideProducts.map((product) => (
            <Grid item xs={6} sm={6} md={6} lg={4} key={product.id}>
              <div
                onClick={() => handleCardClick(product.id)}
                className={`p-2 rounded-lg cursor-pointer ${
                  selectedProduct === product.id
                    ? "border-2 border-orange-500"
                    : "border border-gray-200"
                }`}
              >
                <div className="relative mx-auto h-[140px] w-[120px] rounded-lg overflow-hidden mb-2">
                  <img
                    src={product.image}
                    alt={product.brand}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mx-auto flex flex-col items-center">
                  <div className="text-gray-100 text-sm">{product.type}</div>
                  <div className="text-lg text-orange-500">{product.brand}</div>
                  <div className="text-sm font-bold text-gray-500">
                    Color {product.colour}
                  </div>
                  <div className="font-bold text-sm text-orange-500">
                    {product.price}
                  </div>
                </div>

                {/* Conditionally Render the Download Button */}
                {page === "history" && (
                  <div className="mt-2 flex justify-center">
                    <a
                      href={product.image}
                      download={`Product-${product.id}.jpg`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
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
