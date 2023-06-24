import styled from "styled-components";

const ContactWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    max-width: 100%;
    padding: 0 4rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: #f5f6f9;
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
            color: #666666;
        }
    }
`;
const TextPart = ({ head, text }) => {
    return (
        <TextCardWrapper>
            <div className="head">{head}</div>
            <div className="text">
                <p>{text}</p>
            </div>
        </TextCardWrapper>
    );
};


const FormWrapper = styled.div`

    display: flex;
    flex-direction: column;



`;

const InfoWrapper = styled.div`

    display: flex;
    flex-direction: column;

`;

const FormContainer = styled.form`

    display: flex;
    flex-direction: column;

    input {
        background-color: #fff;
        padding: 11px;
        transition: .192s color ease;
        display: inline-block;
        vertical-align: top;
        text-align: left;
        color: #000;
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

    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 1.5rem;


        input {
            width: 48%;
        }
    }

    textarea {
        background-color: #fff;
        padding: 11px;
        transition: .192s color ease;
        display: inline-block;
        vertical-align: top;
        text-align: left;
        color: #000;
        width: 100%;
        font-weight: 400;
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
        margin-top: 1.5rem;
        
        textarea {
            height: 130px;
        }
    }

    .row-aria-2 {
        margin-top: 1.5rem;

    }
`;

const ContactInfo = () => {
    return (
        <InfoWrapper>
            <TextPart
                head="Contact"
                text="Feel free to reach out! We are excited to begin our collaboration!"
            />
        </InfoWrapper>
    );
};

const Form = () => {
    return (
        <>
            <FormContainer>
                <div className="row">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Name" />
                </div>
                <div className="row">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Name" />
                </div>
                <div className="row-aria">
                    <textarea placeholder="Message" />
                </div>
                <div className="row-aria-2">
                    <textarea placeholder="Message" />
                </div>
            </FormContainer>
        </>
    )
}
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
        <ContactWrapper>
            <ContactInfo />
            <ContactForm />
        </ContactWrapper>
    );
};

export default ContactSection;
