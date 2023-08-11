import React, { useState, useContext, useEffect } from 'react';
import useDarkMode from '../../../../hooks/useDarkMode';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Page from '../../../../layout/Page/Page';
import Card, {
    CardBody,
    CardHeader,
    CardLabel,
    CardTitle,
} from '../../../../components/bootstrap/Card';
import DataContext from './../../../../contexts/dataContext/dataContext';
import { useParams } from 'react-router-dom';
import Icon from '../../../../components/icon/Icon';
import { IReportModel, IReportRiskModel, ReportModel, ReportRiskModel, ReportAddModel } from '../../../../models/ui-models/IReportModel';
import REPORT_STATUS, { IStatus } from '../../../../models/ui-models/enums/enumStatus';
import Textarea from '../../../../components/bootstrap/forms/Textarea';
import AuthContext from '../../../../contexts/authContext';
import Input from '../../../../components/bootstrap/forms/Input';
import Select, { ISelectItem } from '../../../../components/bootstrap/forms/Select';
import { dateNow, weekNumber } from '../../../../helpers/dateHelper';
import Button from '../../../../components/bootstrap/Button';
import RAG_STATUS from '../../../../models/ui-models/enums/enumStatus';
import Dropdown, { DropdownItem, DropdownMenu, DropdownToggle } from '../../../../components/bootstrap/Dropdown';

