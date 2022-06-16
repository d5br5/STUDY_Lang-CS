import Post from "./models/post";

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `post #${i}`,
    body: "Lorem ipsum dolor sit amet",
    tags: ["fake", "data"],
  }));

  Post.insertMany(posts, (err, docs) => console.log(docs));
}
