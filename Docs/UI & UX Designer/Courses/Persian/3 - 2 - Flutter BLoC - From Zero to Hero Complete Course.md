<!-- ©©©©©©©©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© -->

# Flutter BLoC - From Zero to Hero Complete Course

قوی ترین مدیریت حالت فلاتر - کتابخانه BLoC را درک کنید، یاد بگیرید و تمرین کنید

![Flutter BLoC - From Zero to Hero Complete Course](../../assets/Courses/Course%20Covers/3%20-%202%20-%20Flutter%20BLoC%20-%20From%20Zero%20to%20Hero%20Complete%20Course.webp)

## مطالب دوره

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

## توضیحات

### الزامات

* درک کمی در مورد نحوه عملکرد فلاتر

سلام، همه!

با دنبال کردن این دوره BLoC - From Zero to Hero، راه حل **BloC State Management** را با موفقیت یاد خواهید گرفت، بنابراین اگر در **درک** یا **تمرین** همه مفاهیم آن شک دارید، واقعا توصیه می کنم. چک کردن آن **در اینجا!**

با این حال، قبل از اینکه آن را بررسی کنید، می‌خواهم به شما بگویم که این **سری** با بخش‌های **نظری** و مهمتر از همه، **عملی** (*کدگذاری**) هر بخش طراحی شده است. موضوع همه فایل های پروژه را می توانید در **صفحه github من** پیدا کنید.

همچنین، این سریال توسط خالق شگفت‌انگیز bloc_library، فلیکس آنجلوف، به دقت زیر نظر گرفته شد.

از طرفی بدون **بدون کوچکترین محدودیت** احساس میکنم سریال من **بهترین لیست پخش bloc_library** در کل اینترنت است.

 حرف من را قبول نکنید، خودتان آن را امتحان کنید!

خلاصه ای از همه چیزهایی که در این لیست پخش پوشش داده شده است، بنابراین می دانید چه انتظاری دارید:

1. **چرا BLoC؟** در این ویدیو توضیح دادم که چرا bloc_library را هم برای راه حل مدیریت دولتی و هم برای ساختار معماری برنامه هایم انتخاب کردم.
2. **BLoC Core Concepts** - در این آموزش من در توضیح **جریان**ها و مفاهیم****** و **cubits واقعاً عمیق شدم.**
3. **مفاهیم Flutter BLoc** - در اینجا، من در مورد تک تک مفاهیم bloc_library مانند **BlocProvider، BlocBuilder، BlocListener** و بسیاری موارد دیگر بحث کردم. این مفاهیم بدیهی است که در هر آموزش توضیح داده شده و آزمایش می شوند، زیرا آنها پایه block_library هستند.
4. **BLoC Architecture -** در این آموزش من یک مقدمه کوتاه در مورد آنچه که به اعتقاد من بهترین **معماری** است که باید دنبال کنید را به منظور ساختار و مقیاس کد شما در طول زمان انجام دادم! این ویدیو هیچ کدی در صفحه github من ندارد، زیرا من قصد دارم از آن به طور گسترده در مجموعه آموزش های بعدی خود در مورد ساخت برنامه های دنیای واقعی استفاده کنم!
5. **تست BLoC** - تست یکی از مهمترین ارکان برنامه نویسی است که اغلب توسط توسعه دهندگان حذف می شود. در این ویدیو توضیح خواهم داد که اصول اولیه **تست** یک برنامه کوچک ساخته شده توسط بلوک چیست.
6. **دسترسی و ناوبری BLoC** - در این آموزش من واقعاً در مورد اینکه **گزینه های مسیریابی** وجود دارد که می توانید با موفقیت یک cubit/block به درخت ویجت ارائه دهید، به طور عمیق آشنا شدم.
7. **ارتباطات بلوک به بلوک** - در اینجا من می خواستم همه بینندگانم بفهمند که چقدر مهم است که بدانند چگونه **2 بلوک/مربع را با یکی دیگر ارتباط برقرار کنیم**.
8. **BuildContext In-Depth** - این آموزش واقعاً به bloc_library مربوط نمی شود، اما از آنجایی که زمینه های ساخت در همه جا در یک برنامه flutter استفاده می شود، متوجه شدم که اکثر مردم نمی دانند واقعاً چگونه کار می کنند. این ویدیو همچنین مفید است زیرا دانش کسب شده از **آموزش شماره 3 و 6** را گسترش می دهد.
9. **Bloc 6.1.0** - در طول مجموعه آموزشی من، نسخه جدیدی از bloc_library منتشر شد که شامل تغییرات مهمی مانند context.watch، context.read و context.select است. همه اینها در این ویدیو، مثل همیشه، با مثال های بصری پوشش داده شده است.
10. **بلاک حالت به روز نمی شود** - در این ویدیو توضیح دادم که چرا اکثر توسعه دهندگان جدید با این مشکل محبوب مواجه می شوند که حالت **بلاک/مربع به روز نمی شود**.
11. **حفظ حالت با Hydrated_Bloc** - در این آموزش من واقعاً در مورد اینکه چگونه می‌توانید وضعیت چندین بلوک/مربع را در حافظه داخلی برنامه در دستگاه خود ذخیره کنید، به طور عمیق آشنا شدم. این یک مفهوم کلیدی در توسعه یک برنامه موفق Flutter است که دارای bloc_library به عنوان ویژگی مدیریت حالت است.
12. **اشکال‌زدایی بلوک‌ها/مربع‌ها، قراردادهای نام‌گذاری و سایر نکات و ترفندها** آخرین ویدیوی این مجموعه است که سایر موضوعات مهم موجود در کتابخانه flutter_bloc را پوشش می‌دهد.

ممنونم و امیدوارم شما هم مثل من هیجان زده باشید!

WCKD

### این دوره برای چه کسانی است

* بال زدن مبتدی کنجکاو است که قوی ترین راه حل مدیریت دولتی چیست
* توسعه دهنده Flutter که می خواهد در مورد مدیریت دولتی BLoC واقعاً عمیق بیاموزد
* توسعه دهنده Flutter که می خواهد دانش خود را با BLoC تازه کند

[🔗 لینک دوره 🔗](https://www.udemy.com/course/bloc-from-zero-to-hero/?couponCode=LETSLEARNNOW)

---

© محمد حسین ابوطالبی | تمامی حقوق محفوظ است

<!-- ©©©©©©©©©©©©©©©©©©©©©©©© All Rights Are Reserved By Muhammad Husain Abootalebi ©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©©© -->