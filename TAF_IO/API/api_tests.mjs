import fetch from 'node-fetch';
import {expect} from 'chai';
const token = 'Bearer 1f8933a6-e25e-4746-8589-361605f0005a';

describe('Verification of dashboard creation', () => {
    
  let dashboardID;
  let widgetID;

  it('Creation of dashboard', async() =>{
    const response = await fetch('http://localhost:8080/api/v1/superadmin_personal/dashboard',  {
      method: 'POST',
      headers: { 
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        description: "api",
        name: "api",
        share: true
      })
    });
    let obj = await response.json();
    dashboardID = obj.id;
    let statusCode = response.status;
    expect(statusCode).to.equal(201);
  });
    
  it('Creation of the widget', async() =>{
    const response = await fetch(`http://localhost:8080/api/v1/superadmin_personal/widget`,  {
      method: 'POST',
      headers: { 
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "widgetType": "statisticTrend",
        "contentParameters": {
          "contentFields": [
            "statistics$executions$total",
            "statistics$executions$passed",
            "statistics$executions$failed",
            "statistics$executions$skipped",
            "statistics$defects$product_bug$pb001",
            "statistics$defects$automation_bug$ab001",
            "statistics$defects$system_issue$si001",
            "statistics$defects$no_defect$nd001",
            "statistics$defects$to_investigate$ti001"
          ],
          "itemsCount": "50",
          "widgetOptions": {
            "zoom": false,
            "timeline": "launch",
            "viewMode": "area-spline"
          }
        },
        "filters": [
          {
            "value": "15",
            "name": "DEMO_FILTER"
          }
        ],
        "name": "Widget created via API",
        "description": "",
        "share": true,
        "filterIds": [
          "15"
        ]
      })
    });
    let obj = await response.json();
    widgetID = obj.id;
    let statusCode = response.status;
    expect(statusCode).to.equal(201);
  }); 

  it('Adding of created widget', async() =>{
    const response = await fetch(`http://localhost:8080/api/v1/superadmin_personal/dashboard/${dashboardID}/add`,  {
      method: 'PUT',
      headers: { 
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "addWidget": {
          "widgetId": widgetID,
          "widgetName": "TEST",
          "widgetType": "launchStatistics",
          "widgetPosition": {
            "positionX": 0,
            "positionY": 0
          },
          "widgetSize": {
            "width": 6,
            "height": 7
          }
        }
      })
    });
    let statusCode = response.status;
    let message = JSON.parse(await response.text()).message;
    expect(statusCode).to.equal(200);
    expect(message).to.equal(`Widget with ID = '${widgetID}' was successfully added to the dashboard with ID = '${dashboardID}'`);
  }); 
  
  it('Updating of the widget', async() =>{
    const response = await fetch(`http://localhost:8080/api/v1/superadmin_personal/widget/${widgetID}`,  {
      method: 'PUT',
      headers: { 
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "contentParameters": {
          "contentFields": [
            "statistics$executions$total",
            "statistics$executions$passed",
            "statistics$executions$failed",
            "statistics$executions$skipped",
            "statistics$defects$product_bug$pb001",
            "statistics$defects$automation_bug$ab001",
            "statistics$defects$system_issue$si001",
            "statistics$defects$no_defect$nd001",
            "statistics$defects$to_investigate$ti001"
          ],
          "itemsCount": 50,
          "widgetOptions": {
            "zoom": false,
            "timeline": "launch",
            "viewMode": "area-spline"
          }
        },
        "description": "",
        "owner": "superadmin",
        "share": true,
        "name": "Widget created via API and modified",
        "widgetType": "statisticTrend",
        "filters": [
          {
            "value": "15",
            "name": "DEMO_FILTER"
          }
        ],
        "filterIds": [
          "15"
        ]
      })
    });  
    let statusCode = response.status;
    let message = JSON.parse(await response.text()).message;
    expect(statusCode).to.equal(200);
    expect(message).to.equal(`Widget with ID = '${widgetID}' successfully updated.`);
  });     

  it('Deleting of the widget', async() =>{
    const response = await fetch(`http://localhost:8080/api/v1/superadmin_personal/dashboard/${dashboardID}/${widgetID}`,  {
      method: 'DELETE',
      headers: { 
        'Authorization': token
      }
    });
    let statusCode = response.status;
    let message = JSON.parse(await response.text()).message;
    expect(statusCode).to.equal(200);
    expect(message).to.equal(`Widget with ID = '${widgetID}' was successfully deleted from the system.`);
  });    
  
  it('Updating of the dashboard', async() =>{
    const response = await fetch(`http://localhost:8080/api/v1/superadmin_personal/dashboard/${dashboardID}`,  {
      method: 'PUT',
      headers: { 
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": "Updated dashboard name",
        "description": "api",
        "share": true
      })
    });
    let statusCode = response.status;
    let message = JSON.parse(await response.text()).message;
    expect(statusCode).to.equal(200);
    expect(message).to.equal(`Dashboard with ID = '${dashboardID}' successfully updated`);
  });     

  it('Deleting of the dashboard', async() =>{
    const response = await fetch(`http://localhost:8080/api/v1/superadmin_personal/dashboard/${dashboardID}`,  {
      method: 'DELETE',
      headers: { 
        'Authorization': token
      }
    });
    let statusCode = response.status;
    let message = JSON.parse(await response.text()).message;
    expect(statusCode).to.equal(200);
    expect(message).to.equal(`Dashboard with ID = '${dashboardID}' successfully deleted.`);
  });    
}); 
  

