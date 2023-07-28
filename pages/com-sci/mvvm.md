---
title: 1.1.10 MVVM 패턴
---

## MVVM 패턴

![model-view-viewModel](https://upload.wikimedia.org/wikipedia/commons/8/87/MVVMPattern.png)

MVVM 패턴은 MVP의 단점을 보완하고자 등장한 MVC에서 파생된 패턴이고, **Controller**가 **ViewModel**로 바뀐 패턴입니다. ViewModel도 Presenter와 비슷하게 구조 상 Model과 View 구성요소 사이에 위치하지만, Presenter의 중개 역할과는 조금 다른 결의 역할을 수행합니다.

> ViewModel은 View를 더 추상화한 계층이며, MVVM 패턴은 MVC 패턴과는 다르게 커맨드와 데이터 바인딩을 가지는 것이 특징입니다.

여기서 커맨드와 데이터 바인딩에 대해 차례대로 알아봅시다.

- 커맨드 (커맨드 패턴) : View에 변경이 생기면 ViewModel에 자동으로 명령을 내립니다. 원래는 상호 객체의 메소드 핸들러를 만들어서 객체 간 의존성을 없애는 패턴을 의미합니다. 그래서 MVVM에서는 View와 ViewModel의 의존성이 없습니다.
- 데이터 바인딩 : 여기서의 데이터 바인딩은 정확하게는 "양방향 데이터 바인딩"을 의미합니다. View에서의 데이터가 변하면 ViewModel에서의 데이터도 똑같이 변하고, 반대의 경우도 마찬가지입니다. 즉, 두 구성요소의 데이터 동기화의 의미를 갖습니다.

ViewModel은 View와 1:N 관계를 갖습니다. View는 ViewModel의 상태가 변하는지 계속 지켜보다가, User Input 이벤트 등에 의해 View에 "변화"가 생겨서 이에 대한 커맨드가 작동한 뒤 ViewModel의 상태가 변화하면 그에 맞춰서 새로운 View가 나타나는 것이죠!

MVVM 패턴에서 Model은 조금 특이한 위치에 놓여있습니다. ViewModel이 Model을 소유하고 갱신시키기 때문입니다. Model은 애플리케이션의 비즈니스 로직과 데이터를 그저 알고 있으면 되고, ViewModel이 이를 갱신하면 Model은 ViewModel에게 "갱신되었다"고 알려주면 됩니다.

MVVM 패턴은 MVC나 MVP에 비해 많은 부분에서 성능 효율적이고 의존성 문제도 해결되었지만, 구현의 복잡함과 애플리케이션 규모 확장에 따른 ViewModel의 범용성 한계 때문에 단점도 존재합니다. [링크](https://ko.wikipedia.org/wiki/%EB%AA%A8%EB%8D%B8-%EB%B7%B0-%EB%B7%B0%EB%AA%A8%EB%8D%B8#%EB%B9%84%ED%8C%90) 