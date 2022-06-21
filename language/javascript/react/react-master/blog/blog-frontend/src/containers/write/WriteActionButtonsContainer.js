import WriteActionButtons from "../../components/write/WriteActionButtons";
import { useSelector, useDispatch } from "react-redux";
import { writePost } from "../../modules/write";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const WriteActionButtonsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, body, tags, post, postError } = useSelector(
    (state) => state.write,
  );

  const onPublish = () => {
    dispatch(writePost({ title, body, tags }));
  };
  const onCancel = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      navigate(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [post, postError, navigate]);

  return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonsContainer;
