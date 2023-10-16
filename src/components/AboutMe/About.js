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
                "As a trainer, my responsibility was to share knowledge about programming subjects such as Java, Python and other Engineering subjects  such as Basic Electrical and Electronics, Peripheral Interface Controller (PIC),  Computer System Engineering A+. " +
                "And I am also work as web designer volunteer at Youth Society for Education (YSE). " +
                "My main responsibility as web designer volunteering is to maintain, upgrade, and modify YSE main website and develop web system for internal organization, mainly use  HTML5, CSS, JavaScript, Bootstrap, Reactjs, Nodejs and firebase related technologies. ",
            graphic: [G4],
        },
        {
            text: '',
            graphic: [G3, G5],
        },
        {
            text: 'My web development career started as a web developer for London Business University (LBU) Mandalay. And next is working as a programmer for Diawa Institution of Research (DIR-ACE), and Java, PHP, Wordpress are mainly used. Currently React JS, Application Programming Interface (API), Flutter and Web Security are my maily focus.',
            graphic: []
        }
    ],
    MYANMAR: [
        {
            text: "ကျွန်တော်ရဲ့နာမည်ကတော့ စိုင်းညီညီထွန်းဖြစ်ပါတယ်။ ကျွန်တော်က နည်းပညာတက္ကသိုလ်(မန္တလေး) မှာ အီလက်ထရောနစ် မေဂျာ နဲ့ ကျောင်းပြီးထားတာ ဖြစ်ပါတယ်။" +
                "၂၀၂၀ ခုနှစ်မှာ နည်းပညာ တက္ကသိုလ်ကနေ ဘွဲ့ရပြီးတော့ " +
                "တက္ကသိုလ် ကနေ တစ်ဆင့်  Electrical, Electronics, Computer စတဲ့ နည်းပညာဆိုင်ရာ ဗဟုသုတ များစွာကို လေ့လာဆည်းပူး ခဲ့ရပါတယ်။" +
                "  တက္ကသိုလ် ပြီးသွားသော်လည်း ခုချိန်ထိ ကျွန်တော် နဲ့သက်ဆိုင်တဲ့ ၊ ကျွန်တော် စိတ်ဝင်စားတဲ့ နည်းပညာ ၊ ကွန်ပျူတာ စတာတွေ ကို လေ့လာ နေဆဲဖြစ်ပါတယ်။ ",
            graphic: [G1, G2],
        },
        {
            text: "TechnoNet Engineering Training Center, Mandalay မှာ part time trainer တစ်ယောက် အနေ နဲ့ ဝင်လုပ် ဖူးပါတယ်။ " +
                " အဲဒီမှာ ကျွန်တော်က  programming နဲ့ ပတ်သက်တဲ့ subjects တွေဖြစ်တဲ့  Java, Python စတာတွေ အပြင် အခြား Engineering နဲ့သက်ဆိုင်သော " +
                " Basic Electrical and Electronics, Peripheral Interface Controller (PIC)," +
                " Computer System Engineering A+ စတာတွေကို သင်ရပါတယ်။ ကျွန်တော်က Youth Society" +
                " for Education (YSE) မှာလည်း Web developer တစ်ယောက်အနေ နဲ့ volunteer လုပ်နေ ပါတယ်။ အဲဒီ ကနေတစ်ဆင့်  ကျွန်တော်က  web languages နဲ့ ပတ်သက်တဲ့ HTML5," +
                " CSS, JavaScript, PHP, Bootstrap, Reactjs, Nodejs စတာတွေကို အများကြီး သိခွင့် လေ့လာခွင့် ရပါတယ်။",
            graphic: [G4],
        },
        {
            text: '',
            graphic: [G3, G5],
        }
    ],
    JAPANESE: [
        {
            text: "僕は　サイニーニートウン　です。僕は工科大学（マンダーレー）に エレクトロニクス 専門で 卒業しました。　２０２０年　大学を　卒業後、大学コースから　電気、電子、コンピュータシステム　およびコンピュータプログラミングの知識とスキルを得るしました。　僕は　エンジニアと　プログラミング　に　とても興味があるので、常に電気、電子、プログラミングのスキルを向上させるよう努めています。現在、ウェブ 開発、ソフトウェア開発、モバイル開発が　私の主な焦点です。",
            graphic: [G1, G2],
        },
        {
            text:
                "私のプログラミングのキャリアは、大学を卒業後、マンダレーの (TechnoNet) エンジニアリング トレーニング センターでトレーナーとして働いたときに始まりました。トレーナーとしての私の責任は　JAVA、PYTHON などのプログラミング科目と　基本的な電気電子工学、 PERIPHERAL INTERFACE CONTROLLER（PIC）、コンピュータ システム エンジニアリング （A＋） などの　エンジニアリング科目に関する知識を教えることでした。また　私は　YOUTH SOCIETY AND EDUCATION に　ウェブデザイナー　ボランティア　としても　働くしています。ウェブデザイナーのボランティアとしての私の責任は、主にHTML5、CSS、JAVASCRIPT、BOOTSTRAP、REACT JS、NOTE　JS、と　FIREBASE の　関係の技術を使って　YSE メイン　ウェブサイトの保守、アップグレード、変更すること　と　社内組織のためのウェブシステムの開発することを　しています。",
            graphic: [G4],
        },
        {
            text: '',
            graphic: [G3, G5],
        },
        {
            text: '私の プログ開発キャリアは、　マンダレーにいる　LONDON　BUSINESS UNIVERSITY　 大学 (LBU) マンダレー校の Web 開発者として始まりました。そして次は Diawa Institution of Research (DIR-ACE) でプログラマーとして働いています。二社のはJAVA、PHP、WORDPRESS　が主に使用されている会社です。現在、REACT JS、APPLICATION PROGRAMMING INTERFACE(API)、FLUTTER、ウェブセキュリティに重点を置いています。',
            graphic: []
        }
    ],

};