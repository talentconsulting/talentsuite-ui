import React, { createContext, FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import {IDataService, DataService} from './dataService';

const DataContext = createContext<IDataService>({} as IDataService);

interface IDataContextProviderProps {
	children: ReactNode;
}

export const DataContextProvider: FC<IDataContextProviderProps> = ({ children }) => {

	const value = new DataService();

	return <DataContext.Provider value={ value}>{children}</DataContext.Provider>;
};

DataContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DataContext;
