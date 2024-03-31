import G1 from '../../img/info/Study.svg';
import G2 from '../../img/info/Electronics.svg';
import G3 from '../../img/info/Programming.svg';
import G4 from '../../img/info/Teaching.svg';
import G5 from '../../img/info/Drawing.svg';

export const greeting = {
    ENGLISH: {
        aboutme: "ABOUT ME",
        greet: "Warmly welcome and I wise today is  your nice day"
    },
    MYANMAR: {
        aboutme: "ကျွန်တော့်အကြောင်း",
        greet: "နွေးထွေးစွာ ကြိုဆိုပါတယ်။ ယနေ့သည် သင်၏ နေ့ကောင်းနေမြတ် ဖြစ်ပါစေလို့ ဆုမွန်ကောင်း တောင်းပေးပါတယ်။"
    },
    JAPANESE: {
        aboutme: "私について",
        greet: "初めまして。最高の日を過ごすことを願っています。"
    }
}

export const paragraphs = {
    ENGLISH: [
        {
            text:
                "My name is Sai Nyi Nyi Tun. I am graduated from technological university Mandalay with Electronics major." +
                "After graduated from Technological University Mandalay in 2020 with Electronics," +
                "I have acquired many Electrical, Electronics, Computer related and computer programming" +
                " knowledge and skills from my course. As engineering and programming is my favourite, I always try " +
                "to improve my skills in Electrical,Electronics, and programming. Currently, web development, software development and moblie development is my main focus.",
            graphic: [G1, G2],
        },
        {
            text:
                "My programming career started when I graduated from university and worked as a trainer at TechnoNet Engineering Training Center, Mandalay. " +
                "As a trainer, my responsibility was to share knowledge about programming subjects such as Java, Python and other web development languages such as HTML,CSS, JavaScript. " +
                "And I am also work as web designer volunteer at Youth Society for Education (YSE). " +
                "My main responsibility as web designer volunteering is to maintain, upgrade, and modify YSE main website and develop web system for internal organization, mainly use  HTML5, CSS, JavaScript, Bootstrap, Reactjs, Nodejs and firebase related technologies. ",
            graphic: [G4],
        },
        {
            text: '',
            graphic: [G3, G5],
        },
        {
            text: 'After that, I worked as a web developer at a private university called LONDON BUSINESS UNIVERSITY. After gaining various development experience, I joined a Japan IT company, called "Daiwa Institution of Research (DIR-ACE)."From that company I have experience in unit testing, integration testing, coding development, basic design documents, and detailed design. The main used language is JAVA, but I also have development experience in VBA and C languages. Currently I am focused on REACT JS, APPLICATION PROGRAMMING INTERFACE(API), FLUTTER, and web security.',
            graphic: []
        }
    ],
    MYANMAR: [
        {
            text: "ကျွန်တော်ရဲ့နာမည်ကတော့ စိုင်းညီညီထွန်းဖြစ်ပါတယ်။ ကျွန်တော်က နည်းပညာတက္ကသိုလ်(မန္တလေး) မှာ အီလက်ထရောနစ် မေဂျာ နဲ့ ကျောင်းပြီးထားတာ ဖြစ်ပါတယ်။" +
                "၂၀၂၀ ခုနှစ်မှာ နည်းပညာ တက္ကသိုလ်ကနေ ဘွဲ့ရပြီးတော့ " +
                "တက္ကသိုလ် ကနေ တစ်ဆင့်  Electrical, Electronics, Computer စတဲ့ နည်းပညာဆိုင်ရာ ဗဟုသုတ များစွာကို လေ့လာဆည်းပူး ခဲ့ရပါတယ်။" +
                "  တက္ကသိုလ် ပြီးသွားသော်လည်း  ခုချိန်ထိ ကျွန်တော် နဲ့သက်ဆိုင်တဲ့ ၊ ကျွန်တော် စိတ်ဝင်စားတဲ့ နည်းပညာ ၊ ကွန်ပျူတာ programming စတာတွေ ကို လေ့လာ နေဆဲဖြစ်ပါတယ်။ ",
            graphic: [G1, G2],
        },
        {
            text: "TechnoNet Engineering Training Center, Mandalay မှာ part time trainer တစ်ယောက် အနေ နဲ့ ဝင်လုပ် ဖူးပါတယ်။ " +
                " အဲဒီမှာ ကျွန်တော်က  programming နဲ့ ပတ်သက်တဲ့ subjects တွေဖြစ်တဲ့  Java, Python စတာတွေ အပြင် အခြား WEB DEVELOPMENT   ပိုင်းဆိုင်ရာ language များဖြစ်တဲ့ HTML,CSS,Javascript စတာတွေကို သင်ရပါတယ်။ ကျွန်တော်က Youth Society" +
                " for Education (YSE) မှာလည်း Web developer တစ်ယောက်အနေ နဲ့ volunteer လုပ်နေ ပါတယ်။ အဲမှာက အဓိက အားဖြင့် YSE　ရဲ့　website ကို ပြုပြင်ထိန်းသိမ်း အသစ်သစ် သော features များထည့်တာ အပြင် organization အတွင်း အသုံး ပြုရမယ့် Web application များကို HTML5, CSS, JavaScript, Bootstrap, Reactjs, Nodejs , firebase စသည်များကို အသုံးပြုပီးတော့ လည်းဖန်တီး ရပါတယ်။",
            graphic: [G4],
        },
        {
            text: '',
            graphic: [G3, G5],
        },
        {
            

            text: 'နောက်ပီး ကိုယ်ပိုင်တက္ကသိုလ် တစ်ခုဖြစ်တဲ့ LONDON BUSINESS UNIVERSITY မှာ Web Developer အနေနဲ့ အလုပ်လုပ်ခဲ့ပါတယ်။ Development နဲ့ပါတ်သက်တဲ့ အတွေ့အကြုံများ ရရှိပီနောက် Japan Campany တစ်ခုဖြစ်တဲ့ Daiwa Institution of Research (DIR-ACE) ကုမ္ပဏီအလုပ်ဝင်ခဲ့ပါတယ်။ Unit testing, Integration testing, Coding development, Basic design documents, and Detailed design စတာတွေနဲ့ ပါတ်သက်ပီး အတွေ့အကြုံများများရခဲ့ပါတယ်။ကုမ္ပဏီ အဓိကအားဖြင့် Java ကိုအသုံပြုတာဖြစ်ပေမဲ့ VBA, C စတာတွေလည်း တစ်ခါတစ်လေလုပ်ရတာရှိပါတယ်။ ခုကတော့ REACT JS, APPLICATION PROGRAMMING INTERFACE(API), FLUTTER, နဲ့ web security စတည့် နည်းပညာတွေနဲ့ ပါတ်သက်ပီး လေ့လာနေပါတယ်။',
            graphic: []
        }
    ],
    JAPANESE: [
        {
            text: "私は　サイニーニートウン　です。エレクトロニクス 専門で工科大学（マンダーレー）を卒業しました。「２０２０」年に　大学を卒業後、大学コースから　電気、電子、コンピュータシステム　およびコンピュータプログラミングの知識とスキルを もらいました。エンジニアとプログラミングにとても興味があるので、常に電気、電子、プログラミングのスキルを向上させるよう努めています。現在、ウェブ 開発、ソフトウェア開発、モバイル開発が　私の主な焦点です。",
            graphic: [G1, G2],
        },
        {
            text:
                "私のプログラミングのキャリアは、大学を卒業後、マンダレーの 「TechnoNet」 エンジニアリング トレーニング センターでトレーナーとして働いたときに始まりました。トレーナーとしての私の責任は　JAVA、PYTHON などのプログラミング科目、HTML,CSS, JavaScript　なとのウェブ開発科目についての　コースを教えることです。また「YOUTH SOCIETY AND EDUCATION」 に　バイトウェブデザイナー　ボランティア　としても　働くしています。ウェブデザイナーのボランティアとしての私の責任は、主にHTML5、CSS、JAVASCRIPT、BOOTSTRAP、REACT JS、NOTEJS、と　FIREBASE の　関係の技術を使って　YSE メインウェブサイトの保守、アップグレード、変更すること　と　社内組織のためのウェブシステムの開発することを　しています。",
            graphic: [G4],
        },
        {
            text: '',
            graphic: [G3, G5],
        },
        {
            text: 'その後、「LONDON　BUSINESS　UNIVERSITY」私立大学　にウェブ開発者として働きました。いろいろな開発経験 を取得して、日本向けのIT会社に入社しました。「Daiwa Institution of Research (DIR-ACE)」という会社です。単体テスト、結合テスト、コーディング開発、基本設計書、詳細設計 についてを経験しました。主な言語は JAVA ですけど、VBA、C言語 も開発することがあります。現在、REACT JS、APPLICATION PROGRAMMING INTERFACE(API)、FLUTTER、ウェブセキュリティに重点を置いています。',
            graphic: []
        }
    ],

};




