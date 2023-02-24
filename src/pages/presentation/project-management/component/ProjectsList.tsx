import React, { FC, useState, useCallback } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';
import Icon from '../../../../components/icon/Icon';
import data from '../../../../common/data/dummyProjectsData';
import PROJECT_STATUS from '../../../../common/data/enumProjectStatus';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../../../components/PaginationButtons';
import useSortableData from '../../../../hooks/useSortableData';
import useDarkMode from '../../../../hooks/useDarkMode';
import { useNavigate } from 'react-router-dom';
import { APP_PATHS } from '../../../../routes/contentRoutes';
import classNames from 'classnames';
import OffCanvas, { OffCanvasBody, OffCanvasHeader, OffCanvasTitle } from '../../../../components/bootstrap/OffCanvas';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import { FormikHelpers, useFormik } from 'formik';
import moment from 'moment';
import Input from '../../../../components/bootstrap/forms/Input';

interface ICommonUpcomingEventsProps {
	isFluid?: boolean;
}
const ProjectLists: FC<ICommonUpcomingEventsProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();


	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);
	const { items } = useSortableData(data);
	const navigate = useNavigate();

	const handleOnClick = (id:any)=>{
		navigate(`../${APP_PATHS.PROJECTS.ITEM}/${id}`);
	};

	const [projectEditOffcanvas, setProjectEditOffcanvas] = useState(false);
	const [editModeOffCanvas, setEditModeOffCanvas] = useState(false);
	const handleProjectAdd = () => {
		setProjectEditOffcanvas(!projectEditOffcanvas);
		setEditModeOffCanvas(false);
	};
	const handleProjectEdit = () => {
		setProjectEditOffcanvas(!projectEditOffcanvas);
		setEditModeOffCanvas(true);
	};

	const formik = useFormik({
		onSubmit<Values>(
			values: Values,
			formikHelpers: FormikHelpers<Values>,
		): void | Promise<any> {
			return undefined;
		},
		initialValues: {
			project: 'Project D',
			startedDate: moment().add(1, 'days').format('YYYY-MM-DD'),
			endDate: moment().add(90, 'days').format('YYYY-MM-DD'),
			teamMembers: '',
			status: 'Green'
		},
	});

	return (
		<>
			<Card stretch={isFluid}>
				<CardHeader borderSize={1}>
					<CardLabel icon='Alarm' iconColor='info'>
						<CardTitle>Projects</CardTitle>
					</CardLabel>
					<CardActions>
						<Button
							onClick={handleProjectAdd}
							color='info'
							icon='Add'
							isLight
							tag='a'
							download>
							Add Project Report
						</Button>
					</CardActions>
				</CardHeader>
				<CardBody className='table-responsive' isScrollable={isFluid}>
					<table className='table table-modern'>
						<thead>
							<tr>
								<td style={{ width: 60 }} />
								<th>Project</th>
								<th>Start Date</th>
								<th>End Date</th>
								<th>Team Members</th>
								<th>RAG Status</th>
								<th></th>
								<td />
							</tr>
						</thead>
						<tbody>
							{dataPagination(items, currentPage, perPage).map((item) => (
								<tr key={item.id} className='navigation-item cursor-pointer'>
									<td>
										<Button
											isOutline={!darkModeStatus}
											color='dark'
											isLight={darkModeStatus}
											className={classNames({
												'border-light': !darkModeStatus,
											})}
											icon='Info'
											onClick={()=> handleOnClick(item.id)}
											aria-label='Detailed information'
										/>
									</td>
									<td>{item.name}</td>
									<td>
										<span className='text-nowrap'>
											{moment(item.startedDate).format(
												'MMM Do YYYY',
											)}
										</span>
									</td>
									<td>
										<span className='text-nowrap'>
											{moment(item.endDate).format(
												'MMM Do YYYY',
											)}
										</span>
									</td>
									<td>{item.teamMembers}</td>
									<td>
										<Dropdown>
											<DropdownToggle hasIcon={false}>
												<Button
													isLink
													color={item.status.color}
													icon='Circle'
													className='text-nowrap'>
													{item.status.name}
												</Button>
											</DropdownToggle>
											<DropdownMenu>
												{Object.keys(PROJECT_STATUS).map((key) => (
													<DropdownItem key={key}>
														<div>
															<Icon
																icon='Circle'
																color={PROJECT_STATUS[key].color}
															/>
															{PROJECT_STATUS[key].name}
														</div>
													</DropdownItem>
												))}
											</DropdownMenu>
										</Dropdown>
									</td>
									<td>
	
									</td>
									<td>
										<Button
											isOutline={!darkModeStatus}
											color='dark'
											isLight={darkModeStatus}
											className={classNames('text-nowrap', {
												'border-light': !darkModeStatus,
											})}
											icon='Edit'
											onClick={handleProjectEdit}>
											Edit
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</CardBody>
				<PaginationButtons
					data={items}
					label='items'
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
					perPage={perPage}
					setPerPage={setPerPage}
				/>
			</Card>

			<OffCanvas
				setOpen={setProjectEditOffcanvas}
				isOpen={projectEditOffcanvas}
				titleId='projectAddEdit'
				isBodyScroll
				placement='end'>
				<OffCanvasHeader setOpen={setProjectEditOffcanvas}>
					<OffCanvasTitle id='projectAddEdit'>Add Project Report</OffCanvasTitle>
				</OffCanvasHeader>
				<OffCanvasBody>
					<div className='row g-4'>
						<div className='col-12'>
							<FormGroup id='project' label='Project'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.project}
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='startedDate' label='Started Date'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.startedDate}
									type='date'
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='endDate' label='End Date'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.endDate}
									type='date'
								/>
							</FormGroup>
						</div>
						<div className='col-12'>
							<FormGroup id='teamMembers' label='Team Members'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.teamMembers}
								/>
							</FormGroup>
						</div>
						<div className='col-6'>
							<FormGroup id='status' label='RAG Status'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.status}
								/>
							</FormGroup>
						</div>
					</div>
				</OffCanvasBody>
				<div className='row m-0'>
					<div className='col-12 p-3'>
						<Button
							color='info'
							className='w-100'
							onClick={() => setProjectEditOffcanvas(false)}>
							Save
						</Button>
					</div>
				</div>
			</OffCanvas>
		</>
	);
};

export default ProjectLists;
