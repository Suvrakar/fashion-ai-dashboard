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
  Button,
} from "@mui/material";
import Image from "next/image";
import FrameComponent from "../components/frame-component";
import Component1 from "../components/component1";
import Component2 from "../components/component2";

const ECommerceProductsSelect = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start text-left text-lg text-white font-inter">
      <main className="w-full relative flex flex-col items-end justify-start max-w-full gap-[1.5rem]">
        <FrameComponent />
        <section className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-5xl text-coral-200 font-inter">
          <div className="flex-1 flex flex-row items-start justify-start gap-5 ">
            <div className="flex flex-col items-start justify-start gap-[19.9px] min-w-[290px]">
              <div className="flex flex-row items-start justify-start ml-16">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <a className="[text-decoration:none] relative uppercase font-semibold text-[inherit]">
                    women
                  </a>
                  <div className="self-stretch relative uppercase text-gray-100">
                    men
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-end py-2 relative text-lg text-gray-100">
                {/* <div className="h-full pt-10 w-full absolute rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none bg-gray-600" /> */}
                <div className="w-full bg-gray-600 rounded-r-xl pl-16 pr-28 border border-b-2 py-20 overflow-hidden flex flex-col gap-6 items-start justify-start ">
                  <div className="mt-[-52px] relative font-semibold text-coral-200">
                    All categories
                  </div>
                  <div className="relative">Dresses</div>
                  <div className="relative inline-block min-w-[89px]">
                    Jumpsuits
                  </div>
                  <div className="relative inline-block min-w-[69px]">
                    Blouses
                  </div>
                  <div className="relative inline-block min-w-[51px]">
                    Shirts
                  </div>
                  <div className="relative">T-shirts</div>
                  <div className="relative inline-block min-w-[85px]">
                    Tank tops
                  </div>
                  <div className="relative inline-block min-w-[43px]">Tops</div>
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[81px]">
                    Sweaters
                  </a>
                  <div className="relative inline-block min-w-[102px]">
                    Sweatshirts
                  </div>
                  <div className="relative inline-block min-w-[88px]">
                    Cardigans
                  </div>
                  <div className="relative inline-block min-w-[64px]">
                    Blazers
                  </div>
                  <a className="[text-decoration:none] relative text-[inherit]">
                    Jackets
                  </a>
                  <div className="relative">Coats</div>
                  <div className="relative">Pants</div>
                  <div className="relative inline-block min-w-[53px]">
                    Jeans
                  </div>
                  <div className="relative inline-block min-w-[55px]">
                    Tights
                  </div>
                  <div className="relative inline-block min-w-[55px]">
                    Bodys
                  </div>
                  <a className="[text-decoration:none] relative text-[inherit]">
                    Shorts
                  </a>
                  <div className="relative">Skirts</div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[506px] max-w-full text-lg text-white mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full">
                <div className="self-stretch flex flex-row items-end justify-start gap-5 text-gray-400 mq750:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[2.5px] box-border min-w-[183px] text-white">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[33.4px]">
                      <TextField
                        className="[border:none] bg-[transparent] w-[235px] font-inter text-lg text-gray-700"
                        placeholder="Search"
                        variant="outlined"
                        sx={{
                          "& fieldset": {
                            borderColor: "rgba(253, 114, 27, 0.2)",
                          },
                          "& .MuiInputBase-root": {
                            height: "46px",
                            backgroundColor: "rgba(9, 15, 50, 0.05)",
                            borderRadius: "50px",
                            fontSize: "18px",
                          },
                          "& .MuiInputBase-input": {
                            color: "rgba(0, 0, 0, 0.2)",
                          },
                          width: "235px",
                        }}
                      />
                      <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                        <div className="self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-between bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg@3x.png')] bg-cover bg-no-repeat bg-[top] gap-5">
                          <Component1 property1="Frame 20" />
                          <div className="flex flex-col items-end justify-start gap-[259px] shrink-0">
                            <Component2 property1="Frame 21" />
                            <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 flex flex-row items-start justify-start py-1.5 pl-5 pr-[19px] shrink-0">
                              <b className="relative capitalize inline-block min-w-[47px]">
                                100$
                              </b>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-2.5 text-sm text-dimgray">
                          <div className="flex flex-col items-start justify-start gap-px">
                            <div className="flex flex-col items-start justify-start gap-2.5">
                              <div className="flex flex-row items-start justify-start gap-2.5">
                                <div className="relative capitalize inline-block min-w-[70px]">
                                  Item Code
                                </div>
                                <b className="relative capitalize inline-block text-gray-500 min-w-[80px]">
                                  SP-240100
                                </b>
                              </div>
                              <div className="w-[148px] relative capitalize flex items-center">
                                Dress
                              </div>
                            </div>
                            <b className="relative text-base capitalize text-gray-500">{`dolce & gabbana`}</b>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-2.5 text-base text-gray-200">
                            <div className="relative capitalize">Orange</div>
                            <div className="flex flex-col items-start justify-start pt-[3.3px] px-0 pb-0">
                              <div className="flex flex-row items-center justify-start">
                                <div className="h-[12.5px] w-[12.5px] relative rounded-[50%] bg-darkorange" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-end justify-start gap-[35.8px] min-w-[183px]">
                    <div className="w-[226.6px] flex flex-row items-start justify-end py-0 px-[15px] box-border">
                      <div className="flex-1 flex flex-row items-start justify-start py-0 pl-0 pr-1.5 gap-[15px]">
                        <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                          <a className="[text-decoration:none] relative capitalize font-semibold text-[inherit] inline-block min-w-[49px]">
                            Color
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                          <a className="[text-decoration:none] relative capitalize text-[inherit]">
                            All
                          </a>
                        </div>
                        <div className="h-[37px] flex-1 relative">
                          <div className="absolute top-[0px] left-[102px] rounded-[50%] bg-black w-[15.5px] h-[15.5px]" />
                          <div className="absolute top-[21.5px] left-[102px] rounded-[50%] bg-tomato w-[15.5px] h-[15.5px]" />
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-darkorange w-[15.5px] h-[15.5px]" />
                          <div className="absolute top-[0px] left-[25.5px] rounded-[50%] bg-green w-[15.5px] h-[15.5px]" />
                          <div className="absolute top-[0px] left-[51px] rounded-[50%] bg-pink w-[15.5px] h-[15.5px]" />
                          <div className="absolute top-[0px] left-[76.5px] rounded-[50%] bg-yellow w-[15.5px] h-[15.5px]" />
                          <div className="absolute top-[21.5px] left-[0px] rounded-[50%] bg-indigo w-[15.5px] h-[15.5px]" />
                          <div className="absolute top-[21.5px] left-[25.5px] rounded-[50%] bg-mediumpurple w-[15.5px] h-[15.5px]" />
                          <div className="absolute top-[21.5px] left-[51px] rounded-[50%] bg-blue w-[15.5px] h-[15.5px]" />
                          <div className="absolute top-[21.5px] left-[76.5px] rounded-[50%] bg-mediumslateblue w-[15.5px] h-[15.5px]" />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-5 text-white">
                      <div className="self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-start pt-[0.3px] px-0 pb-[0.7px] bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                        <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-1.5 px-5">
                          <b className="relative capitalize">100$</b>
                        </div>
                        <div className="flex-1 rounded-3xs overflow-hidden flex flex-row items-start justify-end pt-[290px] px-0 pb-0 bg-[url('/1276c66ca75e48f3b4776dd460759352-ghostjpg@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                          <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 flex flex-row items-start justify-start py-1.5 pl-5 pr-[19px]">
                            <b className="relative capitalize inline-block min-w-[47px]">
                              100$
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start gap-2.5 text-sm text-dimgray">
                        <div className="flex flex-col items-start justify-start gap-px">
                          <div className="flex flex-col items-start justify-start gap-2.5">
                            <div className="flex flex-row items-start justify-start gap-2.5">
                              <div className="relative capitalize inline-block min-w-[70px]">
                                Item Code
                              </div>
                              <b className="relative capitalize inline-block text-gray-500 min-w-[80px]">
                                SP-240100
                              </b>
                            </div>
                            <div className="w-[148px] relative capitalize flex items-center">
                              Dress
                            </div>
                          </div>
                          <b className="relative text-base capitalize text-gray-500">{`dolce & gabbana`}</b>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-2.5 text-base text-gray-200">
                          <div className="relative capitalize">Orange</div>
                          <div className="flex flex-col items-start justify-start pt-[3.3px] px-0 pb-0">
                            <div className="flex flex-row items-center justify-start">
                              <div className="h-[12.5px] w-[12.5px] relative rounded-[50%] bg-darkorange" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1  flex flex-col items-start justify-center gap-[42.9px]">
                    <div className=" flex flex-row items-center justify-start py-0 pr-0 gap-5">
                      <FormControl
                        className="font-inter text-lg text-gray-400"
                        variant="standard"
                        sx={{
                          borderTopWidth: "0px",
                          borderRightWidth: "0px",
                          borderBottomWidth: "0px",
                          borderLeftWidth: "0px",
                          borderRadius: "0px 0px 0px 0px",
                          width: "74.4px",
                          height: "22px",
                          m: 0,
                          p: 0,
                          "& .MuiInputBase-root": {
                            m: 0,
                            p: 0,
                            minHeight: "22px",
                            justifyContent: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInputLabel-root": {
                            m: 0,
                            p: 0,
                            minHeight: "22px",
                            display: "inline-flex",
                          },
                          "& .MuiMenuItem-root": {
                            m: 0,
                            p: 0,
                            height: "22px",
                            display: "inline-flex",
                          },
                          "& .MuiSelect-select": {
                            m: 0,
                            p: 0,
                            height: "22px",
                            alignItems: "center",
                            display: "inline-flex",
                          },
                          "& .MuiInput-input": { m: 0, p: 0 },
                          "& .MuiInputBase-input": {
                            color: "#090f32",
                            fontSize: 18,
                            fontWeight: "Regular",
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
                              width="12px"
                              height="12px"
                              src="/polygon-1-1.svg"
                            />
                          )}
                        >
                          <MenuItem>Brand</MenuItem>
                        </Select>
                        <FormHelperText />
                      </FormControl>
                      <div className="flex flex-row items-center justify-start gap-2.5 ">
                        Recomended
                        {/* <div className="flex flex-col items-start justify-start pt-[5.7px]"> */}
                        <Image
                          className="w-[12px] h-[16px] "
                          loading="lazy"
                          width={7}
                          height={11}
                          alt=""
                          src="/group-7.svg"
                        />
                        {/* </div> */}
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end  text-white">
                      <div className="flex-1 flex flex-col items-start justify-start gap-5">
                        <div className="outline self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-start pt-[0.4px] pb-0 pl-0.5 pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg2@3x.png')] bg-cover bg-no-repeat bg-[top]">
                          <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-1.5 px-5">
                            <b className="relative capitalize">100$</b>
                          </div>
                          <div className="flex-1 overflow-hidden flex flex-row items-start justify-end pt-[290.8px] px-0 pb-0 bg-[url('/1a9e20d1b77a400ca18ebf959d45f78a-ghostjpg@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                            <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 flex flex-row items-start justify-start py-1.5 pl-5 pr-[19px]">
                              <b className="relative capitalize inline-block min-w-[47px]">
                                100$
                              </b>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-2.5 text-sm text-dimgray">
                          <div className="flex flex-col items-start justify-start gap-px">
                            <div className="flex flex-col items-start justify-start gap-2.5">
                              <div className="flex flex-row items-start justify-start gap-2.5">
                                <div className="relative capitalize inline-block min-w-[70px]">
                                  Item Code
                                </div>
                                <b className="relative capitalize inline-block text-gray-500 min-w-[80px]">
                                  SP-240100
                                </b>
                              </div>
                              <div className="w-[148px] relative capitalize flex items-center">
                                Dress
                              </div>
                            </div>
                            <b className="relative text-base capitalize text-gray-500">{`dolce & gabbana`}</b>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-2.5 text-base text-gray-200">
                            <div className="relative capitalize">Orange</div>
                            <div className="flex flex-col items-start justify-start pt-[3.3px] px-0 pb-0">
                              <div className="flex flex-row items-center justify-start">
                                <div className="h-[12.5px] w-[12.5px] relative rounded-[50%] bg-darkorange" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[20.1px] mq450:grid-cols-[minmax(183px,_1fr)] mq750:flex-wrap mq750:justify-center mq750:grid-cols-[repeat(2,_minmax(183px,_317px))]">
                  <div className="h-[437.8px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[113px] box-border gap-[20.1px] min-w-[183px] mq750:pb-[73px] mq750:box-border">
                    <div className="self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-start pt-[0.3px] pb-0 pl-[3px] pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg3@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0">
                      <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-1.5 px-5">
                        <b className="relative capitalize">100$</b>
                      </div>
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-end pt-[290.9px] px-0 pb-0 bg-[url('/bfbda01a64784a5092ded083c58a4cbb-ghostjpg@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                        <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 flex flex-row items-start justify-start py-1.5 pl-5 pr-[19px]">
                          <b className="relative capitalize inline-block min-w-[47px]">
                            100$
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2.5 shrink-0 text-sm text-dimgray">
                      <div className="flex flex-col items-start justify-start gap-px">
                        <div className="flex flex-col items-start justify-start gap-2.5">
                          <div className="flex flex-row items-start justify-start gap-2.5 shrink-0">
                            <div className="relative capitalize inline-block min-w-[70px]">
                              Item Code
                            </div>
                            <b className="relative capitalize inline-block text-gray-500 min-w-[80px]">
                              SP-240100
                            </b>
                          </div>
                          <div className="w-[148px] relative capitalize flex items-center shrink-0">
                            Dress
                          </div>
                        </div>
                        <b className="relative text-base capitalize text-gray-500">{`dolce & gabbana`}</b>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-2.5 text-base text-gray-200">
                        <div className="relative capitalize">Orange</div>
                        <div className="flex flex-col items-start justify-start pt-[3.2px] px-0 pb-0">
                          <div className="flex flex-row items-center justify-start">
                            <div className="h-[12.5px] w-[12.5px] relative rounded-[50%] bg-darkorange" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[437.8px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[113px] box-border gap-[20.1px] min-w-[183px] mq750:pb-[73px] mq750:box-border">
                    <div className="self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-start pt-[0.3px] pb-0 pl-[3px] pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg4@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0">
                      <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-1.5 px-5">
                        <b className="relative capitalize">100$</b>
                      </div>
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start pt-[290.9px] pb-0 pl-[157px] pr-0 bg-[url('/567c41cfcb6e4a88b796e0e41a5fdd48-ghostjpg@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                        <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 flex flex-row items-start justify-start py-1.5 pl-5 pr-[19px]">
                          <b className="relative capitalize inline-block min-w-[47px]">
                            100$
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2.5 shrink-0 text-sm text-dimgray">
                      <div className="flex flex-col items-start justify-start gap-px">
                        <div className="flex flex-col items-start justify-start gap-2.5">
                          <div className="flex flex-row items-start justify-start gap-2.5 shrink-0">
                            <div className="relative capitalize inline-block min-w-[70px]">
                              Item Code
                            </div>
                            <b className="relative capitalize inline-block text-gray-500 min-w-[80px]">
                              SP-240100
                            </b>
                          </div>
                          <div className="w-[148px] relative capitalize flex items-center shrink-0">
                            Dress
                          </div>
                        </div>
                        <b className="relative text-base capitalize text-gray-500">{`dolce & gabbana`}</b>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-2.5 text-base text-gray-200">
                        <div className="relative capitalize">Orange</div>
                        <div className="flex flex-col items-start justify-start pt-[3.2px] px-0 pb-0">
                          <div className="flex flex-row items-center justify-start">
                            <div className="h-[12.5px] w-[12.5px] relative rounded-[50%] bg-darkorange" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[437.8px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[113px] box-border gap-[20.1px] min-w-[183px] mq750:pb-[73px] mq750:box-border">
                    <div className="self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-start pt-[0.3px] pb-0 pl-0.5 pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg5@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0">
                      <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-1.5 px-5">
                        <b className="relative capitalize">100$</b>
                      </div>
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-end pt-[290.9px] px-0 pb-0 bg-[url('/640c58f6aa994950b4baf2401b1f0951-ghostjpg@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                        <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 flex flex-row items-start justify-start py-1.5 pl-5 pr-[19px]">
                          <b className="relative capitalize inline-block min-w-[47px]">
                            100$
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2.5 shrink-0 text-sm text-dimgray">
                      <div className="flex flex-col items-start justify-start gap-px">
                        <div className="flex flex-col items-start justify-start gap-2.5">
                          <div className="flex flex-row items-start justify-start gap-2.5 shrink-0">
                            <div className="relative capitalize inline-block min-w-[70px]">
                              Item Code
                            </div>
                            <b className="relative capitalize inline-block text-gray-500 min-w-[80px]">
                              SP-240100
                            </b>
                          </div>
                          <div className="w-[148px] relative capitalize flex items-center shrink-0">
                            Dress
                          </div>
                        </div>
                        <b className="relative text-base capitalize text-gray-500">{`dolce & gabbana`}</b>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-2.5 text-base text-gray-200">
                        <div className="relative capitalize">Orange</div>
                        <div className="flex flex-col items-start justify-start pt-[3.2px] px-0 pb-0">
                          <div className="flex flex-row items-center justify-start">
                            <div className="h-[12.5px] w-[12.5px] relative rounded-[50%] bg-darkorange" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-5 max-w-full mq750:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-5 min-w-[243.6px] mq750:flex-1">
                    <div className="self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-start pt-[0.1px] pb-0 pl-[3px] pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg6@3x.png')] bg-cover bg-no-repeat bg-[top]">
                      <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-1.5 px-5">
                        <b className="relative capitalize">100$</b>
                      </div>
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-end pt-[290.9px] px-0 pb-0 bg-[url('/9dab7b5311234ae380534c882ef3e9e1-ghostjpg@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] mq750:flex-1">
                        <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 flex flex-row items-start justify-start py-1.5 pl-5 pr-[19px]">
                          <b className="relative capitalize inline-block min-w-[47px]">
                            100$
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-2.5 text-sm text-dimgray">
                      <div className="flex flex-col items-start justify-start gap-px">
                        <div className="flex flex-col items-start justify-start gap-2.5">
                          <div className="flex flex-row items-start justify-start gap-2.5">
                            <div className="relative capitalize inline-block min-w-[70px]">
                              Item Code
                            </div>
                            <b className="relative capitalize inline-block text-gray-500 min-w-[80px]">
                              SP-240100
                            </b>
                          </div>
                          <div className="w-[148px] relative capitalize flex items-center">
                            Dress
                          </div>
                        </div>
                        <b className="relative text-base capitalize text-gray-500">{`dolce & gabbana`}</b>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-2.5 text-base text-gray-200">
                        <div className="relative capitalize">Orange</div>
                        <div className="flex flex-col items-start justify-start pt-[3.3px] px-0 pb-0">
                          <div className="flex flex-row items-center justify-start">
                            <div className="h-[12.5px] w-[12.5px] relative rounded-[50%] bg-darkorange" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[20.1px] min-w-[330px] max-w-full mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[159px] shrink-0">
                      <div className="self-stretch rounded-3xs overflow-hidden flex flex-row items-start justify-start pt-[0.1px] pb-0 pl-[3px] pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg7@3x.png')] bg-cover bg-no-repeat bg-[top]">
                        <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-1.5 px-5">
                          <b className="relative capitalize">100$</b>
                        </div>
                        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start pt-[290.9px] pb-0 pl-[157px] pr-0 bg-[url('/623cf127514741ffaf16ebdd96c0b2f5-ghostjpg@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                          <div className="rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-gray-400 flex flex-row items-start justify-start py-1.5 pl-5 pr-[19px]">
                            <b className="relative capitalize inline-block min-w-[47px]">
                              100$
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="w-[221.8px] flex flex-col items-start justify-start gap-10 text-sm text-dimgray">
                        <div className="flex flex-col items-start justify-start gap-2.5">
                          <div className="flex flex-col items-start justify-start gap-px">
                            <div className="flex flex-col items-start justify-start gap-2.5">
                              <div className="flex flex-row items-start justify-start gap-2.5">
                                <div className="relative capitalize inline-block min-w-[70px]">
                                  Item Code
                                </div>
                                <b className="relative capitalize inline-block text-gray-500 min-w-[80px]">
                                  SP-240100
                                </b>
                              </div>
                              <div className="w-[148px] relative capitalize flex items-center">
                                Dress
                              </div>
                            </div>
                            <b className="relative text-base capitalize text-gray-500">{`dolce & gabbana`}</b>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-2.5 text-base text-gray-200">
                            <div className="relative capitalize">Orange</div>
                            <div className="flex flex-col items-start justify-start pt-[3.3px] px-0 pb-0">
                              <div className="flex flex-row items-center justify-start">
                                <div className="h-[12.5px] w-[12.5px] relative rounded-[50%] bg-darkorange" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[21px] pr-0">
                          <Button
                            className="h-[54px] flex-1"
                            disableElevation
                            variant="contained"
                            sx={{
                              textTransform: "none",
                              color: "#fff",
                              fontSize: "18",
                              background: "#ff733b",
                              borderRadius: "60px",
                              "&:hover": { background: "#ff733b" },
                              height: 54,
                            }}
                          >
                            Generate
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Image
                      className="h-[324.8px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[159px] shrink-0"
                      loading="lazy"
                      width={244}
                      height={325}
                      alt=""
                      src="/group-4@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[281px] flex flex-col items-start justify-start pt-[87.9px] px-0 pb-0 box-border text-base text-gray-200 mq450:pt-[37px] mq450:box-border mq1050:hidden mq1050:pt-[57px] mq1050:box-border">
            <div className="self-stretch h-[700.4px] flex flex-col items-start justify-start pt-0 px-0 pb-[154.4px] box-border gap-[18.4px] mq450:pb-[65px] mq450:box-border mq1050:pb-[100px] mq1050:box-border">
              <div className="self-stretch rounded-xl overflow-hidden flex flex-col items-end justify-start pt-2.5 px-3 pb-[261px] gap-[179px] bg-[url('/image@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 mq450:gap-[89px] mq750:pt-5 mq750:pb-[170px] mq750:box-border">
                <div className="flex flex-row items-start justify-end py-0 px-[7px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                    <div className="flex flex-row items-start justify-start py-0 pl-[18px] pr-0 text-xl text-gray-400">
                      <div className="relative capitalize font-extrabold mq450:text-base">
                        Kristine
                      </div>
                    </div>
                    <div className="relative capitalize inline-block min-w-[97px]">
                      168 cm / 5'6
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end">
                      <div className="relative capitalize">Size: S</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between py-0 pl-px pr-0 gap-5">
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
                    src="/vector-3.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-lg text-dimgray">
                <div className="flex flex-row items-start justify-start gap-2.5">
                  <div className="relative capitalize">tuck</div>
                  <input className="m-0 h-[21px] w-5" type="checkbox" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-2.5 text-5xl text-gray-200">
                  <div className="relative capitalize font-extrabold mq450:text-lgi">
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
          </div>
        </section>
      </main>
      <div className="bg-coral-200 w-full flex flex-row items-start justify-center pt-[18.5px] pb-[18.6px] pl-[591px] pr-[567px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[295px] mq750:pr-[283px] mq750:box-border">
        <footer className="h-[59.1px] relative bg-coral-200 hidden max-w-full" />
        <div className="relative font-medium z-[1]">
          Copyright © 2024 ib-themesinc.
        </div>
      </div>
    </div>
  );
};

export default ECommerceProductsSelect;
