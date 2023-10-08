export interface ITask {
	storeName: string
	location: string
	tasks: {
		title: string
		content: string
		due: string
	}[]
}

export const TASKS : ITask[] = [
	{
		storeName: "McDonald's #2423",
		location: "123 Joe Rd, NJ, 20324",
		tasks: [
			{
				title: 'Water our flowers',
				content: 'Can you help us watering our lovely flowers? Thank you',
				due: '05/05/2023',
			}
		]
	}
]