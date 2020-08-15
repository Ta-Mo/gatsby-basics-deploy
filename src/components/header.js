import React from "react"
//this is inside the Gatsby library 
import { Link, StaticQuery, graphql } from "gatsby" 

const Header = () => (
  <StaticQuery
    query = {graphql`
      query MyQuery {
        site {
          siteMetadata {
            description
            title
          }
        }
      }    
    `}
    render={data => (
      <header>
        <h1>
          <Link to={`/`}>{data.site.siteMetadata.title}</Link>
        </h1>
        <p>
          <em>{data.site.siteMetadata.description}</em>
        </p>
        <nav>
          <ul>
              <li>
                  <Link to={"/"} activeClassName="active">Home</Link>
              </li>
              <li>
                  <Link to={"/about"} activeClassName="active">About</Link>
              </li>
              <li>
                  <Link to={"/blog"} activeClassName="active" partiallyActive={true}>Blog</Link>
              </li>
              <li>
              <Link to={"/photos"} activeClassName="active">Photos</Link>
              </li>
          </ul>
        </nav>
    </header> 
    )}
  />
)
export default Header

