import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import Navigation from '../../../layout/Navigation/Navigation';
import { productsExampleMenu } from '../../../menu';
import useDeviceScreen from '../../../hooks/useDeviceScreen';
import CommonHeaderRight from './CommonHeaderRight';

const ProductsHeader = () => {
	const { width } = useDeviceScreen();
	return (
		<Header>
			<HeaderLeft>
				<Navigation
					menu={productsExampleMenu}
					id='products-top-menu'
					horizontal={
						!!width && width >= Number(process.env.REACT_APP_MOBILE_BREAKPOINT_SIZE)
					}
				/>
			</HeaderLeft>
			<CommonHeaderRight />
		</Header>
	);
};

export default ProductsHeader;
