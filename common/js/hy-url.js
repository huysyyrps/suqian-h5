
var baseWS = "ws://221.6.253.254:8075/sdhyschedule/"
var liuhongs = "http://192.168.3.192:8088/sdhyscheduleSQ/";
var basediaodu ="http://221.6.253.254:8075/sdhyschedule/";
var base = "http://221.6.253.254:8075/joffice/";

// var base = "http://221.6.253.254:8072/joffice/";
// var base = "http://192.168.3.150:8080/jofficeSq/";//川川
// var base = "http://192.168.3.141:8080/jofficeSq/";//孙琪
 // var base = "http://192.168.3.75:8090/jofficeSq/";//柱子
// var basediaodu = "http://221.6.253.254:8072/sdhyschedule/";
// var base = "http://221.6.253.254:8072/joffice/";
// var basediaodu = "http://221.6.253.254:8072/sdhyschedule/";


var login = base + "mobile.do"; //登录
var carno = base + "admin/getBusStoreCar.do"; //车牌号
var person = base + "hrm/profileByPosEmpProfile.do"// 选择驾驶员
var upflowline = base + "flow/startTransProcessActivity.do"// 发起流程获取第一审批路径
var upflowperson = base + "flow/mobileUsersProcessActivity.do"// 发起流程获取第一审批人
var upflowdata = base + "flow/saveProcessActivity.do"// 流程数据提交
var willdolist = base + "flow/mobileTypeListTask.do"// 获取代办流程列表
var willdolistnum = base + "flow/mobileCountListTask.do"// 获取代办流程数量
var willdodetail = base + "htmobile/moblieGetTask.do"// 获取代办流程详情
var online = base + "flow/mobileOuterTransProcessActivity.do"// 获取路径方式1
var noendline = base + "flow/mobileUsersProcessActivity.do"// 获取路径方式2
var nohandlerline = base + "flow/checkTask.do"// 获取路径方式3
var willflowup = base + "flow/nextProcessActivity.do"// 待办签字提交
var overflow = base + "flow/myProcessRun.do"// 已办流程
var overflowdetail = base + "htmobile/getMoblieFormTask.do"// 获取已办详情
// 所有司机
var getAllDriverNameURL = basediaodu + "PhoneQueryAction!getAllDriverName.shtml"
// 所有车号
var getAllBusCodeURL = basediaodu + "PhoneQueryAction!getAllBusCode.shtml"
// 所有线路
var getLinesByOperatorURL = basediaodu + "PhoneQueryAction!getLinesByOperator.shtml"
// 里程
var getDriverDetailMileURL = basediaodu + "PhoneQueryAction!getDriverDetailMile.shtml"
// 报警
var getWarnListURL = basediaodu + "PhoneQueryAction!getWarnList.shtml"
//获取站点
var getLineStationURL = basediaodu + "PhoneQueryAction!getLineStation.shtml"
//车次查询     http://192.168.3.73:8088/sdhyscheduleSQ
var getTrainsSearchURL = basediaodu + "PhoneQueryAction!getTrainNumberDetail.shtml"
//配车排班
var getShiftArrangementURL = basediaodu + "PhoneQueryAction!getOperationClassQueryList.shtml"
//完成、准点率
var getCompletionOrPunctualityRateURL = basediaodu+ "PhoneQueryAction!getBfrAndOtd.shtml"
//停车信息
var getParkingInformationQueryURL = basediaodu + "PhoneQueryAction!getBusNightparkingList.shtml"
//考勤明细
var getAttendanceDetailsURL = base + "hrm/listWorkDays.do"
//部门列表
var getDepartmentListURL = base + "system/getDepStoreOrganization.do"
//部门下人员列表
var getStaffUnderTheDepartmentListURL = base + "hrm/profileListEmpProfile.do"
//违规查询
var getViolationInforURL = base+"starkh/listQxJckrichangJc.do"
//违规详情
var getViolationInforDetailURL = base+"starkh/listQxJckrichangJc.do"
//违规详情
var getViolationInforListDetailURL =base+"starkh/AppListDetailedJckrichangJc.do"
//违规、中心上报 审核意见
var getOpinionsURL = base +  "starkh/adviceSaveJckrichangJc.do"
//驾驶员请假历史
var driverLeaveHistory = base +  "flow/myProcessRun.do"
//驾驶员请假历史详情
var driverLeaveHistoryDetail = base +  "htmobile/getMoblieFormTask.do"

