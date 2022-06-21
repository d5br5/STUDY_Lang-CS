import { useDispatch, useSelector } from "react-redux";
import { readPost, unloadPost } from "../../modules/post";
import PostViewer from "../../components/post/PostViewer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PostViewerContainer = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading["post/READ_POST"],
  }));

  useEffect(() => {
    dispatch(readPost(postId));
    return () => dispatch(unloadPost());
  }, [dispatch, postId]);

  return <PostViewer post={post} loading={loading} error={error} />;
};

export default PostViewerContainer;
