import { useState } from "react";
import GeneratedPageContent from "../../components/GeneratedPageContent";
import GeneratedPageFilter from "../../components/GeneratedPageFilter";
import { products, rightSideProducts } from "../generated";

const HistoryPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (id) => {
    setSelectedProduct(id);
  };
  return (
    <div className="-mt-4">
      <p className="text-center text-orange-400 font-bold text-5xl">
        Your Generation History
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
