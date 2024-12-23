import Image from "next/image";
import ProductsPane from "../components/products-pane";
import FooterContainer from "../components/footer-container";

const BlogRes = () => {
  return (
    <div className="w-full h-[2547px] relative bg-whitesmoke overflow-hidden leading-[normal] tracking-[normal] text-center text-base text-gray-300 font-poppins">
      <div className="absolute top-[780px] left-[calc(50%_-_1053px)] leading-[160%] font-medium inline-block w-[1241px] h-[26px]">
        Trusted by
      </div>
      <main className="absolute top-[12px] left-[29px] w-[371.4px] h-[2111.2px] flex flex-col items-end justify-start pt-0 px-0 pb-[1403.2px] box-border gap-[35px] max-w-full">
        <div className="self-stretch flex flex-row items-end justify-between pt-0 pb-2.5 pl-px pr-0 gap-5">
          <Image
            className="h-[23.4px] w-[74px] relative object-cover"
            loading="lazy"
            width={74}
            height={23}
            alt=""
            src="/image-51@2x.png"
          />
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[4.2px]">
            <Image
              className="w-[22.4px] h-[14.2px] relative"
              loading="lazy"
              width={22}
              height={14}
              alt=""
              src="/group-1171274864.svg"
            />
          </div>
        </div>
        <ProductsPane />
        <section className="self-stretch flex flex-row items-end justify-start py-0 pl-px pr-0 gap-[14.5px] text-left text-sm-2 text-white font-inter">
          <div className="flex-1 flex flex-col items-end justify-start gap-[31.6px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[10.9px] text-sm-1">
              <div className="self-stretch rounded-5xs-3 overflow-hidden flex flex-row items-start justify-start pt-[212.2px] pb-0 pl-[114px] pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg8@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                <div className="rounded-tl-5xs-3 rounded-tr-none rounded-br-5xs-3 rounded-bl-none bg-gray-400 flex flex-row items-start justify-start py-[4.4px] px-3.5">
                  <b className="relative capitalize inline-block min-w-[35px]">
                    100$
                  </b>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-[7.3px] text-2xs-2 text-dimgray">
                <div className="flex flex-col items-start justify-start gap-[3.7px]">
                  <div className="flex flex-col items-start justify-start gap-[7.3px]">
                    <div className="flex flex-row items-start justify-start gap-[7.3px]">
                      <div className="relative capitalize">Item Code</div>
                      <b className="relative capitalize text-gray-500">
                        SP-240100
                      </b>
                    </div>
                    <div className="w-[108.3px] relative leading-[9.5px] capitalize flex items-center">
                      Dress
                    </div>
                  </div>
                  <b className="relative text-xs-7 capitalize inline-block text-gray-500 min-w-[99px]">{`dolce & gabbana`}</b>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.3px] text-xs-7 text-gray-200">
                  <div className="relative capitalize shrink-0">Orange</div>
                  <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                    <div className="flex flex-row items-center justify-start shrink-0">
                      <div className="h-[9.1px] w-[9.1px] relative rounded-[50%] bg-darkorange" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pl-0.5 pr-0 gap-[14.4px] text-smi">
              <div className="self-stretch rounded-5xs-2 overflow-hidden flex flex-row items-start justify-start pt-[0.3px] pb-0 pl-0.5 pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg9@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="rounded-tl-[7.22px] rounded-tr-none rounded-br-[7.22px] rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-[4.3px] px-3.5">
                  <b className="relative capitalize">100$</b>
                </div>
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-end pt-[210px] px-0 pb-0 bg-[url('/1a9e20d1b77a400ca18ebf959d45f78a-ghostjpg1@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                  <div className="rounded-tl-[7.22px] rounded-tr-none rounded-br-[7.22px] rounded-bl-none bg-gray-400 flex flex-row items-start justify-start pt-[4.3px] px-3.5 pb-[4.4px]">
                    <b className="relative capitalize">100$</b>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-[7.2px] text-2xs-1 text-dimgray">
                <div className="flex flex-col items-start justify-start gap-[3.6px]">
                  <div className="flex flex-col items-start justify-start gap-[7.2px]">
                    <div className="flex flex-row items-start justify-start gap-[7.2px]">
                      <div className="relative capitalize inline-block min-w-[51px]">
                        Item Code
                      </div>
                      <b className="relative capitalize inline-block text-gray-500 min-w-[58px]">
                        SP-240100
                      </b>
                    </div>
                    <div className="w-[107.2px] relative leading-[9.4px] capitalize flex items-center">
                      Dress
                    </div>
                  </div>
                  <b className="relative text-xs-6 capitalize text-gray-500">{`dolce & gabbana`}</b>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.2px] text-xs-6 text-gray-200">
                  <div className="relative capitalize inline-block min-w-[42px]">
                    Orange
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <div className="flex flex-row items-center justify-start">
                      <div className="h-[9px] w-[9px] relative rounded-[50%] bg-darkorange" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[14.6px]">
              <div className="self-stretch rounded-5xs-3 overflow-hidden flex flex-row items-start justify-start pt-[0.2px] pb-0 pl-0.5 pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg10@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="rounded-tl-[7.31px] rounded-tr-none rounded-br-[7.31px] rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-[4.4px] px-3.5">
                  <b className="relative capitalize">100$</b>
                </div>
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-end pt-[212.6px] px-0 pb-0 bg-[url('/567c41cfcb6e4a88b796e0e41a5fdd48-ghostjpg1@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                  <div className="rounded-tl-[7.31px] rounded-tr-none rounded-br-[7.31px] rounded-bl-none bg-gray-400 flex flex-row items-start justify-start py-[4.4px] px-3.5">
                    <b className="relative capitalize inline-block min-w-[35px]">
                      100$
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-[7.3px] text-2xs-2 text-dimgray">
                <div className="flex flex-col items-start justify-start gap-[3.7px]">
                  <div className="flex flex-col items-start justify-start gap-[7.3px]">
                    <div className="flex flex-row items-start justify-start gap-[7.3px]">
                      <div className="relative capitalize">Item Code</div>
                      <b className="relative capitalize inline-block text-gray-500 min-w-[59px]">
                        SP-240100
                      </b>
                    </div>
                    <div className="w-[108.4px] relative leading-[9.5px] capitalize flex items-center">
                      Dress
                    </div>
                  </div>
                  <b className="relative text-xs-7 capitalize inline-block text-gray-500 min-w-[99px]">{`dolce & gabbana`}</b>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.3px] text-xs-7 text-gray-200">
                  <div className="relative capitalize shrink-0">Orange</div>
                  <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                    <div className="flex flex-row items-center justify-start shrink-0">
                      <div className="h-[9.1px] w-[9.1px] relative rounded-[50%] bg-darkorange" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[14.6px]">
              <div className="self-stretch rounded-5xs-3 overflow-hidden flex flex-row items-start justify-start pt-[0.1px] pb-0 pl-0.5 pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg11@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="rounded-tl-[7.31px] rounded-tr-none rounded-br-[7.31px] rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-[4.4px] px-3.5">
                  <b className="relative capitalize">100$</b>
                </div>
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-end pt-[212.7px] px-0 pb-0 bg-[url('/9dab7b5311234ae380534c882ef3e9e1-ghostjpg1@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                  <div className="rounded-tl-[7.31px] rounded-tr-none rounded-br-[7.31px] rounded-bl-none bg-gray-400 flex flex-row items-start justify-start pt-[4.3px] px-3.5 pb-[4.5px]">
                    <b className="relative capitalize inline-block min-w-[35px]">
                      100$
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-[7.3px] text-2xs-2 text-dimgray">
                <div className="flex flex-col items-start justify-start gap-[3.7px]">
                  <div className="flex flex-col items-start justify-start gap-[7.3px]">
                    <div className="flex flex-row items-start justify-start gap-[7.3px]">
                      <div className="relative capitalize">Item Code</div>
                      <b className="relative capitalize inline-block text-gray-500 min-w-[59px]">
                        SP-240100
                      </b>
                    </div>
                    <div className="w-[108.4px] relative leading-[9.5px] capitalize flex items-center">
                      Dress
                    </div>
                  </div>
                  <b className="relative text-xs-7 capitalize inline-block text-gray-500 min-w-[99px]">{`dolce & gabbana`}</b>
                </div>
                <div className="flex flex-row items-start justify-start gap-[7.3px] text-xs-7 text-gray-200">
                  <div className="relative capitalize shrink-0">Orange</div>
                  <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                    <div className="flex flex-row items-center justify-start shrink-0">
                      <div className="h-[9.1px] w-[9.1px] relative rounded-[50%] bg-darkorange" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[14.5px] text-2xs-2">
            <div className="self-stretch rounded-5xs-3 overflow-hidden flex flex-row items-start justify-start pt-[0.1px] px-0 pb-[0.6px] bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg12@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1] text-sm-1">
              <div className="rounded-tl-5xs-3 rounded-tr-none rounded-br-5xs-3 rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-[4.4px] px-3.5">
                <b className="relative capitalize">100$</b>
              </div>
              <div className="flex-1 rounded-5xs-3 overflow-hidden flex flex-row items-start justify-end pt-[211.7px] px-0 pb-0 bg-[url('/1276c66ca75e48f3b4776dd460759352-ghostjpg1@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                <div className="rounded-tl-5xs-3 rounded-tr-none rounded-br-5xs-3 rounded-bl-none bg-gray-400 flex flex-row items-start justify-start py-[4.4px] px-3.5">
                  <b className="relative capitalize inline-block min-w-[35px]">
                    100$
                  </b>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0 pb-[15.7px] pl-0 pr-5 gap-[7.3px] text-dimgray">
              <div className="flex flex-col items-start justify-start gap-[3.7px]">
                <div className="flex flex-col items-start justify-start gap-[7.3px]">
                  <div className="flex flex-row items-start justify-start gap-[7.3px]">
                    <div className="relative capitalize">Item Code</div>
                    <b className="relative capitalize text-gray-500">
                      SP-240100
                    </b>
                  </div>
                  <div className="w-[108.3px] relative leading-[9.5px] capitalize flex items-center">
                    Dress
                  </div>
                </div>
                <b className="relative text-xs-7 capitalize inline-block text-gray-500 min-w-[99px]">{`dolce & gabbana`}</b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[7.3px] text-xs-7 text-gray-200">
                <div className="relative capitalize shrink-0">Orange</div>
                <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                  <div className="flex flex-row items-center justify-start shrink-0">
                    <div className="h-[9.1px] w-[9.1px] relative rounded-[50%] bg-darkorange" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-5xs-3 overflow-hidden flex flex-row items-start justify-start pt-[0.2px] pb-0 pl-0.5 pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg13@3x.png')] bg-cover bg-no-repeat bg-[top] text-sm-2">
              <div className="rounded-tl-[7.31px] rounded-tr-none rounded-br-[7.31px] rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-[4.4px] px-3.5">
                <b className="relative capitalize">100$</b>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-end pt-[212.6px] px-0 pb-0 bg-[url('/bfbda01a64784a5092ded083c58a4cbb-ghostjpg1@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                <div className="rounded-tl-[7.31px] rounded-tr-none rounded-br-[7.31px] rounded-bl-none bg-gray-400 flex flex-row items-start justify-start pt-[4.3px] px-3.5 pb-[4.5px]">
                  <b className="relative capitalize inline-block min-w-[35px]">
                    100$
                  </b>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0 pb-[15.5px] pl-0 pr-5 gap-[7.3px] text-dimgray">
              <div className="flex flex-col items-start justify-start gap-[3.7px]">
                <div className="flex flex-col items-start justify-start gap-[7.3px]">
                  <div className="flex flex-row items-start justify-start gap-[7.3px]">
                    <div className="relative capitalize">Item Code</div>
                    <b className="relative capitalize inline-block text-gray-500 min-w-[59px]">
                      SP-240100
                    </b>
                  </div>
                  <div className="w-[108.4px] relative leading-[9.5px] capitalize flex items-center">
                    Dress
                  </div>
                </div>
                <b className="relative text-xs-7 capitalize inline-block text-gray-500 min-w-[99px]">{`dolce & gabbana`}</b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[7.3px] text-xs-7 text-gray-200">
                <div className="relative capitalize shrink-0">Orange</div>
                <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                  <div className="flex flex-row items-center justify-start shrink-0">
                    <div className="h-[9.1px] w-[9.1px] relative rounded-[50%] bg-darkorange" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-5xs-3 overflow-hidden flex flex-row items-start justify-start pt-[0.2px] pb-0 pl-0.5 pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg14@3x.png')] bg-cover bg-no-repeat bg-[top] text-sm-2">
              <div className="rounded-tl-[7.31px] rounded-tr-none rounded-br-[7.31px] rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-[4.4px] px-3.5">
                <b className="relative capitalize">100$</b>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-end pt-[212.6px] px-0 pb-0 bg-[url('/640c58f6aa994950b4baf2401b1f0951-ghostjpg1@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                <div className="rounded-tl-[7.31px] rounded-tr-none rounded-br-[7.31px] rounded-bl-none bg-gray-400 flex flex-row items-start justify-start py-[4.4px] px-3.5">
                  <b className="relative capitalize inline-block min-w-[35px]">
                    100$
                  </b>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0 pb-[15.5px] pl-0 pr-5 gap-[7.3px] text-dimgray">
              <div className="flex flex-col items-start justify-start gap-[3.7px]">
                <div className="flex flex-col items-start justify-start gap-[7.3px]">
                  <div className="flex flex-row items-start justify-start gap-[7.3px]">
                    <div className="relative capitalize">Item Code</div>
                    <b className="relative capitalize inline-block text-gray-500 min-w-[59px]">
                      SP-240100
                    </b>
                  </div>
                  <div className="w-[108.4px] relative leading-[9.5px] capitalize flex items-center">
                    Dress
                  </div>
                </div>
                <b className="relative text-xs-7 capitalize inline-block text-gray-500 min-w-[99px]">{`dolce & gabbana`}</b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[7.3px] text-xs-7 text-gray-200">
                <div className="relative capitalize shrink-0">Orange</div>
                <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                  <div className="flex flex-row items-center justify-start shrink-0">
                    <div className="h-[9.1px] w-[9.1px] relative rounded-[50%] bg-darkorange" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-5xs-3 overflow-hidden flex flex-row items-start justify-start pt-[0.1px] pb-0 pl-0.5 pr-0 bg-[url('/0476126dc3be4080824b7d3ea6abb41e-ghostjpg15@3x.png')] bg-cover bg-no-repeat bg-[top] text-sm-2">
              <div className="rounded-tl-[7.31px] rounded-tr-none rounded-br-[7.31px] rounded-bl-none bg-gray-400 hidden flex-row items-center justify-center py-[4.4px] px-3.5">
                <b className="relative capitalize">100$</b>
              </div>
              <div className="flex-1 overflow-hidden flex flex-row items-start justify-end pt-[212.7px] px-0 pb-0 bg-[url('/623cf127514741ffaf16ebdd96c0b2f5-ghostjpg1@3x.png')] bg-cover bg-no-repeat bg-[top] z-[1]">
                <div className="rounded-tl-[7.31px] rounded-tr-none rounded-br-[7.31px] rounded-bl-none bg-gray-400 flex flex-row items-start justify-start pt-[4.3px] px-3.5 pb-[4.5px]">
                  <b className="relative capitalize inline-block min-w-[35px]">
                    100$
                  </b>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-[7.3px] text-dimgray">
              <div className="flex flex-col items-start justify-start gap-[3.7px]">
                <div className="flex flex-col items-start justify-start gap-[7.3px]">
                  <div className="flex flex-row items-start justify-start gap-[7.3px]">
                    <div className="relative capitalize">Item Code</div>
                    <b className="relative capitalize inline-block text-gray-500 min-w-[59px]">
                      SP-240100
                    </b>
                  </div>
                  <div className="w-[108.4px] relative leading-[9.5px] capitalize flex items-center">
                    Dress
                  </div>
                </div>
                <b className="relative text-xs-7 capitalize inline-block text-gray-500 min-w-[99px]">{`dolce & gabbana`}</b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[7.3px] text-xs-7 text-gray-200">
                <div className="relative capitalize shrink-0">Orange</div>
                <div className="flex flex-col items-start justify-start pt-[2.4px] px-0 pb-0">
                  <div className="flex flex-row items-center justify-start shrink-0">
                    <div className="h-[9.1px] w-[9.1px] relative rounded-[50%] bg-darkorange" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterContainer />
    </div>
  );
};

export default BlogRes;
