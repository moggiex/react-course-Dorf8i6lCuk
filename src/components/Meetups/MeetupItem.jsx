import classes from './MeetupList.module.css';

const MeetUpItem = ({ image, title, address, description }) => {
	return (
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
	);
};

export default MeetUpItem;
