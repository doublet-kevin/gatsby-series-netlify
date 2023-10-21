import React, {FunctionComponent} from 'react';
import {Link as GatsbyLink} from "gatsby-link";
import {StaticImage} from "gatsby-plugin-image";
import Layout from "./Layout";

type Props = {
    isOpen: boolean;
};

const MobileNav: FunctionComponent<Props> = ({isOpen}) => {
    return (
        <div className="absolute w-full h-[calc(100%-70px)] text-theme-02 md:hidden">
            <aside className={
                `bg-theme-01 p-2 w-[60%] sm:w-[40%] h-full md:hidden transition ease-in-out delay-10
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`
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
    )
}

export default MobileNav

