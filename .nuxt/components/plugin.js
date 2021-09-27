import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  CardTitle: () => import('../..\\components\\CardTitle.vue' /* webpackChunkName: "components/card-title" */).then(c => wrapFunctional(c.default || c)),
  Duration: () => import('../..\\components\\Duration.vue' /* webpackChunkName: "components/duration" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  Notification: () => import('../..\\components\\Notification.vue' /* webpackChunkName: "components/notification" */).then(c => wrapFunctional(c.default || c)),
  PageTitle: () => import('../..\\components\\PageTitle.vue' /* webpackChunkName: "components/page-title" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c)),
  ControlPumpStatus: () => import('../..\\components\\Control\\PumpStatus.vue' /* webpackChunkName: "components/control-pump-status" */).then(c => wrapFunctional(c.default || c)),
  GeneralUserInfo: () => import('../..\\components\\General\\UserInfo.vue' /* webpackChunkName: "components/general-user-info" */).then(c => wrapFunctional(c.default || c)),
  LoginForm: () => import('../..\\components\\Login\\Form.vue' /* webpackChunkName: "components/login-form" */).then(c => wrapFunctional(c.default || c)),
  OverviewCardDataLeaf: () => import('../..\\components\\Overview\\CardDataLeaf.vue' /* webpackChunkName: "components/overview-card-data-leaf" */).then(c => wrapFunctional(c.default || c)),
  OverviewCardDataSoil: () => import('../..\\components\\Overview\\CardDataSoil.vue' /* webpackChunkName: "components/overview-card-data-soil" */).then(c => wrapFunctional(c.default || c)),
  OverviewCardDataWater: () => import('../..\\components\\Overview\\CardDataWater.vue' /* webpackChunkName: "components/overview-card-data-water" */).then(c => wrapFunctional(c.default || c)),
  OverviewCardOverviewData: () => import('../..\\components\\Overview\\CardOverviewData.vue' /* webpackChunkName: "components/overview-card-overview-data" */).then(c => wrapFunctional(c.default || c)),
  OverviewCardServer: () => import('../..\\components\\Overview\\CardServer.vue' /* webpackChunkName: "components/overview-card-server" */).then(c => wrapFunctional(c.default || c)),
  OverviewCardSummary: () => import('../..\\components\\Overview\\CardSummary.vue' /* webpackChunkName: "components/overview-card-summary" */).then(c => wrapFunctional(c.default || c)),
  OverviewCardWeather3: () => import('../..\\components\\Overview\\CardWeather3.vue' /* webpackChunkName: "components/overview-card-weather3" */).then(c => wrapFunctional(c.default || c)),
  OverviewTable: () => import('../..\\components\\Overview\\Table.vue' /* webpackChunkName: "components/overview-table" */).then(c => wrapFunctional(c.default || c)),
  RegisterForm2: () => import('../..\\components\\Register\\Form2.vue' /* webpackChunkName: "components/register-form2" */).then(c => wrapFunctional(c.default || c)),
  ScheduleCalendar: () => import('../..\\components\\Schedule\\Calendar.vue' /* webpackChunkName: "components/schedule-calendar" */).then(c => wrapFunctional(c.default || c)),
  ScheduleTableSchedule: () => import('../..\\components\\Schedule\\TableSchedule.vue' /* webpackChunkName: "components/schedule-table-schedule" */).then(c => wrapFunctional(c.default || c)),
  ScheduleTime: () => import('../..\\components\\Schedule\\Time.vue' /* webpackChunkName: "components/schedule-time" */).then(c => wrapFunctional(c.default || c)),
  StatusIpah1Status: () => import('../..\\components\\Status\\Ipah1Status.vue' /* webpackChunkName: "components/status-ipah1-status" */).then(c => wrapFunctional(c.default || c)),
  StatusIpah2Status: () => import('../..\\components\\Status\\Ipah2Status.vue' /* webpackChunkName: "components/status-ipah2-status" */).then(c => wrapFunctional(c.default || c)),
  StatusKongPoStatus: () => import('../..\\components\\Status\\KongPoStatus.vue' /* webpackChunkName: "components/status-kong-po-status" */).then(c => wrapFunctional(c.default || c)),
  StatusTkpmPagohStatus: () => import('../..\\components\\Status\\TkpmPagohStatus.vue' /* webpackChunkName: "components/status-tkpm-pagoh-status" */).then(c => wrapFunctional(c.default || c)),
  TrendCardStationTrendIpah1: () => import('../..\\components\\Trend\\CardStationTrendIpah1.vue' /* webpackChunkName: "components/trend-card-station-trend-ipah1" */).then(c => wrapFunctional(c.default || c)),
  TrendCardStationTrendIpah2: () => import('../..\\components\\Trend\\CardStationTrendIpah2.vue' /* webpackChunkName: "components/trend-card-station-trend-ipah2" */).then(c => wrapFunctional(c.default || c)),
  TrendCardStationTrendTkpmPagoh: () => import('../..\\components\\Trend\\CardStationTrendTkpmPagoh.vue' /* webpackChunkName: "components/trend-card-station-trend-tkpm-pagoh" */).then(c => wrapFunctional(c.default || c)),
  TrendLineChart: () => import('../..\\components\\Trend\\LineChart.vue' /* webpackChunkName: "components/trend-line-chart" */).then(c => wrapFunctional(c.default || c)),
  TrendLineChartSingleData: () => import('../..\\components\\Trend\\LineChartSingleData.vue' /* webpackChunkName: "components/trend-line-chart-single-data" */).then(c => wrapFunctional(c.default || c)),
  AdminOverviewCardDataLeafAdmin: () => import('../..\\components\\Admin\\Overview\\CardDataLeafAdmin.vue' /* webpackChunkName: "components/admin-overview-card-data-leaf-admin" */).then(c => wrapFunctional(c.default || c)),
  AdminOverviewCardDataSoilAdmin: () => import('../..\\components\\Admin\\Overview\\CardDataSoilAdmin.vue' /* webpackChunkName: "components/admin-overview-card-data-soil-admin" */).then(c => wrapFunctional(c.default || c)),
  AdminOverviewCardDataWaterAdmin: () => import('../..\\components\\Admin\\Overview\\CardDataWaterAdmin.vue' /* webpackChunkName: "components/admin-overview-card-data-water-admin" */).then(c => wrapFunctional(c.default || c)),
  AdminOverviewCardOverviewDataAdmin: () => import('../..\\components\\Admin\\Overview\\CardOverviewDataAdmin.vue' /* webpackChunkName: "components/admin-overview-card-overview-data-admin" */).then(c => wrapFunctional(c.default || c)),
  AdminOverviewCardSummaryAdmin: () => import('../..\\components\\Admin\\Overview\\CardSummaryAdmin.vue' /* webpackChunkName: "components/admin-overview-card-summary-admin" */).then(c => wrapFunctional(c.default || c)),
  AdminOverviewIpah2StatusAdmin: () => import('../..\\components\\Admin\\Overview\\ipah2StatusAdmin.vue' /* webpackChunkName: "components/admin-overview-ipah2-status-admin" */).then(c => wrapFunctional(c.default || c)),
  AdminOverviewIpahStatusAdmin: () => import('../..\\components\\Admin\\Overview\\ipahStatusAdmin.vue' /* webpackChunkName: "components/admin-overview-ipah-status-admin" */).then(c => wrapFunctional(c.default || c)),
  AdminOverviewTkpmPagohStatusAdmin: () => import('../..\\components\\Admin\\Overview\\tkpmPagohStatusAdmin.vue' /* webpackChunkName: "components/admin-overview-tkpm-pagoh-status-admin" */).then(c => wrapFunctional(c.default || c)),
  OverviewSingleData: () => import('../..\\components\\Overview\\Single\\Data.vue' /* webpackChunkName: "components/overview-single-data" */).then(c => wrapFunctional(c.default || c)),
  OverviewSingleGauge: () => import('../..\\components\\Overview\\Single\\Gauge.vue' /* webpackChunkName: "components/overview-single-gauge" */).then(c => wrapFunctional(c.default || c)),
  OverviewSingleServer: () => import('../..\\components\\Overview\\Single\\Server.vue' /* webpackChunkName: "components/overview-single-server" */).then(c => wrapFunctional(c.default || c)),
  OverviewSingleSummary: () => import('../..\\components\\Overview\\Single\\Summary.vue' /* webpackChunkName: "components/overview-single-summary" */).then(c => wrapFunctional(c.default || c)),
  OverviewSingleWeather: () => import('../..\\components\\Overview\\Single\\Weather.vue' /* webpackChunkName: "components/overview-single-weather" */).then(c => wrapFunctional(c.default || c)),
  OverviewSingleWeatherMain: () => import('../..\\components\\Overview\\Single\\WeatherMain.vue' /* webpackChunkName: "components/overview-single-weather-main" */).then(c => wrapFunctional(c.default || c)),
  AdminOverviewSingleData: () => import('../..\\components\\Admin\\Overview\\Single\\Data.vue' /* webpackChunkName: "components/admin-overview-single-data" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
