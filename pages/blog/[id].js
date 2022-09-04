import Head from "next/head";
import Date from "../../src/Date";
import Image from "next/image";
import { Container, Typography } from "@mui/material";
const Post = ({ postData }) => {
  return (
    <>
      <Head>
        <title>ANALABS | {postData.title}</title>
        <meta name="description" content={postData.description} />
        <meta property="og:url" content={`/blog/${postData.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:image" content={postData.thumbnail} />
      </Head>
      <Container
        maxWidth="md"
        sx={{
          marginTop: 15,
          marginBottom: "15px",
          padding: 2,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "400px",
            position: "relative",
            border: "1px solid #333",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Image src={postData.thumbnail} alt={postData.title} layout="fill" />
        </div>
      </Container>
      <Container maxWidth="sm" component="section" sx={{ padding: 3 }}>
        <Typography
          sx={{ typography: { md: "h2", sm: "h3", xs: "h4" } }}
          component="h2"
          fontWeight="bold"
          gutterBottom
        >
          {postData.title}
        </Typography>
        <Date dateString={postData.date} />
        <br />
        <div
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          style={{ overflowX: "hidden" }}
        />
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
