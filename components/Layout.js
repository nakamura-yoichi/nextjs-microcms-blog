import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout(props){
    return(
        <div>
            <Head>
                <title>next-microcms-blog</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
            </Head>
            <Header/>
                {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;