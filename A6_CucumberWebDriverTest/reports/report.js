$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestCases/CheckOut.feature");
formatter.feature({
  "line": 2,
  "name": "New implementation of login Feature",
  "description": "",
  "id": "new-implementation-of-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "valid scenario for login with valid data",
  "description": "",
  "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@validlogin"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter URL as \u003cURL\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify url loaded properly",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter user name as \u003cUSERNAME\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password as \u003cPASSWORD\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Dont click Remember Password",
  "keyword": "But "
});
formatter.step({
  "line": 12,
  "name": "Click login Button",
  "keyword": "When "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data;",
  "rows": [
    {
      "cells": [
        "BROWSER",
        "URL",
        "USERNAME",
        "PASSWORD"
      ],
      "line": 15,
      "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data;;1"
    },
    {
      "cells": [
        "firfox",
        "http://djangovinoth.pythonanywhere.com/login/",
        "SatheeshKM",
        "shyma@18"
      ],
      "line": 16,
      "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data;;2"
    },
    {
      "cells": [
        "firfox",
        "http://djangovinoth.pythonanywhere.com/login/",
        "SatheeshK2",
        "shyma@18"
      ],
      "line": 17,
      "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data;;3"
    },
    {
      "cells": [
        "firfox",
        "http://djangovinoth.pythonanywhere.com/login/",
        "SatheeshK3",
        "shyma@18"
      ],
      "line": 18,
      "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data;;4"
    },
    {
      "cells": [
        "firfox",
        "http://djangovinoth.pythonanywhere.com/login/",
        "SatheeshK5",
        "shyma@18"
      ],
      "line": 19,
      "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data;;5"
    },
    {
      "cells": [
        "firfox",
        "http://djangovinoth.pythonanywhere.com/login/",
        "SatheeshK7",
        "shyma@18"
      ],
      "line": 20,
      "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "valid scenario for login with valid data",
  "description": "",
  "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@validlogin"
    },
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open browser as firfox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter URL as http://djangovinoth.pythonanywhere.com/login/",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify url loaded properly",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter user name as SatheeshKM",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password as shyma@18",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Dont click Remember Password",
  "keyword": "But "
});
formatter.step({
  "line": 12,
  "name": "Click login Button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "firfox",
      "offset": 16
    }
  ],
  "location": "CheckOutPageTest.openBrowser(String)"
});
formatter.result({
  "duration": 57598245669,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://djangovinoth.pythonanywhere.com/login/",
      "offset": 13
    }
  ],
  "location": "CheckOutPageTest.enterurl(String)"
});
formatter.result({
  "duration": 64929809162,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.verifyURL()"
});
formatter.result({
  "duration": 47220223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SatheeshKM",
      "offset": 19
    }
  ],
  "location": "CheckOutPageTest.enterusername(String)"
});
formatter.result({
  "duration": 520103747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shyma@18",
      "offset": 18
    }
  ],
  "location": "CheckOutPageTest.enterpassword(String)"
});
formatter.result({
  "duration": 278803071,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.clickRemember()"
});
formatter.result({
  "duration": 28835,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.clickloginButton()"
});
formatter.result({
  "duration": 753871199,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "valid scenario for login with valid data",
  "description": "",
  "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@validlogin"
    },
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open browser as firfox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter URL as http://djangovinoth.pythonanywhere.com/login/",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify url loaded properly",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter user name as SatheeshK2",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password as shyma@18",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Dont click Remember Password",
  "keyword": "But "
});
formatter.step({
  "line": 12,
  "name": "Click login Button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "firfox",
      "offset": 16
    }
  ],
  "location": "CheckOutPageTest.openBrowser(String)"
});
formatter.result({
  "duration": 9763344666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://djangovinoth.pythonanywhere.com/login/",
      "offset": 13
    }
  ],
  "location": "CheckOutPageTest.enterurl(String)"
});
formatter.result({
  "duration": 11485188179,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.verifyURL()"
});
formatter.result({
  "duration": 49551936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SatheeshK2",
      "offset": 19
    }
  ],
  "location": "CheckOutPageTest.enterusername(String)"
});
formatter.result({
  "duration": 177233087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shyma@18",
      "offset": 18
    }
  ],
  "location": "CheckOutPageTest.enterpassword(String)"
});
formatter.result({
  "duration": 299629154,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.clickRemember()"
});
formatter.result({
  "duration": 37143,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.clickloginButton()"
});
formatter.result({
  "duration": 634700724,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "valid scenario for login with valid data",
  "description": "",
  "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@validlogin"
    },
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open browser as firfox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter URL as http://djangovinoth.pythonanywhere.com/login/",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify url loaded properly",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter user name as SatheeshK3",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password as shyma@18",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Dont click Remember Password",
  "keyword": "But "
});
formatter.step({
  "line": 12,
  "name": "Click login Button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "firfox",
      "offset": 16
    }
  ],
  "location": "CheckOutPageTest.openBrowser(String)"
});
formatter.result({
  "duration": 10212564561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://djangovinoth.pythonanywhere.com/login/",
      "offset": 13
    }
  ],
  "location": "CheckOutPageTest.enterurl(String)"
});
formatter.result({
  "duration": 6394374078,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.verifyURL()"
});
formatter.result({
  "duration": 50890557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SatheeshK3",
      "offset": 19
    }
  ],
  "location": "CheckOutPageTest.enterusername(String)"
});
formatter.result({
  "duration": 176242928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shyma@18",
      "offset": 18
    }
  ],
  "location": "CheckOutPageTest.enterpassword(String)"
});
formatter.result({
  "duration": 107002663,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.clickRemember()"
});
formatter.result({
  "duration": 22970,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.clickloginButton()"
});
formatter.result({
  "duration": 634634745,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "valid scenario for login with valid data",
  "description": "",
  "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@validlogin"
    },
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open browser as firfox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter URL as http://djangovinoth.pythonanywhere.com/login/",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify url loaded properly",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter user name as SatheeshK5",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password as shyma@18",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Dont click Remember Password",
  "keyword": "But "
});
formatter.step({
  "line": 12,
  "name": "Click login Button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "firfox",
      "offset": 16
    }
  ],
  "location": "CheckOutPageTest.openBrowser(String)"
});
formatter.result({
  "duration": 13263704857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://djangovinoth.pythonanywhere.com/login/",
      "offset": 13
    }
  ],
  "location": "CheckOutPageTest.enterurl(String)"
});
formatter.result({
  "duration": 3446612542,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.verifyURL()"
});
formatter.result({
  "duration": 100070572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SatheeshK5",
      "offset": 19
    }
  ],
  "location": "CheckOutPageTest.enterusername(String)"
});
formatter.result({
  "duration": 313662924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shyma@18",
      "offset": 18
    }
  ],
  "location": "CheckOutPageTest.enterpassword(String)"
});
formatter.result({
  "duration": 111394355,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.clickRemember()"
});
formatter.result({
  "duration": 26880,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.clickloginButton()"
});
formatter.result({
  "duration": 2618811751,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "valid scenario for login with valid data",
  "description": "",
  "id": "new-implementation-of-login-feature;valid-scenario-for-login-with-valid-data;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@validlogin"
    },
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open browser as firfox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "enter URL as http://djangovinoth.pythonanywhere.com/login/",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "verify url loaded properly",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "enter user name as SatheeshK7",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "enter password as shyma@18",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Dont click Remember Password",
  "keyword": "But "
});
formatter.step({
  "line": 12,
  "name": "Click login Button",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "firfox",
      "offset": 16
    }
  ],
  "location": "CheckOutPageTest.openBrowser(String)"
});
formatter.result({
  "duration": 14487681171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://djangovinoth.pythonanywhere.com/login/",
      "offset": 13
    }
  ],
  "location": "CheckOutPageTest.enterurl(String)"
});
formatter.result({
  "duration": 9513782564,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.verifyURL()"
});
formatter.result({
  "duration": 900029128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SatheeshK7",
      "offset": 19
    }
  ],
  "location": "CheckOutPageTest.enterusername(String)"
});
formatter.result({
  "duration": 289316546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shyma@18",
      "offset": 18
    }
  ],
  "location": "CheckOutPageTest.enterpassword(String)"
});
formatter.result({
  "duration": 99784667,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.clickRemember()"
});
formatter.result({
  "duration": 24925,
  "status": "passed"
});
formatter.match({
  "location": "CheckOutPageTest.clickloginButton()"
});
formatter.result({
  "duration": 3924984947,
  "status": "passed"
});
});