import { Button } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

const FooterContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2185.9px] left-[0px] w-full h-[361.1px] flex flex-col items-start justify-start pt-0 px-0 pb-[73.8px] box-border gap-[25px] max-w-full ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[29px] pr-[30px] box-border max-w-full">
        <div className="h-[221px] flex-1 relative max-w-full">
          <Image
            className="absolute top-[0px] left-[0px] w-full h-full object-cover"
            loading="lazy"
            width={370}
            height={221}
            alt=""
            src="/group-41@2x.png"
          />
          <div className="absolute top-[196px] left-[311.4px] rounded-t-none rounded-br-6xs rounded-bl-none bg-coral-100 w-[59px] h-[25px] z-[1]" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[138px] pb-[10.8px]">
        <Button
          className="h-[41.3px] flex-1"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#ff733b",
            borderRadius: "45.6px",
            "&:hover": { background: "#ff733b" },
            height: 41.3,
          }}
        >
          Generate
        </Button>
      </div>
      <footer className="self-stretch bg-coral-200 flex flex-row items-start justify-start pt-[11.6px] pb-[11.7px] pl-[141px] pr-[111px] box-border max-w-full text-left text-3xs text-white font-inter">
        <div className="h-[38.2px] w-[430px] relative bg-coral-200 hidden max-w-full" />
        <div className="flex-1 relative font-medium z-[1]">
          Copyright © 2024 ib-themesinc.
        </div>
      </footer>
    </div>
  );
};

FooterContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterContainer;
