export default {
	ENV: window.location.hostname === "app.appsmith.com" ? 'https://production-api': 'https://uat-api',
	SINGPASS_URL: window.location.hostname === "app.appsmith.com" ? 'https://production-singpass': 'https://uat-singpass',
	
  HOME: API.ENV + '/home',
  SUBSCRIPTIONS: API.ENV +'/subscriptions'

};