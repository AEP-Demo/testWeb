adobe.target.getOffer({
  "mbox": "DemoBox2",
  "params":{
     "entity.id":"Prod_1",
     
  },
  "success": function(offer) {
          var result =Object.entries(offer);
    console.log(result[0][1].offer[0]);
                adobe.target.applyOffers({response:{
  "execute": {
    "pageLoad": {
      "options": [{
        "type": "html",
        "content": "page-load"
      },
      {
       
        "type": "insertAfter",
        "content": [{
          "type": "setHtml",
          "content": "<h1>Container 1</h1>",
          "selector": "HTML > BODY",
        
        }]
      }],
 
 
      "metrics": [{
        "type": "click",
        "selector": "HTML > BODY",
        "eventToken": "page-load-click-metric" 
      }]
    }
  }
}});

  },
  "error": function(status, error) {
    console.log('Error', status, error);
  }
});

