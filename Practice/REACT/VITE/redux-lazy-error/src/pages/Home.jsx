import React, { useState } from "react";
import { increment, decrement } from "../redux/features/counter/counter";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
	// const [count, setCount] = useState(0);
	const count = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	// const handleCount = (sign) => {
	// 	sign == "+" ? setCount((c) => c + 10) : setCount((c) => c - 1);
	// };
	if (count > 100) {
		throw new Error("Max Count Reached");
	}

	if (count < 0) {
		throw new Error("Negative Value Not Accepted");
	}
	return (
		<div>
			<div>Count is {count}</div>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
};

export default Home;
