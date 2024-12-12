const firstName = 'Robin';
const lastName = 'Schäfer';
const suffix = `${firstName} ${lastName} ${new Date().getFullYear()}`;

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
