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
