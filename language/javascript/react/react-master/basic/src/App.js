import ScrollBox from "./05Ref/ScrollBox";
import { Component } from "react";

class App extends Component {
	render() {
		return (
			<div>
				<ScrollBox ref={(ref) => (this.scrollbox = ref)} />
				<button onClick={() => this.scrollbox.scrollToBottom()}>
					맨 밑으로
				</button>
			</div>
		);
	}
}

export default App;
