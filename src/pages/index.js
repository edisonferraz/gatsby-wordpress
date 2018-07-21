import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {

  return (
    <div>
      {/* {
      data.allWordpressPost.edges.map(({ node }) => (
        <div style={{ marginBottom: 30 }}>
          <Link key={node.slug} to={`posts/${node.slug}`} style={{ color: '#333' }}>
            {node.title}
          </Link>
        </div>
      ))
    } */}
    </div>
  )
}

export default IndexPage


// export const query = graphql`
//   query allPostsQuery {
//     allWordpressPost {
//       edges {
//         node {
//           title
//           slug
//           content
//         }
//       }
//     }
//   }
// `