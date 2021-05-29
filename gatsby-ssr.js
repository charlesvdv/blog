const React = require('react')

exports.onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script defer key='cloudflare-analytics' src='https://static.cloudflareinsights.com/beacon.min.js' 
            data-cf-beacon='{"token": "eae4cbdf21884ec280e2847cffaba09b"}' />
    ])
}
