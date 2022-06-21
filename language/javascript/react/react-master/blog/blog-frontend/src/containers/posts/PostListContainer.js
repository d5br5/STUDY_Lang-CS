import qs from "qs";
import PostList from "../../components/post/PostList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../../modules/posts";
import { useParams, useLocation } from "react-router-dom";

const PostListContainer = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const location = useLocation();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading["posts/LIST_POSTS"],
      user: user.user,
    }),
  );

  useEffect(() => {
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, username, location]);

  return (
    <PostList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};

export default PostListContainer;
