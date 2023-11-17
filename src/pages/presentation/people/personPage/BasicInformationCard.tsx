import Card, {
	CardBody,
} from '../../../../components/bootstrap/Card';
import Avatar from '../../../../components/Avatar';
import Icon from '../../../../components/icon/Icon';
import Input from '../../../../components/bootstrap/forms/Input';
import Label from '../../../../components/bootstrap/forms/Label';
import { UserModel, IUserModel } from '../../../../models/ui-models/IUserModel';
import { useEffect, useState } from 'react';
import JobRoleTypes from '../../../../type/jobrole-type';
import Select from '../../../../components/bootstrap/forms/Select';
import { da } from 'date-fns/locale';

interface IBasicInformationCardProps {
	userModel: IUserModel;
	isInEditMode: boolean;
	updateFields: (params: any) => any;
  }

const BasicInformationCard = (props: IBasicInformationCardProps) =>{

	const [data, updateUserDetails] = useState(props.userModel);

	const updateField = (modifyValue:(arg:IUserModel)=>any) =>{
		const updatedData = new UserModel(data);
		modifyValue(updatedData);
		updateUserDetails(updatedData);
		props.updateFields(updatedData);
	}

	useEffect(() => {
		updateUserDetails(props.userModel);
     }, [props.userModel]);

	return (
		<Card className='shadow-3d-info'>
			<CardBody>
				<div className='row g-5'>
					<div className='col-12 d-flex justify-content-center'>
						<Avatar
							src={data.src}
							srcSet={data.srcSet}
							color={data.color}
							isOnline={data.isOnline}
						/>
					</div>
					<div className='col-12'>
						<div className='row g-2'>
							<DataField icon='Mail' label='Email Address' isInEditMode={props.isInEditMode} value={data.email}>
								<Input 
									id='email'
									value={data.email}
									onChange={(e:any)=> updateField((data:IUserModel)=>{data.email = e.target.value})}
									/>
							</DataField>
							<DataField label='Firstname' isInEditMode={props.isInEditMode} value={data.name}>
								<Input 
									id='firstname'
									value={data.name}
									onChange={(e:any)=> updateField((data:IUserModel)=>{data.name = e.target.value})}
									/>
							</DataField>
							<DataField label='Surname' isInEditMode={props.isInEditMode} value={data.surname}>
								<Input 
									id='surname'
									value={data.surname}
									onChange={(e:any)=> updateField((data:IUserModel)=>{data.surname = e.target.value})}
									/>
							</DataField>
							{ props.isInEditMode && 
								<DataField label='Role' isInEditMode={props.isInEditMode}>
									<Select 
										id='jobRole' 
										name='jobRole' 
										ariaLabel='jobRole' 
										list={ JobRoleTypes } 
										value={data.jobRole} 
										onChange={(e:any)=> updateField((data:IUserModel)=>{data.jobRole = e.target.value})}/>
								</DataField>
							}
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	);
}


const DataField = (props: any) =>{
	return (
		<div className='col-12'>
			<div className='d-flex align-items-center'>
				<div className='flex-grow-1 ms-3'>
					<span>
						{
							props.icon != undefined &&
							<Icon icon={props.icon} size='2x' color='info' />
						}
						<Label>{props.label}</Label>
					</span>
					{ props.isInEditMode ? props.children : <span className='ms-2'>{props.value}</span> }
				</div>
			</div>
		</div>
	);
  }


export default BasicInformationCard;