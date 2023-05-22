import noImage from "../../img/no_image.png";
import styled from "styled-components";
import {numCommas} from "../../asset/API";

const Container = styled.div`
	width: 230px;
	margin: 0 9px 18px;
	border: 1px rgba(213, 213, 213) solid;
	border-radius: 3px;
	overflow: hidden;
`;

const ImageContainer = styled.div`
	width: 100%;
	height: 230px;
	border-bottom: 1px rgb(238, 238, 238) solid;
`;

const IMG = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Name = styled.div`
	width: 100%;
	text-align: left;
	height: 25px;
	line-height: 25px;
	padding-left: 6px;
	margin-top: 5px;
`;

const Price = styled.div`
	width: 100%;
	font-weight: 700;
	text-align: left;
	height: 25px;
	line-height: 25px;
	padding-left: 6px;
	margin-bottom: 5px;
`;

const Location = styled.div`
	width: 100%;
	color: gray;
	height: 30px;
	line-height: 30px;
	border-top: 1px rgb(238, 238, 238) solid;
	font-size: 12px;
`;

function Item({item}) {
	return (
		<Container>
			<ImageContainer>
				<IMG
					src={item.product_image}
					onError={({currentTarget}) => {
						currentTarget.onerror = null;
						currentTarget.src = noImage;
					}}
					alt=""
					className="product_image"
				/>
			</ImageContainer>
			<Name>
				{item.name.length > 16 ? `${item.name.slice(0, 15)}...` : item.name}
			</Name>
			<Price>{numCommas(item.price)} 원</Price>
			<Location>{item.location === "" ? "전국" : item.location}</Location>
		</Container>
	);
}

export default Item;
