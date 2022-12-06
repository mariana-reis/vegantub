import config from '../../config.json';
import styled from 'styled-components';

const StyledHeader = styled.div`
	background-color: ${({ theme }) => theme.backgroundLevel1};
	img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.user-info {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 16px 32px;
		gap: 16px;
	}
	.description {
		display: flex;
		align-items: center;
		gap: 7px;
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
			<section className="user-info">
				<img src={`https://github.com/${config.gitHub}.png`} />
				<div>
					<h2>{config.name}</h2>
					<p>{config.job}</p>
					<p className="description">
						{config.description}
						<Icon />
					</p>
				</div>
			</section>
		</StyledHeader>
	);
}

function Icon() {
	return (
		<svg
			width="22"
			height="24"
			viewBox="0 0 22 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.647 20.3821C10.5302 20.3828 10.4145 20.3583 10.3064 20.31C10.1983 20.2617 10.1 20.1906 10.0171 20.1006L3.12323 12.5496C2.25849 11.5937 1.77344 10.3032 1.77344 8.95844C1.77344 7.61365 2.25849 6.32317 3.12323 5.36733C3.99473 4.41666 5.17526 3.88281 6.40601 3.88281C7.63675 3.88281 8.81729 4.41666 9.68879 5.36733L10.647 6.41555L11.6052 5.36733C12.4767 4.41666 13.6573 3.88281 14.888 3.88281C16.1188 3.88281 17.2993 4.41666 18.1708 5.36733C19.0355 6.32317 19.5206 7.61365 19.5206 8.95844C19.5206 10.3032 19.0355 11.5937 18.1708 12.5496L11.2769 20.1006C11.194 20.1906 11.0957 20.2617 10.9876 20.31C10.8795 20.3583 10.7638 20.3828 10.647 20.3821Z"
				fill="#00BF36"
			/>
		</svg>
	);
}
