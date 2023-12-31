import styled from "styled-components";
import { useState } from "react";

import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const ContactWrapper = styled.section`
    .inner {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        gap: 2rem;
    }

    max-width: 100%;
    padding: 0 4rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: ${({ theme }) => theme.benifit.background};

    @media screen and (max-width: 768px) {
        padding : 0 1rem;
        padding-top: 1rem;
        padding-bottom: 3rem;
        .inner {
            flex-direction : column;
        }
    }
`;

const TextCardWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .head {
        font-size: 30px;
        margin-bottom: 1.7rem;
        font-weight: 600;
        line-height: 1.5;
    }
    .text {
        p {
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
            color: ${({ theme }) => theme.benifit.text};
        }
    }
`;
const TextPart = ({ head, text }) => (
        <TextCardWrapper>
            <div className="head">{head}</div>
            <div className="text">
                <p>{text}</p>
            </div>
        </TextCardWrapper>
    );

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
        padding-top: 1.5rem;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 768px) {
        display : none;
    }
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;

    input {
        background-color: ${({ theme }) => theme.benifit.inputs};
        padding: 11px;
        display: inline-block;
        vertical-align: top;
        text-align: left;
        color: ${({ theme }) => theme.benifit.text};
        width: 100%;
        font-weight: 400;
        border: 0.071rem solid #c1c5cf;
        border-radius: 0.357rem;
        font-size: 14px;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #666666;
        }

        // disabled
        &:disabled {
            background-color: #f5f5f5;
            color: #666666;
            border: 0.071rem solid #c1c5cf;
            cursor: not-allowed;
        }

        // if number type dont show arrows
        &[type="number"] {
            -moz-appearance: textfield;
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;

            }
        }
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 1rem;

        input {
            width: 48%;
        }
    }

    textarea {
        background-color:  ${({ theme }) => theme.benifit.inputs};
        padding: 11px;
        display: inline-block;
        vertical-align: top;
        text-align: left;
        color: ${({ theme }) => theme.benifit.text};
        width: 100%;
        font-weight: 400;
        font-family: inherit;
        border: 0.071rem solid #c1c5cf;
        border-radius: 0.357rem;
        font-size: 14px;
        height: 80px;
        resize: none;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: #666666;
        }
    }

    .row-aria {
        margin-top: 1rem;

        textarea {
            height: 90px;
        }
    }

    .row-aria-2 {
        margin-top: 1rem;
    }

    .checkbox {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 1rem;

        input {
            width: 15px;
            height: 15px;
            cursor: pointer;
        }

        label {
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
            color: ${({ theme }) => theme.benifit.text};
        }
    }

    .btn-box {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top: 1rem;

        button {
            background-color: #7055DE;
            color: #fff;
            padding: 11px 20px;
            outline: none;
            border: 1px solid white;
            border-radius: 0.357rem;
            font-size: 14px;
            font-weight: 400;
            cursor: pointer;

            &:hover {
                background-color: #fff;
                color: #000;
                border: 0.071rem solid #000;
            }

            // disabled
            &:disabled {
                background-color: #7055DF;
                color: #fff;
                border: 0.071rem solid #7055DF;
                cursor: not-allowed;
            }
        }

        .text {
            color: ${({ theme }) => theme.benifit.text};;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
        }
    }

    @media screen and (max-width: 768px) {
        .row {
            flex-direction : column;
            gap: 1rem;

            input {
                width: 100%;
            }
        }
    }
`;

const IconWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
    list-style: none;
    margin-bottom: 2.5rem;
`;

const Item = styled.li`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.benifit.text};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
        color: ${({ theme }) => theme.benifit.text};;
    }

    &:hover {
        background-color: ${(props) => props.hoverColor};

        svg {
            color: white;
        }
    }
