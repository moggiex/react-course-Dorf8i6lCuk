import Card from '../ui/Card';
import classes from './MeetupList.module.css';

import Card from '../Ui/Card';

function MeetupItem(props) {
	// console.log(classes);
	return (
		<Card>
			<li className={classes.item}>
				<div className={classes.image}>
					<img src={image} alt={title} />
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
					<div className={classes.actions}>
						<button>To Favouries</button>
					</div>
				</div>
			</li>
		</Card>
	);
}

export default MeetupItem;
