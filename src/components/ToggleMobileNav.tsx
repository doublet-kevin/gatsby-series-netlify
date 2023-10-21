import React, {FunctionComponent} from "react";
import {StaticImage} from "gatsby-plugin-image";

type Props = {
    isOpen: boolean
}
const ToggleMobileNav: FunctionComponent<Props> = ({isOpen}) => {
    return (
        <>
            <StaticImage src="../images/icons/close.svg"
                         alt="Icon close navigation"
                         className={`md:hidden h-6 w-6 transition ease-in-out delay-10 absolute inset-0 ${isOpen ? "flex scale-100" : "scale-0"}`}
            />
            <StaticImage src="../images/icons/nav-mobile.svg"
                         alt="Icon mobile navigation"
                         className={`md:hidden h-6 w-6 transition ease-in-out delay-10 scale-0 ${isOpen ? "scale-0" : "flex scale-100"}`}
            />
        </>
    )
}

export default ToggleMobileNav