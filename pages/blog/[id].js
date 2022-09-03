import Head from "next/head";
import Date from "../../src/Date";
import Image from "next/image";
import { Container, Typography } from "@mui/material";
const Post = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
      </Head>
      <Container
        maxWidth="md"
        sx={{
          border: "1px solid #333",
          borderRadius: "10px",
          padding: "5px",
          marginBottom: "15px",
          marginTop: 15,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "400px",
            position: "relative",
          }}
        >
          <Image src={postData.thumbnail} alt={postData.title} layout="fill" />
        </div>
      </Container>
      <Container maxWidth="sm" component="section">
        <Typography variant="h2" component="h2" fontWeight="bold" gutterBottom>
          {postData.title}
        </Typography>
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Container>
    </>
  );
};

export default Post;

import { getAllPostIds, getPostData } from "../../utils/getBlogs";
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
