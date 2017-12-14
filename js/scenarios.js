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
	  text: "You are the youngest and most tech savvy that works in the mailroom and is always looking to maximize efficacy in all tasks. It's quite frustrating working so hard and not feeling like you made an impact in the company. You have found time to fix one thing before you sense a promotion in your future. What is the priority?",
	  outcomes: [
	  {
	        action: ">You think the manual punchcard and scheduling system needs an overhaul and opt for developing a mobile app to take care of those issues.",
	        result: "Wow, the app looks and works great for handling scheduling! Unfortunately your app doesn't get adopted because the average age of the mailroom workers is 70 and no one has smartphones... Your manager offers to refer your product to a friend who's business could use that app!",
	        confidence: 30,
	        brownie: 0
	    },
	    {
	        action: ">You are unsure why the shift hours are from 10-6 when the bulk of the mail gets delivered at 8:30am and ceases by 2pm. One spreadsheet later and you have found out that if shifts began at 8:30am and ended at 4pm then team productivity would increase by 100%.",
	        result: "Your mailroom colleagues sign a petition to put this new schedule into place. It allows the older crowd to be home sooner with their families, the younger folks to have more time to party and such, and the manager has less micromanaging to deal out!",
	        confidence: 75,
	        brownie: 1
	    },
	    {
	        action: ">If you are due for a promotion then why should you bother putting in any work fixing this draconic place?",
	        result: "You do nothing and ride out the last week in utter mediocrity and frustration at old technology.",
	        confidence: -1,
	        brownie: 0
	    },
	    {
	        action: ">You think the company should go paperless and send an 'official' letter to all regular senders asking them to send emails to the manager for quiker distribution.",
	        result: "Without discovering why, the Manager has been recieving hundreds of important emails a day and is having the WORST time sorting them from the junk mail. They notice that they reference a letter stating why they are emailing now and send a scanned copy of that letter you penned... they recognize your handwriting. This will be hard to reverse!!11!",
	        confidence: -50,
	        brownie: -1
	    }
			]
		}
		]},
{
	title: "Office Intern",
	scenarios: [
		{
	  text: "The Chairman is in a real bind... They are busy, they are stressed, AND their wife's birthday is tomorrow and he's asked you what you think she would like. What will you suggest?",
	  outcomes: [{
	          action: ">Flowers. All women love flowers (AND THEY'RE CHEAP).",
	          result: "All women except for the Chairman's wife. The Chairman says his wife deserves better than mere plants! You would only understand if you made $500k /yr...",
	          confidence: -30,
	          brownie: -1
	      },
	      {
	          action: ">'Nothing... I don't even want to get involved.'",
	          result: "The Chairman applauds your honesty and gives you some relationship advice... 'When you have the opportunity to gift something to your S.O. always go with what your heart tells you. Be present with them and show your love not with presents but with time.'",
	          confidence: 100,
	          brownie: 1
	      },
	      {
	          action: ">A diamond necklace. (CLICHE BUT EFFECTIVE !)",
	          result: "Not a terrible idea... considering she wears all 5 at a time I might want to consider a different jewel. You are giving me some great ideas! Thank you intern!",
	          confidence: 30,
	          brownie: 0
	      },
	      {
	          action: ">A life time membership at 'binge shopper's anonymous'.",
	          result: "He thinks you are being ironic and has a knee-slappin' laughing attack... 'If only she saw it as a problem- I might still have some retirement money! I'm trying to spend some time in Cabo, baby! WAHOO!' He walks away chuckling to himself... cementing the idea in your head that the Chairman is being used. :(",
	          confidence: 50,
	          brownie: 0
	      }
	      ]
	      },
	      {
		text: "The 'premier' (aka FRAT BOYS) sales team thinks that as an intern, your real job is to be at their beck and call for anything they desire. Last week they required 3 coffee runs... EACH DAY. Now they request you fetch them all their groceries for the evening because they have to stay late. How do you respond?",
	  outcomes: [{
	          action: ">You flip them the bird and continue stapling papers.",
	          result: "They get PISSED and try to force their toxic masculinity on you but frankly they know they can't force you to do anything. They say they will 'put in a bad word' about you... but your mentor overseeing your internship privately respects your bird flipping.",
	          confidence: -20,
	          brownie: 1
	      },
	      {
	          action: ">Meh, you realize that this doesn't happen often and decide to comply for the sake of ease.",
	          result: "You've had an epiphany... get paid (albeit negligbly) to walk around the city for a few hours and catch up on podcasts?? This job ain't so bad! Maybe they won't wreck my career afterall.",
	          confidence: 75,
	          brownie: 0
	      },
	      {
	          action: ">You do their bidding but not without throwing some extra food in their for yourself...",
	          result: "... and a bottle of whisky. Score! They are so thankful for you. You saved their unhappy marriages and saw that you bought a few extra things for yourself but are TOTALLY cool with that. You are our favorite intern!! They forget your name the next day.",
	          confidence: 30,
	          brownie: 0
	      },
	      {
	          action: ">No big deal! There is a grocery store down the street, it won't take long.",
	          result: "The grocery store they want you to go to, 'Whole Paycheck', is on the other side of the city and have to take 2 busses and a train to get there and back... The sales lead reprimands you for returning late.",
	          confidence: -0,
	          brownie: -1
	      }
	      ]
	     },
	     {
	  text: "You were the first and only intern in the sales office until you see a memo that was distributed amongst the sales team. The memo alerted that there will be a group of college undergrads taken on as interns with hopes of getting hired once graduated. Up until this point there has been no competition... how do you react?",
	  outcomes: [{
	          action: ">Nothing can phase you, you keep your head down and work as hard as you always do... right?",
	          result: "These interns are a joke... within a week they are already complaining about the hiearchical nature of the company and are frustrated they are doing menial tasks. They seem to leave early everyday with no penalty... You sense some just dessert coming their way. Keep it up!",
	          confidence: 75,
	          brownie: 0
	      },
	      {
	          action: ">You pick 'em off one by one to divulge some frightening information about the company's 'poor' (wink wink) financial status.",
	          result: "The interns run scared not out the front door... but right to the sales lead hoping to jump ship scot-free. They seem to all point to you as the source of the false information. The sales lead sees right through your charade and is upset about your guerilla tactics so early in your career.",
	          confidence: -100,
	          brownie: -1
	      },
	      {
	          action: ">You befriend the intern that looks familiar to you. Maybe you can rise to the top together!",
	          result: "A small world indeed! That intern happened to be your middle-school crush all blossomed! The two of you rekindle the flame of romance and under the nose of your manager, to boot. The manager loves the jump in productivity.",
	          confidence: 100,
	          brownie: 1
	      },
	      {
	          action: ">The Chairman is coming to visit... But an intern is napping. You wake them up just in time.",
	          result: "The intern is eternally grateful and buys you lunch for the entire next week! Oh boy would the Chairman lose their cool if they saw them napping. Pastrami sandwhiches from the deli next door never tasted so good. ",
	          confidence: 5,
	          brownie: 0
	      }
	      ]
	     },
	     {
	     text: "The annual intern games is coming up and you are expected to be there. There will an opportunity to play puffy-suit sumo with your competitor company's interns. The winner gets to use the executive toilet for a month!",
	  outcomes: [{
	          action: ">You call out sick and would rather use the day to catch up on video games. They said attendance was optional!",
	          result: "Your manager had motivational signs made, a cake prepared, and was decked out in football dad like apparel hoping you would be star of the show. They show up and discover you called out sick. They call you to check on your health and hear a 'BOOM HEADSHOT' in the background... your roommate got too excited on 'Carl of Duty' and blew your cover.",
	          confidence: -100,
	          brownie: -1
	      },
	      {
	          action: ">",
	          result: "",
	          confidence: 75,
	          brownie: 0
	      },
	      {
	          action: ">",
	          result: "",
	          confidence: 30,
	          brownie: 0
	      },
	      {
	          action: ">",
	          result: "",
	          confidence: 0,
	          brownie: 0
	      }
	      ]
	     }
	   ]},
	     {
//**job title
		title: "Sales Manager",
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
	  text: "You are the youngest and most tech savvy that works in the mailroom and is always looking to maximize efficacy in all tasks. It's quite frustrating working so hard and not feeling like you made an impact in the company. You have found time to fix one thing before you sense a promotion in your future. What is the priority?",
	  outcomes: [
	  {
	        action: ">You think the manual punchcard and scheduling system needs an overhaul and opt for developing a mobile app to take care of those issues.",
	        result: "Wow, the app looks and works great for handling scheduling! Unfortunately your app doesn't get adopted because the average age of the mailroom workers is 70 and no one has smartphones... Your manager offers to refer your product to a friend who's business could use that app!",
	        confidence: 30,
	        brownie: 0
	    },
	    {
	        action: ">You are unsure why the shift hours are from 10-6 when the bulk of the mail gets delivered at 8:30am and ceases by 2pm. One spreadsheet later and you have found out that if shifts began at 8:30am and ended at 4pm then team productivity would increase by 100%.",
	        result: "Your mailroom colleagues sign a petition to put this new schedule into place. It allows the older crowd to be home sooner with their families, the younger folks to have more time to party and such, and the manager has less micromanaging to deal out!",
	        confidence: 75,
	        brownie: 1
	    },
	    {
	        action: ">If you are due for a promotion then why should you bother putting in any work fixing this draconic place?",
	        result: "You do nothing and ride out the last week in utter mediocrity and frustration at old technology.",
	        confidence: -1,
	        brownie: 0
	    },
	    {
	        action: ">You think the company should go paperless and send an 'official' letter to all regular senders asking them to send emails to the manager for quiker distribution.",
	        result: "Without discovering why, the Manager has been recieving hundreds of important emails a day and is having the WORST time sorting them from the junk mail. They notice that they reference a letter stating why they are emailing now and send a scanned copy of that letter you penned... they recognize your handwriting. This will be hard to reverse!!11!",
	        confidence: -50,
	        brownie: -1
	    }
			]
		}] 
		},
		{
//**job title
		title: "President of Sales",
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
	  text: "You are the youngest and most tech savvy that works in the mailroom and is always looking to maximize efficacy in all tasks. It's quite frustrating working so hard and not feeling like you made an impact in the company. You have found time to fix one thing before you sense a promotion in your future. What is the priority?",
	  outcomes: [
	  {
	        action: ">You think the manual punchcard and scheduling system needs an overhaul and opt for developing a mobile app to take care of those issues.",
	        result: "Wow, the app looks and works great for handling scheduling! Unfortunately your app doesn't get adopted because the average age of the mailroom workers is 70 and no one has smartphones... Your manager offers to refer your product to a friend who's business could use that app!",
	        confidence: 30,
	        brownie: 0
	    },
	    {
	        action: ">You are unsure why the shift hours are from 10-6 when the bulk of the mail gets delivered at 8:30am and ceases by 2pm. One spreadsheet later and you have found out that if shifts began at 8:30am and ended at 4pm then team productivity would increase by 100%.",
	        result: "Your mailroom colleagues sign a petition to put this new schedule into place. It allows the older crowd to be home sooner with their families, the younger folks to have more time to party and such, and the manager has less micromanaging to deal out!",
	        confidence: 75,
	        brownie: 1
	    },
	    {
	        action: ">If you are due for a promotion then why should you bother putting in any work fixing this draconic place?",
	        result: "You do nothing and ride out the last week in utter mediocrity and frustration at old technology.",
	        confidence: -1,
	        brownie: 0
	    },
	    {
	        action: ">You think the company should go paperless and send an 'official' letter to all regular senders asking them to send emails to the manager for quiker distribution.",
	        result: "Without discovering why, the Manager has been recieving hundreds of important emails a day and is having the WORST time sorting them from the junk mail. They notice that they reference a letter stating why they are emailing now and send a scanned copy of that letter you penned... they recognize your handwriting. This will be hard to reverse!!11!",
	        confidence: -50,
	        brownie: -1
	    }
			]
}
		]},
];










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