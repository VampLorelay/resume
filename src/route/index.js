
// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
	name: {
		firstname: 'Світлана',
		lastname: 'Боковець',
	},
	position: 'вчитель математики',
	salary: '600$ в місяць',
	address: `Перемоги 47, Берестя`,
}

var footer = {
	social: {
		email: {
			text: 'svitlana.bokovec@mail.com',
			href: 'mailto:svitlana.bokovec@mail.com',
		},

		phone: {
			text: '+380670000555',
			href: 'tel:+380670000555',
		},

		linkedin: {
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/dmytro-test',
		},
	},

}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
	// res.render генерує нам HTML сторінку

	//            ↙ cюди вводимо назву файлу з сontainer
	res.render('index', {})
	//                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('summary', {
		// ↙ сюди вводимо JSON дані

		page: {
			title: 'Resume | Summary',
		},

		header,

		main: {
			summary: {
				title: 'Summary',
				text: `Open-minded for new technologies, with 1 years of 
		  experience in development.Whenever I start to
		  work on a new project I learn the domain and try
		  to understand the idea of the project.Good team
		  player, every colleague is a friend to me.`,
			},

			experience: {
				title: 'Other experience',
				text: `Pet project for parsing sport betting data from
		  different platforms ( odds ) and sport statistics
		  ( tournament position, goals etc), analyzing by
		  simple mathematics models and preparing
		  probability for such events like: money line -
		  first win / draw / second win, totals etc.`
			},
		},

		footer,
	})
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('skills', {
		// ↙ сюди вводимо JSON дані

		page: {
			title: 'Resume | Skills',
		},

		header,

		main: {
			skills: [
				{
					name: 'фізика',
					point: 9,
					isTop: true,
				},
				{
					name: 'математика',
					point: 10,
					isTop: true,
				},
				{
					name: 'креслення',
					point: 8,
					isTop: false,
				},
				{
					name: 'астрономія',
					point: 7,
				},
				{
					name: 'нарисна геометрія',
					point: 0,
				},
				{
					name: 'малювання',
					point: null,
				},
			],

			hobbies: [
				{
					name: `вишивка`,
					isMain: true,
				},
				{
					name: `баскетбол`,
					isMain: false,
				},
				{
					name: `садівництво`,
					isMain: true,
				},
				{
					name: `ігри`,
					isMain: false,
				},
			],
		},

		footer,
	})
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('education', {
		// ↙ сюди вводимо JSON дані

		page: {
			title: 'Resume | Education',
		},

		header,

		main: {
			educations: [
				{
					name: 'КНУ ім. Т. Шевченка',
					isEnd: false,
				},
				{
					name: 'Київський політехнічний інститут',
					isEnd: true,
				},
				{
					name: 'Києво-Могилянська академія',
					isEnd: false,
				},
				{
					name: 'Львівський національний університет ім. І. Франка',
					isEnd: false,
				},
				{
					name: 'Рівненський Державний Гуманітарний Університет',
					isEnd: true,
				},

			],

			certificates: [
				{
					name: 'З української мови',
					id: 103,
				},
				{
					name: 'Старшого вчителя',
					id: 594,
				},
				{
					name: 'За перше місце з математики конкурсу МАН',
					id: 347,
				},
			],
		},

		footer,
	})
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('work', {
		// ↙ сюди вводимо JSON дані

		layout: 'big',

		page: {
			title: 'Resume | Work',
		},

		header,

		main: {
			works: [
				{
					position: 'Вчитель',
					company: {
						name: 'Берестівський ліцей',
						url: 'https://www.facebook.com/profile.php?id=100060923515036',
					},
					duration: {
						from: '1.09.1986',
						to: null,
					},
					projectAmount: 3,

					projects: [
						{
							name: 'Resume',
							url: 'http://resume.com.ua',
							about: 'Короткий опис',
							stacks: [
								{
									name: 'React.js',
								},
								{
									name: 'HTML / CSS',
								},
								{
									name: 'Node.js',
								},
							],

							stackAmound: 9,

							awards: [
								{
									name: 'Подяка МОН України',
								},
								{
									name: 'Грамота МОН України',
								},
								{
									name: 'Почесна грамота МОН України',
								},
							],

							awardsAmound: 7,
						},
					],

				},
			],
		},

		footer,
	})
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
	//             ↙ cюди вводимо назву файлу з сontainer
	res.render('person', {
		layout: 'person',

		person: {
			name: 'Emma Johnson',
			age: 32,
			gender: 'Female',
			address: {
				street: '123 Main St',
				city: 'New York',
				state: 'NY',
				zip: '10001',
				country: 'USA',
			},
			education: [
				{
					degree: 'Bachelor of Science',
					major: 'Computer Science',
					university:
						'Massachusetts Institute of Technology',
					graduationYear: 2012,
				},
			],
			workExperience: [
				{
					company: 'Google',
					title: 'Software Engineer',
					startDate: '2012-06-01',
					endDate: '2016-12-31',
					responsibilities: [
						'Developed new features for Google Maps',
						'Worked on improving search algorithms',
					],
					year_founded: 1990,
					industry: 'Technology',
					employees: [
						{
							name: 'John Smith',
							position: 'CEO',
							department: 'Executive',
							projects: [
								{
									name: 'Project Alpha',
									description:
										'Developing new software platform',
									status: 'In Progress',
									teams: [
										{
											team_name: 'Awesome Team',
											team_leader: {
												name: 'John Smith',
												title: 'Team Leader',
												email: 'john.smith@example.com',
											},
											team_members: [
												{
													name: 'Alice Johnson',
													title: 'Software Engineer',
													email:
														'alice.johnson@example.com',
													skills: ['Java', 'Python', 'SQL'],
													projects: [
														{
															name: 'Project A',
															description:
																'Lorem ipsum dolor sit amet',
															technologies: [
																'Java',
																'Spring Framework',
															],
															team_members: [
																{
																	name: 'Bob Lee',
																	title:
																		'Software Engineer',
																},
																{
																	name: 'Cindy Chen',
																	title: 'UI Designer',
																},
															],
														},
													],
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
	})
})

// Підключаємо роутер до бек-енду
module.exports = router
