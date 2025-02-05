"use client";

import { useState, useEffect } from "react";
import { Skeleton } from "@mui/material"; // Import Skeleton component

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API}/api/fashion/categories`,
          {
            cache: "no-store",
          }
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const modelData = {
    _id: "66c06746014af42fe7c245cc",
    name: "KRISTINE",
    height: "5'6",
    measurement: "34-24-34",
    size: "S",
    s3_path:
      "https://fashion-ai-generated.s3.eu-west-2.amazonaws.com/models/model_1.png?response-content-disposition=inline&X-Amz-Security-Token=...",
    img_url:
      "https://fashion-ai-generated.s3.eu-west-2.amazonaws.com/user_uploads/1/1_1727229830012_main2.png?response-content-disposition=inline&X-Amz-Security-Token=...",
    upload_timestamp: "2024-08-17T09:03:02.117Z",
    __v: 0,
  };

  return (
    <div className="hidden lg:flex flex-col items-start gap-4 min-w-[260px] w-[15vw] h-[60vh] bg-gray-600 rounded-r-xl border border-b-2 p-10 overflow-hidden text-lg text-gray-100">
      <div className="font-semibold text-coral-200">All categories</div>

      {/* Skeleton loading UI */}
      {loading ? (
        <>
          <Skeleton
            variant="text"
            width="80%"
            height={30}
            // sx={{ marginBottom: 0 }}
          />
          <Skeleton
            variant="text"
            width="70%"
            height={30}
            // sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="text"
            width="60%"
            height={30}
            // sx={{ marginBottom: 1 }}
          />
          <Skeleton
            variant="text"
            width="90%"
            height={30}
            // sx={{ marginBottom: 1 }}
          />
        </>
      ) : (
        categories.map((category, index) => (
          <div key={index}>{category.category_name}</div>
        ))
      )}
    </div>
  );
};

export default Categories;
