import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import Image from "next/image";
import { LuFilter } from "react-icons/lu";

const GeneratedPageFilter = () => {
  return (
    <div className="max-w-full flex flex-wrap items-start justify-start lg:ml-24 ml-4 gap-2">
      <div className="flex flex-row w-full max-w-full flex-wrap gap-2 lg:gap-6 items-center mt-2 mb-4">
        {/* Filter Icon */}
        <LuFilter className="text-orange-500 w-6 h-6" />

        {/* Date Label */}
        <p className="text-lg text-gray-100">Date</p>

        {/* Date Select */}
        <FormControl
          variant="outlined"
          className="w-[100px] sm:w-[120px] md:w-[140px]"
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "rgba(255, 165, 0, 0.1)", // Light orange background
              borderRadius: "50px", // Rounded border
              height: "34px",
            },
          }}
        >
          <InputLabel className="-mt-2">Today</InputLabel>
          <Select
            label="Select"
            className="text-gray-700"
            sx={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.6)" }}
          >
            <MenuItem value="Option1">Option 1</MenuItem>
            <MenuItem value="Option2">Option 2</MenuItem>
            <MenuItem value="Option3">Option 3</MenuItem>
          </Select>
        </FormControl>

        {/* Search Field */}
        <TextField
          placeholder="Search"
          variant="outlined"
          className="w-[100px] sm:w-[120px] md:w-[140px] text-gray-700"
          InputProps={{
            style: {
              height: "34px",
              backgroundColor: "rgba(9, 15, 50, 0.05)",
              borderRadius: "50px",
              fontSize: "14px",
              color: "rgba(0, 0, 0, 0.6)",
            },
          }}
        />

        {/* Color Selector */}
        <div className="flex items-center gap-1 text-sm">
          <p className="font-bold">Color</p>
          <p className="mr-1">All</p>
          <div className="grid grid-cols-5 gap-1">
            <div className="w-4 h-4 rounded-full bg-darkorange"></div>
            <div className="w-4 h-4 rounded-full bg-green"></div>
            <div className="w-4 h-4 rounded-full bg-pink"></div>
            <div className="w-4 h-4 rounded-full bg-yellow"></div>
            <div className="w-4 h-4 rounded-full bg-black"></div>
            <div className="w-4 h-4 rounded-full bg-purple-700"></div>
            <div className="w-4 h-4 rounded-full bg-purple-300"></div>
            <div className="w-4 h-4 rounded-full bg-blue"></div>
            <div className="w-4 h-4 rounded-full bg-cyan-400"></div>
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
          </div>
        </div>

        {/* Brand Select */}
        <FormControl variant="standard" size="small" className="w-[80px] -mt-4">
          <InputLabel>Brand</InputLabel>
          <Select label="Brand">
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Dolce & Gabbana">Dolce & Gabbana</MenuItem>
          </Select>
        </FormControl>

        {/* Recommended Button */}
        <Button
          variant="standard"
          className="text-black border-darkorange flex gap-1 text-sm font-bold"
        >
          Latest
          <Image
            loading="lazy"
            width={12}
            height={12}
            alt=""
            src="/group-7.svg"
          />
        </Button>
      </div>
    </div>
  );
};

export default GeneratedPageFilter;
