import Layout from "../../components/Layout";

function BlogID({blog}){
    return(
        <Layout>
            <main className="main">
                <h1 className="title">{blog.title}</h1>
                <p className="publishedAt">{blog.publishedAt}</p>
                <div className="post" dangerouslySetInnerHTML={{__html:`${blog.body}`}}/>
            </main>
        </Layout>
    );
}
export default BlogID;

export const getStaticPaths = async () => {
    const key = {
    headers:{'X-API-KEY':process.env.API_KEY}
    };
    const data = await fetch('https://nakamura-blog.microcms.io/api/v1/blog',key)
                        .then(res => res.json())
                        .catch(()=>null);
    const paths = data.contents.map(content=> `/blog/${content.id}`);
    return{paths, fallback:false};
}

export const getStaticProps = async context => {
    const id = context.params.id;
    const key = {
      headers:{'X-API-KEY':process.env.API_KEY}
    };
    const data = await fetch('https://nakamura-blog.microcms.io/api/v1/blog/'+id,key)
                        .then(res => res.json())
                        .catch(()=>null);
    return{
      props:{
        blog: data
      }
    }
  }