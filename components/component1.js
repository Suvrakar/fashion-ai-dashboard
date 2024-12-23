import Image from "next/image";
import PropTypes from "prop-types";

const Component1 = ({ className = "", property1 = "Frame 20" }) => {
  return (
    <div
      className={`h-[31.8px] w-[35.5px] relative shrink-0 ${className}`}
      data-property1={property1}
    >
      <div className="absolute top-[0px] left-[0px] w-full h-full">
        <div className="absolute top-[0px] left-[0px] rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none bg-darkorange w-full h-full" />
        <Image
          className="absolute top-[calc(50%_-_6.9px)] left-[calc(50%_-_7.75px)] w-[15.6px] h-[13.8px] z-[1]"
          loading="lazy"
          width={16}
          height={14}
          alt=""
          src="/vector.svg"
        />
      </div>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default Component1;
