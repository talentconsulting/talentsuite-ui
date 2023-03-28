import React, { FC, useState } from 'react';
import Button from '../../../../components/bootstrap/Button';
import OffCanvas, { OffCanvasBody, OffCanvasHeader, OffCanvasTitle } from '../../../../components/bootstrap/OffCanvas';
import FormGroup from '../../../../components/bootstrap/forms/FormGroup';
import Input from '../../../../components/bootstrap/forms/Input';
import { FormikHelpers, useFormik } from 'formik';
import moment from 'moment';


interface IReportEditorEventsProps {
	onhandleProjectAdd: any;
	onhandleProjectEdit: any;
}
const ReportEditor: FC<IReportEditorEventsProps> = () => {

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
							onClick={() => setProjectEditOffcanvas(false)}>
							Save
						</Button>
					</div>
				</div>
			</OffCanvas>
		</>
	);
};

export default ReportEditor;
