const fields = [
  {appliesToType: ['area_health_facility','chp_supervisor'],label: 'name', value: contact.manual_name, width: 4},
  {appliesToType: ['area_health_facility','chp_supervisor'],label: 'age', value: contact.place_id, width: 4}
];
console.log(contact);  

// const cards = [
//   {label: 'Alive or Dead',
//   // appliesToType: 'report',
//   appliesIf: function(report){return true;},
//   fields:[
//     {label: 'Delivery Date', value: 13-9-2024, width: 4},
//     {label: 'Name', value: 'Testing', width: 4}
//   ]
// }];



module.exports = {
  fields: fields,
  cards: [],
  context: []
};