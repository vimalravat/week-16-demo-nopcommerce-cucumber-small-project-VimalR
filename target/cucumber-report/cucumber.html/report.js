$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerpage.feature");
formatter.feature({
  "line": 3,
  "name": "Computer page test",
  "description": "As user I want to open computer page into nop commerce website",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5397592400,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@computer"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Computer page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate computers page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnComputerPage()"
});
formatter.result({
  "duration": 101696500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 1055082100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldNavigateComputersPageSuccessfully()"
});
formatter.result({
  "duration": 43332800,
  "status": "passed"
});
formatter.after({
  "duration": 742061900,
  "status": "passed"
});
formatter.before({
  "duration": 2551674600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify User Should Navigate To Desktop Page Successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@computer"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on Computer page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click On subMenu \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify desktop page displayed successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnComputerPage()"
});
formatter.result({
  "duration": 24300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 1015677600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iClickOnSubMenu(String)"
});
formatter.result({
  "duration": 391442700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.verifyDesktopPageDisplayedSuccessfully()"
});
formatter.result({
  "duration": 50195400,
  "status": "passed"
});
formatter.after({
  "duration": 678789700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "verify That User Should build Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@computer"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on Computer page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click On subMenu \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i select Processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i select ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i select hdd \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "i select os \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i select software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add to cart  button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the  confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 31,
      "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 32,
      "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 33,
      "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 34,
      "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2334426700,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "verify That User Should build Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@computer"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on Computer page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click On subMenu \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i select Processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "i select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i select software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add to cart  button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the  confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnComputerPage()"
});
formatter.result({
  "duration": 39100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 916992000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iClickOnSubMenu(String)"
});
formatter.result({
  "duration": 388126800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 756061500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 109000900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 104594800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 77143800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 71150700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 72820800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 68096300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeTheConfirmationMessage()"
});
formatter.result({
  "duration": 289480400,
  "status": "passed"
});
formatter.after({
  "duration": 717030900,
  "status": "passed"
});
formatter.before({
  "duration": 2813214800,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should build Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@computer"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on Computer page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click On subMenu \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i select Processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "i select os \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i select software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add to cart  button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the  confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnComputerPage()"
});
formatter.result({
  "duration": 133100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 912893600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iClickOnSubMenu(String)"
});
formatter.result({
  "duration": 798534600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1043486400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 77356600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 97137100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 91568200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 85923500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 97328800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 67224400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeTheConfirmationMessage()"
});
formatter.result({
  "duration": 294457100,
  "status": "passed"
});
formatter.after({
  "duration": 674098200,
  "status": "passed"
});
formatter.before({
  "duration": 1972321600,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verify That User Should build Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-own-computer-and-add-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@computer"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on Computer page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Menu Tab \"Computers\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click On subMenu \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i select Processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "i select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "i select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "i select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i select software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Add to cart  button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should see the  confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iAmOnComputerPage()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computers",
      "offset": 21
    }
  ],
  "location": "ComputerSteps.iClickOnMenuTab(String)"
});
formatter.result({
  "duration": 931832600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iClickOnSubMenu(String)"
});
formatter.result({
  "duration": 797032000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1176143100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 69698800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 92351700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 75605600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 67748700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 97083800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 79592400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldSeeTheConfirmationMessage()"
});
formatter.result({
  "duration": 241378300,
  "status": "passed"
});
formatter.after({
  "duration": 721411000,
  "status": "passed"
});
formatter.uri("loginpage.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 2392989300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify User Should Navigate To Login Page",
  "description": "",
  "id": "login-test;verify-user-should-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am On login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On login Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Welcome Message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 52200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 449914600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.welcomeMessageDisplayed()"
});
formatter.result({
  "duration": 42316400,
  "status": "passed"
});
formatter.after({
  "duration": 774169300,
  "status": "passed"
});
formatter.before({
  "duration": 2356936700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verify Error Message With Invalid Credentials",
  "description": "",
  "id": "login-test;verify-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am On login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click On login Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"prime1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 818445100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime1234@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 93490200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 84427300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 752804000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeErrorMessageDisplayed()"
});
formatter.result({
  "duration": 45050600,
  "status": "passed"
});
formatter.after({
  "duration": 689061900,
  "status": "passed"
});
formatter.before({
  "duration": 2434747800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "verify That User Should LogIn SuccessFully With Valid Credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I am On login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click On login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"prime1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"Prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should  see Logout link displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 489271700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime1234@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 94333800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 82435600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 309983300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeLogoutLinkDisplayed()"
});
formatter.result({
  "duration": 20027776400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [532529c686c78cee999aec86924e1c4c, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:64921}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64921/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 532529c686c78cee999aec86924e1c4c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.isLogOutLinkDisplay(HomePage.java:77)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iShouldSeeLogoutLinkDisplayed(LoginSteps.java:44)\r\n\tat ✽.Then I should  see Logout link displayed(loginpage.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 900421100,
  "status": "passed"
});
formatter.before({
  "duration": 3182816200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am On login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I click On login Link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I enter email \"prime123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"Prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click On logout link",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "i should see login link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnLoginPage()"
});
formatter.result({
  "duration": 23500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 409010400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime123@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 84962000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 81242900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 338143900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 325672100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeLoginLinkIsDisplayed()"
});
formatter.result({
  "duration": 50501900,
  "status": "passed"
});
formatter.after({
  "duration": 661171400,
  "status": "passed"
});
formatter.uri("registerpage.feature");
formatter.feature({
  "line": 2,
  "name": "Register Test",
  "description": "\r\nAs user I want to navigate register into nop commerce website\r\n\r\nScenario : verify User Should Navigate To Register Page Successfully\r\n Given  I am on register page\r\n  When I click on register link\r\n  Then I should see register page is displayed",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1996649300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "mandatory fields are required",
  "description": "",
  "id": "register-test;mandatory-fields-are-required",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on registration buttonn",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see First name is required \"FirstName\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see last name is required \"LastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see email is required \"Email\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see password is required \"Password\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see  confirm password is required \"ConfirmPassword\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 40700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 417676200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegistrationButtonn()"
});
formatter.result({
  "duration": 81565000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName",
      "offset": 37
    }
  ],
  "location": "RegisterSteps.iShouldSeeFirstNameIsRequired(String)"
});
formatter.result({
  "duration": 64837800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LastName",
      "offset": 36
    }
  ],
  "location": "RegisterSteps.iShouldSeeLastNameIsRequired(String)"
});
formatter.result({
  "duration": 51214400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeEmailIsRequired(String)"
});
formatter.result({
  "duration": 62379400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iShouldSeePasswordIsRequired(String)"
});
formatter.result({
  "duration": 71699500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ConfirmPassword",
      "offset": 44
    }
  ],
  "location": "RegisterSteps.iShouldSeeConfirmPasswordIsRequired(String)"
});
formatter.result({
  "duration": 84798100,
  "status": "passed"
});
formatter.after({
  "duration": 704326100,
  "status": "passed"
});
formatter.before({
  "duration": 2622360800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I am on register page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I select Gender \"Male\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter first name  \"prime\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter last name \"test\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select date of birth \"22\",\"February\",\"1980\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select Gender \"Male\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter email \"prime1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"Prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Confirm password \"Prime123\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on registration button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see registration message",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 24700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 444319400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 72632500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime",
      "offset": 21
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 73965600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 82248000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 24
    },
    {
      "val": "February",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.iSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 264758400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 44385800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime1234@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 89917100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 86033900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime123",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 82793900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegistrationButton()"
});
formatter.result({
  "duration": 540912800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldSeeRegistrationMessage()"
});
formatter.result({
  "duration": 38708900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 322677800,
  "status": "passed"
});
formatter.after({
  "duration": 669328900,
  "status": "passed"
});
});