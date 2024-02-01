import css from './HomePage.module.css'
import { Container } from "../../components/Container/Container";

const Home = () => {
	return (
		<div className={css.home}>
			<Container>
				<div className={css.homeWrapper}>
					<p className={css.dude}>Hey dude!</p>
					<p className={css.car}>Still need a car?</p>
					<p className={css.offer}>We offer <span className={css.offerText}>the best engines</span> under the hood.</p>
					<p className={css.go}>GO PICK ONE!!!</p>
				</div>
			</Container>
		</div>
	);
};

export default Home;
