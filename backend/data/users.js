import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'John Doe',
		email: bcrypt.hashSync('123456', 10),
		password: 'xxxx',
	},
	{
		name: 'Jane Doe',
		email: bcrypt.hashSync('123456', 10),
		password: 'xxxx',
	},
];

export default users;
