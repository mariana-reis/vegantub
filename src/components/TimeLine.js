import config from '../../config.json';

import styled from 'styled-components';

export const StyledTimeline = styled.div`
	flex: 1;
	width: 100%;
	padding: 16px;
	overflow: hidden;
	h2 {
		font-size: 16px;
		margin-bottom: 16px;
		text-transform: capitalize;
	}
	img {
		aspect-ratio: 16/9;
		font-weight: 500;
		object-fit: cover;
		width: 100%;
		max-width: 210px;
		height: auto;
	}
	section {
		width: 100%;
		padding: 0;
		overflow: hidden;
		padding: 16px;
		div {
			width: calc(100vw - 16px * 4);
			display: grid;
			grid-gap: 16px;
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			grid-auto-flow: column;
			grid-auto-columns: minmax(200px, 1fr);
			overflow-x: scroll;
			scroll-snap-type: x mandatory;
			a {
				scroll-snap-align: start;
				span {
					padding-top: 8px;
					display: flex;
					color: #222222;
					justify-content: center;
					max-width: 100%;
					margin-bottom: 2rem;
					color: ${({ theme }) => theme.textColorBase || '#222222'};
				}
			}
		}
	}
`;

export default function TimeLine({ searchValue, ...props }) {
	const playlistsNames = Object.keys(props.playlists);
	//Statment
	//retorno por expressão
	return (
		<StyledTimeline>
			{playlistsNames.map((playlistsName) => {
				const videos = props.playlists[playlistsName];
				return (
					<section key={playlistsName}>
						<h2>{playlistsName}</h2>
						<div>
							{videos
								.filter((video) => {
									const titleNormalized = video.title.toLowerCase();
									const searchValueNormalized = searchValue.toLowerCase();
									return titleNormalized.includes(searchValueNormalized);
								})
								.map((video) => {
									return (
										<a key={video.url} href={video.url} target="blank">
											<img src={video.thumb} />
											<strong>
												<span>{video.title}</span>
											</strong>
										</a>
									);
								})}
						</div>
					</section>
				);
			})}
		</StyledTimeline>
	);
}
