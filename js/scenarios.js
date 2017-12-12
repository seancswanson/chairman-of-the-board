// objects for job position: job title > situations > choices > starting score?

// var for mailroom clerk position object
var jobPositions = [{
            //**job title
            title: "Mailroom Clerk",
            scenarios: [{
                    //scenario text
                    text: "The building you are in looks brand-spanking-new on the outside yet you discover that the mail room equipment outdates you by decades... something is wrong with the printer again and it appears to spit out a giberish error >> 'fatalError #616: unexpected Token' << . What do you do? ",
                    //what happens next?
                    outcomes: [{
                            //action, result text, score counters
                            action: ">Search online to debug and hope their is a 'Corporate Overflow' answer, then follow the best voted answer.",
                            result: "Your stack skills are impressive! You find out you need to power cycle the printer. Nice work!",
                            confidence: 1,
                            brownie: 0
                        },
                        {
                            action: ">Submit a ticket to maintenance hoping they fix it.",
                            result: "Maintenance never responds and you can't turn in your daily mail summary. And your manager chews you out. Bummer.",
                            confidence: -1,
                            brownie: -1
                        },
                        {
                            action: ">When noone is looking you smack the side of the printer and will take full credit for the 'repair' (if it works).",
                            result: "The printer never errors again and your manager praises you for your ingenuity! They think you might have some worth after all.",
                            confidence: 2,
                            brownie: 1
                        },
                        {
                            action: ">Open up the maintenance door of the damned thing and investigate.",
                            result: "You find a banana peel in the rollers and remove it... but then slice your finger on the metal components whodunit??",
                            confidence: -1,
                            brownie: 0
                        }
                    ]
                },
                {
                    //scenario text
                    text: "While in a hurry to filter the corporations 'junk' mail, you accidently drop your stack of envelopes and see that one of them is addressed to the Chairman with confidential label and text that reads 'Sensitive stakeholder info'... you remember you have stock in the company and that this information could affect you. What do you do?",
                    outcomes: [{
                            action: ">This seems urgent! You head upstairs and personally deliver the letter to the Chairman.",
                            result: "You are stopped by the Chairman's secretary. She takes a look at the letter and appreciates the gesture but wonders why you didn't send it through the tube. Nice try.",
                            confidence: -1,
                            brownie: 0
                        },
                        {
                            action: ">No one will notice it's missing, things get lost in the mailroom. You open it and read the information for yourself.",
                            result: "JACKPOT!!! DING DING DING! The company is working on a revolutionary product and the value is about to skyrocket in a week. Time to sell! The Chairman apparently recieved a personal email with the same information.",
                            confidence: 2,
                            brownie: 0
                        },
                        {
                            action: ">No one will notice it's missing, things get lost in the mailroom. You open it and read the information for yourself.",
                            result: "Super sad day... it appears the company is about to take a huge nosedive financially after the President publically made a racist comment about the Shawarma truck owner outside of the tower... goodbye retirement! The manager sees you crying and finds out you snooped.",
                            confidence: -1,
                            brownie: -1
                        },
                        {
                            action: ">This looks different than other letters you have seen so you pass it along to the mail room manager.",
                            result: "It seems you just passed along a very important baton and the manager get's recognized for acting so quickly on 'their' discovery. But not without graciously thanking you.",
                            confidence: 1,
                            brownie: 1
                        }
                    ]
                }]
            }];
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

        // var for mailroom manager position object