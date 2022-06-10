import Counter from "../components/Counter";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { increase, decrease } from "../modules/counter";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;

// const mapStateToProps = (state) => ({ number: state.counter.number });

// const mapDispatchToProps = { increase, decrease };
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => dispatch(increase()),
//   decrease: () => dispatch(decrease()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// export default connect(
//   (state) => ({ number: state.counter.number }),
//   (dispatch) => bindActionCreators({ increase, decrease }, dispatch),
// )(CounterContainer);
