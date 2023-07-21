---
title: 1.1.8 MVC 패턴
---

## 1.1.8 MVC 패턴

![MVC-Model](https://developer.mozilla.org/ko/docs/Glossary/MVC/model-view-controller-light-blue.png)

어떤 애플리케이션을 Model - View - Controller 3가지 역할로 구분된 구성요소로 디자인하는 방법입니다. 각 구성 요소가 애플리케이션에서 독립적인 역할을 갖고 있기 때문에 개발에 참여하는 사람들이 구현할 대상에 집중하기 편하도록 만들어주는 이점이 있고, 재사용성과 확장성에서도 이점을 갖지만 애플리케이션이 복잡해질수록 구성요소별 역할을 나누기가 어려워 모델과 뷰의 관계가 복잡해지는 단점이 있습니다.

### 모델(Model)

모델은 애플리케이션이 필요로하는 데이터와 비즈니스 로직을 관리합니다. 즉, 모델은 애플리케이션에 대해 모르는 정보가 없는 주체입니다. 앱에 포함시켜야 할 데이터가 무엇인지를 정의하고, 데이터가 변경되면 필요에 따라 이를 뷰에게 알려서 화면에 표시되는 데이터를 변경토록 합니다. 보통은 데이터의 변경 사실을 뷰에게 알리지만, 때에 따라서는 컨트롤러에게 알리기도 합니다.

### 뷰(View)

뷰는 애플리케이션의 레이아웃과 화면(UI)을 처리합니다. UI 구성요소를 기반으로 사용자에게 명령을 입력받는 역할을 수행하므로, 컨트롤러에게 이를 인지시켜 적절한 기능이 수행되도록하는 책임을 갖고 있습니다.

### 컨트롤러(Controller)

컨트롤러는 애플리케이션에 입력되는 명령을 모델과 뷰 부분으로 할당하고, 이를 통해 모델과 뷰를 업데이트합니다. 이 과정에서 기존의 모델과 뷰가 삭제되기도 하고, 새로운 모델과 뷰가 생성되기도 합니다.

### MVC 패턴을 활용하는 라이브러리

![React-Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png)

React는 클라이언트 사이드의 웹 애플리케이션에서 UI 컴포넌트를 만드는 데 사용되는 라이브러리입니다. Meta에서 개발하였으며, 특징으로는 'Virtual DOM'을 활용해서 실제 DOM 구조 상 변경이 필요한 부분만 갱신하여 웹 애플리케이션의 전체적인 로딩 성능 향상을 가져왔습니다. React가 MVC 패턴을 따르는 방향을 알아볼까요?

자, React로 구현할 수 있는 꽤 잘 알려진 예제를 가져왔습니다.

```jsx
import { useState } from "react";
import styles from "./counters.module.css";

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default function MyApp() {
  return <MyButton />;
}
```

이 예제는 **사용자가 버튼을 클릭하면 버튼에 표시되는 숫자가 하나씩 증가하는 기능**을 가진 버튼을 구현하는 예제입니다.

위 예제에서 모델, 뷰, 컨트롤러를 구현하는 코드가 어떤 것인지 하나씩 살펴보겠습니다.

- 모델

```jsx
const [count, setCount] = useState(0);
```

React의 useState를 활용해서 count에 클릭된 횟수를 저장하고, setCount를 통해 이 상태를 설정합니다.

- 뷰

```jsx
return (
  <div>
    <button onClick={handleClick} className={styles.counter}>
      Clicked {count} times
    </button>
  </div>
);
```

count에서 현재 클릭 횟수를 불러와서 버튼에 표시하는 기능과, 사용자의 클릭 이벤트를 감지해서 handleClick 함수를 불러오는 기능을 가진 버튼을 화면에 표시합니다.

- 컨트롤러

```jsx
function handleClick() {
  setCount(count + 1);
}
```

호출되면 count의 값을 1 증가시킨 것을 새로운 "상태"로 설정하는 기능을 가진 함수입니다.

_\# Design Pattern_
