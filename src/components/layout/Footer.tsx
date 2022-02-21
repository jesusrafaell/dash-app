import './styles/footer.scss';
import LanguageIcon from '@mui/icons-material/Language';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
	return (
		<div className='container-footer'>
			<div className='container-footer-left'>
				<p className='text-footer color-gray'>
					Copyright © 2022 <span className='color-light'>Zatcoin</span>- All rights reserved.
				</p>
			</div>
			<div className='container-footer-right'>
				<div className='item-footer'>
					<LanguageIcon className='color-light icon-footer' />
					<span className='color-gray'>Website</span>
				</div>

				<div className='item-footer'>
					<TelegramIcon className='color-light icon-footer' />
					<span className='color-gray'>Telegram</span>
				</div>
				<div className='item-footer'>
					<TwitterIcon className='color-light icon-footer' />
					<span className='color-gray'>Twitter</span>
				</div>
			</div>
		</div>
	);
}

export default Footer;
