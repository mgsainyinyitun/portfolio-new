
import Chat from '../../img/projects/chatwithfriend.png';
import HelpDesk from '../../img/projects/helpdesk.gif';
import snake from '../../img/projects/snake_game.gif';
import tictoe from '../../img/projects/tic-tak-tok.gif';
import Web from '../../img/projects/basicweb.gif';
import three3d from '../../img/projects/three3d.gif';
import bookscribe from '../../img/projects/bookscribe.gif';
import bankingmgmt from '../../img/projects/bankmgmt.png';

export const web =
{
    ENGLISH:
        [
            {
                image: bankingmgmt,
                title: 'Banking Management System',
                tech: '(Next.js, Prisma, MySQL)',
                description: 'Banking Management System is a comprehensive web application designed to manage various types of bank accounts, transactions, and user profiles. It allows seamless account creation, transaction tracking, and customer accounts managements, customer transaction managements. The system uses Next.js for the frontend, Prisma as the ORM, and MySQL as the database.',
                try_link: undefined,
                source_link: 'https://github.com/mgsainyinyitun/banking-mgmt-system'
            },
            {
                image: bookscribe,
                title: 'BookScribe',
                tech: '(Spring Boot, React.js)',
                description: 'BookScribe is a web application for managing and interacting with virtual books in a 3D environment. I use Three.js with React.js to create an immersive bookshelf environment. Spring boot is used as a REST API for backend functionalities, like users, books and pages management.',
                try_link: 'https://bookscribe.vercel.app/',
                source_link: 'https://github.com/mgsainyinyitun/BookScribe-Frontend'
            },
            {
                image: three3d,
                title: '3D Showcase Portfolio',
                tech: '(React.js, Three.js)',
                description: 'This is my 3D portfolio, inspire by other developer and I twised some element of my own. After learning three.js and react-three-fiber, I created this project. Combine with tailwindcss, I make this web responsive as possible as I can.',
                try_link: 'https://threejs-sts.vercel.app/',
                source_link: 'https://github.com/mgsainyinyitun/threejs-sts'
            },
            {
                image: Chat,
                title: 'CHAT WITH FRIENDS',
                tech: '(React.js, Firebase)',
                description: 'This ChatWithFriends web application is a real time chat application that user can' +
                    'create account and make friend with other and send message to each other. Also, user can create group' +
                    'and chat with a group of people in group. This project use firebase as an authentication, firestore as ' +
                    'backend database and deploy on google firebase hosting. And Reactjs is used as a frontend framework.',
                try_link: 'https://web-messenger-sainyi-068390.web.app/',
                source_link: 'https://github.com/mgsainyinyitun/chat'
            },
            {
                image: HelpDesk,
                title: 'HELP DESK SYSTEM',
                tech: '(Django, MySql)',
                description: 'This help desk system  is created with python django combine with web technology ' +
                    'such as html, css, javascript and other libraries such as google chart api, bootstrap framework, ' +
                    'and many python libraries.And deploy on pythonanywhere.com.',
                try_link: 'http://sainyinyitun.pythonanywhere.com/',
                source_link: 'https://github.com/mgsainyinyitun/HelpDesk',
                extra: [
                    'Username:admin, Password: admin123!@#',
                    'Username:technician, Password: tech123!@#',
                    'Username:customer, Password: custo123!@#',
                ]
            },
            {
                image: snake,
                title: 'SNAKE GAME',
                tech: '(React.js)',
                description: 'This is Snake Game web app. I also created this using HTML, CSS, Reactjs and deploy it on Netlify. You can ' +
                    'click Play Game button to play this Game or if your are curious how I wrote it, you can click source code ' +
                    'to view my source code of this project on GitHub.',
                try_link: 'https://sai-nyi-snake-game.netlify.app/',
                source_link: 'https://github.com/mgsainyinyitun/snake-game'
            },
            {
                image: tictoe,
                title: 'TIC TAC TOE',
                tech: '(React.js)',
                description: 'This is Tic-Tac-Toe  web app. I created this using HTML, CSS, Reactjs and deploy it on Netlify. You can ' +
                    'click Play Game button to play this Game or if your are curious how I wrote it, you can click source code ' +
                    'to view my source code of this project on GitHub.',
                try_link: 'https://keen-dijkstra-b2d8da.netlify.app/',
                source_link: 'https://github.com/mgsainyinyitun/tic-tac-toe'
            },
            {
                image: Web,
                title: 'BASIC WEB DESIGN',
                tech: '(HTML,CSS,JS)',
                description: 'It is just a basic web design created by only html and css and deploy on vercel.You can click Try now button to explore this app or if your are curious how I wrote it, you can click source code to view my source code of this project on GitHub.',
                try_link: 'https://basicwebdesign.mgsainyinyitun.vercel.app/',
                source_link: 'https://github.com/mgsainyinyitun/basicwebdesign'
            },
            // {
            //     image:Web,
            //     title:'AUTOMATIC HELMET DETECTION AND PUNISHMENT SYSTEM DESIGN WITH MATLAB (B.E Thesis)',
            //     description:'My B.E graduation. Basically I design a prototype model that take image input and detect whether a motocycle ',
            //     try_link:'https://basicwebdesign.mgsainyinyitun.vercel.app/',
            //     source_link:'https://github.com/mgsainyinyitun/basicwebdesign'
            // },
        ],

    MYANMAR:
        [
            {
                image: bankingmgmt,
                title: 'Banking Management System',
                tech: '(Next.js, Prisma, MySQL)',
                description: 'Banking Management System သည် ဘဏ်အကောင့်အမျိုးမျိုး၊ ငွေလွှဲမှုများနှင့် User ပရိုဖိုင်များကို  manage လုပ်နိုင်သည့် ဝဘ်အပလီကေးရှင်းတစ်ခုဖြစ်သည်။ ၎င်းသည် ဘဏ်အကောင့်ဖန်တီးခြင်း၊ ငွေလွှဲမှုများကို ခြေရာခံခြင်းနှင့် အကောင့်စီမံခန့်ခွဲမှု၊ ငွေလွှဲမှုစီမံခန့်ခွဲမှုများကို လွယ်ကူစွာလုပ်ဆောင်နိုင်ပါသည်။ ယင်းစနစ်တွင် Next.js ကို frontend အဖြစ်အသုံးပြုပြီး၊ Prisma ကို ORM အဖြစ်အသုံးပြုကာ MySQL ကို database အဖြစ်အသုံးပြုထားပါသည်။',
                try_link: undefined,
                source_link: 'https://github.com/mgsainyinyitun/banking-mgmt-system'
            },
            {
                image: bookscribe,
                title: 'BookScribe',
                tech: '(Spring Boot, React.js)',
                description: 'BookScribe သည် 3D environment မှာ virtual စာအုပ်များကို သုံးပြီး စာရေးခြင်း၊ note မှတ် ခြင်းပြုလုပ်နိင်တဲ့  ဝဘ်အက်ပလီကေးရှင်းတစ်ခုဖြစ်ပါသည်။ BookScribe ကို React.js နှင့် Three.js နည်းပညာ ကိုအသုံးပြုပြီး ဖန်တီးထားပါတယ်။ Backend  REST API အနေနဲ့ Spring Boot ကို အသုံးပြုပီး ၊ book management, page management စသည့် backend functions များကို develope လုပ်ထားပါတယ်။',
                try_link: 'https://bookscribe.vercel.app/',
                source_link: 'https://github.com/mgsainyinyitun/BookScribe-Frontend'
            },
            {
                image: three3d,
                title: '3D Showcase Portfolio',
                description: 'ဒီ 3D Showcase Portfolio က အခြား developer တွေရေးထားတာကို အတုယူကာ ကျွန်ုပ်၏ကိုယ်ပိုင် အစိတ်အပိုင်း အချို့ကို ထည့်ပီး ရေးထားတာဖြစ်ပါတယ်။ three.js နှင့် react-three-fiber ကို လေ့လာပြီးနောက်ဤပရောဂျက်ကို ဖန်တီးခဲ့ပါသည်။ css framework အနေနဲ့ tailwindcss ကိုသုံးထားပီး အတတ်နိုင်ဆုံး responsive design ဖြစ်အောင် ရေးထားပါတယ်။',
                try_link: 'https://threejs-sts.vercel.app/',
                source_link: 'https://github.com/mgsainyinyitun/threejs-sts'
            },
            {
                image: Chat,
                title: 'CHAT WITH FRIENDS',
                description: 'ဒီ ChatWithFriends,  web application က chattiing application တစ်ခုဖြစ်ပြီးတော့  user ' +
                    'တွေက account ဖန်တီးခြင်း၊ အခြား သူတွေနဲ့ Friends ဖြစ်အောင် လုပ်ခြင်း , တစ်ယောက် နဲ့ တစ်ယောက် message ပေးပို့ခြင်း စတာတွေကို လုပ်လို့ ရပါတယ်။ . ထို့အပြင် , user က  group ဖန်တီး ပြီး ' +
                    ' အခြားသူငယ်ချင်း account တွေကို ထည့် ပြီး group  chat လည်းလုပ်လို့ ရပါတယ်။ . Authentication အတွက် Google ရဲ့ firebase ကို သုံးပြီးတော့ ,backend database အတွက်  firebase firestore ကိုသုံးထားပါတယ်။ ' +
                    ' ပြီးတော့ hosting အတွက်  firebase hosting ကိုဘဲသုံးထားပါတယ်။  Reactjs ကို တော့ frontend design နဲ့ပါတ်သက်ပြီးတော့ သုံးထားပါတယ်။ ',
                try_link: 'https://web-messenger-sainyi-068390.web.app/',
                source_link: 'https://github.com/mgsainyinyitun/chat',
            },
            {
                image: HelpDesk,
                title: 'HELP DESK SYSTEM',
                description: 'ဒီ help desk system  ကို python django နဲ့ အခြားသော  web technology ' +
                    'များဖြစ်ကြတဲ့ html, css, javascript စတာတွေအပြင် အခြား  libraries များဖြစ်ကြတဲ့ google chart API, bootstrap framework, ' +
                    'နဲ့ python libraries တွေကို ပေါင်းပြီးဖန်တီးထားတာဖြစ်ပါတယ်။ ပြီးတော့  pythonanywhere.com မှာ deploy လုပ်ထားပါတယ်။ ',
                try_link: 'http://sainyinyitun.pythonanywhere.com/',
                source_link: 'https://github.com/mgsainyinyitun/HelpDesk',
                extra: [
                    'Username:admin, Password: admin123!@#',
                    'Username:technician, Password: tech123!@#',
                    'Username:customer, Password: custo123!@#',
                ]
            },
            {
                image: snake,
                title: 'SNAKE GAME',
                description: 'ဒီ Snake Game web app ကို HTML, CSS, Reactjs  အသုံးပြုပြီးတော့ ဖန်တီးထားပြီး   Netlify မှာ deploy လုပ်ထားပါတယ်။ ' +
                    'Try now ဆိုတဲ့  button ကို နှိပ်ပြီးတော့ အသုံးပြု ကြည့်လို့ ရပါတယ်။  ဒီ Web App ကို ဘယ်လို ရေးထားတယ်ဆိုတဲ့ source code ကို ကြည့်ချင်တယ် ဆိုရင်  source code' +
                    'ကို နှိပ်ပြီးတော့ Github ပေါ်တင်ထားတဲ့ code ကို လေ့လာကြည့်လို့ ရပါတယ်။',
                try_link: 'https://sai-nyi-snake-game.netlify.app/',
                source_link: 'https://github.com/mgsainyinyitun/snake-game'
            },
            {
                image: tictoe,
                title: 'TIC TAC TOE',
                description: 'ဒီ Tic-Tac-Toe  web appကို HTML, CSS, Reactjs  အသုံးပြုပြီးတော့ ဖန်တီးထားပြီး   Netlify မှာ deploy လုပ်ထားပါတယ်။ ' +
                    'Try now ဆိုတဲ့  button ကို နှိပ်ပြီးတော့ အသုံးပြု ကြည့်လို့ ရပါတယ်။  ဒီ Web App ကို ဘယ်လို ရေးထားတယ်ဆိုတဲ့ source code ကို ကြည့်ချင်တယ် ဆိုရင်  source code' +
                    'ကို နှိပ်ပြီးတော့ Github ပေါ်တင်ထားတဲ့ code ကို လေ့လာကြည့်လို့ ရပါတယ်။',
                try_link: 'https://keen-dijkstra-b2d8da.netlify.app/',
                source_link: 'https://github.com/mgsainyinyitun/tic-tac-toe'
            },
            {
                image: Web,
                title: 'BASIC WEB DESIGN',
                description: 'အဲ့ဒါက တော့ အခြေခံ web design ဘဲဖြစ်ပြီးတော့ html နဲ့ css နှစ်ခုတည်းကို သာသုံးပြီးတော့ ဖန်တီး ထားတာဖြစ်ပါတယ်။ Try now ဆိုတဲ့  button ကို နှိပ်ပြီးတော့ အသုံးပြု ကြည့်လို့ ရပါတယ်။ ဒီ website ကို ဘယ်လို ရေးထားတယ်ဆိုတဲ့ source code ကို ကြည့်ချင် တယ် ဆိုရင်  source code ကို နှိပ်ပြီးတော့ Github ပေါ်တင်ထားတဲ့ code ကို လေ့လာကြည့်လို့ ရပါတယ်။',
                try_link: 'https://basicwebdesign.mgsainyinyitun.vercel.app/',
                source_link: 'https://github.com/mgsainyinyitun/basicwebdesign'
            },
        ],

    JAPANESE:
        [
            {
                image: bankingmgmt,
                title: 'Banking Management System',
                tech: '(Next.js, Prisma, MySQL)',
                description: 'Banking Management Systemは、さまざまな銀行口座、取引、ユーザープロファイルを管理するための包括的なWebアプリケーションです。口座の作成、取引の追跡、お客様の口座管理、お客様の取引管理をシームレスに行うことができます。このシステムは、フロントエンドにNext.jsを使用し、ORMにはPrisma、データベースにはMySQLを使用しています。',
                try_link: undefined,
                source_link: 'https://github.com/mgsainyinyitun/banking-mgmt-system'
            },
            {
                image: bookscribe,
                title: 'BookScribe',
                tech: '(Spring Boot, React.js)',
                description: 'BookScribe は、3D 環境でバーチャル本 に書くこととメモをとることするための Web アプリケーションです。Three.js と React.js を使用して 3D ブック環境を作成します。 Spring Boot は、ユーザー、本、ページ管理などのバックエンド機能の REST API として使用されます。',
                try_link: 'https://bookscribe.vercel.app/',
                source_link: 'https://github.com/mgsainyinyitun/BookScribe-Frontend'
            },
            {
                image: three3d,
                title: '3D Showcase Portfolio',
                description: 'これは私の 3D ポートフォリオです。他の開発者からインスピレーションを受け、独自の要素をいくつか取り入れました。three.js と react-three-fiber を学習した後、このプロジェクトを作成しました。tailwindcss と組み合わせて、この Web を可能な限りレスポンシブにしました。',
                try_link: 'https://threejs-sts.vercel.app/',
                source_link: 'https://github.com/mgsainyinyitun/threejs-sts'
            },
            {
                image: Chat,
                title: 'CHAT WITH FRIENDS',
                description: 'この　CHATWITHFRIEND　ウェブアプリケーション　は　チャットアプリケーション　です。　ユーザー　は　アカウントを　作成するし、　他のユーザーと　友達になる出来るし、メッセージを送ること　が出ます。また、　ユーザーが　友達と　グループを　作成して　チャットすることもできます。この　プロジェクトは　FIREBASE　を認証サービスとして　使っています。　FIRESTORE　を　バックエンドデータベースとして使って、　FIREBASE　HOSTION　にホストしますした。　REACT JS フレームワークを　フロントエンド フレームワークとして　使って　開発しますした。',
                try_link: 'https://web-messenger-sainyi-068390.web.app/',
                source_link: 'https://github.com/mgsainyinyitun/chat',
            },
            {
                image: HelpDesk,
                title: 'HELP DESK SYSTEM',
                description: 'この　HELP DESK SYSTEM は　PYTHON の　DJANGO フレームワーク、他の　WEB技術　（HTML,CSS, JAVASCRIPT）と　GOOGLE GHART API　イブラリ, BOOTSTRAP  フレームワーク 　を　使って　作成しました。　そして　pythonanywhere.com　に　ホストしています。',
                try_link: 'http://sainyinyitun.pythonanywhere.com/',
                source_link: 'https://github.com/mgsainyinyitun/HelpDesk',
                extra: [
                    'Username:admin, Password: admin123!@#',
                    'Username:technician, Password: tech123!@#',
                    'Username:customer, Password: custo123!@#',
                ]
            },
            {
                image: snake,
                title: 'SNAKE GAME',
                description: 'これは　SNAKE GAME　【SNAKE　ゲーム】　ウェブアプリケーション　です。　HTML, CSS, と　REACT JS フレームワーク　で　開発して、　NETLIFY　に　ホストしています。TRY NOW ボタンを　クリックして　ゲームをプレイできます。または　開発方法を　知りたいなら　SOURCE CODE　ボタンを　クリックして　このプロジェクトの　ソースコードを　見ることが　できます。',
                try_link: 'https://sai-nyi-snake-game.netlify.app/',
                source_link: 'https://github.com/mgsainyinyitun/snake-game'
            },
            {
                image: tictoe,
                title: 'TIC TAC TOE',
                description: 'これは　TIC－TAC-TOE ゲーム　ウェブアプリケーションです。　HTML,CSS, REACT JS フレームワークを　使って　開発しました。そして、NETLIFY にホストしました。　TRY NOW ボタンを　クリックして　ゲームをプレイできます。または　開発方法を　知りたいなら　SOURCE CODE　ボタンを　クリックして　このプロジェクトのソースコードを　GITHUB　に見ることが　できます。',
                try_link: 'https://keen-dijkstra-b2d8da.netlify.app/',
                source_link: 'https://github.com/mgsainyinyitun/tic-tac-toe'
            },
            {
                image: Web,
                title: 'BASIC WEB DESIGN',
                description: 'これは　HTML,CSS, JAVASCRIPT　だけで使って　開発した　基本的な　ウェブアプリケーション　です。　VERCEL　サービスにホストしました。TRY NOW  ボタンを　クリックして　この　ウェブサイトを探索出来ます。 または　開発方法を　知りたいなら　SOURCE CODE　ボタンを　クリックして　このプロジェクトの　ソースコードを　見ることが　できます。',
                try_link: 'https://basicwebdesign.mgsainyinyitun.vercel.app/',
                source_link: 'https://github.com/mgsainyinyitun/basicwebdesign'
            },
        ],

}