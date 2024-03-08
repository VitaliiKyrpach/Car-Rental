import css from "./Empty.module.css";
export const Empty = (prop: { case: "empty" | "null" }) => {
	if (prop.case === "empty") {
		return (
			<p className={css.text}>
				<span className={css.bold}>Sorry dude!</span> There are no
				cars found with such parameters.{" "}
				<span className={css.bold}>Slow down</span> your appetites and
				try changing your filter parameters.
				<br /> <span className={css.bro}>Peace out bro!!</span>
			</p>
		);
	}
	if (prop.case === "null") {
		return (
			<p className={css.text}>
				<span className={css.bold}>Sorry dude!</span> There are no
				cars added to favorits. Just go back to the{" "}
				<span className={css.bold}>Catalog page</span> and pick what
				you like.
				<br /> <span className={css.bro}>Peace out bro!!</span>
			</p>
		);
	}
};
