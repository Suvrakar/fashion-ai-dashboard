import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Button,
} from "@mui/material";
import Image from "next/image";

const Filter = () => {
  return (
    <div className="max-w-full lg:w-[80%] xl:w-[60%] flex items-start justify-start ml-4 gap-2">
      <div className="flex justify-between flex-row flex-1 max-w-full items-center mt-2 xl:mb-6">
        <div className="text-sm hidden lg:flex flex-col -space-y-4 lg:mx-12">
          <h1 className="text-orange-500">WOMEN</h1>
          <h1>MEN</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 items-center">
          <TextField
            placeholder="Search"
            variant="outlined"
            className="lg:w-[200px] inline-block sm:w-[140px] md:w-[160px] text-gray-700"
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
          <div className="w-full flex justify-center">
            <div className="flex lg:gap-4 gap-2 items-center">
              <div className="flex items-center gap-1 text-sm">
                <p className="font-bold hidden md:flex">Color</p>
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
              <FormControl
                variant="standard"
                size="small"
                className="w-[80px] -mt-4"
              >
                <InputLabel>Brand</InputLabel>
                <Select label="Brand">
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Dolce & Gabbana">Dolce & Gabbana</MenuItem>
                </Select>
              </FormControl>

              {/* Recommended Button */}
              <Button
                variant="standard"
                className="text-black border-darkorange flex gap-1 text-sm"
              >
                Recommended
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
          <div className="form-group lg:hidden flex justify-between">
            <select
              id="style"
              name="style"
              className="text-sm border-none text-orange-500"
            >
              <option value="" disabled selected className="text-sm">
                All Categories
              </option>
              <option value="Style 1">Style 1</option>
              <option value="Style 2">Style 2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
