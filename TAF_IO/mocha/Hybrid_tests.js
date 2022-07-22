const {expect} = require("chai");
const pageSwitcher = require('../step_definitions/page_switcher');

describe('Hybrid test', () => {

  it('API + UI test complex flow', async function ()  {
    await browser.setWindowSize(1920, 1080);
    await browser.url('http://localhost:8080');

    const token = await browser.execute(async () => {
      const response = await fetch('http://localhost:8080/uat/sso/oauth/token',  {
        method: 'POST',
        headers: { 
          "Authorization": "Basic dWk6dWltYW4=",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=password&username=superadmin&password=erebus"
      });
      let obj = await response.json();
      return obj.access_token;
    });

    await browser.execute(async (token) => {
      localStorage.setItem('token', `{"type":"bearer","value":"${token}"}`);
    }, token);

    const dashboardID = await browser.execute(async (token) => {
      const response = await fetch('http://localhost:8080/api/v1/superadmin_personal/dashboard',  {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description: "Dashboard for Hybrid test",
          name: "Hybrid",
          share: true
        })
      });
      let obj = await response.json();
      return obj.id;
    }, token);

    const widgetID = await browser.execute(async (token) => {
      const response = await fetch('http://localhost:8080/api/v1/superadmin_personal/widget',  {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
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
      return obj.id;
    }, token);

    await browser.execute(async (dashboardID, widgetID, token) => {
      const response = await fetch(`http://localhost:8080/api/v1/superadmin_personal/dashboard/${dashboardID}/add`,  {
        method: 'PUT',
        headers: { 
          'Authorization': `Bearer ${token}`,
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
              "width": 5,
              "height": 6
            }
          }
        })
      })
    }, dashboardID, widgetID, token); 

    await browser.refresh();
    pageSwitcher.setState('Dashboards');
    await $(pageSwitcher.getElement('First dashboard')).click();
    await $(pageSwitcher.getElement('Resizing option')).dragAndDrop({ x: 100, y: 200 });

    expect(await $('.widgetsGrid__widget-view--dVnmj').getCSSProperty('width')).to.have.property('value', '670px');
    expect(await $('.widgetsGrid__widget-view--dVnmj').getCSSProperty('height')).to.have.property('value', '647px');

    await browser.execute(async (dashboardID, widgetID, token) => {
      const response = await fetch(`http://localhost:8080/api/v1/superadmin_personal/dashboard/${dashboardID}/${widgetID}`,  {
        method: 'DELETE',
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      })
    }, dashboardID, widgetID, token); 

    await browser.execute(async (dashboardID, token) => {
      const response = await fetch(`http://localhost:8080/api/v1/superadmin_personal/dashboard/${dashboardID}`,  {
        method: 'DELETE',
        headers: { 
        'Authorization': `Bearer ${token}`
        }
      })
    }, dashboardID, token);     

    await browser.execute(async (token) => {
      localStorage.removeItem('token');
    }, token);

    await browser.refresh();
  })
})
