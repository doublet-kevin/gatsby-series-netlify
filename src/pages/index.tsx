import React, { FunctionComponent } from "react"
import type { HeadFC } from "gatsby"

const IndexPage: FunctionComponent = () => {
  return (
    <main>
      Home
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
