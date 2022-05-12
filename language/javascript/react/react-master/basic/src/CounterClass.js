import { Component } from "react";

class Counter extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		number: 0,
	// 	};
	// }
	state = {
		number: 0,
		fixedNumber: 0,
	};
	render() {
		const { number } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<button
					onClick={() => {
						this.setState(
							(prevState) => ({ number: prevState.number + 1 }),
							() => console.log("방금 setState가 호출되었습니다.")
						);
						// setState 끝난 후 특정 작업 실행하기.
					}}
				>
					+1
				</button>
			</div>
		);
	}
}
