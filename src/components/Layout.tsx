import React, {FunctionComponent, ReactNode, useState} from "react";
import {StaticImage} from "gatsby-plugin-image"
import {Link as GatsbyLink} from "gatsby"
import MobileNav from "./MobileNav";
import ToggleMobileNav from "./ToggleMobileNav";

type LayoutProps = {
    children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({children}) => {
    const [mobileNavIsOpen, setToggleMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setToggleMobileNav(!mobileNavIsOpen);
    }

    return (
        <div>
            <header className="h-[70px] bg-theme-01 text-theme-02 px-2">
                <div className="flex items-center gap-6 justify-between max-w-7xl m-auto h-full">
                    <div className="inline-flex gap-2">
                        <button onClick={toggleMobileNav} className="inline md:hidden">
                            <ToggleMobileNav isOpen={mobileNavIsOpen} />
                        </button>
                        <GatsbyLink to="/" className="flex-shrink-0">
                            <StaticImage src="../images/layout-logo.svg" alt="GatsbySeries, Application Logo"/>
                        </GatsbyLink>
                    </div>
                    <nav className="inline-flex gap-8 items-center lg:flex-grow flex-shrink-0">
                        <ul className="flex gap-4 items-center flex-grow">
                            <li className="hidden md:inline-flex">
                                <GatsbyLink to="/shows">
                                    <StaticImage src="../images/icons/tv.svg" alt="All shows icon"/>
                                    <span className="ml-1">Parcourir les séries</span>
                                </GatsbyLink>
                            </li>
                            <li className="hidden md:inline-flex">
                                <GatsbyLink to="/news">
                                    <StaticImage src="../images/icons/news.svg" alt="Show news icon"/>
                                    <span className="ml-1">Actualités des séries</span>
                                </GatsbyLink>
                            </li>
                            <li className="hidden relative items-center bg-theme-04 rounded-full flex-grow lg:inline-flex">
                                <button className="absolute flex right-2">
                                    <StaticImage src="../images/icons/search.svg" alt="Search icon"/>
                                </button>
                                <input type="text"
                                       placeholder="Rechercher une série..."
                                       className="flex px-2 w-full h-[30px] text-theme-01 rounded-full"
                                />
                            </li>
                        </ul>
                    </nav>
                    <div className="inline-flex gap-2 flex-shrink-0 lg:hidden">
                        <StaticImage src="../images/icons/user.svg" alt="User icon"/>
                        <span>Mon compte</span>
                    </div>
                    <div className="hidden gap-4 lg:inline-flex">
                        <button>Se connecter</button>
                        <button>S'inscrire</button>
                    </div>
                </div>
            </header>

            <MobileNav isOpen={mobileNavIsOpen}/>


            {children}
        </div>
    )
}

export default Layout