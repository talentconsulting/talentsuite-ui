import React, { useState } from 'react';
import useDarkMode from '../../../../hooks/useDarkMode';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import { getDummyReportDataByReportId } from '../../../../common/data/dummyReportsData';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const ReportDetailsPage = () => {


	const { themeStatus } = useDarkMode();

	const [date, setDate] = useState<Date>(new Date());

    const { id } = useParams();
	const data = getDummyReportDataByReportId(id);

	console.log(data);

    return (
		<PageWrapper title={`${data.id}`}>

		</PageWrapper>
	);


};

export default ReportDetailsPage;
