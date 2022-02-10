import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Bands</h1>
    <table>
      <tr>
        <td>NAME</td>
        <td>GENRE</td>
        <td>WEBSITE</td>
      </tr>
      {data.allContentfulBand.edges.map(({node, index}) => (
        <tr key={index}>
          <td>{node.name}</td>
          <td>{node.genre}</td>
          <td>{node.website}</td>
        </tr>
      ))}
    </table>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allContentfulBand {
      edges {
        node {
          website
          name
          genre
        }
      }
    }
  }
`
