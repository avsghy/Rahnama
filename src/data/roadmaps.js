export const roadmaps = [
  {
    id: "frontend",
    name: "فرانت‌اند",
    short: "ف",
    description:
      "آنچه کاربر در مرورگر می‌بیند و لمس می‌کند را بسازید: چیدمان، تعامل و رابط‌های دسترس‌پذیر.",
    steps: [
      {
        title: "پایه‌های HTML و CSS",
        time: "۳ تا ۵ هفته",
        text: "با HTML معنایی ساختار صفحه را بسازید و با CSS ظاهر آن را کنترل کنید: مدل جعبه، Flexbox، Grid و طراحی واکنش‌گرا. در پایان یک صفحهٔ شخصی بسازید که روی موبایل و دسکتاپ درست نمایش داده شود.",
        links: [
          {
            name: "MDN Learn Web Development",
            type: "مستندات",
            url: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
          },
          {
            name: "freeCodeCamp curriculum",
            type: "دوره",
            url: "https://freecodecamp.org/learn",
          },
          {
            name: "Kevin Powell",
            type: "ویدیو",
            url: "https://youtube.com/@KevinPowell",
          },
        ],
      },
      {
        title: "اصول جاوااسکریپت",
        time: "۶ تا ۸ هفته",
        text: "متغیرها، توابع، آرایه‌ها، شیءها و DOM را یاد بگیرید، سپس رویدادها و کد ناهمزمان با fetch و Promise. همین بخش صفحه را تعاملی می‌کند؛ یک برنامهٔ فهرست کارها و یک ویجت آب‌وهوا با یک API عمومی بسازید.",
        links: [
          {
            name: "javascript.info",
            type: "مستندات",
            url: "https://javascript.info",
          },
          {
            name: "The Odin Project",
            type: "دوره",
            url: "https://theodinproject.com",
          },
          {
            name: "Traversy Media",
            type: "ویدیو",
            url: "https://youtube.com/@TraversyMedia",
          },
        ],
      },
      {
        title: "گیت، ابزارهای توسعه و دسترس‌پذیری",
        time: "۲ تا ۳ هفته",
        text: "کارتان را با Git و GitHub نسخه‌بندی کنید، با ابزار توسعه‌دهندهٔ مرورگر اشکال‌زدایی کنید و بسته‌ها را با npm مدیریت کنید. اصول دسترس‌پذیری یعنی تگ‌های معنایی، کنتراست رنگ و پیمایش با کیبورد را بیاموزید و سایتتان را روی GitHub Pages منتشر کنید.",
        links: [
          {
            name: "Pro Git book",
            type: "مستندات",
            url: "https://git-scm.com/book",
          },
          {
            name: "web.dev Learn Accessibility",
            type: "دوره",
            url: "https://web.dev/learn/accessibility",
          },
          {
            name: "freeCodeCamp on YouTube",
            type: "ویدیو",
            url: "https://youtube.com/@freecodecamp",
          },
        ],
      },
      {
        title: "انتخاب فریم‌ورک: React، Vue، Angular یا Svelte",
        time: "۱ تا ۲ هفته",
        text: "قبل از انتخاب، تفاوت‌ها را بشناسید: React کتابخانه‌ای انعطاف‌پذیر با بزرگ‌ترین اکوسیستم و بیشترین تقاضای شغلی، Vue ساده و تدریجی با template syntax، Angular کامل و ساخت‌یافته برای enterprise با TypeScript و dependency injection، Svelte کامپایلری با runtime صفر و بسته‌های کوچک. بر اساس بازار کار محلی و علاقه‌تان یکی را انتخاب کنید.",
        choices: {
          options: [
            { value: "react", label: "React" },
            { value: "vue", label: "Vue" },
            { value: "angular", label: "Angular" },
            { value: "svelte", label: "Svelte" },
          ],
        },
        links: [
          {
            name: "State of JS survey",
            type: "مستندات",
            url: "https://stateofjs.com",
          },
          {
            name: "framework comparison",
            type: "مستندات",
            url: "https://framework.dev",
          },
          {
            name: "Fireship: frameworks",
            type: "ویدیو",
            url: "https://youtube.com/@Fireship",
          },
        ],
      },
      {
        title: "React — محبوب‌ترین انتخاب",
        time: "۴ تا ۸ هفته",
        text: "کامپوننت، props، state، hooks مثل useState و useEffect، context و مسیریابی با React Router را یاد بگیرید. React بیشترین تقاضای شغلی و بزرگ‌ترین اکوسیستم را دارد و با Node در بک‌اند هم‌زبانی دارد.",
        choices: { value: "react" },
        links: [
          {
            name: "React documentation",
            type: "مستندات",
            url: "https://react.dev/learn",
          },
          {
            name: "Scrimba React",
            type: "دوره",
            url: "https://scrimba.com/learn/learnreact",
          },
          {
            name: "The Net Ninja",
            type: "ویدیو",
            url: "https://youtube.com/@NetNinja",
          },
        ],
      },
      {
        title: "Vue — ساده و تدریجی",
        time: "۳ تا ۶ هفته",
        text: "Vue با template syntax ساده‌تر شروع می‌شود و برای پروژه‌های کوچک تا متوسط عالی است. Composition API نسخهٔ ۳ را جدی بگیرید چون روش استاندارد جدید است.",
        choices: { value: "vue" },
        links: [
          {
            name: "Vue.js documentation",
            type: "مستندات",
            url: "https://vuejs.org/guide/",
          },
          {
            name: "Vue Mastery",
            type: "دوره",
            url: "https://vuemastery.com",
          },
          {
            name: "Academind",
            type: "ویدیو",
            url: "https://youtube.com/@academind",
          },
        ],
      },
      {
        title: "Angular — برای پروژه‌های سازمانی",
        time: "۶ تا ۱۰ هفته",
        text: "Angular از ابتدا TypeScript، dependency injection، routing و forms را در خود دارد. برای تیم‌های بزرگ و پروژه‌های enterprise انتخاب رایجی است اما شیب یادگیری‌اش تندتر است.",
        choices: { value: "angular" },
        links: [
          {
            name: "Angular documentation",
            type: "مستندات",
            url: "https://angular.dev",
          },
          {
            name: "Angular University",
            type: "دوره",
            url: "https://blog.angular-university.io",
          },
          {
            name: "Deborah Kurata",
            type: "ویدیو",
            url: "https://youtube.com/@deborah_kurata",
          },
        ],
      },
      {
        title: "Svelte — سبک و مدرن",
        time: "۲ تا ۴ هفته",
        text: "Svelte کد را در زمان build به جاوااسکریپت خالص کامپایل می‌کند و runtime ندارد، پس بسته‌ها کوچک‌تر و سرعت اجرا بالاتر است. SvelteKit نسخهٔ فول‌استک آن است.",
        choices: { value: "svelte" },
        links: [
          {
            name: "Svelte documentation",
            type: "مستندات",
            url: "https://svelte.dev/docs",
          },
          {
            name: "SvelteKit tutorial",
            type: "دوره",
            url: "https://svelte.dev/tutorial/kit",
          },
          {
            name: "Joy of Code",
            type: "ویدیو",
            url: "https://youtube.com/@joyofcode",
          },
        ],
      },
      {
        title: "TypeScript برای فرانت‌اند",
        time: "۳ تا ۵ هفته",
        text: "TypeScript را بیاموزید: type، interface، generic و narrowing. تقریباً همهٔ فریم‌ورک‌های مدرن از TS پشتیبانی می‌کنند و در پروژه‌های واقعی استاندارد شده است.",
        links: [
          {
            name: "TypeScript Handbook",
            type: "مستندات",
            url: "https://typescriptlang.org/docs/handbook/",
          },
          {
            name: "Total TypeScript",
            type: "دوره",
            url: "https://totaltypescript.com",
          },
          {
            name: "Matt Pocock",
            type: "ویدیو",
            url: "https://youtube.com/@mattpocockuk",
          },
        ],
      },
      {
        title: "ابزار build و استایل‌دهی",
        time: "۳ تا ۴ هفته",
        text: "Vite را به‌عنوان ابزار build بشناسید، با Tailwind CSS یا CSS Modules استایل بزنید و با ESLint و Prettier کد را تمیز نگه دارید. این ابزارها فارغ از فریم‌ورک مشترک‌اند.",
        links: [
          {
            name: "Vite documentation",
            type: "مستندات",
            url: "https://vitejs.dev/guide/",
          },
          {
            name: "Tailwind CSS",
            type: "مستندات",
            url: "https://tailwindcss.com/docs",
          },
          {
            name: "Fireship",
            type: "ویدیو",
            url: "https://youtube.com/@Fireship",
          },
        ],
      },
      {
        title: "مدیریت state و دریافت داده",
        time: "۳ تا ۵ هفته",
        text: "برای React: Redux Toolkit یا Zustand، برای Vue: Pinia، برای Angular: RxJS و Signals. برای دریافت داده TanStack Query یا SWR را یاد بگیرید تا fetch و cache را حرفه‌ای مدیریت کنید.",
        links: [
          {
            name: "TanStack Query",
            type: "مستندات",
            url: "https://tanstack.com/query",
          },
          {
            name: "Redux Toolkit",
            type: "مستندات",
            url: "https://redux-toolkit.js.org",
          },
          {
            name: "Jack Herrington",
            type: "ویدیو",
            url: "https://youtube.com/@jherr",
          },
        ],
      },
      {
        title: "تست و عملکرد",
        time: "۳ تا ۴ هفته",
        text: "برای تست واحد از Vitest و Testing Library استفاده کنید و برای تست end-to-end از Playwright یا Cypress. سرعت بارگذاری را با Lighthouse بسنجید، تصاویر را بهینه کنید و حجم بسته‌های جاوااسکریپت را پایین نگه دارید.",
        links: [
          {
            name: "Vitest documentation",
            type: "مستندات",
            url: "https://vitest.dev",
          },
          {
            name: "Playwright documentation",
            type: "مستندات",
            url: "https://playwright.dev",
          },
          {
            name: "web.dev Learn Performance",
            type: "دوره",
            url: "https://web.dev/learn/performance",
          },
        ],
      },
      {
        title: "متا-فریم‌ورک: Next.js، Nuxt یا SvelteKit",
        time: "۴ تا ۶ هفته",
        text: "پس از تسلط بر فریم‌ورک پایه، نسخهٔ متا-فریم‌ورک آن را یاد بگیرید: Next.js برای React، Nuxt برای Vue، SvelteKit برای Svelte. این‌ها SSR، routing فایل‌محور و API routes دارند.",
        links: [
          {
            name: "Next.js documentation",
            type: "مستندات",
            url: "https://nextjs.org/docs",
          },
          {
            name: "Nuxt documentation",
            type: "مستندات",
            url: "https://nuxt.com/docs",
          },
          {
            name: "Lee Robinson",
            type: "ویدیو",
            url: "https://youtube.com/@leerob",
          },
        ],
      },
      {
        title: "پروژهٔ نهایی و نمونه‌کار",
        time: "۴ تا ۶ هفته",
        text: "یک پروژهٔ کامل با API واقعی بسازید، منتشر کنید و در GitHub توضیح بدهید. بعد رزومه و نمونه‌کارتان را آماده کنید و برای مصاحبه تمرین کنید.",
        links: [
          {
            name: "Frontend Mentor",
            type: "تمرین",
            url: "https://frontendmentor.io",
          },
          {
            name: "roadmap.sh Frontend",
            type: "مستندات",
            url: "https://roadmap.sh/frontend",
          },
          {
            name: "Web Dev Simplified",
            type: "ویدیو",
            url: "https://youtube.com/@WebDevSimplified",
          },
        ],
      },
    ],
  },
  {
    id: "backend",
    name: "بک‌اند",
    short: "ب",
    description:
      "سرورها، APIها و پایگاه‌های داده‌ای را بسازید که پشت صحنهٔ برنامه‌ها کار می‌کنند.",
    steps: [
      {
        title: "انتخاب زبان: Node، PHP، Python، Java، Go، Rust یا C#",
        time: "۱ تا ۲ هفته",
        text: "هر زبان برای هدفی ساخته شده است: Node برای هم‌زبانی با فرانت‌اند، Python برای داده و AI، PHP برای وب سنتی و فریلنسری، Java و C# برای enterprise، Go برای میکروسرویس و سرویس‌های شبکه، Rust برای عملکرد بالا و ایمنی حافظه. بر اساس بازار کار محلی و علاقه‌تان انتخاب کنید.",
        choices: {
          options: [
            { value: "node", label: "Node.js" },
            { value: "php", label: "PHP" },
            { value: "python", label: "Python" },
            { value: "java", label: "Java" },
            { value: "csharp", label: "C#" },
            { value: "go", label: "Go" },
            { value: "rust", label: "Rust" },
          ],
        },
        links: [
          {
            name: "roadmap.sh Backend",
            type: "مستندات",
            url: "https://roadmap.sh/backend",
          },
          {
            name: "Stack Overflow survey",
            type: "مستندات",
            url: "https://survey.stackoverflow.co",
          },
          {
            name: "Fireship: languages",
            type: "ویدیو",
            url: "https://youtube.com/@Fireship",
          },
        ],
      },
      {
        title: "Node.js و Express",
        time: "۵ تا ۷ هفته",
        text: "با جاوااسکریپت یا TypeScript سمت سرور کار کنید. Express برای شروع ساده و انعطاف‌پذیر است. اگر React بلدید، Node طبیعی‌ترین انتخاب است چون همان زبان است. سپس NestJS را برای معماری ماژولار، dependency injection و پروژه‌های بزرگ تیمی یاد بگیرید.",
        choices: { value: "node" },
        links: [
          {
            name: "Node.js documentation",
            type: "مستندات",
            url: "https://nodejs.org/en/docs",
          },
          {
            name: "Express documentation",
            type: "مستندات",
            url: "https://expressjs.com",
          },
          {
            name: "NestJS documentation",
            type: "مستندات",
            url: "https://docs.nestjs.com",
          },
        ],
      },
      {
        title: "PHP و Laravel",
        time: "۵ تا ۷ هفته",
        text: "PHP هنوز بخش بزرگی از وب را می‌گرداند. با Laravel که محبوب‌ترین فریم‌ورک آن است، routing، Eloquent ORM، migrations و Blade templates را یاد بگیرید. برای فریلنسری و پروژه‌های کوچک انتخاب اقتصادی است.",
        choices: { value: "php" },
        links: [
          {
            name: "PHP documentation",
            type: "مستندات",
            url: "https://php.net/docs.php",
          },
          {
            name: "Laravel documentation",
            type: "مستندات",
            url: "https://laravel.com/docs",
          },
          {
            name: "Laracasts",
            type: "دوره",
            url: "https://laracasts.com",
          },
        ],
      },
      {
        title: "Python و Django / FastAPI",
        time: "۶ تا ۸ هفته",
        text: "Django برای پروژه‌های کامل با admin panel آماده و ORM قوی، FastAPI برای APIهای سبک و مدرن با type hints و async. Python در داده و AI هم زبان اصلی است، پس سرمایه‌گذاری چندکاره‌ای است.",
        choices: { value: "python" },
        links: [
          {
            name: "Django documentation",
            type: "مستندات",
            url: "https://docs.djangoproject.com",
          },
          {
            name: "FastAPI documentation",
            type: "مستندات",
            url: "https://fastapi.tiangolo.com",
          },
          {
            name: "Corey Schafer",
            type: "ویدیو",
            url: "https://youtube.com/@coreyms",
          },
        ],
      },
      {
        title: "Java و Spring Boot",
        time: "۸ تا ۱۲ هفته",
        text: "Java زبان اصلی enterprise است و Spring Boot محبوب‌ترین فریم‌ورک آن. dependency injection، JPA، REST و امنیت با Spring Security را یاد بگیرید. شیب یادگیری تند است اما بازار کار قوی دارد.",
        choices: { value: "java" },
        links: [
          {
            name: "Spring Boot documentation",
            type: "مستندات",
            url: "https://spring.io/projects/spring-boot",
          },
          {
            name: "Baeldung",
            type: "دوره",
            url: "https://baeldung.com",
          },
          {
            name: "Amigoscode",
            type: "ویدیو",
            url: "https://youtube.com/@amigoscode",
          },
        ],
      },
      {
        title: "C# و ASP.NET Core",
        time: "۶ تا ۱۰ هفته",
        text: "C# زبانی مدرن و قوی است و ASP.NET Core فریم‌ورک آن برای API و وب. در محیط‌های Microsoft و enterprise بسیار رایج است. Entity Framework Core برای ORM استفاده می‌شود.",
        choices: { value: "csharp" },
        links: [
          {
            name: "ASP.NET Core documentation",
            type: "مستندات",
            url: "https://learn.microsoft.com/aspnet/core/",
          },
          {
            name: "Microsoft Learn",
            type: "دوره",
            url: "https://learn.microsoft.com/training/",
          },
          {
            name: "Nick Chapsas",
            type: "ویدیو",
            url: "https://youtube.com/@nickchapsas",
          },
        ],
      },
      {
        title: "Go — ساده و سریع",
        time: "۴ تا ۶ هفته",
        text: "Go زبانی ساده با کامپایل سریع و پشتیبانی بومی از concurrency است. برای میکروسرویس، ابزارهای CLI و سرویس‌های شبکه عالی است. Gin یا Fiber فریم‌ورک‌های محبوب آن‌اند.",
        choices: { value: "go" },
        links: [
          {
            name: "Go documentation",
            type: "مستندات",
            url: "https://go.dev/doc/",
          },
          {
            name: "Go by Example",
            type: "تمرین",
            url: "https://gobyexample.com",
          },
          {
            name: "Anthony GG",
            type: "ویدیو",
            url: "https://youtube.com/@anthonygg_",
          },
        ],
      },
      {
        title: "Rust — عملکرد و ایمنی",
        time: "۸ تا ۱۲ هفته",
        text: "Rust زبانی با ایمنی حافظه بدون garbage collector و عملکرد نزدیک به C است. شیب یادگیری تند است اما برای سیستم‌های حساس، WebAssembly و ابزارهای CLI فوق‌العاده است. Axum یا Actix برای وب.",
        choices: { value: "rust" },
        links: [
          {
            name: "The Rust Book",
            type: "مستندات",
            url: "https://doc.rust-lang.org/book/",
          },
          {
            name: "Rust by Example",
            type: "تمرین",
            url: "https://doc.rust-lang.org/rust-by-example/",
          },
          {
            name: "Let's Get Rusty",
            type: "ویدیو",
            url: "https://youtube.com/@letsgetrusty",
          },
        ],
      },
      {
        title: "HTTP، API و سرور",
        time: "۴ تا ۶ هفته",
        text: "درخواست، پاسخ، کدهای وضعیت، هدرها و JSON را بشناسید. طراحی REST و احراز هویت با نشست و توکن را یاد بگیرید و با فریم‌ورکی که انتخاب کردید یک API کوچک بسازید که برنامه‌های دیگر بتوانند صدایش بزنند.",
        links: [
          {
            name: "MDN HTTP guide",
            type: "مستندات",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
          },
          {
            name: "Postman Learning Center",
            type: "تمرین",
            url: "https://learning.postman.com",
          },
          {
            name: "Hussein Nasser",
            type: "ویدیو",
            url: "https://youtube.com/@hnasr",
          },
        ],
      },
      {
        title: "پایگاه داده",
        time: "۵ تا ۷ هفته",
        text: "SQL، مدل‌سازی رابطه‌ای، join، ایندکس و تراکنش را با PostgreSQL یاد بگیرید. سپس با MongoDB یا Redis آشنا شوید و بدانید هرکدام کی انتخاب درستی است. در پایان پایگاه داده را به API خود وصل کنید.",
        links: [
          {
            name: "SQLBolt",
            type: "تمرین",
            url: "https://sqlbolt.com",
          },
          {
            name: "PostgreSQL tutorial",
            type: "مستندات",
            url: "https://postgresql.org/docs/current/tutorial.html",
          },
          {
            name: "Programming with Mosh",
            type: "ویدیو",
            url: "https://youtube.com/@programmingwithmosh",
          },
        ],
      },
      {
        title: "امنیت، تست و استقرار",
        time: "۴ تا ۶ هفته",
        text: "رمزها را هش کنید، ورودی‌ها را اعتبارسنجی کنید و ریسک‌های OWASP Top 10 را بشناسید. تست خودکار بنویسید، برنامه را با Docker بسته‌بندی کنید و یک خط CI بسازید تا هر تغییر پیش از انتشار بررسی شود.",
        links: [
          {
            name: "OWASP Top 10",
            type: "مستندات",
            url: "https://owasp.org/www-project-top-ten/",
          },
          {
            name: "Docker: Get started",
            type: "دوره",
            url: "https://docs.docker.com/get-started/",
          },
          {
            name: "TechWorld with Nana",
            type: "ویدیو",
            url: "https://youtube.com/@TechWorldwithNana",
          },
        ],
      },
      {
        title: "کش، صف و معماری",
        time: "۴ تا ۶ هفته",
        text: "با Redis کش بسازید، کارهای سنگین را با صف پیام اجرا کنید و تفاوت معماری یکپارچه و میکروسرویس را بشناسید.",
        links: [
          {
            name: "Redis documentation",
            type: "مستندات",
            url: "https://redis.io/docs/",
          },
          {
            name: "System Design Primer",
            type: "مستندات",
            url: "https://github.com/donnemartin/system-design-primer",
          },
          {
            name: "ByteByteGo",
            type: "ویدیو",
            url: "https://youtube.com/@ByteByteGo",
          },
        ],
      },
      {
        title: "پروژهٔ واقعی و نمونه‌کار",
        time: "۴ تا ۶ هفته",
        text: "یک سرویس کامل با احراز هویت، پایگاه داده، تست و مستندات API (Swagger/OpenAPI) بسازید و منتشر کنید تا نمونه‌کار شما باشد. مستندات خوب و README تمیز به اندازهٔ کد اهمیت دارد.",
        links: [
          {
            name: "Swagger / OpenAPI",
            type: "مستندات",
            url: "https://swagger.io/docs/",
          },
          {
            name: "freeCodeCamp back end curriculum",
            type: "دوره",
            url: "https://freecodecamp.org/learn",
          },
          {
            name: "Amigoscode",
            type: "ویدیو",
            url: "https://youtube.com/@amigoscode",
          },
        ],
      },
    ],
  },
  {
    id: "accounting",
    name: "حسابداری",
    short: "ح",
    description:
      "ثبت، گزارش و درک پول در کسب‌وکار را بیاموزید، از دفترداری تا حسابدار رسمی.",
    steps: [
      {
        title: "مفاهیم پایه",
        time: "۳ تا ۴ هفته",
        text: "معادلهٔ حسابداری، بدهکار و بستانکار، دفترداری دوطرفه و سرفصل حساب‌ها را بفهمید. ثبت تراکنش‌های ساده را آن‌قدر تمرین کنید که نوشتن سند حسابداری برایتان طبیعی شود.",
        links: [
          {
            name: "AccountingCoach",
            type: "دوره",
            url: "https://accountingcoach.com",
          },
          {
            name: "OpenStax Financial Accounting",
            type: "مستندات",
            url: "https://openstax.org/details/books/principles-financial-accounting",
          },
          {
            name: "Accounting Stuff",
            type: "ویدیو",
            url: "https://youtube.com/@AccountingStuff",
          },
        ],
      },
      {
        title: "صورت‌های مالی",
        time: "۴ تا ۶ هفته",
        text: "صورت سود و زیان، ترازنامه و صورت جریان وجوه نقد را بیاموزید و ببینید چگونه به هم وصل‌اند. مبنای تعهدی و نقدی را مقایسه کنید و صورت‌های مالی یک شرکت واقعی را تحلیل کنید.",
        links: [
          {
            name: "Corporate Finance Institute",
            type: "دوره",
            url: "https://corporatefinanceinstitute.com/resources/accounting/",
          },
          {
            name: "Investopedia: financial statements",
            type: "مستندات",
            url: "https://investopedia.com/terms/f/financial-statement.asp",
          },
          {
            name: "Khan Academy",
            type: "دوره",
            url: "https://khanacademy.org/economics-finance-domain",
          },
        ],
      },
      {
        title: "نرم‌افزار و تمرین دفترداری",
        time: "۴ تا ۶ هفته",
        text: "با Excel و نرم‌افزارهایی مثل QuickBooks یا Xero کار کنید. مغایرت‌گیری بانکی، صدور فاکتور، حساب‌های پرداختنی و دریافتنی و مبانی حقوق و دستمزد را تمرین کنید؛ بیشتر شغل‌های مقدماتی هر روز با همین ابزارها سروکار دارند.",
        links: [
          {
            name: "Xero Central",
            type: "مستندات",
            url: "https://central.xero.com",
          },
          {
            name: "QuickBooks learning",
            type: "مستندات",
            url: "https://quickbooks.intuit.com/learn-support/",
          },
          {
            name: "ExcelIsFun",
            type: "ویدیو",
            url: "https://youtube.com/@excelisfun",
          },
        ],
      },
      {
        title: "مالیات، حسابرسی و گواهینامه",
        time: "۸ تا ۱۶ هفته",
        text: "مبانی مالیات، کنترل‌های داخلی و اصول حسابرسی را مطابق قوانین کشور خود بخوانید. سپس مسیری مثل AAT، ACCA، CPA یا CMA را انتخاب کنید که درِ بیشتر مشاغل حرفه‌ای حسابداری را باز می‌کند.",
        links: [
          {
            name: "ACCA qualifications",
            type: "دوره",
            url: "https://accaglobal.com",
          },
          {
            name: "IFRS Foundation",
            type: "مستندات",
            url: "https://ifrs.org",
          },
          {
            name: "Becker CPA overview",
            type: "مستندات",
            url: "https://thiswaytocpa.com",
          },
        ],
      },
      {
        title: "اکسل برای حسابداران",
        time: "۳ تا ۴ هفته",
        text: "فرمول‌های SUMIFS و XLOOKUP، جدول محوری و نمودار را برای گزارش‌گیری مالی یاد بگیرید.",
        links: [
          {
            name: "Exceljet",
            type: "مستندات",
            url: "https://exceljet.net",
          },
          {
            name: "Chandoo",
            type: "دوره",
            url: "https://chandoo.org",
          },
          {
            name: "Leila Gharani",
            type: "ویدیو",
            url: "https://youtube.com/@LeilaGharani",
          },
        ],
      },
      {
        title: "تحلیل مالی و بودجه‌بندی",
        time: "۴ تا ۶ هفته",
        text: "نسبت‌های مالی، تحلیل هزینه و تهیهٔ بودجه را بیاموزید و ببینید مدیران چگونه با اعداد تصمیم می‌گیرند.",
        links: [
          {
            name: "Wall Street Prep",
            type: "مستندات",
            url: "https://wallstreetprep.com",
          },
          {
            name: "Corporate Finance Institute",
            type: "دوره",
            url: "https://corporatefinanceinstitute.com",
          },
          {
            name: "Khan Academy",
            type: "ویدیو",
            url: "https://youtube.com/@khanacademy",
          },
        ],
      },
    ],
  },
  {
    id: "it-support",
    name: "پشتیبانی IT",
    short: "IT",
    description:
      "کامپیوترها و کاربران را سرپا نگه دارید: عیب‌یابی، مدیریت کاربران و مبانی امنیت.",
    steps: [
      {
        title: "سخت‌افزار و سیستم‌عامل",
        time: "۴ تا ۶ هفته",
        text: "اجزای کامپیوتر را بشناسید، نصب و پیکربندی ویندوز، macOS و لینوکس را تمرین کنید و با سیستم فایل و درایورها آشنا شوید. سرفصل‌های CompTIA A+ چارچوب خوبی برای این مرحله است.",
        links: [
          {
            name: "Professor Messer A+",
            type: "ویدیو",
            url: "https://youtube.com/@professormesser",
          },
          {
            name: "Google IT Support Certificate",
            type: "دوره",
            url: "https://grow.google/certificates/it-support/",
          },
          {
            name: "Linux Journey",
            type: "تمرین",
            url: "https://linuxjourney.com",
          },
        ],
      },
      {
        title: "عیب‌یابی و پشتیبانی",
        time: "۳ تا ۴ هفته",
        text: "روشی منظم تمرین کنید: مشکل را شناسایی کنید، فرضیه‌ها را آزمایش کنید، رفعش کنید و مستند کنید. با سیستم‌های تیکت و ابزارهای دسترسی از راه دور کار کنید و مشکل فنی را برای کاربر غیرفنی ساده توضیح دهید.",
        links: [
          {
            name: "CompTIA A+ objectives",
            type: "مستندات",
            url: "https://comptia.org/certifications/a",
          },
          {
            name: "Spiceworks Community",
            type: "تمرین",
            url: "https://community.spiceworks.com",
          },
          {
            name: "NetworkChuck",
            type: "ویدیو",
            url: "https://youtube.com/@NetworkChuck",
          },
        ],
      },
      {
        title: "کاربران، دایرکتوری و اسکریپت‌نویسی",
        time: "۵ تا ۷ هفته",
        text: "حساب‌ها، گروه‌ها و دسترسی‌ها را با Active Directory یا Entra ID مدیریت کنید و کارهای تکراری را با PowerShell و Bash خودکار کنید. اسکریپت‌نویسی کارشناس پشتیبانی را به مدیر سیستم تبدیل می‌کند.",
        links: [
          {
            name: "Microsoft Learn",
            type: "دوره",
            url: "https://learn.microsoft.com/training/",
          },
          {
            name: "PowerShell documentation",
            type: "مستندات",
            url: "https://learn.microsoft.com/powershell/",
          },
          {
            name: "Learn Linux TV",
            type: "ویدیو",
            url: "https://youtube.com/@LearnLinuxTV",
          },
        ],
      },
      {
        title: "امنیت و مبانی ابر",
        time: "۴ تا ۶ هفته",
        text: "احراز هویت چندعاملی، به‌روزرسانی، پشتیبان‌گیری، حفاظت از دستگاه‌ها و مدیریت Microsoft 365 را بیاموزید. مدرک CompTIA Security+ این مباحث را کنار هم می‌گذارد و در آگهی‌های استخدام زیاد خواسته می‌شود.",
        links: [
          {
            name: "Security+ overview",
            type: "مستندات",
            url: "https://comptia.org/certifications/security",
          },
          {
            name: "TryHackMe",
            type: "تمرین",
            url: "https://tryhackme.com",
          },
          {
            name: "Professor Messer",
            type: "ویدیو",
            url: "https://youtube.com/@professormesser",
          },
        ],
      },
      {
        title: "شبکه و سرویس‌های ویندوز",
        time: "۴ تا ۶ هفته",
        text: "DNS، DHCP و Group Policy را روی Windows Server در یک ماشین مجازی راه‌اندازی کنید و دسترسی از راه دور را تمرین کنید.",
        links: [
          {
            name: "Windows Server documentation",
            type: "مستندات",
            url: "https://learn.microsoft.com/windows-server/",
          },
          {
            name: "VirtualBox",
            type: "تمرین",
            url: "https://virtualbox.org",
          },
          {
            name: "John Savill’s Technical Training",
            type: "ویدیو",
            url: "https://youtube.com/@NTFAQGuy",
          },
        ],
      },
      {
        title: "ITIL، مستندسازی و مسیر شغلی",
        time: "۲ تا ۴ هفته",
        text: "با چارچوب ITIL، مدیریت رخداد و توافق‌نامهٔ سطح خدمات آشنا شوید و مسیر ارتقا به مدیر سیستم یا مهندس ابر را برنامه‌ریزی کنید.",
        links: [
          {
            name: "Atlassian ITSM guide",
            type: "مستندات",
            url: "https://atlassian.com/itsm",
          },
          {
            name: "Google IT Support on Coursera",
            type: "دوره",
            url: "https://coursera.org/professional-certificates/google-it-support",
          },
          {
            name: "Eli the Computer Guy",
            type: "ویدیو",
            url: "https://youtube.com/@elithecomputerguy",
          },
        ],
      },
    ],
  },
  {
    id: "networking",
    name: "شبکه",
    short: "ش",
    description:
      "بفهمید داده چگونه بین دستگاه‌ها جابه‌جا می‌شود و شبکه‌ها را چگونه طراحی، راه‌اندازی و ایمن کنیم.",
    steps: [
      {
        title: "شبکه چگونه کار می‌کند",
        time: "۴ تا ۵ هفته",
        text: "مدل‌های OSI و TCP/IP، آدرس‌دهی IP، زیرشبکه‌بندی، DNS، DHCP و پورت‌های رایج را بیاموزید. اگر زیرشبکه‌بندی را دستی بلد باشید، بقیهٔ مباحث شبکه روی همین پایه بنا می‌شوند.",
        links: [
          {
            name: "Cisco Networking Academy",
            type: "دوره",
            url: "https://netacad.com",
          },
          {
            name: "Cloudflare Learning Center",
            type: "مستندات",
            url: "https://cloudflare.com/learning/",
          },
          {
            name: "Practical Networking",
            type: "ویدیو",
            url: "https://youtube.com/@PracticalNetworking",
          },
        ],
      },
      {
        title: "سوئیچینگ و مسیریابی",
        time: "۶ تا ۸ هفته",
        text: "روی سوئیچ‌ها VLAN، ترانک و spanning tree و روی روترها مسیریابی ایستا و پویا مثل OSPF و NAT را پیکربندی کنید. پیش از دست زدن به سخت‌افزار واقعی، آزمایشگاه‌های خود را در یک شبیه‌ساز بسازید.",
        links: [
          {
            name: "Cisco U.",
            type: "دوره",
            url: "https://u.cisco.com",
          },
          {
            name: "GNS3 network lab",
            type: "تمرین",
            url: "https://gns3.com",
          },
          {
            name: "Jeremy’s IT Lab",
            type: "ویدیو",
            url: "https://youtube.com/@JeremysITLab",
          },
        ],
      },
      {
        title: "سرویس‌های شبکه و بی‌سیم",
        time: "۴ تا ۶ هفته",
        text: "فایروال، VPN، استانداردهای Wi-Fi، توزیع‌کنندهٔ بار و پایش را بشناسید. با Wireshark بسته‌ها را ضبط کنید تا ببینید DNS، TCP و HTTP روی سیم واقعاً چه شکلی‌اند.",
        links: [
          {
            name: "Wireshark documentation",
            type: "مستندات",
            url: "https://wireshark.org/docs/",
          },
          {
            name: "pfSense documentation",
            type: "مستندات",
            url: "https://docs.netgate.com",
          },
          {
            name: "NetworkChuck",
            type: "ویدیو",
            url: "https://youtube.com/@NetworkChuck",
          },
        ],
      },
      {
        title: "امنیت، اتوماسیون و گواهینامه",
        time: "۶ تا ۱۰ هفته",
        text: "فهرست‌های کنترل دسترسی، بخش‌بندی شبکه و مفاهیم zero trust را اضافه کنید و پیکربندی را با Python و Ansible خودکار کنید. برای اثبات مهارتتان CCNA یا Network+ را هدف بگیرید.",
        links: [
          {
            name: "Cisco Learning Network",
            type: "دوره",
            url: "https://learningnetwork.cisco.com",
          },
          {
            name: "Ansible documentation",
            type: "مستندات",
            url: "https://docs.ansible.com",
          },
          {
            name: "David Bombal",
            type: "ویدیو",
            url: "https://youtube.com/@davidbombal",
          },
        ],
      },
      {
        title: "شبکه‌های ابری و IPv6",
        time: "۴ تا ۶ هفته",
        text: "شبکهٔ مجازی (VPC)، گروه‌های امنیتی و مسیریابی در ابر را بسازید و IPv6 را کنار IPv4 یاد بگیرید.",
        links: [
          {
            name: "AWS VPC documentation",
            type: "مستندات",
            url: "https://docs.aws.amazon.com/vpc/",
          },
          {
            name: "Hurricane Electric IPv6 certification",
            type: "تمرین",
            url: "https://ipv6.he.net/certification/",
          },
          {
            name: "CBT Nuggets",
            type: "ویدیو",
            url: "https://youtube.com/@CBTNuggets",
          },
        ],
      },
      {
        title: "عیب‌یابی شبکه و نمونه‌کار",
        time: "۳ تا ۵ هفته",
        text: "با ping، traceroute و tcpdump مشکلات واقعی را پیدا کنید و یک شبکهٔ آزمایشی را همراه با نمودار شبکه در GitHub منتشر کنید.",
        links: [
          {
            name: "Beej’s Guide to Network Programming",
            type: "مستندات",
            url: "https://beej.us/guide/bgnet/",
          },
          {
            name: "Wireshark sample captures",
            type: "تمرین",
            url: "https://wiki.wireshark.org/SampleCaptures",
          },
          {
            name: "Chris Greer",
            type: "ویدیو",
            url: "https://youtube.com/@ChrisGreer",
          },
        ],
      },
    ],
  },
  {
    id: "hosting",
    name: "هاستینگ و ابر",
    short: "ابر",
    description:
      "اجرای وب‌سایت‌ها و برنامه‌ها روی سرور و پلتفرم‌های ابری را به‌صورت پایدار و ایمن بیاموزید.",
    steps: [
      {
        title: "مبانی سرور لینوکس",
        time: "۴ تا ۵ هفته",
        text: "SSH، کاربران و مجوز فایل‌ها، مدیر بسته، سرویس‌های systemd و یک فایروال ساده را یاد بگیرید. یک سرور مجازی کوچک اجاره کنید و عمداً چند بار خرابش کنید تا درست یاد بگیرید.",
        links: [
          {
            name: "Linux Journey",
            type: "تمرین",
            url: "https://linuxjourney.com",
          },
          {
            name: "DigitalOcean tutorials",
            type: "مستندات",
            url: "https://digitalocean.com/community/tutorials",
          },
          {
            name: "Learn Linux TV",
            type: "ویدیو",
            url: "https://youtube.com/@LearnLinuxTV",
          },
        ],
      },
      {
        title: "وب‌سرور، DNS و HTTPS",
        time: "۳ تا ۴ هفته",
        text: "با Nginx یا Apache یک سایت را سرو کنید، با رکوردهای DNS دامنه را به آن وصل کنید، گواهی رایگان TLS از Let’s Encrypt بگیرید و یک reverse proxy جلوی برنامه بگذارید.",
        links: [
          {
            name: "Nginx documentation",
            type: "مستندات",
            url: "https://nginx.org/en/docs/",
          },
          {
            name: "Let’s Encrypt documentation",
            type: "مستندات",
            url: "https://letsencrypt.org/docs/",
          },
          {
            name: "What is DNS? by Cloudflare",
            type: "دوره",
            url: "https://cloudflare.com/learning/dns/what-is-dns/",
          },
        ],
      },
      {
        title: "کانتینر و پلتفرم‌های ابری",
        time: "۶ تا ۸ هفته",
        text: "برنامه را با Docker بسته‌بندی کنید و سپس یک ابر مثل AWS، Azure یا Google Cloud را بیاموزید: ماشین مجازی، ذخیره‌سازی، شبکه، نقش‌های IAM و پایگاه دادهٔ مدیریت‌شده.",
        links: [
          {
            name: "Docker: Get started",
            type: "مستندات",
            url: "https://docs.docker.com/get-started/",
          },
          {
            name: "AWS Skill Builder",
            type: "دوره",
            url: "https://skillbuilder.aws",
          },
          {
            name: "TechWorld with Nana",
            type: "ویدیو",
            url: "https://youtube.com/@TechWorldwithNana",
          },
        ],
      },
      {
        title: "اتوماسیون و پایداری",
        time: "۶ تا ۸ هفته",
        text: "استقرار را با GitHub Actions خودکار کنید، زیرساخت را با Terraform به‌صورت کد تعریف کنید و با لاگ، متریک و هشدار نظارتش کنید. پشتیبان‌گیری، بازیابی و کنترل هزینه را تمرین کنید.",
        links: [
          {
            name: "GitHub Actions documentation",
            type: "مستندات",
            url: "https://docs.github.com/actions",
          },
          {
            name: "Terraform tutorials",
            type: "دوره",
            url: "https://developer.hashicorp.com/terraform/tutorials",
          },
          {
            name: "roadmap.sh DevOps",
            type: "مستندات",
            url: "https://roadmap.sh/devops",
          },
        ],
      },
      {
        title: "نظارت و لاگ",
        time: "۳ تا ۵ هفته",
        text: "با Prometheus و Grafana سرور را زیر نظر بگیرید و برای مصرف CPU و حافظه و خطاهای برنامه هشدار تنظیم کنید.",
        links: [
          {
            name: "Prometheus documentation",
            type: "مستندات",
            url: "https://prometheus.io/docs/",
          },
          {
            name: "Grafana tutorials",
            type: "دوره",
            url: "https://grafana.com/tutorials/",
          },
          {
            name: "Anton Putra",
            type: "ویدیو",
            url: "https://youtube.com/@AntonPutra",
          },
        ],
      },
      {
        title: "Kubernetes و مقیاس‌پذیری",
        time: "۶ تا ۱۰ هفته",
        text: "با Pod، Deployment و Service آشنا شوید، برنامه را روی یک خوشهٔ آزمایشی اجرا کنید و تفاوت مقیاس‌دهی افقی و عمودی را بفهمید.",
        links: [
          {
            name: "Kubernetes tutorials",
            type: "مستندات",
            url: "https://kubernetes.io/docs/tutorials/",
          },
          {
            name: "Killercoda",
            type: "تمرین",
            url: "https://killercoda.com",
          },
          {
            name: "KodeKloud",
            type: "ویدیو",
            url: "https://youtube.com/@KodeKloud",
          },
        ],
      },
    ],
  },
  {
    id: "security",
    name: "هک و امنیت",
    short: "هک",
    description:
      "یاد بگیرید سیستم‌ها چگونه مورد حمله قرار می‌گیرند و چگونه از آن‌ها دفاع کنیم؛ همیشه در محیط آزمایشی و قانونی.",
    steps: [
      {
        title: "مبانی شبکه و لینوکس",
        time: "۴ تا ۶ هفته",
        text: "کار با ترمینال لینوکس، فایل‌ها، مجوزها و فرایندها و مفاهیم پایهٔ شبکه مثل TCP/IP و DNS را بیاموزید؛ همهٔ ابزارهای امنیتی روی همین پایه اجرا می‌شوند.",
        links: [
          {
            name: "Linux Journey",
            type: "تمرین",
            url: "https://linuxjourney.com",
          },
          {
            name: "TryHackMe Pre Security",
            type: "دوره",
            url: "https://tryhackme.com",
          },
          {
            name: "NetworkChuck",
            type: "ویدیو",
            url: "https://youtube.com/@NetworkChuck",
          },
        ],
      },
      {
        title: "اصول امنیت و رمزنگاری",
        time: "۳ تا ۵ هفته",
        text: "سه‌گانهٔ محرمانگی، یکپارچگی و در دسترس بودن، انواع حمله و دفاع، هش، رمزنگاری و گواهی‌های دیجیتال را بشناسید.",
        links: [
          {
            name: "NIST Cybersecurity Framework",
            type: "مستندات",
            url: "https://nist.gov/cyberframework",
          },
          {
            name: "Cybrary",
            type: "دوره",
            url: "https://cybrary.it",
          },
          {
            name: "Professor Messer",
            type: "ویدیو",
            url: "https://youtube.com/@professormesser",
          },
        ],
      },
      {
        title: "امنیت وب و OWASP",
        time: "۴ تا ۶ هفته",
        text: "آسیب‌پذیری‌هایی مثل SQL injection، XSS و CSRF را بفهمید و روی برنامه‌های عمداً آسیب‌پذیر تمرین کنید تا هم حمله و هم دفاع را بشناسید.",
        links: [
          {
            name: "PortSwigger Web Security Academy",
            type: "دوره",
            url: "https://portswigger.net/web-security",
          },
          {
            name: "OWASP Juice Shop",
            type: "تمرین",
            url: "https://owasp.org/www-project-juice-shop/",
          },
          {
            name: "LiveOverflow",
            type: "ویدیو",
            url: "https://youtube.com/@LiveOverflow",
          },
        ],
      },
      {
        title: "تست نفوذ و ابزارها",
        time: "۶ تا ۸ هفته",
        text: "با Nmap، Burp Suite و Metasploit در آزمایشگاه شخصی کار کنید و مراحل یک تست نفوذ، از شناسایی تا گزارش‌نویسی، را تمرین کنید؛ فقط روی سیستم‌هایی که اجازه دارید.",
        links: [
          {
            name: "Hack The Box Academy",
            type: "دوره",
            url: "https://academy.hackthebox.com",
          },
          {
            name: "Nmap reference guide",
            type: "مستندات",
            url: "https://nmap.org/book/",
          },
          {
            name: "John Hammond",
            type: "ویدیو",
            url: "https://youtube.com/@_JohnHammond",
          },
        ],
      },
      {
        title: "دفاع، پاسخ به حادثه و گواهینامه",
        time: "۶ تا ۱۰ هفته",
        text: "با پایش لاگ‌ها، SIEM و پاسخ به حادثه آشنا شوید و برای Security+ یا eJPT آماده شوید. مسابقه‌های CTF بهترین تمرین مداوم‌اند.",
        links: [
          {
            name: "picoCTF",
            type: "تمرین",
            url: "https://picoctf.org",
          },
          {
            name: "MITRE ATT&CK",
            type: "مستندات",
            url: "https://attack.mitre.org",
          },
          {
            name: "IppSec",
            type: "ویدیو",
            url: "https://youtube.com/@ippsec",
          },
        ],
      },
    ],
  },
  {
    id: "data-ai",
    name: "داده و هوش مصنوعی",
    short: "AI",
    description:
      "از تحلیل داده تا یادگیری ماشین: داده را پاکسازی کنید، مدل بسازید و نتیجه را قابل‌فهم ارائه دهید.",
    steps: [
      {
        title: "پایتون و ریاضی پایه",
        time: "۶ تا ۸ هفته",
        text: "پایتون، NumPy و pandas را همراه با مرور آمار، جبر خطی و احتمال یاد بگیرید؛ این‌ها زبان مشترک تحلیل داده و یادگیری ماشین‌اند.",
        links: [
          {
            name: "Kaggle Learn",
            type: "دوره",
            url: "https://kaggle.com/learn",
          },
          {
            name: "pandas documentation",
            type: "مستندات",
            url: "https://pandas.pydata.org/docs/",
          },
          {
            name: "3Blue1Brown",
            type: "ویدیو",
            url: "https://youtube.com/@3blue1brown",
          },
        ],
      },
      {
        title: "SQL و تحلیل داده",
        time: "۴ تا ۶ هفته",
        text: "با SQL داده را استخراج کنید، آن را پاکسازی و تحلیل کنید و با نمودار (Matplotlib یا Power BI) نتیجه را به زبان ساده ارائه دهید.",
        links: [
          {
            name: "Mode SQL Tutorial",
            type: "دوره",
            url: "https://mode.com/sql-tutorial/",
          },
          {
            name: "Power BI documentation",
            type: "مستندات",
            url: "https://learn.microsoft.com/power-bi/",
          },
          {
            name: "Alex The Analyst",
            type: "ویدیو",
            url: "https://youtube.com/@AlexTheAnalyst",
          },
        ],
      },
      {
        title: "یادگیری ماشین",
        time: "۸ تا ۱۲ هفته",
        text: "رگرسیون، طبقه‌بندی، خوشه‌بندی و ارزیابی مدل را با scikit-learn بیاموزید و بفهمید چرا بیش‌برازش رخ می‌دهد. یک مسابقهٔ Kaggle را کامل کنید.",
        links: [
          {
            name: "scikit-learn documentation",
            type: "مستندات",
            url: "https://scikit-learn.org/stable/",
          },
          {
            name: "Machine Learning Specialization",
            type: "دوره",
            url: "https://coursera.org/specializations/machine-learning-introduction",
          },
          {
            name: "StatQuest",
            type: "ویدیو",
            url: "https://youtube.com/@statquest",
          },
        ],
      },
      {
        title: "یادگیری عمیق و پروژه",
        time: "۸ تا ۱۲ هفته",
        text: "شبکه‌های عصبی را با PyTorch بسازید، با مدل‌های زبانی و APIها کار کنید و یک پروژهٔ کامل را منتشر کنید.",
        links: [
          {
            name: "PyTorch tutorials",
            type: "مستندات",
            url: "https://pytorch.org/tutorials/",
          },
          {
            name: "fast.ai",
            type: "دوره",
            url: "https://course.fast.ai",
          },
          {
            name: "Andrej Karpathy",
            type: "ویدیو",
            url: "https://youtube.com/@AndrejKarpathy",
          },
        ],
      },
    ],
  },
  {
    id: "mobile",
    name: "توسعهٔ موبایل",
    short: "مو",
    description:
      "اپ‌هایی بسازید که روی گوشی کاربران اجرا می‌شوند، برای اندروید، آی‌اواس یا هر دو.",
    steps: [
      {
        title: "انتخاب مسیر و زبان",
        time: "۲ تا ۳ هفته",
        text: "بین اندروید بومی (Kotlin)، iOS بومی (Swift) و ابزار چندسکویی مثل Flutter یا React Native یکی را انتخاب کنید و محیط کار و زبان آن را نصب و با آن آشنا شوید.",
        links: [
          {
            name: "Android Developers courses",
            type: "دوره",
            url: "https://developer.android.com/courses",
          },
          {
            name: "Flutter documentation",
            type: "مستندات",
            url: "https://docs.flutter.dev",
          },
          {
            name: "Philipp Lackner",
            type: "ویدیو",
            url: "https://youtube.com/@PhilippLackner",
          },
        ],
      },
      {
        title: "رابط کاربری و ناوبری",
        time: "۵ تا ۷ هفته",
        text: "لیست‌ها، فرم‌ها، صفحه‌ها و ناوبری را بسازید و با دستورالعمل‌های طراحی پلتفرم، یعنی Material و Human Interface، هماهنگ کنید.",
        links: [
          {
            name: "Material Design",
            type: "مستندات",
            url: "https://m3.material.io",
          },
          {
            name: "Flutter codelabs",
            type: "تمرین",
            url: "https://docs.flutter.dev/codelabs",
          },
          {
            name: "Flutter",
            type: "ویدیو",
            url: "https://youtube.com/@flutterdev",
          },
        ],
      },
      {
        title: "داده، شبکه و ذخیره‌سازی",
        time: "۴ تا ۶ هفته",
        text: "با API ارتباط بگیرید، داده را روی دستگاه ذخیره کنید، حالت آفلاین را مدیریت کنید و احراز هویت را اضافه کنید.",
        links: [
          {
            name: "Firebase documentation",
            type: "مستندات",
            url: "https://firebase.google.com/docs",
          },
          {
            name: "pub.dev packages",
            type: "مستندات",
            url: "https://pub.dev",
          },
          {
            name: "Reso Coder",
            type: "ویدیو",
            url: "https://youtube.com/@resocoder",
          },
        ],
      },
      {
        title: "تست، انتشار و بهینه‌سازی",
        time: "۳ تا ۵ هفته",
        text: "اپ را روی دستگاه واقعی تست کنید، حجم و مصرف باتری را بهینه کنید و آن را در Google Play یا App Store منتشر کنید.",
        links: [
          {
            name: "Google Play Console Help",
            type: "مستندات",
            url: "https://support.google.com/googleplay/android-developer",
          },
          {
            name: "App Store Connect Help",
            type: "مستندات",
            url: "https://developer.apple.com/help/app-store-connect/",
          },
          {
            name: "Android Developers",
            type: "ویدیو",
            url: "https://youtube.com/@AndroidDevelopers",
          },
        ],
      },
    ],
  },
  {
    id: "design",
    name: "طراحی UI/UX",
    short: "UX",
    description:
      "تجربهٔ کاربری و ظاهر محصول را طراحی کنید: از تحقیق با کاربر تا نمونهٔ اولیهٔ قابل‌آزمایش.",
    steps: [
      {
        title: "اصول طراحی و تایپوگرافی",
        time: "۳ تا ۴ هفته",
        text: "ترکیب‌بندی، فاصله‌گذاری، رنگ و تایپوگرافی، به‌ویژه برای متن فارسی و راست‌به‌چپ را بیاموزید و طراحی‌های موجود را تحلیل و بازسازی کنید.",
        links: [
          {
            name: "Refactoring UI",
            type: "مستندات",
            url: "https://refactoringui.com",
          },
          {
            name: "Laws of UX",
            type: "مستندات",
            url: "https://lawsofux.com",
          },
          {
            name: "DesignCourse",
            type: "ویدیو",
            url: "https://youtube.com/@DesignCourse",
          },
        ],
      },
      {
        title: "تحقیق کاربر و معماری اطلاعات",
        time: "۴ تا ۶ هفته",
        text: "مصاحبه با کاربر، پرسونا، نقشهٔ سفر کاربر و ساختار منوها را یاد بگیرید تا پیش از طراحی مشکل درست را پیدا کنید.",
        links: [
          {
            name: "Nielsen Norman Group",
            type: "مستندات",
            url: "https://nngroup.com/articles/",
          },
          {
            name: "Interaction Design Foundation",
            type: "دوره",
            url: "https://interaction-design.org",
          },
          {
            name: "CareerFoundry",
            type: "ویدیو",
            url: "https://youtube.com/@CareerFoundry",
          },
        ],
      },
      {
        title: "Figma و نمونهٔ اولیه",
        time: "۴ تا ۶ هفته",
        text: "در Figma کامپوننت، Auto Layout و سیستم طراحی بسازید و نمونهٔ اولیهٔ کلیک‌پذیر برای آزمایش با کاربران آماده کنید.",
        links: [
          {
            name: "Figma Help Center",
            type: "مستندات",
            url: "https://help.figma.com",
          },
          {
            name: "Daily UI",
            type: "تمرین",
            url: "https://dailyui.co",
          },
          {
            name: "Figma",
            type: "ویدیو",
            url: "https://youtube.com/@Figma",
          },
        ],
      },
      {
        title: "آزمون کاربردپذیری و نمونه‌کار",
        time: "۴ تا ۸ هفته",
        text: "طراحی را با چند کاربر واقعی آزمایش کنید، بازخورد را اعمال کنید و دو یا سه مطالعهٔ موردی کامل برای نمونه‌کارتان بنویسید.",
        links: [
          {
            name: "Google UX Design Certificate",
            type: "دوره",
            url: "https://grow.google/certificates/ux-design/",
          },
          {
            name: "Behance",
            type: "تمرین",
            url: "https://behance.net",
          },
          {
            name: "Mizko",
            type: "ویدیو",
            url: "https://youtube.com/@Mizko",
          },
        ],
      },
    ],
  },
];
