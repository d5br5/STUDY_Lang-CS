import styled from "styled-components";

import noResultImg from "../../asset/search.png";

const Container = styled.div`
	width: 400px;
	margin: 200px auto 0;
`;

const Img = styled.img`
	width: 30%;
	margin-bottom: 10px;
`;

const Keyword = styled.div`
	color: red;
	font-weight: 700;
	font-size: 22px;
	margin-bottom: 10px;
`;

const Warning = styled.div`
	font-weight: 700;
`;

const Line = styled.div`
	width: 350px;
	margin: 30px auto;
	border: 1px solid rgb(238, 238, 238);
`;

const Infos = styled.div`
	text-align: center;
	line-height: 30px;
`;

function NoItem({keyword}) {
	return (
		<Container>
			<Img src={noResultImg} />
			<Keyword>{keyword}</Keyword>
			<Warning>에 대한 검색 결과가 없습니다.</Warning>
			<Line />
			<Infos>
				- 단어의 철자가 정확한지 확인해 보세요 <br />
				- 보다 일반적인 검색어로 다시 검색해 보세요 <br />
				- 검색어의 띄어쓰기를 다르게 해보세요 <br />
				- 유해/금지어가 아닌지 확인해주세요 <br />
			</Infos>
		</Container>
	);
}

export default NoItem;
