import React, { useState } from 'react';
import moment from 'moment';
import { Calendar as DatePicker } from 'react-date-range';
import SubHeader, { SubHeaderLeft, SubHeaderRight } from '../../../layout/SubHeader/SubHeader';
import Icon from '../../../components/icon/Icon';
import Button from '../../../components/bootstrap/Button';
import Page from '../../../layout/Page/Page';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import ProjectList from './component/ProjectsList';
import Popovers from '../../../components/bootstrap/Popovers';
import { appPagesMenu } from '../../../menu';
import useDarkMode from '../../../hooks/useDarkMode';

const ListProjectsPage = () => {
	const { themeStatus } = useDarkMode();

	const [date, setDate] = useState<Date>(new Date());

	return (
		<PageWrapper title={appPagesMenu.listProjects.text}>
			<SubHeader>
				<SubHeaderLeft>
					<Icon icon='Info' className='me-2' size='2x' />
					<span className='text-muted'>
						You have <Icon icon='TaskAlt' color='success' className='mx-1' size='lg' />{' '}
						3 projects on target and{' '}
						<Icon icon='Alarm' color='warning' className='mx-1' size='lg' /> 2 at risk
					</span>
				</SubHeaderLeft>
				<SubHeaderRight>
					<Popovers
						desc={
							<DatePicker
								onChange={(item) => setDate(item)}
								date={date}
								color={process.env.REACT_APP_PRIMARY_COLOR}
							/>
						}
						placement='bottom-end'
						className='mw-100'
						trigger='click'>
						<Button color={themeStatus}>
							{`${moment(date).startOf('weeks').format('MMM Do')} - ${moment(date)
								.endOf('weeks')
								.format('MMM Do')}`}
						</Button>
					</Popovers>
				</SubHeaderRight>
			</SubHeader>
			<Page container='fluid'>
				<ProjectList isFluid />
			</Page>
		</PageWrapper>
	);
};

export default ListProjectsPage;
