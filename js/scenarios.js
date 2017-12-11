// objects for job position: job title > situations > choices > starting score?

// var for mailroom clerk position object
var jobPositions = [
{
	//**job title
	title: "Mailroom Clerk",
	scenarios: [
		{ 
			//scenario text
			text: "Printer is jammed.",
			//what happens next?
			outcomes: [
				{ 
					//action, result text, score counters
					action: "Unjam printer", 
					result: "Get promoted",
					confidence: 1,
					brownie: 1
				},
				{ 
					action: "Ignore printer", 
					result: "Nothing happens. Bob gets promoted instead.",
					confidence: -1,
					brownie: 0
				}
			]
		},
	],
},
{
	//**job title
	title: "Office Intern",
	scenarios: [
		{ 
			//scenario text
			text: "Printer is jammed.",
			//what happens next?
			outcomes: [
				{ 
					//action, result text, score counters
					action: "Unjam printer", 
					result: "Get promoted",
					confidence: 1,
					brownie: 1
				},
				{ 
					action: "Ignore printer", 
					result: "Nothing happens. Bob gets promoted instead.",
					confidence: -1,
					brownie: 0
				}
			]
		},
	],
},
{
	//**job title
	title: "Sales Associate",
	scenarios: [
		{ 
			//scenario text
			text: "Printer is jammed.",
			//what happens next?
			outcomes: [
				{ 
					//action, result text, score counters
					action: "Unjam printer", 
					result: "Get promoted",
					confidence: 1,
					brownie: 1
				},
				{ 
					action: "Ignore printer", 
					result: "Nothing happens. Bob gets promoted instead.",
					confidence: -1,
					brownie: 0
				}
			]
		},
	],
},
{
	//**job title
	title: "Floor Manager",
	scenarios: [
		{ 
			//scenario text
			text: "Printer is jammed.",
			//what happens next?
			outcomes: [
				{ 
					//action, result text, score counters
					action: "Unjam printer", 
					result: "Get promoted",
					confidence: 1,
					brownie: 1
				},
				{ 
					action: "Ignore printer", 
					result: "Nothing happens. Bob gets promoted instead.",
					confidence: -1,
					brownie: 0
				}
			]
		},
	],
},
{
	//**job title
	title: "President",
	scenarios: [
		{ 
			//scenario text
			text: "Printer is jammed.",
			//what happens next?
			outcomes: [
				{ 
					//action, result text, score counters
					action: "Unjam printer", 
					result: "Get promoted",
					confidence: 1,
					brownie: 1
				},
				{ 
					action: "Ignore printer", 
					result: "Nothing happens. Bob gets promoted instead.",
					confidence: -1,
					brownie: 0
				}
			]
		},
	],
}
]

// var for mailroom manager position object