import Link from 'next/link';
import Layout from '../components/Layout';

function Home({blog}) {
  return (
    <Layout>
      <main className="main">
        <h2>記事一覧だよ</h2>
        <ul>
          {blog.map(blog =>( 
            <li>
              <Link href={`blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}
export default Home;

export const getStaticProps = async () => {
  const key = {
    headers:{'X-API-KEY':process.env.API_KEY}
  };
  const data = await fetch('https://nakamura-blog.microcms.io/api/v1/blog',key)
                      .then(res => res.json())
                      .catch(()=>null);
  return{
    props:{
      blog: data.contents
    }
  }
}
