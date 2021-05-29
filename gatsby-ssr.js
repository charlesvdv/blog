const React = require('react')

exports.onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script defer key='cloudflare-analytics' src='https://static.cloudflareinsights.com/beacon.min.js' 
            data-cf-beacon='{"token": "a240317de69b4bb2a2c02943db0c20b3"}' />
    ])
}