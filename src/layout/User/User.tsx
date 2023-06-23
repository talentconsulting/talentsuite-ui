import React, { useState, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { APP_PATHS } from '../../routes/contentRoutes';
import { DropdownItem, DropdownMenu } from '../../components/bootstrap/Dropdown';
import Button from '../../components/bootstrap/Button';
import useDarkMode from '../../hooks/useDarkMode';
import Collapse from '../../components/bootstrap/Collapse';
import { NavigationLine } from '../Navigation/Navigation';
import Icon from '../../components/icon/Icon';
import useNavigationItemHandle from '../../hooks/useNavigationItemHandle';
import AuthContext from '../../contexts/authContext';
import { useAuth0 } from "@auth0/auth0-react";

const User = () => {
	const { userData } = useContext(AuthContext);

	const navigate = useNavigate();
	const handleItem = useNavigationItemHandle();
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();

	const [collapseStatus, setCollapseStatus] = useState<boolean>(false);

	const { t } = useTranslation(['translation', 'menu']);

	const { logout } = useAuth0();

	const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });

	return (
		<>
			<div
				className={classNames('user', { open: collapseStatus })}
				role='presentation'
				onClick={() => setCollapseStatus(!collapseStatus)}>
				<div className='user-avatar'>
					<img
						srcSet={userData?.srcSet}
						src={userData?.src}
						alt='Avatar'
						width={128}
						height={128}
					/>
				</div>
				<div className='user-info'>
					<div className='user-name d-flex align-items-center'>
						{`${userData?.name} ${userData?.surname}`}
						<Icon icon='Verified' className='ms-1' color='info' />
					</div>
					<div className='user-sub-title'>{userData?.position}</div>
				</div>
			</div>
			<DropdownMenu>
				<DropdownItem>
					<Button
						icon='AccountBox'
						onClick={() =>
							navigate(
								`../${APP_PATHS.PEOPLE.PERSON}/${userData?.id}`,
							)
						}>
						Profile
					</Button>
				</DropdownItem>
				<DropdownItem>
					<Button
						icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
						onClick={() => setDarkModeStatus(!darkModeStatus)}
						aria-label='Toggle fullscreen'>
						{darkModeStatus ? 'Dark Mode' : 'Light Mode'}
					</Button>
				</DropdownItem>
			</DropdownMenu>

			<Collapse isOpen={collapseStatus} className='user-menu'>
				<nav aria-label='aside-bottom-user-menu'>
					<div className='navigation'>
						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() =>
								navigate(
									`../${APP_PATHS.PEOPLE.PERSON}/${userData?.id}`,
									// @ts-ignore
									handleItem(),
								)
							}>
							<span className='navigation-link navigation-link-pill'>
								<span className='navigation-link-info'>
									<Icon icon='AccountBox' className='navigation-icon' />
									<span className='navigation-text'>
										{t('menu:Profile') as ReactNode}
									</span>
								</span>
							</span>
						</div>
						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() => {
								setDarkModeStatus(!darkModeStatus);
								handleItem();
							}}>
							<span className='navigation-link navigation-link-pill'>
								<span className='navigation-link-info'>
									<Icon
										icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
										color={darkModeStatus ? 'info' : 'warning'}
										className='navigation-icon'
									/>
									<span className='navigation-text'>
										{darkModeStatus
											? (t('menu:DarkMode') as ReactNode)
											: (t('menu:LightMode') as ReactNode)}
									</span>
								</span>
							</span>
						</div>
					</div>
				</nav>
				<NavigationLine />
				<nav aria-label='aside-bottom-user-menu-2'>
					<div className='navigation'>
						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() => {
								
								logoutWithRedirect()
							}}>
							<span className='navigation-link navigation-link-pill'>
								<span className='navigation-link-info'>
									<Icon icon='Logout' className='navigation-icon' />
									<span className='navigation-text'>
										{t('menu:Logout') as ReactNode}
									</span>
								</span>
							</span>
						</div>
					</div>
				</nav>
			</Collapse>
		</>
	);
};

export default User;
