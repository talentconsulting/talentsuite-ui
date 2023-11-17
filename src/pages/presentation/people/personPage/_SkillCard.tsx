import React, { useEffect, useState } from 'react';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Icon from '../../../../components/icon/Icon';
import Badge from '../../../../components/bootstrap/Badge';
import Alert from '../../../../components/bootstrap/Alert';
import { IUserModel } from '../../../../models/ui-models/IUserModel';

const SkillCard = (props: any) =>{

	var data:IUserModel = props.userModel;
	return (
		<Card>
            <CardHeader>
                <CardLabel icon='Stream' iconColor='warning'>
                    <CardTitle>Skill</CardTitle>
                </CardLabel>
            </CardHeader>
            <CardBody>
                {data.skills ? (
                    <div className='row g-2'>
                        {data?.skills.map((skill) => (
                            <div key={skill.name} className='col-auto'>
                                <Badge
                                    isLight
                                    color={skill.color}
                                    className='px-3 py-2'>
                                    <Icon
                                        icon={skill.icon}
                                        size='lg'
                                        className='me-1'
                                    />
                                    {skill.name}
                                </Badge>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='row'>
                        <div className='col'>
                            <Alert
                                color='warning'
                                isLight
                                icon='Report'
                                className='mb-0'>
                                No results to show
                            </Alert>
                        </div>
                    </div>
                )}
            </CardBody>
        </Card>
    );
}

export default SkillCard;