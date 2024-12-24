import { useEffect, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDownSFill, RiMenu3Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Button, Text } from "@mantine/core";
import { useAuth } from "../context/authContext";

const FrameComponent = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const { isAuthenticated, logout, handleGoogleSignIn } = useAuth();
  const router = useRouter();
  const protectedRoutes = ["/profile"];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLoginSignup = () => {
    router.push("/login");
  };

  useEffect(() => {
    if (status === "loading") return;
    if (
      status === "unauthenticated" &&
      protectedRoutes.includes(router.pathname)
    ) {
      router.push("/login");
    }
  }, [status, router.pathname]);

  const isActiveLink = (path) => {
    return router.pathname === path
      ? "text-darkorange font-semibold"
      : "text-gray-100";
  };

  console.log("isAuthenticated", isAuthenticated);
  return (
    <header
      className={`w-full flex flex-col items-center gap-4 pt-4 ${className}`}
    >
      <div className="flex items-center justify-between w-11/12">
        {/* Logo */}
        <div>
          <Image
            loading="lazy"
            width={87}
            height={28}
            alt="Logo"
            src="/image-5@2x.png"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-16 hover:text-darkorange font-medium">
          <Link href="/" className={`${isActiveLink("/")} no-underline`}>
            Home
          </Link>
          <Link
            href="/showroom"
            className={`${isActiveLink("/showroom")} no-underline`}
          >
            Showroom
          </Link>
          <Link
            href="/pricing"
            className={`${isActiveLink("/pricing")} no-underline`}
          >
            Pricing
          </Link>
          <Link
            href="/products"
            className={`${isActiveLink(
              "/products"
            )} flex items-center no-underline`}
          >
            Products
            <RiArrowDownSFill className="text-black" />
          </Link>
          <Link
            href="/blog"
            className={`${isActiveLink("/blog")} no-underline`}
          >
            Blog
          </Link>
        </nav>

        {/* Auth Buttons or Avatar */}
        <div className="hidden md:flex text-gray-100 gap-4 items-center">
          {!isAuthenticated ? (
            <>
              <Button
                variant="filled"
                className="no-underline"
                onClick={handleLoginSignup}
              >
                Login
              </Button>
              <Button
                onClick={() => {
                  router.push("/signup");
                }}
                disableElevation
                variant="light"
                sx={{
                  textTransform: "none",
                  background: "#ff733b",
                  borderRadius: "50px",
                  "&:hover": { background: "#ff733b" },
                }}
              >
                Sign up For Free
              </Button>
            </>
          ) : (
            <>
              {/* History Button */}
              <div className="flex space-x-4">
                <Button
                  variant="light"
                  onClick={() => router.push("/favorites")}
                >
                  <FaHeart className="text-red-600" />
                </Button>

                {/* History Button */}
                <Button variant="light" onClick={() => router.push("/history")}>
                  History
                </Button>
              </div>

              {/* Logout Button */}
              <Button
                variant="outline"
                className="font-bold no-underline"
                onClick={logout}
                size="small"
              >
                Logout
              </Button>

              {/* User Avatar */}
              <Image
                src={
                  session
                    ? session.user?.image
                    : "https://avatar.iran.liara.run/public"
                }
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </>
          )}
        </div>

        {/* Mobile Burger Icon */}
        <div className="block md:hidden">
          <IconButton onClick={toggleMenu}>
            <RiMenu3Line size={24} />
          </IconButton>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
        <div className="w-64 p-4 flex flex-col gap-4">
          <IconButton onClick={toggleMenu} className="self-end">
            <AiOutlineClose size={24} />
          </IconButton>
          <nav className="flex flex-col gap-4 font-medium text-gray-100">
            <Link
              href="/"
              className={`${isActiveLink("/")} no-underline`}
              onClick={toggleMenu}
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              href="/showroom"
              className={`${isActiveLink("/showroom")} no-underline`}
              onClick={toggleMenu}
              style={{ textDecoration: "none" }}
            >
              Showroom
            </Link>
            <Link
              href="/pricing"
              className={`${isActiveLink("/pricing")} no-underline`}
              onClick={toggleMenu}
              style={{ textDecoration: "none" }}
            >
              Pricing
            </Link>
            <Link
              href="/products"
              className={`${isActiveLink(
                "/products"
              )} no-underline flex items-center`}
              onClick={toggleMenu}
              style={{ textDecoration: "none" }}
            >
              <Text>Products </Text>
              <RiArrowDownSFill />
            </Link>
            <Link
              href="/blog"
              className={`${isActiveLink("/blog")} no-underline`}
              onClick={toggleMenu}
              style={{ textDecoration: "none" }}
            >
              Blog
            </Link>
          </nav>

          <div className="flex flex-col mt-4 gap-4">
            {!isAuthenticated ? (
              <>
                <Button
                  variant="filled"
                  className="no-underline rounded-lg"
                  onClick={() => {
                    handleLoginSignup();
                    toggleMenu();
                  }}
                >
                  Login
                </Button>

                <Button variant="outline" onClick={handleGoogleSignIn}>
                  Sign in with Google
                </Button>
                <Button
                  variant="light"
                  onClick={() => {
                    router.push("/signup");
                    toggleMenu();
                  }}
                  disableElevation
                  sx={{
                    textTransform: "none",
                    background: "#ff733b",
                    borderRadius: "50px",
                    "&:hover": { background: "#ff733b" },
                  }}
                >
                  Sign up For Free
                </Button>
              </>
            ) : (
              <>
                {/* History Button */}
                <Button
                  variant="light"
                  size="small"
                  leftSection={<FaHeart className="text-red-600" />}
                  onClick={() => {
                    router.push("/favorites");
                  }}
                >
                  History
                </Button>

                {/* Logout Button */}
                <Button
                  variant="light"
                  size="small"
                  className="text-orange-600 font-bold no-underline mb-4 mt-2"
                  onClick={logout}
                >
                  Logout
                </Button>

                {/* User Avatar */}
                <Image
                  src={
                    session?.user?.image ||
                    "https://avatar.iran.liara.run/public"
                  }
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full self-center"
                />
              </>
            )}
          </div>
        </div>
      </Drawer>
      <div className="w-full border-t border-gray-300 opacity-50" />
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
