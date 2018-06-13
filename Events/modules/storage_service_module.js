//Type your code here
function parseEventData(response){
  //presenter
  var eventImageMap=processEventItem(response.event_images,"event_id");
  var eventSessionsMap=processEventItem(response.event_sessions,"event_id");
  var eventPresenterMap=processEventItem(response.presenter,"event_id");
  var eventRegistrationMap=processEventItem(response.event_registration,"event_id");
  var eventLocationMap=processEventItem(response.location,"event_id");
  var eventBannersMap=processEventItem(response.event_banners,"event_id");
  var eventLength=response.event.length;
  var eventId;
  var eventList=response.event;
  for(var i=0;i<eventLength;i++){
    eventId=eventList[i]["event_id"];
    eventList[i]["event_images"]=eventImageMap[eventId];
   eventList[i]["event_sessions"]=eventSessionsMap[eventId];
    eventList[i]["presenter"]=eventPresenterMap[eventId];
    eventList[i]["event_registration"]=eventRegistrationMap[eventId];
    eventList[i]["location"]=eventLocationMap[eventId];
    eventList[i]["event_banners"]=eventBannersMap[eventId];
  }
  return eventList;
}
function processEventItem(dataList,key){
  if(dataList===null||dataList===undefined||key===undefined||key===null)return null;
  var listLength=dataList.length;
  var result={};
  var id,data;
  for(var i=0;i<listLength;i++){
    id=dataList[i][key];
    data=result[id];
    if(data===undefined){
      data=[];
      data.push(dataList[i]);
      result[id]=data;
    }else{
      data.push(dataList[i]);
    }
  }
  return result;
}
var response={
  "opstatus_queryeventregistration8141":0,"opstatus_queryeventtype4548":0,"opstatus_querypresenter8975":0,
  "event_images":[
    {
      "event_id":82,"event_image_id":184,"img_name":"event02.jpg",
      "image_url":"https://app.box.com/shared/static/ay2npins1dv6506340fxqxptcsmtn0et.jpg"
    }
    ,
    {
      "event_id":82,"event_image_id":185,"img_name":"event03.jpg",
      "image_url":"https://app.box.com/shared/static/2cyzj3iqmcuwod30bvwmm149ix2fjedp.jpg"
    }
    ,
    {
      "event_id":82,"event_image_id":186,"img_name":"event04.jpeg",
      "image_url":"https://app.box.com/shared/static/88qzm1sli0w1txnw8dsi5fcsjeyu8410.jpeg"
    }
    ,
    {
      "event_id":82,"event_image_id":187,"img_name":"event05.jpg",
      "image_url":"https://app.box.com/shared/static/sn7msbgtonsecvtio4y3fiwcbvb6vywm.jpg"
    }
    ,
    {
      "event_id":82,"event_image_id":188,"img_name":"event06.jpg",
      "image_url":"https://app.box.com/shared/static/ig6ffqjfcrsx81j7lnxqwzopjz5gbqbw.jpg"
    }
    ,
    {
      "event_id":82,"event_image_id":189,"img_name":"events01.jpeg",
      "image_url":"https://app.box.com/shared/static/qf4et3en383pehzgfhz6lopjyo3iunj2.jpeg"
    }
    ,
    {
      "event_id":82,"event_image_id":190,"img_name":"servlet.png",
      "image_url":"https://app.box.com/shared/static/tjisrb265ey8i8g2mfx4h6jhwnmlwdop.png"
    }
  ],"event_sessions":[
    {
      "session_name":"Session1",
      "event_id":82,"session_start_date":"2018-05-28 09:30:00.0",
      "session_end_date":"2018-05-28 12:00:00.0",
      "session_desc":"Test session",
      "event_session_id":70
    }
    ,
    {
      "session_name":"session2",
      "event_id":82,"session_start_date":"2018-05-28 12:00:00.0",
      "session_end_date":"2018-05-28 13:00:00.0",
      "session_desc":"Test Short Description",
      "event_session_id":71
    }
  ],"opstatus_queryeventimages5156":0,"opstatus_queryeventbanners2260":0,
  "event_type":[
    {
      "evet_type_id":1,"event_type":"online"
    }
    ,
    {
      "evet_type_id":2,"event_type":"offline"
    }
  ],"opstatus_queryevent8579":0,
  "event":[
    {
      "end_date":"2018-05-30 23:00:00.0",
      "event_id":82,"event_type":2,"isdisabled":0,"name":"Offline Sync",
      "short_desc":"Test Sync Event",
      "event_category":1,"long_desc":"Test Sync Event",
      "start_date":"2018-05-27 10:00:00.0"
    }
    ,
    {
      "end_date":"2018-05-25 23:30:00.0",
      "event_id":84,"event_type":2,"isdisabled":0,"name":"All Hands Meeting",
      "short_desc":"All Hands meeting by Kony CEO",
      "event_category":5,"long_desc":"All Hands meeting by Kony CEO",
      "start_date":"2018-05-24 01:00:00.0"
    }
    ,
    {
      "end_date":"2018-05-25 13:00:00.0",
      "event_id":85,"event_type":2,"isdisabled":0,"name":"School Visit",
      "short_desc":"A visit to school as part of Philanthropic activities",
      "event_category":2,"long_desc":"",
      "start_date":"2018-05-25 10:00:00.0"
    }
    ,
    {
      "end_date":"2018-05-30 23:30:00.0",
      "event_id":87,"event_type":2,"isdisabled":0,"name":"Varnam",
      "short_desc":"This is the college Event",
      "event_category":1,"long_desc":"This is Test College Event",
      "start_date":"2018-05-26 00:00:00.0"
    }
  ],"opstatus_querylocation6351":0,"presenter":[
    {
      "presenter_id":86,"event_id":82,"name":"Harsha123",
      "session_id":70,"linkedin_link":"",
      "designation":"SDE"
    }
    ,
    {
      "presenter_id":87,"event_id":82,"name":"Farzana",
      "session_id":71,"linkedin_link":"",
      "designation":"SSDE"
    }
  ],"opstatus_queryeventmetrics6329":0,"opstatus_queryusers2939":0,"opstatus_queryeventsessions1806":0,"login_mode":[
    {
      "login_mode_id":1,"loginmode":"linked in"
    }
    ,
    {
      "login_mode_id":2,"loginmode":"office365"
    }
    ,
    {
      "login_mode_id":3,"loginmode":"custom"
    }
  ],"event_category":[
    {
      "category_name":"Training",
      "evet_cat_id":1
    }
    ,
    {
      "category_name":"Workshops",
      "evet_cat_id":2
    }
    ,
    {
      "category_name":"Hackathon",
      "evet_cat_id":3
    }
    ,
    {
      "category_name":"Speaker Series",
      "evet_cat_id":4
    }
    ,
    {
      "category_name":"Conference",
      "evet_cat_id":5
    }
    ,
    {
      "category_name":"SpecialEvents",
      "evet_cat_id":6
    }
  ],"users":[
    {
      "mail":"test@gmail.com",
      "user_id":1,"login_mode":1,"first_name":"test"
    }
    ,
    {
      "mail":"kony.sampleapps@gmail.com",
      "user_id":7,"last_name":"student",
      "login_mode":1,"first_name":"kony"
    }
    ,
    {
      "mail":"farzana.jana@yahoo.co.in",
      "user_id":8,"last_name":"Shaik",
      "login_mode":1,"first_name":"Farzana"
    }
  ],"event_registration":[
    {
      "event_id":82,"user_id":9,"registration_id":26
    }
    ,
    {
      "event_id":82,"user_id":8,"registration_id":28
    }
    ,
    {
      "event_id":85,"user_id":9,"registration_id":45
    }
  ],"opstatus_queryeventcategory2894":0,"opstatus":0,"event_metrics":[],"opstatus_queryloginmode8683":0,
  "location":[
    {
      "event_id":82,"latitude":"17.4478531",
      "cityname":"Hyderabad",
      "addressLine1":"Phoneix avnace",
      "location":"Kony india pvt LTD",
      "location_id":76,"longitude":"78.37137229999999"
    }
    ,
    {
      "event_id":84,"cityname":"Hyderabad",
      "addressLine1":"Near Hitech",
      "location":"HICC",
      "location_id":78
    }
    ,
    {
      "event_id":85,"cityname":"Hyderabad",
      "addressLine1":"",
      "location":"",
      "location_id":79
    }
    ,
    {
      "event_id":87,"latitude":"10.9082929",
      "cityname":"Coimbatore",
      "addressLine1":"Tamilnadu",
      "location":"Karpagam Institute of technology",
      "location_id":81,"longitude":"76.9780469"
    }
  ],"event_banners":[
    {
      "event_id":82,"img_name":"servlet.png",
      "event_banner_id":73,"banner_url":"https://app.box.com/shared/static/tjisrb265ey8i8g2mfx4h6jhwnmlwdop.png"
    }
    ,
    {
      "event_id":84,"event_banner_id":75
    }
    ,
    {
      "event_id":85,"event_banner_id":76
    }
    ,
    {
      "event_id":87,"event_banner_id":78
    }
  ],"httpStatusCode":0
};