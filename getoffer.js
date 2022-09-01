adobe.target.getOffer({
  "mbox": "DemoBox2",
  "params":{
     "entity.id":"SampleProd_1",
     "entity.categoryId":"category_1",
     "entity.name":"My Awesome Product 1",
     "entity.message":"One of our best products!"
  },
  "success": function(content) {
  
    var sample=JSON.stringify(content);
    var obj = sample;
var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);
    console.log(result[0][1].content[0].innerText);


  },
  "error": function(status, error) {
    console.log('Error', status, error);
  }
});

