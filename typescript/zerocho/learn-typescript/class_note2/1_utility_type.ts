interface Product {
	id: number;
	name: string;
	price: number;
	brand: string;
	stock: number;
}

function fetchProducts(): Promise<Product[]> {
	return new Promise((res) => 1);
}

function displayProductDetail(
	shoppingItem: Pick<Product, "id" | "name" | "price">
) {}

displayProductDetail({ id: 3, name: "string", price: 1 });

interface UserProfile {
	username: string;
	email: string;
	profilePhotoUrl: string;
}

type UserProfileUpdate = {
	[P in keyof UserProfile]?: UserProfile[P];
};

type Subset<T> = {
	[P in keyof T]?: T[P];
};
