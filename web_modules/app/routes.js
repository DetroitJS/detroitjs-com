import React, { Component } from "react"
import { Route } from "react-router"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import LayoutContainer from "../LayoutContainer"
import Page from "../layouts/Page"
import PageError from "../layouts/PageError"
import PageLoading from "../layouts/PageLoading"
import Homepage from "../layouts/Homepage"
import Post from "../layouts/Post"

class PageContainer extends Component {
  render() {
    const { props } = this
    return (
      <PhenomicPageContainer
        { ...props }
        layouts={{
          Page,
          PageError,
          PageLoading,
          Homepage,
          Post,
        }}
      />
    )
  }
}

export default (
  <Route component={ LayoutContainer }>
    <Route path="*" component={ PageContainer } />
  </Route>
)
