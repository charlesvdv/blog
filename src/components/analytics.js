import React from "react"
import Helmet from "react-helmet"

const Analytics = () => {
    return (
        <Helmet>
            <script async type='text/javascript' src='//gc.zgo.at/count.js'></script>
        </Helmet>
    )
}

export default Analytics