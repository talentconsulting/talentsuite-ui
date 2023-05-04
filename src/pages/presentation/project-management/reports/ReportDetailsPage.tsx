import React, { useState, useContext, useEffect } from 'react';
import useDarkMode from '../../../../hooks/useDarkMode';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Page from '../../../../layout/Page/Page';
import SubHeader, {
    SubHeaderLeft,
    SubHeaderRight,
	SubheaderSeparator,
} from '../../../../layout/SubHeader/SubHeader';
import Card, {
    CardActions,
    CardBody,
    CardFooter,
    CardFooterLeft,
    CardFooterRight,
    CardHeader,
    CardLabel,
    CardTitle,
} from '../../../../components/bootstrap/Card';
import Button from '../../../../components/bootstrap/Button';
import { APP_PATHS } from '../../../../routes/contentRoutes';
import CommonAvatarTeam from '../../../../common/other/CommonAvatarTeam';
import DataContext from './../../../../contexts/dataContext/dataContext';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Icon from '../../../../components/icon/Icon';
import { IReportModel, IReportRiskModel } from '../../../../models/ui-models/IReportModel';
import REPORT_STATUS, { IStatus } from '../../../../models/ui-models/enums/enumStatus';
import CommonDesc from '../../../../common/other/CommonDesc';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import { Input } from '../../../../components/icon/material-icons';
import Label from '../../../../components/bootstrap/forms/Label';
import InputGroup, { InputGroupText } from '../../../../components/bootstrap/forms/InputGroup';
import Textarea from '../../../../components/bootstrap/forms/Textarea';

const ReportDetailsPage = () => {


	const { themeStatus } = useDarkMode();

	const [date, setDate] = useState<Date>(new Date());

	const { id } = useParams();

	const { dataService } = useContext(DataContext);

	var emptyReport = { 'ragStatus':REPORT_STATUS.APPROVED, risks:[] as IReportRiskModel[]} as IReportModel;
	const [data, updateItems] = useState(emptyReport);
	const getReportData = ()=>{

		dataService.reportAggregateService.getById(id).then(data => {
			console.log('report', data);
			updateItems(data);
		});

	}

	useEffect(() => {
        getReportData();
     }, []);

    return (

		<PageWrapper title={`${data.projectName} - Week ${data.weeknumber}`}>

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
