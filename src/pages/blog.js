import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    {
      data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.slug} style={{ marginBottom: 30 }}>
          <Link
            style={{ color: '#333' }}
            to={`post/${node.slug}`}
            dangerouslySetInnerHTML={{ __html: node.title }}>
          </Link>
        </div>
      ))
    }
  </div>
)

export default BlogPage

export const query = graphql`
  query allPostsQuery {
    allWordpressPost {
      edges {
        node {
          title
          slug
          content
        }
      }
    }
  }
`