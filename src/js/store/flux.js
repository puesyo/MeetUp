const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			events: [
				{
					ID: 36,
					post_content:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec libero consectetur risus vehicula interdum eu at elit. Proin a commodo erat, eu molestie ipsum. Aliquam tristique nunc a est tristique, et convallis risus ullamcorper. Fusce nec massa ac enim pellentesque ornare. Pellentesque non sapien varius, pellentesque tellus sit amet, facilisis justo. Duis rhoncus nunc id elementum dapibus. Sed dictum lacinia vestibulum.",
					post_title: "Lorem Event",
					meta_keys: {
						day: "April 28 2020",
						time: "7:00 am",
						_groupId: 9,
						_rsvpNo: ["robert", "jjtime", "username2"],
						_rsvpYes: ["cheeselover", "neweradude", "james1996"]
					}
				},
				{
					ID: 10,
					post_content:
						"From the creators of Sweet Nectar in Fort Lauderdale, Trust Hospitality Group introduces Lique Miami. Located on the Intercostal waterway, brings waterfront dining to new heights. With an outdoor lounge and dining space to an indoor dining room and adjacent cigar and hookah lounge. With stunning views of Miami’s Intercostal skyline, mixed with the organic and industrial elements paired harmoniously with subtle nautical details, create a french- Rivera-style atmosphere.",
					post_title: "Halloween Brunch Party",
					meta_keys: {
						day: "October 31 2020",
						time: "12:00 pm",
						_groupId: 9,
						_rsvpNo: ["Jhon", "Carla", "Michael"],
						_rsvpYes: ["NoBrainer", "sayWhat", "Bond007"]
					}
				},
				{
					ID: 8,
					post_content:
						"For those families who feel comfortable getting out of their cars and shopping ‘al fresco’, the out-door socially distant ‘Harvest Market’ is the perfect place to forage for fall treats, grab a bite to eat and capture the perfect family photo at one of the beautiful vignettes.",
					post_title: "Not So Spooky Drive-Thru Adventure ",
					meta_keys: {
						day: "October 31 2020",
						time: "8:00 pm",
						_groupId: 1,
						_rsvpNo: ["robert", "jjtime", "username2"],
						_rsvpYes: ["cheeselover", "neweradude", "james1996"]
					}
				},
				{
					ID: 5,
					post_content:
						"you'll be able to enjoy a curated selection of 3-4 different wines each week on our beautifully decorated terrace, accompanied by a mouth-watering selection of special Mezes (Greek tapas/small bites) brought to you by our executive chef Giannis Kotsos for just $10/person.",
					post_title: "Wine Tasting ",
					meta_keys: {
						day: "October 29 2020",
						time: "10:00 pm",
						_groupId: 2,
						_rsvpNo: ["Jhon", "Carla", "Michael"],
						_rsvpYes: ["NoBrainer", "sayWhat", "Bond007"]
					}
				}
			],
			Groups: [
				{
					ID: 9,
					post_content: "The nicest Meetup ever",
					group_title: "Tech Enthusiasts",
					members: ["robert", "jjtime", "username2", "cheeselover", "neweradude", "james1996"]
				},
				{
					ID: 7,
					post_content: "Brunch at the Beach",
					group_title: "We Love Coding",
					members: ["Jhon", "Carla", "Michael", "NoBrainer", "sayWhat", "Bond007"]
				},
				{
					ID: 1,
					post_content: "Drive-Thru Adventure",
					group_title: "The horror group",
					members: ["robert", "jjtime", "username2", "cheeselover", "neweradude", "james1996"]
				},
				{
					ID: 2,
					post_content: "Wine Tasting",
					group_title: "The Wine Lovers",
					members: ["Jhon", "Carla", "Michael", "NoBrainer", "sayWhat", "Bond007"]
				}
			],
			session: {
				ID: 2,
				username: "theUser",
				user_friendly_name: "Joey",
				token: "qwerty12345asdfgzxcv"
			}
		},

		actions: {
			getGroups: () => {
				return getStore().Groups;
			},

			getGroupByID: id => {
				const groups = getStore().Groups;
				id = parseInt(id);
				let group = {};

				groups.forEach(element => {
					if (id === element.ID) {
						group = element;
					}
				});
				// console.log(group);
				return group;
			},

			getEventByID: id => {
				const events = getStore().events;
				id = parseInt(id);
				let event = {};

				events.forEach(element => {
					if (id === element.meta_keys._groupId) {
						event = element;
					}
				});
				// console.log(group);
				return event;
			},

			addEventById: id => {
				const events = getStore().events;
				const eve = events.filter(event => id == event.meta_keys._groupId);
				return eve;
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