`;

const SocialIcons = () => (
        <IconWrapper>
            <Item hoverColor="#0077b5">
                <a href="https://www.linkedin.com/company/topaztec"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedinIn />
                </a>
            </Item>
            <Item hoverColor="#1778f2">
                <a href="https://www.facebook.com/topaztec"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebookF />
                </a>
            </Item>
            <Item hoverColor="#d9317a">
                <a href="https://www.instagram.com/topaztec"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsInstagram />
                </a>
            </Item>
            <Item hoverColor="#1769ff">
                <a href="https://twitter.com/topaztec"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <BsTwitter />
                </a>
            </Item>
        </IconWrapper>
    );

const Card = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.429rem;

    border-top: 1px solid #d8dbe2;
    padding-top: 2.857rem;
    width: 60%;

    .img-wrap {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 1rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .detail {
        h3 {
            font-size: 16px;
            font-weight: 500;
            line-height: 1.5;
            color: ${({ theme }) => theme.benifit.text};;
        }

        p {
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
            color: ${({ theme }) => theme.benifit.text};;
        }

        a {
            font-size: 13px;
            font-weight: 400;
            line-height: 1.5;
            color: #7055de;
            text-decoration: none;
            transition: all 0.3s ease-in-out;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

// contact User
const ContactUserCrad = () => (
        <Card>
            <div className="img-wrap">
                <img src="/images/avatar.jpg" alt="Azar" />
            </div>
            <div className="detail">
                <h3>Alex</h3>
                <p>Expert</p>
                <a href="mailto: topaztec@outlook.com">topaztec@outlook.com</a>
            </div>
        </Card>
    );

const ClutchWrapper = styled.div`
    
    margin-top: 2.857rem;
    display: flex;
    flex-direction: row;
    gap: 1.429rem;

    .img-wrap {
        width: 60px;
        height: 60px;
        margin-bottom: 1rem;
    }


    .stars-box {
        display: flex;
        flex-direction: row;
        gap: 0.357rem;
        margin-top: 0.357rem;

        img {
            margin-right: 0.357rem;
            width: 20px;
            height: 20px;

            &:last-child {
                margin-right: 0;
            }

        }
    }

    .txt {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        color: ${({ theme }) => theme.benifit.text};;
        margin-bottom: 0.357rem;
    }

`;

const Clutch = () => {

    let star = [];
    for (let i = 0; i < 5; i++) {
        star.push(
            <img
                src="https://itmonks.com/wp-content/themes/it-monks/public/img/icons.svg#star-view"
                alt="star"
            />
        );
    }

    return (
        <ClutchWrapper>
            <div className="img-wrap">
                <img
                    srcSet="https://itmonks.com/wp-content/themes/it-monks/public/img/clutch@1x.webp"
                    type="image/webp"
                    alt="clutch"
                />
            </div>
            <div>
                <span className="txt">Reviews on Clutch</span>
                <div className="stars-box">
                    <span>{star}</span>
                </div>
            </div>
        </ClutchWrapper>
    );
};

const ContactInfo = () => (
        <InfoWrapper>
            <TextPart
                head="Contact"
                text="Feel free to reach out! We are excited to begin our collaboration!"
            />
            <SocialIcons />
            <ContactUserCrad />
            <Clutch />
        </InfoWrapper>
    );


const Form = () => {
    
    // submit form
    const [form, setForm] = useState({
        name: "",
        email: "",
        website: "",
        phone: "",
        description: "",
        where: "",
        checkbox: false,
    });

    // show popup
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        // setShow(true);
        // only show pop up for 3s
    };

    return (
        <>
            <FormContainer>
                <div className="row">
                    <input type="text" placeholder="Name" 
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    />
                    <input type="email" placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div className="row">
                    <input type="url" placeholder="Website"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    />
                    <input type="number" placeholder="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    />
                </div>
                <div className="row-aria">
                    <textarea placeholder="Description of project"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    />
                </div>
                <div className="row-aria-2">
                    <textarea placeholder="Where did you find us?"
                    name="where"
                    value={form.where}
                    onChange={handleChange}
                    />
                </div>

                <div className="checkbox">
                    <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value={form.checkbox}
                        onChange={handleChange}
                    />
                    <label for="vehicle1">
                        I agree to the <a href="#">Privacy Policy</a>
                    </label>
                </div>
                <div className="btn-box">
                    <button type="submit"
                        aria-label="submit"
                        aria-describedby="submit"
                        onClick={handleSubmit}
                    >
                        Send
                    </button>
                    <div className="text">
                        <p>
                            <strong>Note</strong> We will not spam you and your
                            contact information will not be shared.
                        </p>
                    </div>
                </div>
            </FormContainer>
            {/* <Popup show={show} setShow={setShow} /> */}
        </>
    );
};

const ContactForm = () => {
    return (
        <FormWrapper>
            <TextPart
                head="Send a Project Brief"
                text="Fill out and send a form. Our Advisor Team will contact you promptly!."
            />
            <Form />
        </FormWrapper>
    );
};
const ContactSection = () => {
    return (
        <ContactWrapper
            id="contact"
            className="section"
            data-aos="fade-up"
            data-aos-duration="1000"
            aria-label="contact"
            aria-describedby="contact"
        >
            <div className="inner">
                <ContactInfo />
                <ContactForm />
            </div>
        </ContactWrapper>
    );
};

export default ContactSection;
