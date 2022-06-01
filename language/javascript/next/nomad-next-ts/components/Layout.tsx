import { FC, ReactNode } from "react";
import NavBar from "./NavBar";
import Image from "next/image";

interface Props {
	children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<NavBar />
			<div style={{ width: "300px" }}>
				<Image src="/vercel.svg" alt="" width="400" height="200px" />
			</div>
			<div>{children}</div>
		</>
	);
};

export default Layout;
