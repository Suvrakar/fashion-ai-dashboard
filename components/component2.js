import Image from "next/image";
import PropTypes from "prop-types";

const Component2 = ({ className = "", property1 = "Frame 21" }) => {
  return (
    <div
      className={`w-[35.5px] h-[31.8px] relative shrink-0 ${className}`}
      data-property1={property1}
    >
      <div className="absolute top-[0px] left-[0px] w-full h-full">
        <div className="absolute top-[31.8px] left-[35.5px] rounded-tl-3xs rounded-tr-none rounded-br-3xs rounded-bl-none border-darkorange border-[1px] border-solid box-border w-full h-full [transform:_rotate(180deg)] [transform-origin:0_0]" />
        <Image
          className="absolute top-[calc(50%_-_5.6px)] left-[calc(50%_-_8.15px)] w-[16.3px] h-[11.2px] z-[1]"
          loading="lazy"
          width={16}
          height={11}
          alt=""
          src="/vector-1.svg"
        />
      </div>
    </div>
  );
};

Component2.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default Component2;
