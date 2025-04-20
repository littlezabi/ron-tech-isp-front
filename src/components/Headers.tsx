import React, { useState, useEffect } from "react";
import { Icon } from "@iconify-icon/react";
import { Modal } from "antd";
import Login from "../pages/login";
import SignUp from "../pages/regsiter";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loginOpen, setOpenLogin] = useState(false)
    const [registerOpen, setOpenRegister] = useState(false)

    // Change header background color on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
                ? "bg-[#00000060] bg-opacity-60 backdrop-blur-md h-[50px]"
                : "bg-transparent h-[80px]"
                }`}
        >

<div className="absolute">
            <Modal
                style={{ top: 20 }}
                className="custom-modal"
                open={registerOpen}
                keyboard={true}
                centered={true}
                onCancel={() => setOpenRegister(false)}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
                styles={{ body: { backgroundColor: 'black', color: 'white' } }}
                closeIcon={<Icon icon="mdi:close" style={{ color: 'white' }} />}
            >
                <SignUp/>
            </Modal>


            <Modal
                style={{ top: 20 }}
                className="custom-modal"
                open={loginOpen}
                keyboard={true}
                centered={true}
                onCancel={() => setOpenLogin(false)}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
                styles={{ body: { backgroundColor: 'black', color: 'white' } }}
                closeIcon={<Icon icon="mdi:close" style={{ color: 'white' }} />}
            >
                <Login />
            </Modal>
</div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex justify-between items-center
  ${isScrolled
                        ? "py-2"
                        : "py-4"
                    }
            `}>
                    <div
                        className={`text-3xl font-semibold text-white transition-all duration-300 ${isScrolled ? "text-xl" : "text-3xl"
                            }`}
                    >
                        RonISP
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6">
                        <a
                            href="#home"
                            className={`text-base text-white hover:text-slate-300 duration-300 ${isScrolled ? "text-sm" : "text-base"
                                }`}
                        >
                            Home
                        </a>
                        <a
                            href="#services"
                            className={`text-base text-white hover:text-slate-300 duration-300 ${isScrolled ? "text-sm" : "text-base"
                                }`}
                        >
                            Services
                        </a>
                        <a
                            href="#packages"
                            className={`text-base text-white duration-300 hover:text-slate-300 ${isScrolled ? "text-sm" : "text-base"
                                }`}
                        >
                            Packages
                        </a>
                        <a
                            href="#about"
                            className={`text-base text-white duration-300 hover:text-slate-300 ${isScrolled ? "text-sm" : "text-base"
                                }`}
                        >
                            About
                        </a>
                    </div>

                    {/* Right Side (Login & Register) */}
                    <div className="hidden md:flex space-x-4">
                        <button
                            onClick={() => setOpenLogin(true)}
                            className={`flex outline-none justify-center cursor-pointer items-center text-white pl-4 duration-300 py-2 hover:text-slate-300

  ${isScrolled
                                    ? "text-[11px]"
                                    : "text-xs"
                                }
              `}
                        >
                            <Icon icon="stash:signin" width="18" height="18" />
                            <span className="ml-[4px] block uppercase font-semibold">
                                Login
                            </span>
                        </button>
                        <button
                            onClick={() => setOpenRegister(true)}
                            className={`flex outline-none justify-center cursor-pointer items-center text-white py-2 duration-300 hover:text-slate-300
  ${isScrolled
                                    ? "text-[11px]"
                                    : "text-xs"
                                }
              `}
                        >
                            <Icon icon="lucide:user-round" width="18" height="18" />
                            <span className="ml-[4px] block uppercase font-semibold">
                                Sign up
                            </span>
                        </button>
                    </div>

                    {/* Mobile Hamburger Icon */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white"
                        >
                            <Icon icon="mdi:menu" style={{ fontSize: "2rem" }} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 p-4 md:hidden">
                    <a href="#home" className="block text-white py-2">
                        Home
                    </a>
                    <a href="#services" className="block text-white py-2">
                        Services
                    </a>
                    <a href="#packages" className="block text-white py-2">
                        Packages
                    </a>
                    <a href="#plans" className="block text-white py-2">
                        Plans
                    </a>
                    <a href="#about" className="block text-white py-2">
                        About
                    </a>
                    <a href="#login" className="block text-white py-2">
                        Login
                    </a>
                    <a href="#register" className="block text-white py-2">
                        Register
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
