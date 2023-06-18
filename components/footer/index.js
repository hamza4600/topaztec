import styled from "styled-components";
import img from "../../public/icon/topz.jpg";

import { ItemList, SectionOne, Footer } from "./style";

const deign = [
    { id: 1, name: "digital branding", link: "/" },
    { id: 2, name: "E-commerce design", link: "/" },
    { id: 3, name: "ui/ux design", link: "/" },
];
const develop = [
    { id: 1, name: "web development", link: "/" },
    { id: 2, name: "E-commerce development", link: "/" },
    { id: 3, name: "no code develop", link: "/" },
];
const social = [
    { id: 1, name: "instagram", link: "/" },
    { id: 2, name: "facebook", link: "/" },
    { id: 3, name: "twitter", link: "/" },
];

const CopyWrapper = styled.div`
    margin-top: 2rem;
    border-top: 1px solid black;
    padding-top: 2rem;
    font-size: 13px;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;

    i {
        width: 0.286rem;
        height: 0.286rem;
        background-color: #fff;
        margin: 0 0.5rem;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding-bottom: 2rem;
    }
`;

const FooterItem = ({ title, list }) => {
    return (
        <>
            <ItemList>
                <h2>{title}</h2>
                <ul>
                    {Array.isArray(list) &&
                        list.length !== 0 &&
                        list.map((item) => (
                            <a key={item.id} href={item.link}>
                                {item.name}
                            </a>
                        ))}
                </ul>
            </ItemList>
        </>
    );
};

const RightSide = () => {
    return (
        <>
            <div>
                <div>
                    <img
                        src={img.src}
                        alt="logo"
                        width="100px"
                        height="100px"
                    />
                </div>
                {/* social media icons */}
                <div></div>
            </div>
        </>
    );
};
const CopyRight = () => (
    <>
        <CopyWrapper>
            <span>CopyRight © 2021 Topz</span>
            <i></i>
            <span>All rights reserved</span>
            <i></i>
            <span>Privacy Policy</span>
            <i></i>
            <span>Terms of Service</span>
        </CopyWrapper>
    </>
);
const FooterComponent = () => {
    return (
        <>
            <Footer>
                <SectionOne id="ftone">
                    <div className="col">
                        <RightSide />

                        <div className="row">
                            <FooterItem title="design" list={deign} />
                            <FooterItem title="develop" list={develop} />
                            <FooterItem title="follow" list={social} />
                        </div>
                    </div>
                    <CopyRight />
                </SectionOne>
            </Footer>
        </>
    );
};

export default FooterComponent;
