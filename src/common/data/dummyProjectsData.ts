import moment from 'moment';
import { IProjectDto } from '../../models/dtos/IProjectDto';

const dateFormat = "YYYY-MM-DDTHH:mm:ss";

const data: IProjectDto[] = [
	{
		id: "e1a05e24-562c-4ed5-99e2-54a5db138e5a",
		contactNumber: "0555 777 8888",
		name: "Sales Training Program",
		reference: "con_99xyz",
		startDate: moment("2023-11-20T00:00:00", dateFormat).toDate(),
		endDate: moment("2024-01-31T00:00:00", dateFormat).toDate(),
		clientProjects: [
		  {
			id: "d6b6a1c7-cc34-4eb1-8765-3e11bc0c5a76",
			clientId: "e1a05e24-562c-4ed5-99e2-54a5db138e5a",
			projectId: "e1a05e24-562c-4ed5-99e2-54a5db138e5a",
		  },
		],
		contacts: [
		  {
			id: "1e205663-9033-4c8b-8f24-cb1c02a03e31",
			firstname: "Harry Potter",
			email: "harry@potter.com",
			receivesReport: true,
			projectId: "e1a05e24-562c-4ed5-99e2-54a5db138e5a",
		  },
		],
		reports: [],
		sows: [],
	  },
	  {
		id: "2f46f497-d580-4fd7-a95a-9971d8c33e6d",
		contactNumber: "0345 222 3333",
		name: "Software Development Training",
		reference: "con_45abc",
		startDate: moment("2023-11-15T00:00:00", dateFormat).toDate(),
		endDate: moment("2024-05-31T00:00:00", dateFormat).toDate(),
		clientProjects: [],
		contacts: [
		  {
			id: "e9ef6f89-7c71-4f9d-b361-7a50e4b1db1b",
			firstname: "Hermione Granger",
			email: "hermione@granger.com",
			receivesReport: false,
			projectId: "2f46f497-d580-4fd7-a95a-9971d8c33e6d",
		  },
		],
		reports: [],
		sows: [],
	  },
	  {
		id: "c9075868-2a3f-48df-9b1d-fab3b0a8d3b3",
		contactNumber: "0789 999 8888",
		name: "Marketing Workshop",
		reference: "con_78xyz",
		startDate: moment("2023-12-01T00:00:00", dateFormat).toDate(),
		endDate: moment("2024-02-28T00:00:00", dateFormat).toDate(),
		clientProjects: [
		  {
			id: "a0b80c9d-b925-4c4a-97b7-7950a2f1d0d2",
			clientId: "c9075868-2a3f-48df-9b1d-fab3b0a8d3b3",
			projectId: "c9075868-2a3f-48df-9b1d-fab3b0a8d3b3",
		  },
		],
		contacts: [
		  {
			id: "d52c9c1b-d84a-45df-9d88-87c047d5e8f4",
			firstname: "Ginny Weasley",
			email: "ginny@weasley.com",
			receivesReport: true,
			projectId: "c9075868-2a3f-48df-9b1d-fab3b0a8d3b3",
		  },
		],
		reports: [],
		sows: [],
	  }
];

export default data;