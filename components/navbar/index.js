import { useEffect, useState } from "react";
import useWindow from "@/hooks/useWindow";
import Link from "next/link";
import { useRouter } from "next/router";

import { Nav, MobileNav, MobileNavHeader, List } from "./style";

import icon from "../../public/icon/topz.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { SlMenu } from "react-icons/sl";

import { navitems } from "./data";

const MobileNavItems = ({ onClick, current }) => {
    // scroll bar hidden and scroll lock on escape key press close
    useEffect(() => {
        function handleEsc(e) {
            if (e.key === "Escape") {
                onClick();
            }
        }
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.body.style.overflow = "unset";
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <>
            <MobileNav>
                <MobileNavHeader aria-label="mobile nav header">
                    <Link href="/">
                        <img
                            src={icon.src}
                            alt="logo"
                            width="100px"
                            height="90px"
                        />
                    </Link>

                    <div
                        aria-label="close"
                        className="no-outline"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                onClick();
                            }
                        }}
                    >
                        <AiOutlineClose
                            size={25}
                            onClick={onClick}
                            className="cursor"
                            color="white"
                            tabIndex="0"
                            aria-label="close"
                        />
                    </div>
                </MobileNavHeader>
                <hr />

                {navitems.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        aria-label={item.name}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                onClick();
                            }
                        }}
                        aria-current={current === item.link ? "page" : ""}
                        className={current === item.link ? "active" : ""}
                    >
                        {item.name}
                    </a>
                ))}
            </MobileNav>
        </>
    );
};

const NavItem = ({ item, onClick, current, id }) => {
    const active = current === item.link ? true : false;
    return (
        <>
            <Link
                href={item.link}
                aria-label={item.name}
                aria-current={active ? "page" : ""}
                onClick={onClick}
                className={active ? "active" : ""}
                id={id}
            >
                {item.name}
            </Link>
        </>
    );
};

const Navbar = () => {
    const { size } = useWindow();
    const mobile = size.width > 768 ? false : true;

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    const router = useRouter();

    return (
        <>
            <Nav open={open} aria-label="nav" className="max-width">
                <div id="inner">
                    <div id="first">
                        <Link aria-label="logo" href="/">
                            <div>
                                <img
                                    src={icon.src}
                                    alt="logo"
                                    style={{ width: "100px", height: "90px" }}
                                />
                            </div>
                        </Link>
                        <div
                            type="button"
                            aria-label="menu"
                            aria-expanded={open}
                        >
                            {mobile ? (
                                <>
                                    {open ? (
                                        <AiOutlineClose
                                            aria-label="close"
                                            size={28}
                                            onClick={handleOpen}
                                            className="cursor"
                                        />
                                    ) : (
                                        <SlMenu
                                            aria-label="menu"
                                            size={23}
                                            onClick={handleOpen}
                                            className="cursor"
                                            color={"black"}
                                        />
                                    )}
                                </>
                            ) : (
                                <>
                                    <List aria-label="nav list">
                                        {navitems.map((item) => (
                                            <NavItem
                                                key={item.id}
                                                item={item}
                                                current={router.pathname}
                                                id={item?.type}
                                            >
                                                {item.name}
                                            </NavItem>
                                        ))}
                                    </List>
                                </>
                            )}
                            {open && mobile && (
                                <MobileNavItems
                                    onClick={handleOpen}
                                    current={router.pathname}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </Nav>
        </>
    );
};

export default Navbar;
