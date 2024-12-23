<!-- ©©©©©©©©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© -->

# Flutter BLoC - From Zero to Hero Complete Course

最も堅牢な Flutter 状態管理を理解し、学習し、実践する - BLoC ライブラリ

![Flutter BLoC - From Zero to Hero Complete Course](../../assets/Courses/Course%20Covers/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.webp)

## コース内容

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

## 説明

### 要件

* Flutter の仕組みに関する簡単な理解

皆さん、こんにちは!

この BLoC - From Zero to Hero コースを受講すると、**BLoC 状態管理** ソリューションを習得できます。そのため、すべての概念を **理解** または **実践** することに不安がある場合は、**こちら** で確認することを強くお勧めします!**

確認する前に、この **シリーズ** は、議論されているすべてのトピックの **理論** 部分と、最も重要な **実践** ( **コーディング** ) 部分の両方を考慮して設計されていることをお伝えしたいと思います。すべてのプロジェクト ファイルは、**私の github ページ** にあります。

また、このシリーズは、bloc_library の素晴らしい作成者である Felix Angelov によって注意深く監視されています。

一方で、**少しも制約なく**、私のシリーズはインターネット全体で **最高の bloc_library プレイリスト** であると感じています。

**私の言うことを鵜呑みにせず、自分で試してみてください!**

このプレイリストで取り上げたすべての内容の概要です。何を期待すればよいかがわかります:

1. **なぜ BLoC か?** このビデオでは、状態管理ソリューションとアプリのアーキテクチャ構造の両方に bloc_library を選んだ理由を説明しました
2. **BLoC コア コンセプト** - このチュートリアルでは、**ストリーム** と **ブロック** および **キュービット** の概念について詳しく説明しました。
3. **Flutter BLoc コンセプト** - ここでは、**BlocProvider、BlocBuilder、BlocListener** など、bloc_library のコンセプトの 1 つ 1 つについて説明しました。これらのコンセプトは bloc_library のベースであるため、すべてのチュートリアルで説明およびテストされています。
4. **BLoC アーキテクチャ -** このチュートリアルでは、時間をかけてコードを構造化して拡張するために従うべき最良の **アーキテクチャ** であると私が考えるものについて簡単に紹介しました。このビデオの github ページにはコードは含まれていません。これは、実際のアプリの構築に関する後続のチュートリアル シリーズで広く使用することを計画しているためです。
5. **BLoC テスト** - テストはプログラミングの最も重要な柱の 1 つですが、開発者はしばしば省略します。このビデオでは、ブロックで構築された小さなアプリケーションの **テスト** の基本について説明します。
6. **BLoC アクセスとナビゲーション** - このチュートリアルでは、ウィジェット ツリーに cubit/bloc を正常に提供できる **ルーティング オプション** について詳しく説明しました。
7. **ブロック間の通信** - ここでは、**2 つのブロック/cubit を互いに通信させる** 方法を知ることの重要性をすべての視聴者に理解してもらいたかったのです。
8. **BuildContext の詳細** - このチュートリアルは bloc_library とはあまり関係ありませんが、ビルド コンテキストは Flutter アプリ内のあらゆる場所で使用されているため、ほとんどの人が実際の動作を理解していないことに気付きました。このビデオは、**チュートリアル番号 3 と 6** で得た知識を広めるのに役立つため、便利です。
9. **Bloc 6.1.0** - 私のチュートリアル シリーズ中に、context.watch、context.read、context.select などの重要な変更を含む bloc_library の新しいバージョンがリリースされました。これらすべては、いつものように直感的な例とともにこのビデオで説明されています。
10. **Bloc の状態が更新されない** - このビデオでは、新しい開発者のほとんどが、**bloc/cubit の状態が更新されない** という一般的な問題に遭遇する理由を説明しました。
11. **Hydrated_Bloc による状態の維持** - このチュートリアルでは、デバイス上のアプリの内部ストレージに複数のブロック/キュービットの状態を保存する方法について詳しく説明しました。これは、状態管理機能として bloc_library を使用することで、成功する Flutter アプリを開発するための重要な概念です。
12. **ブロック/キュービットのデバッグ、命名規則、その他のヒントとコツ** は、このシリーズの最後のビデオで、flutter_bloc ライブラリ内にあるその他の重要なトピックを取り上げています。

ありがとうございました。私と同じように、皆さんも興奮していただければ幸いです。

WCKD

### このコースの対象者

* 最も堅牢な状態管理ソリューションが何であるかを知りたい Flutter 初心者
* BLoC 状態管理について本当に詳しく学びたい Flutter 開発者
* BLoC に関する知識をリフレッシュしたい Flutter 開発者

[🔗 コースリンク 🔗](https://www.udemy.com/course/bloc-from-zero-to-hero/?couponCode=LETSLEARNNOW)

---

© ムハマド・フセイン・アブータレビ | すべての権利は留保されています

<!-- ©©©©©©©©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© -->
