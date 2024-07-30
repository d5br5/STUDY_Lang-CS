const friends = [
	{ name: "쯔위", age: 15 },
	{ name: "수지", age: 20 },
	{ name: "IU", age: 25 },
	{ name: "sonny", age: 30 },
];

const timelines = [
	{ desc: "good lunches", likes: 0 },
	{ desc: "I'm cool", likes: 10 },
	{ desc: "good hotel", likes: 20 },
	{ desc: "good phone", likes: 30 },
];

function makeDataGenerator(items) {
	let itemIndex = 0;
	return function getNextData() {
		const item = items[itemIndex % items.length];
		itemIndex += 1;
		return { ...item, id: itemIndex };
	};
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
