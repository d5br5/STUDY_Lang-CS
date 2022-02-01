interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

function introduce(): Developer | Person {
	const people = {
		name: "doh",
		age: 11,
		skill: "Iron Making",
	};
	return people;
}

var tony = introduce();

if ((tony as Developer).skill) {
	(tony as Developer).skill;
} else if ((tony as Person).age) {
	var age = (tony as Person).age;
}

// type - guard

function isDeveloper(target: Developer | Person): target is Developer {
	return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
	tony.skill;
} else {
	tony.age;
}
