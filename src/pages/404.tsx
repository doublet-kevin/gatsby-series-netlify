import React, { FunctionComponent } from "react"
import { HeadFC } from "gatsby"

const NotFoundPage: FunctionComponent = () => {
  return (
    <main>
      404
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
