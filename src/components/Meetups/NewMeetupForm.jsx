import { useRef } from 'react';

import classes from './NewMeetupForm.module.css';

import Card from '../Ui/Card';

const NewMeetupForm = (props) => {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descInputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();
		// console.log(e);

		// const enteredTitle = titleInputRef.current.value;
		// const enteredImage = imageInputRef.current.value;
		// const enteredAddress = addressInputRef.current.value;
		// const enteredDesc = descInputRef.current.value;

		const meetupData = {
			title: titleInputRef.current.value,
			image: imageInputRef.current.value,
			address: addressInputRef.current.value,
			description: descInputRef.current.value,
		};

		console.log(meetupData);

		props.onAddMeetup(meetupData);

		// forward to the parent
	};

	return (
		<>
			<Card>
				<form className={classes.form} onSubmit={submitHandler}>
					<div className={classes.control}>
						<label htmlFor='title'>Meetup Title</label>
						<input type='text' required id='title' ref={titleInputRef} />
					</div>

					<div className={classes.control}>
						<label htmlFor='image'>Meetup Image</label>
						<input type='url' required id='image' ref={imageInputRef} />
					</div>

					<div className={classes.control}>
						<label htmlFor='address'>Meetup Address</label>
						<input type='text' required id='address' ref={addressInputRef} />
					</div>

					<div className={classes.control}>
						<label htmlFor='description'>Meetup Description</label>
						<textarea
							required
							id='description'
							rows='5'
							ref={descInputRef}></textarea>
					</div>

					<div className={classes.actions}>
						<button className=''>Add Meetup</button>
					</div>
				</form>
			</Card>
		</>
	);
};

export default NewMeetupForm;
