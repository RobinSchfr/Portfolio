const firstName = 'Robin';
const lastName = 'Schäfer';
const suffix = 'Robin Schäfer | Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
