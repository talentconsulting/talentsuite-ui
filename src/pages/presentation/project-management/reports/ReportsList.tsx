import React, { useEffect, FC, useState, useContext } from 'react';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';

import { getDummyReportDataByProjectId } from '../../../../common/data/dummyReportsData';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../../../components/PaginationButtons';
import useSortableData from '../../../../hooks/useSortableData';
import useDarkMode from '../../../../hooks/useDarkMode';
import { useParams } from 'react-router-dom';
import OffCanvas, { OffCanvasBody, OffCanvasHeader, OffCanvasTitle } from '../../../../components/bootstrap/OffCanvas';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import Icon from '../../../../components/icon/Icon';
import { FormikHelpers, useFormik } from 'formik';
import moment from 'moment';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { APP_PATHS } from '../../../../routes/contentRoutes';
import DataContext from './../../../../contexts/dataContext/dataContext';
import { IReportModel } from '../../../../models/ui-models/IReportModel';
import { v4 as uuidv4 } from 'uuid';
import { IReportAddModel } from '../../../../models/ui-models/IReportModel';
import PROJECT_STATUS, { IStatus } from '../../../../models/ui-models/enums/enumStatus';


interface ICommonUpcomingEventsProps {
	isFluid?: boolean;
}
const ReportsList: FC<ICommonUpcomingEventsProps> = ({ isFluid }) => {

	const { dataService } = useContext(DataContext);
	var emptyReportList: IReportModel[] = [];
	const { themeStatus, darkModeStatus } = useDarkMode();

	const { id } = useParams();
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);
	const [items, updateItems] = useState(emptyReportList);
	const navigate = useNavigate();


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
			description: '',
			status: 'Green'
		},
	});

	const handleRowOnClick = (id:any)=>{
		var path = APP_PATHS.PROJECTS.REPORTS.DETAILS.replace(':id', id)
		navigate(`../${path}`);
	};

	const handleProjectAdd = () => {
		setProjectEditOffcanvas(!projectEditOffcanvas);
		setEditModeOffCanvas(false);
    };
	const handleProjectEdit = () => {
		setProjectEditOffcanvas(!projectEditOffcanvas);
		setEditModeOffCanvas(true);
	};

    const handleProjectAddSave = () => {
		setProjectEditOffcanvas(false);

		var model: IReportAddModel = {
            plannedTasks: "todo",
            completedTasks: "todo",
            projectId: "todo",
            userId: "todo",
            clientId: "todo",
			description: formik.values.description,
			ragStatus: PROJECT_STATUS["APPROVED"],
            risks: []
		};

		console.log(model);

        dataService.reportService.addNewReport(model);
    };

	const getReportData = ()=>{

		dataService.reportService.getReportsDataByProjectId(id).then(data => 
			updateItems(data)
			);

	}

	useEffect(() => {
        getReportData();
     }, []);

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
								<th>Client</th>
                                <th>Project</th>
								<th>Reported Date</th>
								<th>Reported By</th>
								<th>Description</th>
								<th>Status</th>
								<td />
							</tr>
						</thead>
						<tbody>
							{dataPagination(items, currentPage, perPage).map((item) => (
								<tr key={item.id} onClick={()=> handleRowOnClick(item.id)} className='navigation-item cursor-pointer'>
									<td></td>
									<td>{item.client}</td>
									<td>{item.projectName}</td>
									<td>{moment(item.submissionDate).format('Do MMM YYYY')}</td>
									<td>{item.userName}</td>
									<td>{item.description}</td>
									<td>
									<Icon icon='Circle' color={ item.ragStatus.color } />
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
							<FormGroup id='description' label='Description'>
								<Input
									onChange={formik.handleChange}
									value={formik.values.description}
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
							onClick={() => handleProjectAddSave()}>
							Save
						</Button>
					</div>
				</div>
			</OffCanvas>
		</>
	);
};

export default ReportsList;
