import style from "./Button2.module.css";
import cn from "classnames";

const Button = ({ size }) => {
	console.log(style);
	return size === "big" ? (
		<button className={cn(style.button, style.big)}>큰 버튼</button>
	) : (
		<button className={`${style.button} ${style.small}`}>작은 버튼</button>
	);
};

export default Button;
