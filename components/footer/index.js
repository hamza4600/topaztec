import img from "../../public/icons/lifetech-footer.png"
import icon from "../../public/icons/lifetech-wt.png"
import { Icon, ItemList, SectionOne, SectionTwo, Footer, ImageWrapper } from "./style";

const deign = [
    {id : 1, name: "digital branding", link: "/"},
    {id : 2, name: "E-commerce design", link: "/"},
    {id : 3, name: "ui/ux design", link: "/"},
]
const develop = [
    {id : 1, name: "web development", link: "/"},
    {id : 2, name: "E-commerce development", link: "/"},
    {id : 3, name: "no code develop", link: "/"},
]
const social = [
    {id : 1, name: "instagram", link: "/"},
    {id : 2, name: "facebook", link: "/"},
    {id : 3, name: "twitter", link: "/"},
]

const FooterItem =({title , list}) => {
    return (
        <>
            <ItemList>
                <h2>{title}</h2>
                <ul>
                    {Array.isArray(list) && list.length !== 0 &&
                        list.map((item) => (    
                            <a key={item.id} href={item.link}>{item.name}</a>
                            ))
                    }
                </ul>
            </ItemList>
        </>
    )
}

const FooterSectionOne = () => (
     <>
            <SectionOne id="ftone">
                <div className="imgwrap">
                    <img src = {icon.src} alt="lifetech" />
                    <h1>applications</h1>
                </div>
                <div className="row">
                    <FooterItem title="design" list={deign} />
                    <FooterItem title="develop" list={develop} />
                    <FooterItem title="follow" list={social} />
                    <FooterSectionTwo showMbl />
                </div>
            </SectionOne>
        </>
)

const FooterSectionTwo = ({...props}) => (
    <>
        <SectionTwo id="ftsctwo" none {...props}>
            <h1>
            Everything begins<br/>
            with an idea. <strong>join us</strong>
            </h1>
            <i>
                <Icon />
            </i>

            <a href="mailto: lifetech@gmail.com">
                lifetech@gmail.com
            </a>
        </SectionTwo>
    </>
)

const FooterComponent = () => {
    return (
        <>
            <Footer>
                    <FooterSectionOne />
                    <FooterSectionTwo />
                    <ImageWrapper>
                        <img src={img.src} alt="lifetech" />
                    </ImageWrapper>
            </Footer>        
        </>
    )
}


export default FooterComponent