const ReportDetailsPage = () => {

	const { themeStatus } = useDarkMode();
	const [date, setDate] = useState<Date>(new Date());
	const { id } = useParams();
	const pageTitle = ((id == 'new') ? 'New Report' : 'Edit Report');
	const { dataService } = useContext(DataContext);
	const { userData } = useContext(AuthContext);

    var newReport = { 
		plannedTasks: '',
		completedTasks: '',
		weeknumber: weekNumber(),
		projectId: '',
		userId: userData.id,
		risks:[] as IReportRiskModel[],
		userName: userData.name + ' ' + userData.surname,
		submissionDate: dateNow(),
		description: '',
		ragStatus:REPORT_STATUS.APPROVED, 
		projectName: ''
	} as IReportModel;
	
	var shouldUpdate = false;
	const [data, updateUserDetails] = useState(newReport);
	const [projectList, updateProjectList] = useState([] as ISelectItem[]);

	const getReportData = ()=>{
		var projects = dataService.projectService.getProjectsByClientId('All').then(data => {
			var projects: ISelectItem[] = [];
			data.forEach(project => {
				projects.push({'value': project.id, 'text': project.name});
			});
			updateProjectList(projects);
		});

		if(id == 'new'){
			return;
		}

		dataService.reportAggregateService.getById(id).then(data => {
			updateUserDetails(data);
		});

	}

	useEffect(() => {
        getReportData();
     }, [shouldUpdate]);

	const handleAddRisk = () => {
		const updatedData = new ReportModel(data);

		var risk = new ReportRiskModel();
		risk.key = `${updatedData.risks.length + 1}`;
		updatedData.risks.push(risk);

		updateUserDetails(updatedData);
		shouldUpdate = !shouldUpdate;
    };

	const updateField = (modifyValue:(arg:ReportModel)=>any) =>{
		const updatedData = new ReportModel(data);
		modifyValue(updatedData);
		updateUserDetails(updatedData);
		shouldUpdate = !shouldUpdate;
	}

	const saveChanges = () => {
		if (data.id != undefined) {
            console.log('Updating report:', data);
            dataService.reportService.updateReport(data);
        } else {
            var addModel = new ReportAddModel(data);
            console.log('Saving new report:', data);
            dataService.reportService.addNewReport(addModel);
        }
    };

    return (

		<PageWrapper title={pageTitle}>

			<Page>
				<div className='row h-100'>
					<div className='col-xl-3 col-lg-4 col-md-6'>
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Article' iconColor='success'>
									<CardTitle>Report - Week {`${data.weeknumber}`}</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody isScrollable>
								<ReportInfoBody>
									<ReportInfoItem icon='Task' label='Project'>
										{(id == 'new')
											? <Select id='ProjectSelect' name='ProjectSelect' ariaLabel='Project' list={ projectList } />
											: data.projectName
										}
									</ReportInfoItem>

									<ReportInfoItem icon='Person' label='Reported By'>{data.userName}</ReportInfoItem>
									<ReportInfoItem icon='DateRange' label='Submitted'>Submitted: {data.submissionDate}</ReportInfoItem>
									<ReportInfoItem icon='Traffic' label='Rag Status'>Rag Status - <Icon icon='Circle' color={data.ragStatus.color} /></ReportInfoItem>

								</ReportInfoBody>

							</CardBody>
						</Card>
					</div>
					<div className='col-xl-9 col-lg-8 col-md-6'>
						
						<Card stretch>
							<CardHeader>
								<CardLabel icon='Report' iconColor='danger'>
									<CardTitle>Risks</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody className='pb-0' isScrollable>
								{data.risks.map((member,index) => (
									<Card key={member.key} borderSize={1}>
										<CardBody className='pb-0'>
											<ReportInfoItem icon='Task' label='Risk Details'>
												<Textarea
														id='exampleDescription'
														ariaLabel='With textarea'
														value={member.riskDetails}
														onChange={(e:any)=> updateField((data:ReportModel)=>{data.risks[index].riskDetails = e.target.value})}
													/>
											</ReportInfoItem><br/>
											<ReportInfoItem icon='Task' label='Risk Mitigation'>
													<Textarea
													id='exampleDescription'
													ariaLabel='With textarea'
													value={member.riskMitigation}
													onChange={(e:any) => updateField((data:ReportModel)=>{data.risks[index].riskMitigation = e.target.value})}
												/>
											</ReportInfoItem><br/>
											<ReportInfoItem icon='Traffic' label='Rag Status'>
													<Dropdown>
														<DropdownToggle hasIcon={false}>
															<Button
																isLink
																color={member.ragStatus.color}
																icon='Circle'
																className='text-nowrap'>
																{member.ragStatus.name}
															</Button>
														</DropdownToggle>
														<DropdownMenu>
															{Object.keys(RAG_STATUS).map((key) => (
																<DropdownItem key={key} onClick={() => updateField((data:ReportModel)=>{data.risks[index].ragStatus = RAG_STATUS[key]})}>
																	<div>
																		<Icon
																			icon='Circle'
																			color={RAG_STATUS[key].color}
																		/>
																		{RAG_STATUS[key].name}
																	</div>
																</DropdownItem>
															))}
														</DropdownMenu>
													</Dropdown>
											</ReportInfoItem><br/>

										</CardBody>
									</Card>
								))}
								
								<Button
									onClick={handleAddRisk}
									className='float-end'
									color='info'
									icon='Add'
									isLight
									tag='a'
									download>
									Add Risk
								</Button>
							</CardBody>
						</Card>
						

					</div>
				</div>
				<div className='row'>
					<div className='col-xl-12 col-lg-12 col-md-12'>
					<Card stretch>
							<CardBody>
								<Button
									onClick={saveChanges}
									className='float-end'
									color='info'
									icon='Add'
									isLight
									tag='a'
									download>
									Save
								</Button>
							</CardBody>
						</Card>

					</div>
				</div>
			</Page>
		</PageWrapper>

	);


};

const ReportInfoItem = (props: any) =>{
	return (
		<div className='col-12'>
			<div className='d-flex align-items-start'>
				<div className='flex-shrink-0'>
					<Icon icon={props.icon} size='3x' color='info' />
				</div>
				<div className='flex-grow-1 ms-3'>
					<div className='fw-bold fs-5 mb-0'>
						{props.label}
					</div>
					{props.children}
				</div>
			</div>
		</div>
	);
  }

  const ReportInfoBody = (props: any) =>{
	return (
		<div className='row g-5'>
			<div className='col-12'>
				<div className='row g-2'>
					{props.children}
				</div>
			</div>
		</div>
	);
  }

export default ReportDetailsPage;
