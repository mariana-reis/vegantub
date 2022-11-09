import Header from '../src/components/Header.js';
import Menu from '../src/components/Menu.js';
import TimeLine from '../src/components/TimeLine.js';
import config from '../config.json';
import { CSSReset } from '../src/components/CSSReset';

function HomePage() {
	const estiloHomePage = {
		//  background: 'red'
	};

	return (
		<>
			<CSSReset />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					flex: 1,
					// backgroundColor: "red",
				}}
			>
				<Header />
				<Menu />
				<TimeLine playlists={config.playlists} />
			</div>
		</>
	);
}

export default HomePage;
