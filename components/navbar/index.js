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
                        <div className="img-wrap">
                            <img
                                src={icon.src}
                                alt="logo"
                            />
                        </div>
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
                            color="black"
                            tabIndex="0"
                            aria-label="close"
                            
                        />
                    </div>
                </MobileNavHeader>
               
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
                        onClick={onClick}
                        ref={item?.ref}
                        target={item?.target}
                    >
                        {item.name}
                    </a>
                ))}
            </MobileNav>
        </>
    );
};

const NavItem = ({ item, onClick, current, id , rel , target , active}) => {
    const Active = active === item.link ? true : false;
    return (
        <>
            <Link
                href={item.link}
                aria-label={item.name}
                aria-current={Active ? "page" : ""}
                onClick={onClick}
                className={Active ? "active" : ""}
                id={id}
                rel={rel}
                target={target}

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
    // active link
    const [active, setActive] = useState("");

    // if scroll to other section active link will change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (
                    currentScrollPos >= sectionTop - sectionHeight * 0.25 &&
                    currentScrollPos < sectionTop + sectionHeight * 0.75
                ) {
                    setActive(`#${section.id}`);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
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
                            <div className="img-wrap">
                                <img
                                    src={icon.src}
                                    alt="logo"
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
                                                rel ={item?.rel}
                                                target ={item?.target}
                                                onClick={() => {
                                                    setActive(item.link);
                                                }}
                                                active={active}
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
