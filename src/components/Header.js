import config from '../../config.json';
import styled from 'styled-components';

const StyledHeader = styled.div`
	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.user-info {
		margin-top: 50px;
		display: flex;
		align-items: center;
		width: 100%;
		padding: 16px 32px;
		gap: 16px;
	}
`;
const StyledBanner = styled.div`
	background-image: url(${({ banner }) => banner});
	height: 230px;
`;

export default function Header() {
	return (
		<StyledHeader>
			<StyledBanner banner={config.banner} />
			<div className="user-info">
				<img src={`https://github.com/${config.gitHub}.png`} />
				<div>
					<h2>{config.name}</h2>
					<p>{config.job}</p>
					<p>{config.description}</p>
				</div>
			</div>
		</StyledHeader>
	);
}
