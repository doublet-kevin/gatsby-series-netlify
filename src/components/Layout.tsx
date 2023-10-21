import React, {FunctionComponent, ReactNode, useState} from "react";
import {StaticImage} from "gatsby-plugin-image"
import {Link as GatsbyLink} from "gatsby"

type LayoutProps = {
    children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({children}) => {
    const [mobileNavIsOpen, setToggleMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setToggleMobileNav(!mobileNavIsOpen);
    }

    return (
        <div className="">
            <header className="h-[70px] bg-theme-01 text-theme-02 px-2">
                <div className="flex items-center gap-6 justify-between max-w-7xl m-auto h-full">
                    <div className="relative inline-flex gap-2">
                        <button onClick={toggleMobileNav}>
                                <StaticImage src="../images/icons/close.svg"
                                             alt="Icon close navigation"
                                             className={`md:hidden h-6 w-6 transition ease-in-out delay-150 absolute inset-0 ${mobileNavIsOpen ? "flex scale-100" : "scale-0"}`}
                                />
                            <StaticImage src="../images/icons/nav-mobile.svg"
                                         alt="Icon mobile navigation"
                                         className={`md:hidden h-6 w-6 transition ease-in-out delay-150 scale-0 ${mobileNavIsOpen ? "scale-0" : "flex scale-100"}`}
                            />
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

            <div className="absolute w-full h-[calc(100%-70px)] text-theme-02 md:hidden">
                <aside className={
                    `bg-theme-01 p-2 w-[60%] sm:w-[40%] h-full md:hidden transition ease-in-out delay-10
                    ${mobileNavIsOpen ? "translate-x-0" : "-translate-x-full"}`
                }>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <GatsbyLink to="/shows">
                                <StaticImage src="../images/icons/tv.svg" alt="All shows icon"/>
                                <span className="ml-1">Parcourir les séries</span>
                            </GatsbyLink>
                        </li>
                        <li>
                            <GatsbyLink to="/news">
                                <StaticImage src="../images/icons/news.svg" alt="Show news icon"/>
                                <span className="ml-1">Actualités des séries</span>
                            </GatsbyLink>
                        </li>
                    </ul>
                </aside>
            </div>
            {children}
        </div>
    )
}

export default Layout