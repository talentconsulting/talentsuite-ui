import React, { useState } from 'react';
import useDarkMode from '../../../../hooks/useDarkMode';

const ReportDetailsPage = () => {
	const { themeStatus } = useDarkMode();

	const [date, setDate] = useState<Date>(new Date());

	return (
		<span>Report details go here</span>
	);
};

export default ReportDetailsPage;
