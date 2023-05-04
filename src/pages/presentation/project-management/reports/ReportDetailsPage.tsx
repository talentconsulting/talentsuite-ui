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
import { IReportModel, IReportRiskModel } from '../../../../models/ui-models/IReportModel';
import REPORT_STATUS, { IStatus } from '../../../../models/ui-models/enums/enumStatus';
import Textarea from '../../../../components/bootstrap/forms/Textarea';
import AuthContext from '../../../../contexts/authContext';

const ReportDetailsPage = () => {

	const { themeStatus } = useDarkMode();
	const [date, setDate] = useState<Date>(new Date());
	const { id } = useParams();
	const pageTitle = ((id == 'new') ? 'New Report' : 'Edit Report');
	const { dataService } = useContext(DataContext);
	const { userData } = useContext(AuthContext);

	console.log(userData);

	var newReport = { 
		plannedTasks: '',
		completedTasks: '',
		weeknumber: 0,
		projectId: '',
		userId: userData.id,
		risks:[] as IReportRiskModel[],
		userName: userData.name + ' ' + userData.surname,
		description: '',
		ragStatus:REPORT_STATUS.APPROVED, 
		projectName: ''
	} as IReportModel;

	const [data, updateItems] = useState(newReport);
	const getReportData = ()=>{

		if(id == 'new'){
			return;
		}


		dataService.reportAggregateService.getById(id).then(data => {
			updateItems(data);
		});

	}

	useEffect(() => {
        getReportData();
     }, []);

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

									<ReportInfoItem icon='Task'>{data.projectName}</ReportInfoItem>

									<ReportInfoItem icon='Person'>{data.userName}</ReportInfoItem>

									<ReportInfoItem icon='DateRange'>Submitted: {data.submissionDate}</ReportInfoItem>

									<ReportInfoItem icon='Traffic'>Rag Status - <Icon icon='Circle' color={data.ragStatus.color} /></ReportInfoItem>

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
								{data.risks.map((member) => (
									<Card borderSize={1}>
										<CardBody className='pb-0'>
											<ReportInfoItem icon='Task'>
												<Textarea
														id='exampleDescription'
														ariaLabel='With textarea'
														value={member.riskDetails}
													/>
											</ReportInfoItem><br/>
											<ReportInfoItem icon='Task'>
													<Textarea
													id='exampleDescription'
													ariaLabel='With textarea'
													value={member.riskMitigation}
												/>
											</ReportInfoItem><br/>
											<ReportInfoItem icon='Traffic'><Icon icon='Circle' color={member.ragStatus.color} /></ReportInfoItem><br/>





										</CardBody>
									</Card>
								))}
								
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
			<div className='d-flex align-items-center'>
				<div className='flex-shrink-0'>
					<Icon icon={props.icon} size='3x' color='info' />
				</div>
				<div className='flex-grow-1 ms-3'>
					<div className='fw-bold fs-5 mb-0'>
						{props.children}
					</div>
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
