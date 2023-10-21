import React, {FunctionComponent} from "react"
import type {HeadFC} from "gatsby"

import Layout from "../components/Layout";

const IndexPage: FunctionComponent = () => {
    return (
        <Layout>
            <main>
                Home
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
