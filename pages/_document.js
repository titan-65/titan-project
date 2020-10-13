import Document, {Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
                          crossOrigin="anonymous"/>
                </Head>
                <body className="position-relative spybody" dataSpy="scroll">
                <Main />
                <NextScript/>
                <script src="/js/vendor/modernizr.min.js"></script>
                <script src="/js/vendor/jquery.js"></script>
                <script src="/js/vendor/bootstrap.min.js"></script>
                <script src="/js/vendor/stellar.js"></script>
                <script src="/js/vendor/particles.js"></script>
                <script src="/js/vendor/masonry.js"></script>
                <script src="/js/vendor/stickysidebar.js"></script>
                <script src="/js/plugins/plugins.min.js"></script>
                <script src="/js/main.js"></script>
                </body>
            </Html>
            )
    }
}

export default MyDocument
