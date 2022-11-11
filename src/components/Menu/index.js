import styled from 'styled-components';
import Search from './components/Search';

const StyledMenu = styled.header`
	display: flex;
	flex-direction: row;
	height: 56px;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.backgroundLevel1 || '#FFFFFF'};
	border: 1px solid ${({ theme }) => theme.borderBase || '#e5e5e5'};
	align-items: center;
	padding: 0 16px;
	gap: 16px;
	position: fixed;
	width: 100%;
	.logo {
		width: 100%;
		max-width: 80px;
		@media (min-width: 600px) {
			max-width: 127px;
		}
		.text {
			fill: ${({ theme }) => theme.textColorBase || '#222222'};
		}
	}
`;

export default function Menu({ valorDoFiltro, setValorDofiltro }) {
	return (
		<StyledMenu>
			<div>
				<Logo />
			</div>
			<Search valorDoFiltro={valorDoFiltro} setValorDofiltro={setValorDofiltro} />
		</StyledMenu>
	);
}

function Logo() {
	return (
		<svg
			className="logo"
			width="180"
			height="32"
			viewBox="0 0 180 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_3015_84)">
				<path
					d="M40.1558 5.20559C39.6827 3.26234 38.298 1.73016 36.5419 1.20698C33.3336 0.235351 20.5 0.235352 20.5 0.235352C20.5 0.235352 7.66637 0.235351 4.45799 1.1696C2.73558 1.69279 1.31713 3.26234 0.844315 5.20559C0 8.75575 0 16.1177 0 16.1177C0 16.1177 0 23.517 0.844315 27.0298C1.31713 28.9731 2.70181 30.5052 4.45799 31.0284C7.70016 32.0001 20.5 32.0001 20.5 32.0001C20.5 32.0001 33.3336 32.0001 36.5419 31.0658C38.298 30.5426 39.6827 29.0104 40.1558 27.0672C40.9998 23.517 40.9998 16.1551 40.9998 16.1551C40.9998 16.1551 41.0336 8.75575 40.1558 5.20559Z"
					fill="#00BF36"
				/>
				<path d="M16.4135 9.31633V22.9191L27.0856 16.1177L16.4135 9.31633Z" fill="white" />
				<path
					d="M47.8295 7.54545L53.0114 22.2386H53.2159L58.3977 7.54545H60.6136L54.2045 25H52.0227L45.6136 7.54545H47.8295ZM67.3295 25.2727C66.0682 25.2727 64.9801 24.9943 64.0653 24.4375C63.1562 23.875 62.4545 23.0909 61.9602 22.0852C61.4716 21.0739 61.2273 19.8977 61.2273 18.5568C61.2273 17.2159 61.4716 16.0341 61.9602 15.0114C62.4545 13.983 63.142 13.1818 64.0227 12.608C64.9091 12.0284 65.9432 11.7386 67.125 11.7386C67.8068 11.7386 68.4801 11.8523 69.1449 12.0795C69.8097 12.3068 70.4148 12.6761 70.9602 13.1875C71.5057 13.6932 71.9403 14.3636 72.2642 15.1989C72.5881 16.0341 72.75 17.0625 72.75 18.2841V19.1364H62.6591V17.3977H70.7045C70.7045 16.6591 70.5568 16 70.2614 15.4205C69.9716 14.8409 69.5568 14.3835 69.017 14.0483C68.483 13.7131 67.8523 13.5455 67.125 13.5455C66.3239 13.5455 65.6307 13.7443 65.0455 14.142C64.4659 14.5341 64.0199 15.0455 63.7074 15.6761C63.3949 16.3068 63.2386 16.983 63.2386 17.7045V18.8636C63.2386 19.8523 63.4091 20.6903 63.75 21.3778C64.0966 22.0597 64.5767 22.5795 65.1903 22.9375C65.804 23.2898 66.517 23.4659 67.3295 23.4659C67.858 23.4659 68.3352 23.392 68.7614 23.2443C69.1932 23.0909 69.5653 22.8636 69.8778 22.5625C70.1903 22.2557 70.4318 21.875 70.6023 21.4205L72.5455 21.9659C72.3409 22.625 71.9972 23.2045 71.5142 23.7045C71.0313 24.1989 70.4347 24.5852 69.7244 24.8636C69.0142 25.1364 68.2159 25.2727 67.3295 25.2727ZM81.0938 30.1818C80.1222 30.1818 79.2869 30.0568 78.5881 29.8068C77.8892 29.5625 77.3068 29.2386 76.8409 28.8352C76.3807 28.4375 76.0142 28.0114 75.7415 27.5568L77.3438 26.4318C77.5256 26.6705 77.7557 26.9432 78.0341 27.25C78.3125 27.5625 78.6932 27.8324 79.1761 28.0597C79.6648 28.2926 80.304 28.4091 81.0938 28.4091C82.1506 28.4091 83.0227 28.1534 83.7102 27.642C84.3977 27.1307 84.7415 26.3295 84.7415 25.2386V22.5795H84.571C84.4233 22.8182 84.2131 23.1136 83.9403 23.4659C83.6733 23.8125 83.2869 24.1222 82.7812 24.3949C82.2812 24.6619 81.6051 24.7955 80.7528 24.7955C79.696 24.7955 78.7472 24.5455 77.9062 24.0455C77.071 23.5455 76.4091 22.8182 75.9205 21.8636C75.4375 20.9091 75.196 19.75 75.196 18.3864C75.196 17.0455 75.4318 15.8778 75.9034 14.8835C76.375 13.8835 77.0313 13.1108 77.8722 12.5653C78.7131 12.0142 79.6847 11.7386 80.7869 11.7386C81.6392 11.7386 82.3153 11.8807 82.8153 12.1648C83.321 12.4432 83.7074 12.7614 83.9744 13.1193C84.2472 13.4716 84.4574 13.7614 84.6051 13.9886H84.8097V11.9091H86.7528V25.375C86.7528 26.5 86.4972 27.4148 85.9858 28.1193C85.4801 28.8295 84.7983 29.3494 83.9403 29.679C83.0881 30.0142 82.1392 30.1818 81.0938 30.1818ZM81.0256 22.9886C81.8324 22.9886 82.5142 22.804 83.071 22.4347C83.6278 22.0653 84.0511 21.5341 84.3409 20.8409C84.6307 20.1477 84.7756 19.3182 84.7756 18.3523C84.7756 17.4091 84.6335 16.5767 84.3494 15.8551C84.0653 15.1335 83.6449 14.5682 83.0881 14.1591C82.5313 13.75 81.8438 13.5455 81.0256 13.5455C80.1733 13.5455 79.4631 13.7614 78.8949 14.1932C78.3324 14.625 77.9091 15.2045 77.625 15.9318C77.3466 16.6591 77.2074 17.4659 77.2074 18.3523C77.2074 19.2614 77.3494 20.0653 77.6335 20.7642C77.9233 21.4574 78.3494 22.0028 78.9119 22.4006C79.4801 22.7926 80.1847 22.9886 81.0256 22.9886ZM94.2869 25.3068C93.4574 25.3068 92.7045 25.1506 92.0284 24.8381C91.3523 24.5199 90.8153 24.0625 90.4176 23.4659C90.0199 22.8636 89.821 22.1364 89.821 21.2841C89.821 20.5341 89.9688 19.9261 90.2642 19.4602C90.5597 18.9886 90.9545 18.6193 91.4489 18.3523C91.9432 18.0852 92.4886 17.8864 93.0852 17.7557C93.6875 17.6193 94.2926 17.5114 94.9006 17.4318C95.696 17.3295 96.3409 17.2528 96.8352 17.2017C97.3352 17.1449 97.6989 17.0511 97.9261 16.9205C98.1591 16.7898 98.2756 16.5625 98.2756 16.2386V16.1705C98.2756 15.3295 98.0455 14.6761 97.5852 14.2102C97.1307 13.7443 96.4403 13.5114 95.5142 13.5114C94.554 13.5114 93.8011 13.7216 93.2557 14.142C92.7102 14.5625 92.3267 15.0114 92.1051 15.4886L90.196 14.8068C90.5369 14.0114 90.9915 13.392 91.5597 12.9489C92.1335 12.5 92.7585 12.1875 93.4347 12.0114C94.1165 11.8295 94.7869 11.7386 95.446 11.7386C95.8665 11.7386 96.3494 11.7898 96.8949 11.892C97.446 11.9886 97.9773 12.1903 98.4886 12.4972C99.0057 12.804 99.4347 13.267 99.7756 13.8864C100.116 14.5057 100.287 15.3352 100.287 16.375V25H98.2756V23.2273H98.1733C98.0369 23.5114 97.8097 23.8153 97.4915 24.1392C97.1733 24.4631 96.75 24.7386 96.2216 24.9659C95.6932 25.1932 95.0483 25.3068 94.2869 25.3068ZM94.5938 23.5C95.3892 23.5 96.0597 23.3438 96.6051 23.0312C97.1563 22.7188 97.571 22.3153 97.8494 21.821C98.1335 21.3267 98.2756 20.8068 98.2756 20.2614V18.4205C98.1903 18.5227 98.0028 18.6165 97.7131 18.7017C97.429 18.7812 97.0994 18.8523 96.7244 18.9148C96.3551 18.9716 95.9943 19.0227 95.642 19.0682C95.2955 19.108 95.0142 19.142 94.7983 19.1705C94.2756 19.2386 93.7869 19.3494 93.3324 19.5028C92.8835 19.6506 92.5199 19.875 92.2415 20.1761C91.9688 20.4716 91.8324 20.875 91.8324 21.3864C91.8324 22.0852 92.0909 22.6136 92.608 22.9716C93.1307 23.3239 93.7926 23.5 94.5938 23.5ZM105.969 17.125V25H103.958V11.9091H105.901V13.9545H106.072C106.379 13.2898 106.844 12.7557 107.469 12.3523C108.094 11.9432 108.901 11.7386 109.89 11.7386C110.776 11.7386 111.552 11.9205 112.217 12.2841C112.881 12.642 113.398 13.1875 113.768 13.9205C114.137 14.6477 114.322 15.5682 114.322 16.6818V25H112.31V16.8182C112.31 15.7898 112.043 14.9886 111.509 14.4148C110.975 13.8352 110.242 13.5455 109.31 13.5455C108.668 13.5455 108.094 13.6847 107.589 13.9631C107.089 14.2415 106.694 14.6477 106.404 15.1818C106.114 15.7159 105.969 16.3636 105.969 17.125ZM117.111 10.196V7.54545H131.037V10.196H125.642V25H122.506V10.196H117.111ZM140.148 19.4943V11.9091H143.233V25H140.241V22.6733H140.105C139.81 23.4062 139.324 24.0057 138.648 24.4716C137.977 24.9375 137.151 25.1705 136.168 25.1705C135.31 25.1705 134.551 24.9801 133.892 24.5994C133.239 24.2131 132.727 23.6534 132.358 22.9205C131.989 22.1818 131.804 21.2898 131.804 20.2443V11.9091H134.889V19.767C134.889 20.5966 135.116 21.2557 135.571 21.7443C136.026 22.233 136.622 22.4773 137.361 22.4773C137.815 22.4773 138.256 22.3665 138.682 22.1449C139.108 21.9233 139.457 21.5938 139.73 21.1562C140.009 20.7131 140.148 20.1591 140.148 19.4943ZM146.542 25V7.54545H149.627V14.0739H149.755C149.914 13.7557 150.138 13.4176 150.428 13.0597C150.718 12.696 151.11 12.3864 151.604 12.1307C152.099 11.8693 152.729 11.7386 153.496 11.7386C154.508 11.7386 155.42 11.9972 156.232 12.5142C157.05 13.0256 157.698 13.7841 158.175 14.7898C158.658 15.7898 158.9 17.017 158.9 18.4716C158.9 19.9091 158.664 21.1307 158.192 22.1364C157.721 23.142 157.079 23.9091 156.266 24.4375C155.454 24.9659 154.533 25.2301 153.505 25.2301C152.755 25.2301 152.133 25.1051 151.638 24.8551C151.144 24.6051 150.746 24.304 150.445 23.9517C150.15 23.5937 149.92 23.2557 149.755 22.9375H149.576V25H146.542ZM149.567 18.4545C149.567 19.3011 149.687 20.0426 149.925 20.679C150.17 21.3153 150.519 21.8125 150.974 22.1705C151.434 22.5227 151.991 22.6989 152.644 22.6989C153.326 22.6989 153.897 22.517 154.357 22.1534C154.817 21.7841 155.164 21.2812 155.397 20.6449C155.636 20.0028 155.755 19.2727 155.755 18.4545C155.755 17.642 155.638 16.9205 155.406 16.2898C155.173 15.6591 154.826 15.1648 154.366 14.8068C153.906 14.4489 153.332 14.2699 152.644 14.2699C151.985 14.2699 151.425 14.4432 150.965 14.7898C150.505 15.1364 150.156 15.6222 149.917 16.2472C149.684 16.8722 149.567 17.608 149.567 18.4545Z"
					fill="black"
				/>
			</g>
			<path
				d="M160.881 10V2.72727H163.423C163.93 2.72727 164.348 2.81487 164.677 2.99006C165.006 3.16288 165.251 3.39607 165.412 3.68963C165.573 3.98082 165.653 4.30398 165.653 4.65909C165.653 4.97159 165.598 5.22964 165.487 5.43324C165.378 5.63684 165.233 5.79782 165.053 5.91619C164.876 6.03456 164.683 6.12216 164.474 6.17898V6.25C164.697 6.2642 164.921 6.34233 165.146 6.48438C165.371 6.62642 165.559 6.83002 165.71 7.09517C165.862 7.36032 165.938 7.68466 165.938 8.06818C165.938 8.43277 165.855 8.76065 165.689 9.05185C165.523 9.34304 165.262 9.57386 164.904 9.74432C164.547 9.91477 164.081 10 163.509 10H160.881ZM161.761 9.21875H163.509C164.084 9.21875 164.492 9.10748 164.734 8.88494C164.978 8.66004 165.099 8.38778 165.099 8.06818C165.099 7.82197 165.037 7.5947 164.911 7.38636C164.786 7.17566 164.607 7.00758 164.375 6.8821C164.143 6.75426 163.868 6.69034 163.551 6.69034H161.761V9.21875ZM161.761 5.9233H163.395C163.66 5.9233 163.899 5.87121 164.112 5.76705C164.328 5.66288 164.498 5.5161 164.624 5.3267C164.751 5.13731 164.815 4.91477 164.815 4.65909C164.815 4.33949 164.704 4.06842 164.482 3.84588C164.259 3.62098 163.906 3.50852 163.423 3.50852H161.761V5.9233ZM167.385 10V2.72727H169.842C170.41 2.72727 170.877 2.82434 171.241 3.01847C171.606 3.21023 171.876 3.47419 172.051 3.81037C172.226 4.14654 172.314 4.52888 172.314 4.95739C172.314 5.38589 172.226 5.76586 172.051 6.0973C171.876 6.42874 171.607 6.68916 171.245 6.87855C170.882 7.06558 170.42 7.15909 169.856 7.15909H167.868V6.36364H169.828C170.216 6.36364 170.529 6.30682 170.765 6.19318C171.004 6.07955 171.177 5.91856 171.284 5.71023C171.393 5.49953 171.447 5.24858 171.447 4.95739C171.447 4.66619 171.393 4.41169 171.284 4.19389C171.175 3.97609 171.001 3.808 170.762 3.68963C170.523 3.56889 170.207 3.50852 169.814 3.50852H168.265V10H167.385ZM170.808 6.73295L172.598 10H171.575L169.814 6.73295H170.808Z"
				fill="black"
			/>
			<defs>
				<clipPath id="clip0_3015_84">
					<rect
						width="165"
						height="31.7647"
						fill="white"
						transform="translate(0 0.235352)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}