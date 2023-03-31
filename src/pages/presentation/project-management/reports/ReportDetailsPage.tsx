import React, { useState } from 'react';
import useDarkMode from '../../../../hooks/useDarkMode';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import { getReportDataById } from '../../../../common/data/dummyReportsData';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const ReportDetailsPage = () => {

	//temporary until we have new interface and dummy data set up:
    interface IReportPropsTemp {
        id: number;
        projectId: number;
        reportedDate: string;
        enteredBy: string;
        description: string;
        
    }

    function getReportDataById(id?: string): IReportPropsTemp {
        // @ts-ignore
        //return data.filter(x => x.id.toString() == id);
        return {
            id: 1,
            projectId: 1,
            reportedDate:
                moment().format('YYYY') + moment().format('MM') + moment().add(-20, 'days').format('DD'),
            enteredBy: 'Luke',
            description: 'This week we acheived out sprint velocity, project look on target',
            
        };
    }

	const { themeStatus } = useDarkMode();

	const [date, setDate] = useState<Date>(new Date());

    const { id } = useParams();
    const data = getReportDataById(id);

	console.log(data);

    return (
		<PageWrapper title={`${data.description}`}>

		</PageWrapper>
	);


};

export default ReportDetailsPage;
