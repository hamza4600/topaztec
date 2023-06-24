import styled from "styled-components";

const BenifitWrapper = styled.section`
    display: flex;
    flex-direction: column;

    max-width: 100%;
    padding-bottom: 5rem;
    pointer-events: none;
`;

const CustomerWrapper = styled.div`
    background-color: #f5f6f9;
    padding: 7.857rem 0 5.714rem;

    .inner-cus {
        max-width: 100%;
        padding: 0 4rem;
        position: relative;
    }

    .text {
        font-size: 1.143rem;
        font-weight: 400;
        line-height: 1.5;
        color: #666666;
        margin-bottom: 2.857rem;
    }
    .flex {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
    }
`;

const Stars = styled.div`
    background-image: url("https://itmonks.com/wp-content/themes/it-monks/public/img/icons.svg#star-colored-view");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 1.429rem;
    height: 1.429rem;
    margin-right: 0.714rem;
    display: inline-block;
    vertical-align: middle;
    margin-top: -0.143rem;
    margin-bottom: -0.143rem;
    background-position: 0 0;
    background-size: 100%;
    position: relative;

    // &:nth-child(2) {
    //     background-position: -1.429rem 0;
    //     animation: bounce 1s infinite;
    // }

    // @keyframes bounce {
    //     0% {
    //         transform: translateY(0);
    //     }
    //     50% {
    //         transform: translateY(-0.5rem);
    //     }
    //     100% {
    //         transform: translateY(0);
    //     }
    // }
`;

const UserCardWrapper = styled.div`

    display: flex;
    flex-direction: row;
    gap: 1.429rem;
    align-items: center;

    .img-wrap {
        width: 4.286rem;
        height: 4.286rem;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #e5e5e5;
        flex-shrink: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .text-wrap {
        display: flex;
        flex-direction: column;
        gap: 0.714rem;

        .name {
            font-size: 1.143rem;
            font-weight: 700;
            color: #333333;
        }
        .designation {
            font-size: 0.857rem;
            font-weight: 400;
            color: #666666;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 1.429rem;

        .img-wrap {
            margin-right: 0;
        }
    }

`;

const StarContainer = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<Stars />);
    }
    return <i>{stars}</i>;
};
const UserCard = () => {
    return (
        <>
            <UserCardWrapper>
                <div className="img-wrap">
                    <img
                        src="https://itmonks.com/wp-content/themes/it-monks/public/img/ben.jpeg"
                        alt=""
                    />
                </div>
                <div className="text-wrap">
                    <p className="name">John Doe</p>
                    <p className="designation">CEO, Company Name</p>
                </div>
            </UserCardWrapper>
        </>
    );
};
const CustomerReviews = () => {
    return (
        <CustomerWrapper>
            <div className="inner-cus">
                <div className="text">
                    The team at IT Monks has helped us with various design and
                    development projects. Their unique vision to designing a
                    beautiful conversion friendly website has helped us land
                    more website design projects.
                </div>
                <div className="flex">
                    <UserCard />
                    <StarContainer />
                </div>
            </div>
        </CustomerWrapper>
    );
};

const CompanyWrapper = styled.div`
    min-height: 40vh;
    padding: 5rem 4rem;
    position: relative;

    .flex-con {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }

`;

const TextCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding : 1.25rem;
    height : 100%;

    .head {
        font-size : 1.7rem;
        margin-bottom : 1.7rem;
        font-weight: 600;
        line-height: 1.5;
    }
    .text {
        p {
            font-size : 16px;
            font-weight: 400;
            line-height: 1.5;
            color: #666666;
            margin-bottom: 1.5rem;
        }
    }
    .btn {
        margin-top: 1.5rem;

        button {
            background-color: #f9a825;
            color: #fff;
            border: none;
            padding: 0.714rem 1.429rem;
            border-radius: 0.357rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            cursor: pointer;
        }
    }
`;

const BoxWrapper = styled.div`
    padding : 4.286rem 2.143rem;
    background: linear-gradient(180deg, #F5F6F9 0%, white 100%);
    border-radius: 0.857rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    margin-left: 1.429rem;

    // before

    &:before {
        position: absolute;
        top: 0;
        bottom: auto;
        left: 0;
        right: 0;
        height: 0.714rem;
        background-color: #7055DE;
    }




`;
const TextCard = () => (
        <TextCardWrapper>
            <div className="head">
            Balance your workload with <br />
            our WordPress development team

            </div>
            <div className="text">
                <p>Whether you need help with a couple of web projects per month or a full team of WordPress developers that work directly in your systems, we have you covered.</p>
                <p>
                Our most popular service is to host remote WordPress developers and development teams, but we also offer custom WordPress theme development on a per-project basis where each website is quoted separately.
                </p>
            </div>
            <div className="btn">
                <button>Start a project</button>
            </div>
        </TextCardWrapper>
    )

const TextBox = () => {
    return (
        <BoxWrapper>
            <div className="head">
                <h3>Our WordPress development services</h3>
            </div>
            <div className="text">
                <p>Whether you need help with a couple of web projects per month or a full team of WordPress developers that work directly in your systems, we have you covered.</p>
                <p>
                Our most popular service is to host remote WordPress developers and development teams, but we also offer custom WordPress theme development on a per-project basis where each website is quoted separately.
                </p>
            </div>
        </BoxWrapper>
    )
}

const CompanyBenifts = () => {
    return (
        <CompanyWrapper>
            <div className="flex-con">
                <TextCard />
                <TextBox />
                <TextBox />
            </div>
        </CompanyWrapper>
    );
};

const BenifitSection = () => {
    return (
        <BenifitWrapper>
            <CustomerReviews />
            <CompanyBenifts />
        </BenifitWrapper>
    );
};

export default BenifitSection;
