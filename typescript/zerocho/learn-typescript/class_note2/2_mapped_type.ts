type Heroes = "Hulk" | "Capt" | "Thor";

type HeroAges = { [K in Heroes]: number };

const ages: HeroAges = {
	Hulk: 33,
	Capt: 22,
	Thor: 11,
};
