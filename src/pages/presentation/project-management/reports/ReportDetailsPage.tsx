import React, { useState, useContext } from 'react';
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

const ReportDetailsPage = () => {


	const { themeStatus } = useDarkMode();

	const [date, setDate] = useState<Date>(new Date());

	const { id } = useParams();

	const { dataService } = useContext(DataContext);

	const data = dataService.reportService.getReportDataByReportId(id);

    return (
		
		<PageWrapper title={`${data.projectName} - Week ${data.weeknumber}`}>
			<SubHeader>
				<SubHeaderLeft>
					<Button
						color='info'
						isLink
						icon='ArrowBack'
						tag='a'
						to={`../${APP_PATHS.REPORTS.LIST}`}>
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
					<span className='display-4 fw-bold me-3'>{`${data.projectName}`} - Week {`${data.weeknumber}`} Report - <Icon icon='Circle' color={data.ragStatus.color} /></span>
				</div>

				<div className='row'>
					<div className='col-lg-12'>
						<Card className='shadow-3d-info'>
							<CardHeader>
								<CardLabel icon='Summarize' iconColor='success'>
									<CardTitle tag='h4' className='h5'>
										{data.description}
									</CardTitle>
								</CardLabel>
							</CardHeader>
							<CardBody>
								<div className='row g-5'>
                                    <div className='col-12'>
										<div className='row g-2'>
											<div className='col-12'>
												<div className='d-flex align-items-center'>
													<div className='flex-shrink-0'>
														<Icon icon='Festival' size='3x' color='info' />
													</div>
													<div className='flex-grow-1 ms-3'>
														<div className='fw-bold fs-5 mb-0'>
															Client
														</div>
														<div className='text-muted'>
															{data.client}
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
															{data.ragStatus.name}
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
                </div>
			</Page>
		</PageWrapper>
		
	);


};

export default ReportDetailsPage;
