@login
Feature: New implementation of login Feature

  @validlogin
  Scenario Outline: valid scenario for login with valid data
    Given open browser as <BROWSER>
    When enter URL as <URL>
    Then verify url loaded properly
    When enter user name as <USERNAME>
    And enter password as <PASSWORD>
    But Dont click Remember Password
    When Click login Button

    Examples: 
      | BROWSER | URL                                           | USERNAME   | PASSWORD |
      | firfox  | http://djangovinoth.pythonanywhere.com/login/ | SatheeshKM | shyma@18 |
      | firfox  | http://djangovinoth.pythonanywhere.com/login/ | SatheeshK2 | shyma@18 |
      | firfox  | http://djangovinoth.pythonanywhere.com/login/ | SatheeshK3 | shyma@18 |
      | firfox  | http://djangovinoth.pythonanywhere.com/login/ | SatheeshK5 | shyma@18 |
      | firfox  | http://djangovinoth.pythonanywhere.com/login/ | SatheeshK7 | shyma@18 |
