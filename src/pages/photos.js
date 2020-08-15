import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Photos = () => {
    const data = useStaticQuery(graphql`
      query Images {
          images: allFile(filter: { relativeDirectory: { eq: "gallery" }}) {
          nodes {
            id
            childImageSharp {
               fixed(width: 200, height: 200) {
                 ...GatsbyImageSharpFixed
               }
            }
          }
          }
          image: file(relativePath: {eq: "wolfgang.jpg"}) {
          id
          childImageSharp {
              fixed(width: 400) {
                ...GatsbyImageSharpFixed
              }
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
    `)
    return (
    <Layout>
        <SEO title="Working with Gatsby Image" /> 
        <Img fixed={data.image.childImageSharp.fixed} alt="Pretty Sky"/>
        <Img fluid={data.image.childImageSharp.fluid} alt="Pretty Sky"/>
        <h1> Photos!</h1>
        <div className="gallery">
            {data.images.nodes.map(image => (
                <Img key={image.id} 
                     fixed={image.childImageSharp.fixed} 
                />
            ))}
        </div>

    </Layout>
    )
}
export default Photos