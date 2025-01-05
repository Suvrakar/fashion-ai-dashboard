import { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { TiUpload } from "react-icons/ti";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  border: "none",
  outline: "none",
};

const ClothesModal = ({ open, setOpen, fetchProducts }) => {
  const [formData, setFormData] = useState({
    item_code: "",
    category_id: "",
    style_id: "",
    year: "",
    season_id: "",
    price: "",
    color_id: "",
    img_url: "", // Added to track the image preview URL
  });

  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [styles, setStyles] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const categoryResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API}/fashion/categories`
        );
        const styleResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API}/fashion/styles`
        );
        const seasonResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API}/fashion/seasons`
        );
        const colorResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API}/fashion/colors`
        );
        setCategories(categoryResponse.data);
        setStyles(styleResponse.data);
        setSeasons(seasonResponse.data);
        setColors(colorResponse.data);
        console.log(colorResponse.data, " colorResponse");
      } catch (error) {
        console.error("Error fetching dropdown options:", error);
      }
    };
    fetchOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];
    if (uploadedImage) {
      const previewUrl = URL.createObjectURL(uploadedImage); // Generate preview URL
      setImage(uploadedImage);
      setFormData((prevState) => ({
        ...prevState,
        img_url: previewUrl, // Update img_url with preview URL
      }));
    }
  };

  const handleColorSelect = (colorId) => {
    setFormData((prevState) => ({
      ...prevState,
      color_id: colorId, // Set the selected color id
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!session?.user) {
      router.push("/login");
      return;
    }
    const email = localStorage.getItem("email");

    setLoading(true); // Start loading

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("image", image);
    formDataToSubmit.append("item_code", formData.item_code);
    formDataToSubmit.append("category_id", formData.category_id);
    formDataToSubmit.append("style_id", formData.style_id);
    formDataToSubmit.append("year", formData.year);
    formDataToSubmit.append("season_id", formData.season_id);
    formDataToSubmit.append("price", formData.price);
    formDataToSubmit.append("color_id", formData.color_id);
    formDataToSubmit.append("email", email);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_API}/fashion/clothes`,
        formDataToSubmit,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Clothing item uploaded:", response.data);
      // alert("Product uploaded successfully!");
      setOpen(false);

      setFormData({
        item_code: "",
        category_id: "",
        style_id: "",
        year: "",
        season_id: "",
        price: "",
        color_id: "",
        img_url: "",
      });
      setImage(null);

      fetchProducts();
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to upload product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropProps={{
        style: { backgroundColor: "rgba(0, 0, 0, 0.1)" },
      }}
    >
      <Box sx={{ ...modalStyle }}>
        <form onSubmit={handleSubmit}>
          <div className="modal-body flex flex-col md:flex-row gap-6">
            {/* Image Upload Section */}
            <div className="w-[80%] mx-auto">
              <div className="image-upload bg-[#ffe6cc] border-2 border-[#ff733b] rounded-lg w-full md:w-[80%] lg:w-[90%] h-72 flex items-center justify-center text-center py-4 gap-2">
                <div className="text-center w-full h-full flex flex-col">
                  <div className="my-auto max-h-[90%] flex justify-center items-center">
                    {formData.img_url ? (
                      <img
                        src={formData.img_url}
                        alt="Uploaded Preview"
                        className="max-w-[90%] max-h-[90%] object-contain rounded-md"
                      />
                    ) : (
                      <div className="items-center">
                        <TiUpload className="text-orange-500 w-[40px] h-[40px]" />
                        <p className="text-[#ff733b] font-bold mt-0">
                          Image Upload
                        </p>
                      </div>
                    )}
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer text-purple-800 text-lg font-bold opacity-50 mt-auto"
                  >
                    Click to Upload
                  </label>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="form-section w-full md:w-1/2 space-y-6">
              <div className="flex items-center gap-2">
                <label className="w-1/3 font-bold text-black">Item Code</label>
                <TextField
                  variant="outlined"
                  size="small"
                  name="item_code"
                  value={formData.item_code}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              {/* Category Dropdown */}
              <div className="flex items-center gap-2">
                <label
                  htmlFor="category"
                  className="w-1/3 font-bold text-black"
                >
                  Category
                </label>
                <FormControl fullWidth size="small">
                  <InputLabel>Category</InputLabel>
                  <Select
                    id="category"
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                    label="Category"
                    className="w-full"
                  >
                    {categories.map((category) => (
                      <MenuItem key={category._id} value={category._id}>
                        {category.category_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              {/* Style Dropdown */}
              <div className="flex items-center gap-2">
                <label htmlFor="style" className="w-1/3 font-bold text-black">
                  Style
                </label>
                <FormControl fullWidth size="small">
                  <InputLabel>Style</InputLabel>
                  <Select
                    id="style"
                    name="style_id"
                    value={formData.style_id}
                    onChange={handleChange}
                    label="Style"
                    className="w-full"
                  >
                    {styles.map((style) => (
                      <MenuItem key={style._id} value={style._id}>
                        {style.style_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              {/* Season Dropdown */}
              <div className="flex items-center gap-2">
                <label htmlFor="season" className="w-1/3 font-bold text-black">
                  Season
                </label>
                <FormControl fullWidth size="small">
                  <InputLabel>Season</InputLabel>
                  <Select
                    id="season"
                    name="season_id"
                    value={formData.season_id}
                    onChange={handleChange}
                    label="Season"
                    className="w-full"
                  >
                    {seasons.map((season) => (
                      <MenuItem key={season._id} value={season._id}>
                        {season.season_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              {/* Year and Price Fields */}
              <div className="flex items-center gap-2">
                <label className="w-1/3 font-bold text-black">Year</label>
                <TextField
                  type="number"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="w-1/3 font-bold text-black">Price</label>
                <TextField
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              {/* Color Picker Section */}
              <div className="flex items-center gap-2">
                <label htmlFor="color" className="w-1/3 font-bold text-black">
                  Color
                </label>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <div
                      key={color._id}
                      onClick={() => handleColorSelect(color._id)}
                      className={`w-8 h-8 cursor-pointer rounded-full ${
                        formData.color_id === color._id
                          ? "border-4 border-[#ff733b]"
                          : ""
                      }`}
                      style={{
                        backgroundColor: color.hexadecimal_value || "#ccc",
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="w-full mt-6"
                disabled={loading} // Disable the button while loading
              >
                {loading ? "Uploading..." : "Upload Item"}
              </Button>
            </div>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default ClothesModal;
