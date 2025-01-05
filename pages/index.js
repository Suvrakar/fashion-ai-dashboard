import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import Filter from "../components/Home/Filter";
import Clothes from "../components/Home/Clothes";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import axios from "axios";

const ClothesModal = dynamic(() =>
  import("../components/ClothUploadModal", {
    loading: () => <p>Loading...</p>,
  })
);
const Categories = dynamic(() => import("../components/Home/Categories"), {
  loading: () => <p>Loading...</p>,
});

const selectedProductImage = [
  {
    id: 1,
    image: "/image@3x.png",
  },
];

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 800,
  bgcolor: "background.paper",
  borderRadius: "20px",
  p: 4,
};

const ECommerceProductsSelect = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [imageUrl, setImageUrl] = useState("image1@3x.png");
  const { data: session, status } = useSession();

  const [open, setOpen] = useState(false);

  const fetchProducts = async () => {
    if (status === "authenticated") {
      const email = session?.user?.email || localStorage.getItem("email");
      if (email) {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_BASE_API}/fashion/clothes/email/${email}`
          );
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [status, session]);

  const handleCardClick = (id, isLastProduct) => {
    setSelectedProduct(id);
    const selectedImage = selectedProductImage.find(
      (product) => product.id === id
    );
    setImageUrl(selectedImage ? selectedImage.image : "image1@3x.png");

    if (isLastProduct) {
      setOpen(true);
    }
  };

  console.log("session, status in home pg", session, status);

  return (
    <div className="w-full max-w-full bg-white overflow-hidden flex flex-col items-start justify-start text-left text-lg text-white font-inter">
      <section className="flex flex-col items-start justify-start w-full xl:w-[95%] text-left text-5xl gap-4 lg:gap-6 text-black font-inter">
        <Filter />
        <div className="flex w-full md:w-full mx-auto flex-col-reverse md:flex-row max-w-full md:items-start justify-between gap-2 xl:gap-4">
          {/* Sidebar */}
          <Categories />
          {/* Clothes grid */}
          <Clothes
            selectedProduct={selectedProduct}
            handleCardClick={handleCardClick}
            products={products}
          />

          <div className="flex flex-col items-start justify-start gap-[1.5rem] text-lg text-dimgray">
            {/* <div className="flex w-full flex-col items-start justify-start gap-4 text-lg text-dimgray">
              <div
                className="relative  mx-auto w-[240px] h-[440px] lg:h-[540px] rounded-xl overflow-hidden bg-cover bg-top object-contain"
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <div className="flex flex-col items-end justify-start p-3 h-full">
                  <div className="text-xl text-gray-400 font-extrabold">
                    Kristine
                  </div>
                  <div className="capitalize">168 cm / 5'6</div>
                  <div className="capitalize">Size: S</div>
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full p-2">
                  <Image
                    className="h-6 w-6"
                    loading="lazy"
                    width={15}
                    height={24}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <Image
                    className="h-6 w-6"
                    loading="lazy"
                    width={15}
                    height={24}
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
              </div>
            </div> */}

            <div className="flex flex-row  mx-auto items-start justify-start gap-2.5">
              <div className="relative capitalize">tuck</div>
              <input className="m-0 h-[21px] w-5" type="checkbox" />
            </div>
            <div className="self-stretch w-[90%] flex  mx-auto flex-col items-start justify-start gap-2.5 text-5xl text-gray-200">
              <div className="relative capitalize font-extrabold text-lgi">
                items in dressing room
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-3.5 text-lg">
                <div className="self-stretch flex flex-row items-start justify-start gap-[32.4px] mq450:gap-4">
                  <div className="relative capitalize shrink-0">
                    <span className="font-semibold">Dress</span>
                    <span className="text-dimgray whitespace-pre-wrap">{`,  DOLCE & GABBANA`}</span>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[7.9px] px-0 pb-0">
                    <Image
                      className="w-[6.8px] h-[8.2px] relative shrink-0"
                      loading="lazy"
                      width={7}
                      height={8}
                      alt=""
                      src="/group-49.svg"
                    />
                  </div>
                </div>
                <div className="relative [text-decoration:underline] capitalize text-darkorange inline-block min-w-[110px]">
                  Clear Styling
                </div>
              </div>
            </div>
          </div>
        </div>
        <Suspense fallback={<div>loading...</div>}>
          <ClothesModal
            open={open}
            setOpen={setOpen}
            fetchProducts={fetchProducts}
          />
        </Suspense>
      </section>
    </div>
  );
};

export default ECommerceProductsSelect;
