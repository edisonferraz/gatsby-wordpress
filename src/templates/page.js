import React, { Component } from "react"

class PageTemplate extends Component {
  render() {
    const page = this.props.data.wordpressPage

    return (
      <div>
        <small>
          <span dangerouslySetInnerHTML={{ __html: page.slug }} />
          <span> | </span>
          <span dangerouslySetInnerHTML={{ __html: page.date }} />
        </small>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            slug
            content
            date(formatString: "MMMM DD, YYYY")
        }
    }
`