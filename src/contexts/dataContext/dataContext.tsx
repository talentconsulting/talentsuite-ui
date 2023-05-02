import React, { createContext, FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import {IDataService, IDataServiceProvider, DataService} from './dataService';

const DataContext = createContext<IDataServiceProvider>({} as IDataServiceProvider);

interface IDataContextProviderProps {
	children: ReactNode;
}

export const DataContextProvider: FC<IDataContextProviderProps> = ({ children }) => {

	const value = {'dataService':new DataService()};

	return <DataContext.Provider value={ value}>{children}</DataContext.Provider>;
};

DataContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DataContext;
