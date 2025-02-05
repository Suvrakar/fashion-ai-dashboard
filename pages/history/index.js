import { useEffect, useState } from "react";
import GeneratedPageContent from "../../components/GeneratedPageContent";
import GeneratedPageFilter from "../../components/GeneratedPageFilter";
import { products, rightSideProducts } from "../generated";

const HistoryPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (id) => {
    setSelectedProduct(id);
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    const fetchHistory = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/klingai/images/history?user_email=${email}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      console.log("history", response);
    };

    fetchHistory();
  }, []);

  useEffect(() => {
    const getGeneratedCloth = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/klingai/images/kolors-virtual-try-on/CmJ8DGePZioAAAAAAmSEdw`
      );
    };
    getGeneratedCloth();
  }, []);

  return (
    <div className="-mt-4">
      <p className="text-center text-orange-400 font-bold text-5xl">
        Generation History
      </p>
      <GeneratedPageFilter />
      {Array.from({ length: 3 }).map((_, index) => (
        <GeneratedPageContent
          key={index}
          products={products}
          rightSideProducts={rightSideProducts}
          selectedProduct={selectedProduct}
          handleCardClick={handleCardClick}
          generationNumber={26 - index}
          page={"history"}
        />
      ))}
    </div>
  );
};

export default HistoryPage;
