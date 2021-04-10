import React from 'react';

export default ({ script, children }) => {
    return (
        <html lang="en-us">
            <head>
                <meta charset="utf-8" />
                <title>Getting Started</title>
                <title>Asset Management</title>
            </head>
            <body>
                <div id="react-root">{children}</div>
            </body>
            <script src={script} charSet="UTF-8" />
        </html>
    );
};
