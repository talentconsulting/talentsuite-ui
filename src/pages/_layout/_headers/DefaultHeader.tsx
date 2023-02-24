import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import useDeviceScreen from '../../../hooks/useDeviceScreen';
import CommonHeaderRight from './CommonHeaderRight';

const DefaultHeader = () => {
	const { width } = useDeviceScreen();
	return (
		<Header>
			<HeaderLeft>

			</HeaderLeft>
			<CommonHeaderRight />
		</Header>
	);
};

export default DefaultHeader;
