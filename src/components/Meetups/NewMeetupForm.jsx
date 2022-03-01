import React, { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = () => {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descInputRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		const enteredTitle = titleInputRef.current.value;
		const imageTitle = imageInputRef.current.value;
		const addressTitle = addressInputRef.current.value;
		const descTitle = descInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			image: imageTitle,
			address: addressTitle,
			description: descTitle,
		};

		console.log(meetupData);
	};

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'>Meetup Title</label>
					<input type='text' id='title' ref={titleInputRef} required />
				</div>
				<div className={classes.control}>
					<label htmlFor='image'>Meetup Image</label>
					<input type='text' id='image' ref={imageInputRef} required />
				</div>
				<div className={classes.control}>
					<label htmlFor='address'>Address</label>
					<input type='text' id='address' ref={addressInputRef} required />
				</div>
				<div className={classes.control}>
					<label htmlFor='description'>description</label>
					<textarea id='description' ref={descInputRef} required />
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
};

export default NewMeetupForm;
