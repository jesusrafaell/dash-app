import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import './styles/navbar.scss';

function NavBar() {
	return (
		<nav className='nav-bar'>
			<FormatAlignLeftIcon className='burger-menu' />
			<h1 className='title-nav'>ZATCOIN</h1>
		</nav>
	);
}

export default NavBar;
