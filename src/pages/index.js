import React from 'react'

const IndexPage = ({ data }) => {
  const { title, content } = data.allWordpressPage.edges[0].node;

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query homeQuery {
    allWordpressPage(filter: {
      slug: {eq: "botxo"},
    }
    ){
      totalCount
      edges {
        node {
          title
          content
        }
      }
    }
  }
`