import moment from 'moment';
import classNames from 'classnames';
import Button from '../../../../components/bootstrap/Button';
import Card, {
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../../../components/bootstrap/Card';
import Icon from '../../../../components/icon/Icon';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../../components/bootstrap/Dropdown';
import dummyEventsData from '../../../../common/data/dummyEventsData';
import { priceFormat } from '../../../../helpers/helpers';
import EVENT_STATUS from '../../../../common/data/enumEventStatus';
import Alert from '../../../../components/bootstrap/Alert';
import { IUserModel } from '../../../../models/ui-models/IUserModel';


const AssignmentCard = (props: any) =>{

	var data:IUserModel = props.userModel;
    var cardDisabled = props.cardDisabled;
    const userTasks = dummyEventsData.filter((f) => f.assigned.username === data.username);

	return (
        <Card className={cardDisabled}>
        <CardHeader>
            <CardLabel icon='Task' iconColor='danger'>
                <CardTitle>
                    <CardLabel>Assigned</CardLabel>
                </CardTitle>
            </CardLabel>
        </CardHeader>
        <CardBody>
            <div className='table-responsive'>
                <table className='table table-modern mb-0'>
                    <thead>
                        <tr>
                            <th>Date / Time</th>
                            <th>Customer</th>
                            <th>Service</th>
                            <th>Duration</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userTasks.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <span
                                            className={classNames(
                                                'badge',
                                                'border border-2 border-light',
                                                'rounded-circle',
                                                'bg-success',
                                                'p-2 me-2',
                                                `bg-${item.status.color}`,
                                            )}>
                                            <span className='visually-hidden'>
                                                {item.status.name}
                                            </span>
                                        </span>
                                        <span className='text-nowrap'>
                                            {moment(
                                                `${item.date} ${item.time}`,
                                            ).format('MMM Do YYYY, h:mm a')}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div>{item.customer.name}</div>
                                        <div className='small text-muted'>
                                            {item.customer.email}
                                        </div>
                                    </div>
                                </td>
                                <td>{item.service.name}</td>
                                <td>{item.duration}</td>
                                <td>
                                    {item.payment && priceFormat(item.payment)}
                                </td>
                                <td>
                                    <Dropdown>
                                        <DropdownToggle hasIcon={false}>
                                            <Button
                                                isLink
                                                color={item.status.color}
                                                icon='Circle'
                                                className='text-nowrap'>
                                                {item.status.name}
                                            </Button>
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {Object.keys(EVENT_STATUS).map(
                                                (key) => (
                                                    <DropdownItem key={key}>
                                                        <div>
                                                            <Icon
                                                                icon='Circle'
                                                                color={
                                                                    EVENT_STATUS[
                                                                        key
                                                                    ].color
                                                                }
                                                            />
                                                            {
                                                                EVENT_STATUS[
                                                                    key
                                                                ].name
                                                            }
                                                        </div>
                                                    </DropdownItem>
                                                ),
                                            )}
                                        </DropdownMenu>
                                    </Dropdown>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {!userTasks.length && (
                <Alert color='warning' isLight icon='Report' className='mt-3'>
                    There is no scheduled and assigned task.
                </Alert>
            )}
        </CardBody>
    </Card>
    );
}

export default AssignmentCard;