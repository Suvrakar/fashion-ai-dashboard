import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

const ProductsPane = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-left text-xs text-gray-400 font-inter ${className}`}
    >
      <TextField
        className="[border:none] bg-[transparent] self-stretch font-inter text-sm text-gray-700"
        placeholder="Search"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "rgba(253, 114, 27, 0.2)" },
          "& .MuiInputBase-root": {
            height: "41px",
            backgroundColor: "rgba(9, 15, 50, 0.05)",
            borderRadius: "50px",
            fontSize: "14px",
          },
          "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.2)" },
        }}
      />
      <div className="w-[357.8px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[7.9px] max-w-full">
          <div className="flex-1 flex flex-col items-end justify-start gap-[18.1px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[21.8px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-1 gap-[10.2px]">
                <div className="flex flex-col items-start justify-start pt-[6.3px] px-0 pb-0 text-sm">
                  <a className="[text-decoration:none] relative capitalize font-semibold text-[inherit]">
                    Color
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start pt-[7.3px] px-0 pb-0">
                  <div className="relative capitalize">All</div>
                </div>
                <div className="h-[29.8px] flex-1 relative">
                  <div className="absolute top-[0px] left-[82px] rounded-[50%] bg-black w-[12.5px] h-[12.5px]" />
                  <div className="absolute top-[17.3px] left-[82px] rounded-[50%] bg-tomato w-[12.5px] h-[12.5px]" />
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkorange w-[12.5px] h-[12.5px]" />
                  <div className="absolute top-[0px] left-[20.5px] rounded-[50%] bg-green w-[12.5px] h-[12.5px]" />
                  <div className="absolute top-[0px] left-[41px] rounded-[50%] bg-pink w-[12.5px] h-[12.5px]" />
                  <div className="absolute top-[0px] left-[61.5px] rounded-[50%] bg-yellow w-[12.5px] h-[12.5px]" />
                  <div className="absolute top-[17.3px] left-[0px] rounded-[50%] bg-indigo w-[12.5px] h-[12.5px]" />
                  <div className="absolute top-[17.3px] left-[20.5px] rounded-[50%] bg-mediumpurple w-[12.5px] h-[12.5px]" />
                  <div className="absolute top-[17.3px] left-[41px] rounded-[50%] bg-blue w-[12.5px] h-[12.5px]" />
                  <div className="absolute top-[17.3px] left-[61.5px] rounded-[50%] bg-mediumslateblue w-[12.5px] h-[12.5px]" />
                </div>
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <div className="relative capitalize">brand</div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[10.3px] pb-0 pl-0 pr-[5px]">
                  <Image
                    className="w-[14.5px] h-[9.5px] relative"
                    loading="lazy"
                    width={15}
                    height={10}
                    alt=""
                    src="/polygon-11.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[7.2px] px-0 pb-0">
                  <div className="relative capitalize">Recomended</div>
                </div>
              </div>
              <div className="w-[97px] flex flex-row items-start justify-start py-0 px-px box-border">
                <FormControl
                  className="h-[15px] flex-1 font-inter font-semibold text-xs text-coral-200 w-auto"
                  variant="standard"
                  sx={{
                    borderTopWidth: "0px",
                    borderRightWidth: "0px",
                    borderBottomWidth: "0px",
                    borderLeftWidth: "0px",
                    borderRadius: "0px 0px 0px 0px",
                    width: "95px",
                    height: "15px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "15px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "15px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "15px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "15px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#ff733b",
                      fontSize: 12,
                      fontWeight: "Semi Bold",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="10.2px"
                        height="6.7px"
                        src="/polygon-2.svg"
                        style={{ marginRight: "4.618527782440651e-14px" }}
                      />
                    )}
                  >
                    <MenuItem>All categories</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </div>
            </div>
            <div className="flex flex-row items-start justify-end pt-0 px-[52px] pb-[6.2px] text-base text-gray-200">
              <div className="w-[211px] rounded-xl overflow-hidden shrink-0 flex flex-col items-start justify-start pt-2.5 px-3 pb-[115px] box-border gap-[179px] bg-[url('/image1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="self-stretch flex flex-row items-start justify-end py-0 px-[9px]">
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <div className="flex flex-row items-start justify-start py-0 pl-[18px] pr-0 text-xl text-gray-400">
                      <h2 className="m-0 relative text-inherit capitalize font-extrabold font-[inherit]">
                        Kristine
                      </h2>
                    </div>
                    <div className="relative capitalize inline-block min-w-[97px]">
                      168 cm / 5'6
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end">
                      <div className="relative capitalize">Size: S</div>
                    </div>
                  </div>
                </div>
                <div className="w-[308.3px] flex flex-row items-start justify-start gap-[316.5px]">
                  <Image
                    className="h-6 w-[14.8px] relative shrink-0"
                    loading="lazy"
                    width={15}
                    height={24}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <Image
                    className="h-6 w-[14.8px] relative shrink-0"
                    loading="lazy"
                    width={15}
                    height={24}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-[69px] text-smi-5 text-dimgray">
              <div className="flex flex-col items-start justify-start gap-[12.6px]">
                <div className="flex flex-row items-start justify-start gap-[7px]">
                  <div className="relative capitalize inline-block min-w-[30px]">
                    tuck
                  </div>
                  <input
                    className="m-0 relative rounded-10xs-1 border-darkslategray border-[0.7px] border-solid"
                    type="checkbox"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[7px] text-base-7 text-gray-200">
                  <div className="relative capitalize font-extrabold">
                    items in dressing room
                  </div>
                  <div className="self-stretch relative text-smi-5 capitalize text-dimgray">
                    click a garment to try it on.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0">
            <Image
              className="w-[5.4px] h-[8.3px] relative"
              loading="lazy"
              width={5}
              height={8}
              alt=""
              src="/group-71.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

ProductsPane.propTypes = {
  className: PropTypes.string,
};

export default ProductsPane;
