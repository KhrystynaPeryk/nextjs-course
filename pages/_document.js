// this _document.js only adds lang='en' to html tag
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    render() {
        return <Html land='en'>
            <Head />
            <body>
                <Main />
                <NextScript />
                <div id='notifications'></div>
            </body>
        </Html>
    }
}

export default MyDocument

