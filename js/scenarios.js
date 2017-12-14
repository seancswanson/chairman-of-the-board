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
		  confidence: 50,
		  brownie: 0
		  },
		  {
	      action: ">Submit a ticket to maintenance hoping they fix it.",
	      result: "Maintenance never responds and you can't turn in your daily mail summary. And your manager chews you out. Bummer.",
	      confidence: -30,
	      brownie: -1
		  },
		  {
	      action: ">When noone is looking you smack the side of the printer and will take full credit for the 'repair' (if it works).",
	      result: "The printer never errors again and your manager praises you for your ingenuity! They think you might have some worth after all.",
	      confidence: 100,
		      brownie: 1
		  },
		  {
	      action: ">Open up the maintenance door of the damned thing and investigate.",
	      result: "You find a banana peel in the rollers and remove it... but then slice your finger on the metal components whodunit??",
	      confidence: -30,
	      brownie: 0
		  }
		  ]
		},
		{
	  //scenario text
	  text: "While in a hurry to filter the corporations 'junk' mail, you accidently drop your stack of envelopes and see that one of them is addressed to the Chairman with confidential label and text that reads 'Sensitive stakeholder info'... you remember you have stock in the company and that this information could affect you. What do you do?",
	  outcomes: [
		  {
				action: ">This seems urgent! You head upstairs and personally deliver the letter to the Chairman.",
				result: "You are stopped by the Chairman's secretary. She takes a look at the letter and appreciates the gesture but wonders why you didn't send it through the tube. Nice try.",
				confidence: -30,
				brownie: 0
			},
			{
				action: ">No one will notice it's missing, things get lost in the mailroom. You open it and read the information for yourself.",
				result: "JACKPOT!!! DING DING DING! The company is working on a revolutionary product and the value is about to skyrocket in a week. Time to sell! The Chairman apparently recieved a personal email with the same information.",
				confidence: 100,
				brownie: 0
			},
			{
				action: ">No one will notice it's missing, things get lost in the mailroom. You open it and read the information for yourself.",
				result: "Super sad day... it appears the company is about to take a huge financial nosedive after the President publically made a racist comment about the Shawarma truck owner outside of the tower... goodbye retirement! The manager sees you crying and finds out you snooped.",
				confidence: -50,
				brownie: -1
			},
			{
				action: ">This looks different than other letters you have seen so you pass it along to the mail room manager.",
				result: "It seems you just passed along a very important baton and the manager get's recognized for acting so quickly on 'their' discovery. But not without graciously thanking you.",
				confidence: 75,
				brownie: 1
			}
			]
		}, 
		{
	  text: "Your coworkers on the mail floor are up in arms! They're talking about going on strike due to their wage being at an abhorrent low at $14/hr and they don't know that your last paycheck states that you earn $18/hr... Perhaps you slipped through the cracks when hired and the error hasn't been noticed. What do you do?",
	  outcomes: [
		  {
				action: ">Since your time as a clerk you have managed to form a strong bond with your mailroom ilk but can't afford to miss work. You privately let your manager know that your pay has been erroneously raised this whole time.",
				result: "Your manager appreciates your honesty, changes your pay, and encourages you to strike anyway because they agree (privately) that you all deserve a higher wage... Think of the children!",
				confidence: 10,
				brownie: 0
			},
			{
				action: ">You are all practically family and decide to strike with them but play dumb to the fact that you get paid more. I hope they don't find out!",
				result: "A week without pay goes by and the big wigs ignore your pleas for higher wages. After threatening you all with termination the mailroom resumes work and your higher pay goes unnoticed.",
				confidence: 30,
				brownie: 0
			},
			{
				action: ">You tell them about the error in your pay to illustrate the hypocrisy and ignorance of the corporate industrial complex.",
				result: "Your colleagues and your manager all respect your genuine concern for equality and elect you to be head of negotiations for the union. You are able to squeeze an extra few dollars for everyone on your team... including your manager!",
				confidence: 75,
				brownie: 1
			},
			{
				action: ">You avoid the conversation alogether with the hope that this blows over and you can continue working.",
				result: "You appear to be the only one not upset at the collective disenfranchised and exploited state of the mailroom workers... Your manager seems suspicious of this and calls you out after realizing why you aren't striking. Honesty would have prevailed!",
				confidence: -70,
				brownie: -1
			}
			]
		},
		{
	  text: "Your coworkers on the mail floor are up in arms! They're talking about going on strike due to their wage being at an abhorrent low at $14/hr and they don't know that your last paycheck states that you earn $18/hr... Perhaps you slipped through the cracks when hired and the error hasn't been noticed. What do you do?",
	  outcomes: [{
	        action: ">Since your time as a clerk you have managed to form a strong bond with your mailroom ilk but can't afford to miss work. You privately let your manager know that your pay has been erroneously raised this whole time.",
	        result: "Your manager appreciates your honesty, changes your pay, and encourages you to strike anyway because they agree (privately) that you all deserve a higher wage... Think of the children!",
	        confidence: 10,
	        brownie: 0
	    },
	    {
	        action: ">You are all practically family and decide to strike with them but play dumb to the fact that you get paid more. I hope they don't find out!",
	        result: "A week without pay goes by and the big wigs ignore your pleas for higher wages. After threatening you all with termination the mailroom resumes work and your higher pay goes unnoticed.",
	        confidence: 30,
	        brownie: 0
	    },
	    {
	        action: ">You tell them about the error in your pay to illustrate the hypocrisy and ignorance of the corporate industrial complex.",
	        result: "Your colleagues and your manager all respect your genuine concern for equality and elect you to be head of negotiations for the union. You are able to squeeze an extra few dollars for everyone on your team... including your manager!",
	        confidence: 75,
	        brownie: 1
	    },
	    {
	        action: ">You avoid the conversation alogether with the hope that this blows over and you can continue working.",
	        result: "You appear to be the only one not upset at the collective disenfranchised and exploited state of the mailroom workers... Your manager seems suspicious of this and calls you out after realizing why you aren't striking. Honesty would have prevailed!",
	        confidence: -70,
	        brownie: -1
	    }
			]
}
		]},
{
//**job title
title: "Office Intern",
scenarios: [{
  text: "Printer is jammed.",
  outcomes: [{
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
      }]      
}]
}];










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