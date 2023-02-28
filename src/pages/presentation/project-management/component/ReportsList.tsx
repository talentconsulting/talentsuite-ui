import React, { FC, useState } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';

import { getReportDataByProjectId } from '../../../../common/data/dummyReportsData';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../../../components/PaginationButtons';
import useSortableData from '../../../../hooks/useSortableData';
import useDarkMode from '../../../../hooks/useDarkMode';
import { useParams } from 'react-router-dom';
import OffCanvas, { OffCanvasBody, OffCanvasHeader, OffCanvasTitle } from '../../../../components/bootstrap/OffCanvas';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import { FormikHelpers, useFormik } from 'formik';
import moment from 'moment';
import classNames from 'classnames';


interface ICommonUpcomingEventsProps {
	isFluid?: boolean;
}
const CommonUpcomingEvents: FC<ICommonUpcomingEventsProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();

	const { id } = useParams();
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);
	const { items } = useSortableData(getReportDataByProjectId(id));

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

	const handleProjectAdd = () => {
		setProjectEditOffcanvas(!projectEditOffcanvas);
		setEditModeOffCanvas(false);
	};
	const handleProjectEdit = () => {
		setProjectEditOffcanvas(!projectEditOffcanvas);
		setEditModeOffCanvas(true);
	};

	const [projectEditOffcanvas, setProjectEditOffcanvas] = useState(false);
	const [editModeOffCanvas, setEditModeOffCanvas] = useState(false);

	return (
		<>
			<Card stretch={isFluid}>
				<CardHeader borderSize={1}>
					<CardLabel icon='Alarm' iconColor='info'>
						<CardTitle>Reports</CardTitle>
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
								<th>Reported Date</th>
								<th>Reported By</th>
								<th>Description</th>
								<td />
							</tr>
						</thead>
						<tbody>
							{dataPagination(items, currentPage, perPage).map((item) => (
								<tr key={item.id}>
									<td></td>
									<td>{item.reportedDate}</td>
									<td>{item.enteredBy}</td>
									<td>{item.description}</td>
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

export default CommonUpcomingEvents;
