---
title: 1.1.9 MVP 패턴
---

## MVP 패턴이란?

![mode-view-presenter](https://upload.wikimedia.org/wikipedia/commons/d/dc/Model_View_Presenter_GUI_Design_Pattern.png)

MVC 패턴으로부터 파생되었고, Controller가 Presenter로 대체되었다는 차이점이 있습니다. 앞서 Controller의 역할이 View나 Model로부터 변경을 감지하면 각 구성요소에 특정 명령을 내리는 것이다...라고 가볍게 설명드렸습니다. 하지만 기존 MVC 패턴은 View가 Model에 의존성을 갖기 때문에 발생하는 문제들이 있었고, MVP 패턴은 이를 해결하고자 등장하였습니다. 그럼 어떻게 해결한건지 Presenter의 역할을 통해 알아보겠습니다.

Presenter는 View와 Model에 사이에서 View가 필요로 하는 가공된 Model에 대해 응답하며 해당 정보를 중개합니다.

어떤 이벤트가 View를 통해 감지되면 (View에 변경이 생긴다면) View는 Presenter에게 변경에 대한 정보와 함께 가공된 Model의 정보를 Presenter에게 요청하고, Presenter는 이를 Model에게 대신 요청해서 받아온 가공된 Model의 정보를 View에게 알려주는 식입니다.

즉 Presenter와 View는 1:1 관계이며, 다시 말하면 View에 따른 Presenter가 항상 존재하는 것입니다.

Presenter는 View의 Model에 대한 의존성을 해결했지만, View의 Presenter에 대한 의존성을 만들어냈고, 애플리케이션의 규모가 커지면 그만큼 구현해야 할 View가 많아지므로, 더불어 Presenter의 규모도 커진다는 단점이 있습니다.