const React = require('react')

exports.onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script defer key='cloudflare-analytics' src='https://static.cloudflareinsights.com/beacon.min.js' 
            data-cf-beacon='{"token": "dcade5c9e26f4fed98e085016dd7a91d"}' />
    ])
}
