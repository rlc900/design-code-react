import { Link } from 'gatsby';
import React from 'react'


const menuData = [
{

    title: "About", 
    icon: "/images/icons/courses.svg", 
    link: "/courses"
}, 
{
    title: "Projects", 
    icon: "/images/icons/tutorials.svg", 
    link: "/tutorials"

},
{
    title: "Contact Info", 
    icon: "/images/icons/pricing.svg", 
    link: "/pricing"
}

];

export default function Header() {
    return (
        <>
        {menuData.map((item, index) => (
            <Link to={item.link} key={index}>
                <img src={item.icon} alt={item.title}/>
                {item.title}
            </Link>
        ))}
        </>
    )
}