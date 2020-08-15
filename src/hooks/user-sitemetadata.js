// user-sitemetadata.js
import { useStaticQuery, graphql } from "gatsby" 

const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }    
    `)
    return data.site.siteMetadata
}

export default useSiteMetadata