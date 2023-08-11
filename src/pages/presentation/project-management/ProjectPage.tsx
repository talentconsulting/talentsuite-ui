import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import classNames from 'classnames';
import DataContext from './../../../contexts/dataContext/dataContext';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../layout/SubHeader/SubHeader';
import Button from '../../../components/bootstrap/Button';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../components/bootstrap/Card';
import Avatar from '../../../components/Avatar';
import Icon from '../../../components/icon/Icon';
import { APP_PATHS } from '../../../routes/contentRoutes';
import CommonAvatarTeam from '../../../common/other/CommonAvatarTeam';
import COLORS from '../../../common/data/enumColors';
import useDarkMode from '../../../hooks/useDarkMode';
import { useNavigate } from 'react-router-dom';
import { IProjectModel } from '../../../models/ui-models/IProjectModel';
import RAG_STATUS, { IStatus } from '../../../models/ui-models/enums/enumStatus';

const ProjectPage = () => {
	const { dataService } = useContext(DataContext);
	const { darkModeStatus } = useDarkMode();

	const { id } = useParams();


	var emptyProject: IProjectModel = {id: "-1",
		name: '',
		startedDate: '',
		endDate: '',
		teamMembers: [],
		status: RAG_STATUS.APPROVED,
		description: '',
		image: ''};
	const [data, updateItems] = useState(emptyProject);
	//var data = projectService.getProjectById(id);



	const getProjectData = ()=>{

		dataService.projectService.getProjectById(id).then(data => {
			if(data != undefined){
				updateItems(data)
			}
		});
	}

	useEffect(() => {
        getProjectData();
     });





	const navigate = useNavigate();

	const reportsOnClick = (projectId:any)=>{
		var path = APP_PATHS.PROJECTS.REPORTS.LIST;
		path = path.replace(':id', projectId);
		navigate(`../${path}`);
	};

	return (
		<PageWrapper title={`${data.name}`}>
			<SubHeader>
				<SubHeaderLeft>
					<Button
						color='info'
						isLink
						icon='ArrowBack'
						tag='a'
						to={`../${APP_PATHS.PEOPLE.LIST}`}>
						Back to List
					</Button>
					<SubheaderSeparator />
					<CommonAvatarTeam isAlignmentEnd>
						<strong>Project</strong> Team
					</CommonAvatarTeam>
				</SubHeaderLeft>
				<SubHeaderRight>
					<span className='text-muted fst-italic me-2'>Last update:</span>
					<span className='fw-bold'>13 hours ago</span>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='pt-3 pb-5 d-flex align-items-center'>
					<span className='display-4 fw-bold me-3'>{`${data.name}`}</span>
				</div>
				<div className='row'>
					<div className='col-lg-4'>
						<Card className='shadow-3d-info'>
							<CardHeader>
								<CardLabel icon='Summarize' iconColor='success'>
									<CardTitle tag='h4' className='h5'>
										Summary
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-5'>
									<div className='col-12 d-flex justify-content-center'>
									<img
										src={data.image}
										alt=''
										width='100%'
										height='auto'
										className='object-fit-contain p-3'
									/>
									</div>
									<div className='col-12'>
										<div className='row g-2'>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Festival' size='3x' color='info' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															Clients
														</div>
														<div className='text-muted'>
															List of Clients
														</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Traffic' size='3x' color='info' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															Rag Status
														</div>
														<div className='text-muted'>
															{data.status.name}
														</div>
													</div>
												</div>
											</div>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Description' size='3x' color='info' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															Description
														</div>
														<div className='text-muted'>
															{data.description}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
					<div className='col-lg-8'>
						<Card>
							<CardHeader>
								<CardLabel icon='ShowChart' iconColor='secondary'>
									<CardTitle>Manage</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-4 align-items-center'>
									<div className='col-xl-6 navigation-item cursor-pointer' onClick={()=> reportsOnClick(id)} >
										<div
											className={classNames(
												'd-flex align-items-center rounded-2 p-3',
												{
													'bg-l10-warning': !darkModeStatus,
													'bg-lo25-warning': darkModeStatus,
												},
											)}>
											<div className='flex-shrink-0'>
												<Icon icon='DoneAll' size='3x' color='warning' />
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-3 mb-0'>15</div>
												<div className='text-muted mt-n2 truncate-line-1'>
													Reports
												</div>
											</div>
										</div>
									</div>
									<div className='col-xl-6'>
										<div
											className={classNames(
												'd-flex align-items-center rounded-2 p-3',
												{
													'bg-l10-info': !darkModeStatus,
													'bg-lo25-info': darkModeStatus,
												},
											)}>
											<div className='flex-shrink-0'>
												<Icon icon='People' size='3x' color='info' />
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-3 mb-0'>25</div>
												<div className='text-muted mt-n2 truncate-line-1'>
													People
												</div>
											</div>
										</div>
									</div>
									<div className='col-xl-12'>
										<div
											className={classNames(
												'd-flex align-items-center rounded-2 p-3',
												{
													'bg-l10-success': !darkModeStatus,
													'bg-lo25-success': darkModeStatus,
												},
											)}>
											<div className='flex-shrink-0'>
												<Icon icon='Timer' size='3x' color='success' />
											</div>
											<div className='flex-grow-1 ms-3'>
												<div className='fw-bold fs-3 mb-0'>12</div>
												<div className='text-muted mt-n2'>Up comming events</div>
											</div>
										</div>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default ProjectPage;
