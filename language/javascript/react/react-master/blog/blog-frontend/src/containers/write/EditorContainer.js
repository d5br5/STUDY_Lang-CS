import Editor from "../../components/write/Editor";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialize } from "../../modules/write";
import { useCallback, useEffect } from "react";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector((state) => state.write);
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
