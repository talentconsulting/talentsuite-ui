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

interface ICommonUpcomingEventsProps {
	isFluid?: boolean;
}
const CommonUpcomingEvents: FC<ICommonUpcomingEventsProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();

	const { id } = useParams();
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);
	const { items } = useSortableData(getReportDataByProjectId(id));

	return (
		<>
			<Card stretch={isFluid}>
				<CardHeader borderSize={1}>
					<CardLabel icon='Alarm' iconColor='info'>
						<CardTitle>Reports</CardTitle>
					</CardLabel>
					<CardActions>
						<Button
							color='info'
							icon='CloudDownload'
							isLight
							tag='a'
							to='/somefile.txt'
							target='_blank'
							download>
							Export
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


		</>
	);
};

export default CommonUpcomingEvents;
