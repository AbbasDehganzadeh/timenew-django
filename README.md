# timenew-django
a news web app, using Django, and Python
---
## شرح پروژه
پروژه وبسایت اخبار و مقالات با پایتون و جنگو...

این وبسایت شامل بخض های زیر است:
* *خانه*: صفحه اصلی سایت
* *بسته بندی*: شامل اخبار و مقالات است.
* *اخبار*: مسايل و اتفاقات روز
* *مقالات*: تشریح و بررسی مسايل
* *آرشیو*: تاریخچه اخبار و مقالات
* *ادمین*: صفحه ادمین برای دسترسی کاربران

سطح دسترسی کاربران بدین صورت است:
* *خواننده*(Reader): فقط توانایی خواندن مقالات را دارد.
* *روزنامه نگار*(Journalist): توانایی نوشتن مقالات را دارد.
* *سرپرست*(Supervisor): توانایی انتشار مقالات را دارد.
* *خواننده*(Manager): توانایی نوشتن و انتشار مقالات را دارد.
---
## How-to run
first clone the repo, and chage folder
``` bash
git ^Cone git@github.com:AbbasDehganzadeh/timenew-django.git
cd timenew-django
```
then go to back-end; create, and activate venv
``` bash
cd back_end
python -m virtualenv venv
source venv/bin/activate
```
run these scripts to start server
``` bash
python manamge.py migrate
python manamge.py runserver
```
then go to front-end, and start the client
``` bash
cd front_end
npm i && npm run dev
```