//请求加油列表
var getRequestListURL = basediaodu + "PhoneQueryAction!getQuestInfo.shtml"
//请求加油处理
var getRequestDealURL = basediaodu + "SocketClientAction!askRefuelDispose.shtml"
//运行图表格
var getLineRealTime=basediaodu+"PhoneQueryAction!getLineRealTime.shtml"
//请求加油
var getjiayou=basediaodu+"PhoneQueryAction!getQuestInfo.shtml"
//所有站点
var allstation= basediaodu + "PhoneQueryAction!getLineStation.shtml"
//加车
var getaddcar=basediaodu+"SocketClientAction!SendClientJHTZSJL.shtml"
//间隔Adjust interval
var adjustInterval=basediaodu+"SocketClientAction!SendClientJHTZSJL.shtml"
//减车
var getlesscar=basediaodu+"SocketClientAction!SendClientJHTZSJL.shtml"
//发送消息
var getsendmessage=basediaodu+"SocketClientAction!getFixMessageBags.shtml"
//修改车次
var updatecar=basediaodu+"SocketClientAction!SendClientJHCL.shtml"
//发送调度令
var sendDDL=basediaodu+"SocketClientAction!sendDDL.shtml"
//消息连接
var getmessagesocket=baseWS + "server/websocket/"
var getDepUsersAppUser = base + "system/getDepUsersAppUser.do"

module.exports = {
	base: base,
	login: login,
	carno:carno,
	person:person,
	upflowline:upflowline,
	upflowperson:upflowperson,
	upflowdata:upflowdata,
	willdolist:willdolist,
	willdolistnum:willdolistnum,
	willdodetail:willdodetail,
	online:online,
	noendline:noendline,
	nohandlerline:nohandlerline,
	willflowup:willflowup,
	overflow:overflow,
	overflowdetail:overflowdetail,
	
	getAllDriverNameURL: getAllDriverNameURL,
	getAllBusCodeURL: getAllBusCodeURL,
	getLinesByOperatorURL: getLinesByOperatorURL,
	getDriverDetailMileURL: getDriverDetailMileURL,
	getWarnListURL: getWarnListURL,
	getLineStationURL: getLineStationURL,
	getTrainsSearchURL: getTrainsSearchURL,
	getShiftArrangementURL: getShiftArrangementURL,
	getCompletionOrPunctualityRateURL: getCompletionOrPunctualityRateURL,
	getParkingInformationQueryURL: getParkingInformationQueryURL,
	getAttendanceDetailsURL: getAttendanceDetailsURL,
	getDepartmentListURL: getDepartmentListURL,
	
	getStaffUnderTheDepartmentListURL: getStaffUnderTheDepartmentListURL,
	getViolationInforURL: getViolationInforURL,
	getViolationInforDetailURL: getViolationInforDetailURL,
	getViolationInforListDetailURL: getViolationInforListDetailURL,
	getOpinionsURL: getOpinionsURL,
	getRequestListURL: getRequestListURL,
	getRequestDealURL: getRequestDealURL,
	
	getLineRealTime:getLineRealTime,
	getjiayou:getjiayou,
	allstation:allstation,
	getaddcar:getaddcar,
	getlesscar:getlesscar,
	getsendmessage:getsendmessage,
	updatecar:updatecar,
	sendDDL:sendDDL,
	getmessagesocket:getmessagesocket,
	adjustInterval:adjustInterval,
	driverLeaveHistory:driverLeaveHistory,
	driverLeaveHistoryDetail:driverLeaveHistoryDetail,
	getDepUsersAppUser:getDepUsersAppUser
}
