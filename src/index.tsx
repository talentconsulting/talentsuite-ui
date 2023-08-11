import React from 'react';
// import ReactDOM from 'react-dom'; // For React 17
import { createRoot } from 'react-dom/client'; // For React 18
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/themeContext';
import { Auth0Provider } from "@auth0/auth0-react";
import { FeatureFlagsContextProvider } from './contexts/featureFlagsContext';
import { DataContextProvider } from './contexts/dataContext/dataContext';
import './i18n';
import { GetAppSettings } from './appsettings';
import history from "./helpers/history";
import { AuthContextProvider } from './contexts/authContext';//Should be deleted 

const config = GetAppSettings();

const onRedirectCallback = (appState:any) => {
	history.push(
	  appState && appState.returnTo ? appState.returnTo : window.location.pathname
	);
  };

const providerConfig = {
	domain: config.domain,
	clientId: config.clientId,
	onRedirectCallback,
	authorizationParams: {
	  redirect_uri: window.location.origin,
	  ...(config.audience ? { audience: config.audience } : null),
	},
  };

const children = (
	<Auth0Provider {...providerConfig}>
		<AuthContextProvider>
			<ThemeContextProvider>
				<FeatureFlagsContextProvider>
					<DataContextProvider>				
						<Router>
							<React.StrictMode>
								<App />
							</React.StrictMode>
						</Router>
					</DataContextProvider>
				</FeatureFlagsContextProvider>
			</ThemeContextProvider>
		</AuthContextProvider>
	</Auth0Provider>
);

const container = document.getElementById('root');

// ReactDOM.render(children, container); // For React 17
createRoot(container as Element).render(children); // For React 18

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
