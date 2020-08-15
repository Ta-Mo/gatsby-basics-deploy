import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogListing = () => {
    const data = useStaticQuery(graphql`
        query PostsQuery {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                id
                frontmatter {
                title
                excerpt
                slug
                date(formatString: "MM.DD.YYYY")
                }
            }
            }
        }
    `
    );
    const posts = data.allMdx.nodes
    console.log(posts)

    return (
        <Layout>
          <SEO title="Blog posts!" /> 
          <h1>Blog Posts</h1>
          <hr />
          {posts.map(post => (
            <article key={post.id}>
            <h3>
                <Link to={`/blog/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
            </h3>
            <p>{post.frontmatter.excerpt}</p>
            </article>
          ))}
        </Layout>
    )
}
export default BlogListing