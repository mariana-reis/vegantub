import React from 'react';
import Header from '../src/components/Header.js';
import Menu from '../src/components/Menu';
import TimeLine from '../src/components/TimeLine.js';
import config from '../config.json';

function HomePage() {
	const [valorDoFiltro, setValorDofiltro] = React.useState('');
	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					flex: 1,
				}}
			>
				<Header />
				<Menu valorDoFiltro={valorDoFiltro} setValorDofiltro={setValorDofiltro} />
				<TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
			</div>
		</>
	);
}

export default HomePage;
