<!-- ©©©©©©©©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© -->

# Flutter BLoC - From Zero to Hero Complete Course

가장 강력한 Flutter 상태 관리를 이해하고, 배우고, 연습하세요 - BLoC Library

![Flutter BLoC - From Zero to Hero Complete Course](../../assets/Courses/Course%20Covers/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.webp)

## 과정 내용

* **Why BLoC as a state management?**
  * Why BLoC?
* **BLoC Core Concepts**
  * BLoC Core Concepts - cubits, blocs, events, methods, streams
* **Flutter BLoC Concepts**
  * Flutter BLoC Concepts
* **BLoC Architecture**
  * BLoC Architecture
* **BLoC Testing**
  * BLoC Testing
* **BLoC Access & Navigation (Local, Route & Global Access)**
  * BLoC Access & Navigation (Local, Route & Global Access)
* **Bloc-to-bloc Communication**
  * Bloc-to-bloc Communication
* **Build Context In-Depth (Flutter & BLoC)**
  * Build Context In-Depth
* **BLoC 6.1.0 Update**
  * BLoC 6.1.0
* **Comparing 2 Objects in Dart, Equatable Package, State not updating issue**
  * State not updating issue and how to fix it
* **Local Storage with Hydrated BLoC**
  * Local Storage with Hydrated BLoC
* **Debugging BLoC**
  * Debugging BLoC

## 설명

### 요구 사항

* Flutter가 작동하는 방식에 대한 작은 이해

안녕하세요 여러분!

이 BLoC - From Zero to Hero 과정을 따르면 **BLoC State Management** 솔루션을 성공적으로 배울 수 있으므로 모든 개념을 **이해**하거나 **연습**하는 데 의심이 드는 경우 **바로 여기**에서 확인해 보는 것이 좋습니다!

확인하기 전에 이 **시리즈**가 논의된 모든 주제의 **이론적** 부분과 가장 중요하게 **실용적** ( **코딩** ) 부분을 모두 고려하여 설계되었음을 알려드리고자 합니다. 모든 프로젝트 파일은 **제 github 페이지**에서 찾을 수 있습니다.

또한 이 시리즈는 bloc_library의 놀라운 제작자인 Felix Angelov가 신중하게 모니터링했습니다.

반면에 **조금도 제약 없이** 제 시리즈가 인터넷 전체에서 **최고의 bloc_library 플레이리스트**라고 생각합니다.

**제 말만 믿지 말고 직접 시도해 보세요!**

이 플레이리스트에서 다룬 모든 내용에 대한 브리핑으로, 무엇을 기대해야 할지 알 수 있습니다.

1. **왜 BLoC인가?** 이 비디오에서 저는 상태 관리 솔루션과 앱의 아키텍처 구조 모두에 bloc_library를 선택한 이유를 설명했습니다.
2. **BLoC 핵심 개념** - 이 튜토리얼에서는 **스트림**과 **블록** 및 **큐빗**의 개념을 자세히 설명했습니다.
3. **플러터 BLoc 개념** - 여기서는 **BlocProvider, BlocBuilder, BlocListener** 등 bloc_library의 모든 개념을 설명했습니다. 이러한 개념은 bloc_library의 기반이기 때문에 모든 튜토리얼에서 설명하고 테스트합니다.
4. **BLoC 아키텍처 -** 이 튜토리얼에서는 시간이 지남에 따라 코드를 구조화하고 확장하기 위해 따라야 할 가장 좋은 **아키텍처**에 대한 간략한 소개를 했습니다! 이 비디오에는 실제 앱을 빌드하는 후속 튜토리얼 시리즈에서 광범위하게 사용할 계획이기 때문에 github 페이지에 코드가 없습니다!
5. **BLoC 테스트** - 테스트는 개발자가 종종 생략하는 프로그래밍의 가장 중요한 기둥 중 하나입니다. 이 비디오에서는 블록으로 빌드한 작은 애플리케이션을 **테스트**하는 기본 사항을 설명합니다.
6. **BLoC 액세스 및 탐색** - 이 튜토리얼에서는 위젯 트리에 큐빗/블록을 성공적으로 제공할 수 있는 **라우팅 옵션**에 대해 자세히 설명했습니다.
7. **블록 간 통신** - 여기서는 모든 시청자가 **2개의 블록/큐빗이 서로 통신**하는 방법을 아는 것이 얼마나 중요한지 이해하기를 바랐습니다.
8. **BuildContext 심층 분석** - 이 튜토리얼은 실제로 bloc_library와 관련이 없지만, 빌드 컨텍스트는 플러터 앱 내부에서 어디에서나 사용되기 때문에 대부분의 사람들이 실제로 어떻게 작동하는지 이해하지 못한다는 것을 깨달았습니다. 이 비디오는 **튜토리얼 번호 3과 6**에서 얻은 지식을 퍼뜨리기 때문에 유용합니다.
9. **Bloc 6.1.0** - 튜토리얼 시리즈 중에 context.watch, context.read 및 context.select와 같은 몇 가지 중요한 변경 사항이 포함된 bloc_library의 새 버전이 출시되었습니다. 이 모든 내용은 항상 그렇듯이 직관적인 예를 통해 이 비디오에서 다룹니다.
10. **Bloc 상태가 업데이트되지 않음** - 이 비디오에서 대부분의 신규 개발자가 **bloc/cubit 상태가 업데이트되지 않음**이라는 이 인기 있는 문제에 직면하는 이유를 설명했습니다.
11. **Hydrated_Bloc으로 상태 유지** - 이 튜토리얼에서는 여러 블록/큐빗의 상태를 기기의 앱 내부 저장소에 저장하는 방법에 대해 자세히 알아보았습니다. 이는 상태 관리 기능으로 bloc_library를 사용하여 성공적인 Flutter 앱을 개발하는 데 중요한 개념입니다.
12. **블록/큐빗 디버깅, 명명 규칙 및 기타 팁과 요령**은 이 시리즈의 마지막 영상으로, flutter_bloc 라이브러리 내부에서 찾을 수 있는 다른 중요한 주제를 다룹니다.

감사합니다. 저만큼 기대되셨기를 바랍니다!

WCKD

### 이 코스의 대상

* 가장 강력한 상태 관리 솔루션이 무엇인지 궁금한 Flutter 초보자
* BLoC 상태 관리에 대해 자세히 알고 싶은 Flutter 개발자
* BLoC에 대한 지식을 새롭게 하고 싶은 Flutter 개발자

[🔗 코스 링크 🔗](https://www.udemy.com/course/bloc-from-zero-to-hero/?couponCode=LETSLEARNNOW)

---

© 무하마드 후세인 아부탈레비 | 모든 권리는 보유됩니다

<!-- ©©©©©©©©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© -->
