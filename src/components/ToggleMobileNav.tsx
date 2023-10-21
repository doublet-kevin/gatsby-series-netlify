import React, {FunctionComponent} from "react";
import {StaticImage} from "gatsby-plugin-image";

type Props = {
    isOpen: boolean
}
const ToggleMobileNav: FunctionComponent<Props> = ({isOpen}) => {
    return (
        <div className="relative h-6 w-6">
            <StaticImage src="../images/icons/close.svg"
                         alt="Icon close navigation"
                         style={{
                             position: 'absolute',
                             inset: 0
                         }}
                         className={`md:hidden transition ease-in-out delay-10 ${isOpen ? "flex scale-100" : "scale-0"}`}
            />
            <StaticImage src="../images/icons/nav-mobile.svg"
                         alt="Icon mobile navigation"
                         style={{
                             position: 'absolute',
                             inset: 0
                         }}
                         className={`md:hidden transition ease-in-out delay-10 ${isOpen ? "scale-0" : "flex scale-100"}`}
            />
        </div>
    )
}

export default ToggleMobileNav