import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/Meetups/NewMeetupForm';

const NewMeetup = () => {
	const navigate = useNavigate();

	const addMeetupHandler = async (meetupData) => {
		const result = await fetch(
			process.env.REACT_APP_FIREBASE_API_URL + '/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		// send the user to the home page
		navigate('/');
	};

	return (
		<>
			<section>
				<h1>Add New Meetup</h1>
				<NewMeetupForm onAddMeetup={addMeetupHandler} />
			</section>
		</>
	);
};

export default NewMeetup;
