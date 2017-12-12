// objects for job position: job title > situations > choices > starting score?

// var for mailroom clerk position object
var jobPositions = [
{
	//**job title
	title: "Mailroom Clerk",
	scenarios: [
		{ 
			//scenario text
			text: "The building you are in looks brand-spanking-new on the outside yet you discover that the mail room equipment outdates you by decades... something is wrong with the printer again and it appears to spit out a giberish error >> 'fatalError #616: unexpected Token' << . What do you do? ",
			//what happens next?
			outcomes: [
				{ 
					//action, result text, score counters
					action: ">Search online to debug and hope their is a 'Corporate Overflow' answer, then follow the best voted answer.", 
					result: "Your stack skills are impressive! You find out you need to power cycle the printer. Nice work!",
					confidence: 1,
					brownie: 0
				},
				{ 
					action: ">Submit a ticket to maintenance hoping they fix it.", 
					result: "Maintenance never responds and you can't turn in your daily mail summary. Bummer.",
					confidence: -1,
					brownie: -1
				},
								{ 
					action: ">When noone is looking you smack the side of the printer and will take full credit for the 'repair' (if it works).", 
					result: "The printer never errors again and your manager praises you for your ingenuity! They think you might have some worth after all.",
					confidence: +2,
					brownie: 1
				},
								{ 
					action: ">Open up the maintenance door of the damned thing and investigate.", 
					result: "You find a banana peel in the rollers and remove it... but then slice your finger on the metal components whodunit??",
					confidence: -1,
					brownie: 0
				}]
// 		{ 
// 			//scenario text
// 			text: "The building you are in looks brand-spanking-new on the outside yet you discover that the mail room equipment outdates you by decades... something is wrong with the printer again and it appears to spit out a giberish error >> 'fatalError #616: unexpected Token' << . What do you do? ",
// 				outcomes: [
// 				{ 
// 					action: ">Search online to debug and hope their is a 'Corporate Overflow' answer, then follow the best voted answer.", 
// 					result: "Your stack skills are impressive! You find out you need to power cycle the printer. Nice work!",
// 					confidence: 1,
// 					brownie: 0
// 				},
// 				{ 
// 					action: ">Submit a ticket to maintenance hoping they fix it.", 
// 					result: "Maintenance never responds and you can't turn in your daily mail summary. Bummer.",
// 					confidence: -1,
// 					brownie: -1
// 				},
// 								{ 
// 					action: ">When noone is looking you smack the side of the printer and will take full credit for the 'repair' (if it works).", 
// 					result: "The printer never errors again and your manager praises you for your ingenuity! They think you might have some worth after all.",
// 					confidence: +2,
// 					brownie: 1
// 				},
// 								{ 
// 					action: ">Open up the maintenance door of the damned thing and investigate.", 
// 					result: "You find a banana peel in the rollers and remove it... but then slice your finger on the metal components whodunit??",
// 					confidence: -1,
// 					brownie: 0
// 				},
// 			]
// 		},
// 	],
// },
// {
// 	//**job title
// 	title: "Office Intern",
// 	scenarios: [
// 		{ 
// 			//scenario text
// 			text: "Printer is jammed.",
// 			//what happens next?
// 			outcomes: [
// 				{ 
// 					//action, result text, score counters
// 					action: "Unjam printer", 
// 					result: "Get promoted",
// 					confidence: 1,
// 					brownie: 1
// 				},
// 				{ 
// 					action: "Ignore printer", 
// 					result: "Nothing happens. Bob gets promoted instead.",
// 					confidence: -1,
// 					brownie: 0
// 				}
// 			]
// 		},
// 	],
// },
// {
// 	//**job title
// 	title: "Sales Associate",
// 	scenarios: [
// 		{ 
// 			//scenario text
// 			text: "Printer is jammed.",
// 			//what happens next?
// 			outcomes: [
// 				{ 
// 					//action, result text, score counters
// 					action: "Unjam printer", 
// 					result: "Get promoted",
// 					confidence: 1,
// 					brownie: 1
// 				},
// 				{ 
// 					action: "Ignore printer", 
// 					result: "Nothing happens. Bob gets promoted instead.",
// 					confidence: -1,
// 					brownie: 0
// 				}
// 			]
// 		},
// 	],
// },
// {
// 	//**job title
// 	title: "Floor Manager",
// 	scenarios: [
// 		{ 
// 			//scenario text
// 			text: "Printer is jammed.",
// 			//what happens next?
// 			outcomes: [
// 				{ 
// 					//action, result text, score counters
// 					action: "Unjam printer", 
// 					result: "Get promoted",
// 					confidence: 1,
// 					brownie: 1
// 				},
// 				{ 
// 					action: "Ignore printer", 
// 					result: "Nothing happens. Bob gets promoted instead.",
// 					confidence: -1,
// 					brownie: 0
// 				}
// 			]
// 		},
// 	],
// },
// {
// 	//**job title
// 	title: "President",
// 	scenarios: [
// 		{ 
// 			//scenario text
// 			text: "Printer is jammed.",
// 			//what happens next?
// 			outcomes: [
// 				{ 
// 					//action, result text, score counters
// 					action: "Unjam printer", 
// 					result: "Get promoted",
// 					confidence: 1,
// 					brownie: 1
// 				},
// 				{ 
// 					action: "Ignore printer", 
// 					result: "Nothing happens. Bob gets promoted instead.",
// 					confidence: -1,
// 					brownie: 0
// 				}
// 			]
// 		},
// 	],
}]
}]

// var for mailroom manager position object