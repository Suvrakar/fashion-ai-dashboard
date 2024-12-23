import { Divider } from "@mantine/core";
import FrameComponent from "./frame-component";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <FrameComponent />
        <div className="w-[90vw] mx-auto">
          <Divider size="xs" color="black" mb={30} />
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="w-full bg-coral-200">
        <div className="flex flex-col items-center justify-center py-4 text-center text-gray-800">
          <div className="relative z-[1] text-lg font-semibold">
            Powered by <span className="text-coral-500">Jano</span>
          </div>
          <div className="text-sm font-medium mt-2">
            Copyright © 2024 | All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DefaultLayout;
