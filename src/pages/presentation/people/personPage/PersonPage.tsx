import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDataWithId } from '../../../../common/data/dummyUserData';
import PageWrapper from '../../../../layout/PageWrapper/PageWrapper';
import Page from '../../../../layout/Page/Page';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../../../layout/SubHeader/SubHeader';
import Button from '../../../../components/bootstrap/Button';
import { APP_PATHS } from '../../../../routes/contentRoutes';
import dummyEventsData from '../../../../common/data/dummyEventsData';
import CommonAvatarTeam from '../../../../common/other/CommonAvatarTeam';
import useDarkMode from '../../../../hooks/useDarkMode';
import { UserModel, IUserModel } from '../../../../models/ui-models/IUserModel';
import BasicInformationCard from './_BasicInformationCard';
import SkillCard from './_SkillCard';
import AssignmentCard from './_AssignmentCard';

const PersonPage = () => {
	const { darkModeStatus } = useDarkMode();
	const { id } = useParams();

	var shouldUpdate = false;

	const [data, updateUserDetails] = useState(new UserModel());
	const [heading, updateHeading] = useState("Add User");
	const [isInEditMode, updateEditMode] = useState(true);
	const [isAddUser, updateIsAddUser] = useState(true);
	const [cardDisabled, updateCardDisabled] = useState("card-disabled");

	const getUserDetails = ()=>{
		if(id!= 'AddNew'){
			updateIsAddUser(false);
			updateEditMode(false);
			var user = getUserDataWithId(id);
			updateUserDetails(user);
			updateHeading(`${user.name} ${user.surname}`);
			updateCardDisabled('');
		}
		
	}

	const updateFields = (dataFromChild:IUserModel) =>{
		updateUserDetails(dataFromChild);
		shouldUpdate = !shouldUpdate;
	}

	useEffect(() => {
		getUserDetails()
     }, [shouldUpdate]);


	const handleSaveChanges = () => {
		console.log('Save Changes', data);
    };


	return (
		<PageWrapper title={heading}>
			<SubHeader>
				<SubHeaderLeft>
					<Button
						color='info'
						isLink
						icon='ArrowBack'
						tag='a'
						to={`../${APP_PATHS.PEOPLE.LIST}`}>
						Back to List
					</Button>
					<SubheaderSeparator />
					<CommonAvatarTeam isAlignmentEnd>
						<strong>Sports</strong> Team
					</CommonAvatarTeam>
				</SubHeaderLeft>
				<SubHeaderRight>
					<span className='text-muted fst-italic me-2'>Last update:</span>
					<span className='fw-bold'>13 hours ago</span>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='pt-3 pb-5 d-flex align-items-center'>
					<span className='display-4 fw-bold me-3'>{heading}</span>
					{ data.jobRole != 'NotSet' && 
						<span className='border border-success border-2 text-success fw-bold px-3 py-2 rounded'>
							{ data.jobRole }
						</span>
					}
					<span className='px-3'>
						{ isInEditMode ?
						<Button color='info' onClick={handleSaveChanges}>Save Changes</Button> :
						<Button color='info' icon='edit' onClick={()=>updateEditMode(true)}>Edit</Button>
						}
					</span>

				</div>
				<div className='row'>
					<div className='col-lg-4'>
						<BasicInformationCard userModel={data} updateFields={updateFields} isInEditMode={isInEditMode} isAddUser={isAddUser}/>
					</div>
					<div className='col-lg-8'>
						<SkillCard userModel={data}/>
						<AssignmentCard userModel={data} cardDisabled={cardDisabled} darkModeStatus={darkModeStatus}/>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};



export default PersonPage;
