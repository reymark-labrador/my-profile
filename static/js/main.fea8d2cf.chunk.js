(this["webpackJsonpmy-profile"]=this["webpackJsonpmy-profile"]||[]).push([[0],{26:function(e,t,i){},35:function(e,t,i){"use strict";i.r(t);var n=i(19),r=i.n(n),c=i(8),s=(i(26),function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,36)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),n(e),r(e),c(e),s(e)}))}),a=i(3),l=i(12),o=i(13),d=i(21),j=Object(d.a)((function(e){return{headerType:"big",isMenuOpen:!1,updateHeaderType:function(t){return e({headerType:t.headerType})},updateIsMenuOpen:function(t){return e({isMenuOpen:t})}}})),x=i(0),b=function(){var e=j((function(e){return e.updateIsMenuOpen})),t=j((function(e){return e.isMenuOpen}));return Object(x.jsx)("button",{onClick:function(){return e(!t)},children:Object(x.jsx)(l.a,{icon:o.a,className:"text-green-800"})})},m=function(){var e=Object(a.f)();return Object(x.jsxs)("div",{className:"pb-24",children:[Object(x.jsxs)("div",{className:"flex justify-between items-center h-8",children:[Object(x.jsx)("div",{className:"text-xl md:text-3xl text-white font-medium",children:"Hello, i'm"}),Object(x.jsx)(b,{})]}),Object(x.jsxs)("div",{className:"text-5xl md:text-8xl text-green-700 font-bold",children:["Reymark ",Object(x.jsx)("br",{}),"Labrador"]}),Object(x.jsx)("p",{className:"py-10 text-2xl md:text-4xl text-green-800 font-semibold",children:"Software Developer"}),Object(x.jsx)("button",{onClick:function(){return e.push("/my-profile/about")},className:"border border-green-800 text-green-500 hover:bg-green-800 hover:text-white py-2 px-0 md:px-24 w-full md:w-auto",children:"More about me"})]})},p=function(){return Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsxs)("div",{className:"flex justify-between items-center h-8",children:[Object(x.jsx)("div",{className:"text-xl md:text-3xl text-green-700 font-medium",children:Object(x.jsx)(c.b,{to:"/my-profile",children:"Reymark Labrador"})}),Object(x.jsx)(b,{})]}),Object(x.jsx)("div",{className:"text-base md:text-lg text-white font-light tracking-wide",children:"Software Developer"})]})},u=function(e){var t=e.headerType;return Object(x.jsx)("div",{className:"bg-gray-900 pt-10",children:Object(x.jsx)(f,{children:"big"===t?Object(x.jsx)(m,{}):Object(x.jsx)(p,{})})})},h=function(){return Object(x.jsx)("div",{className:"bg-gray-900 text-white",children:Object(x.jsx)(f,{children:Object(x.jsxs)("p",{className:"py-14 flex justify-between flex-col md:flex-row",children:[Object(x.jsx)("span",{children:"\xa9Reymark Labrador 2021"}),Object(x.jsxs)("span",{children:["Find me on ",Object(x.jsx)("a",{href:"https://www.linkedin.com/in/reymark-labrador-652370142/",target:"_blank",rel:"noreferrer",className:"text-indigo-400",children:"Linkedin"})," | ",Object(x.jsx)("a",{href:"https://github.com/mac69",target:"_blank",rel:"noreferrer",className:"text-indigo-400",children:"Github"})]})]})})})},f=function(e){return Object(x.jsx)("div",{className:"flex justify-center",children:Object(x.jsx)("div",{className:"container px-10 lg:px-0 max-w-4xl",children:e.children})})},O=function(e){var t=e.label,i=e.link,n=j((function(e){return e.updateIsMenuOpen})),r=j((function(e){return e.isMenuOpen}));return Object(x.jsx)(c.b,{to:i,onClick:function(){return n(!r)},className:"text-4xl md:text-6xl py-3 text-white",children:t})},g=function(){var e=j((function(e){return e.updateIsMenuOpen})),t=j((function(e){return e.isMenuOpen}));return Object(x.jsx)("button",{onClick:function(){return e(!t)},children:Object(x.jsx)(l.a,{icon:o.b,className:"text-white"})})},y=function(){return Object(x.jsxs)("div",{className:"bg-blue-800 flex flex-col h-screen",children:[Object(x.jsx)("div",{className:"pt-10 ",children:Object(x.jsx)(f,{children:Object(x.jsx)("div",{className:"flex justify-end h-8",children:Object(x.jsx)(g,{})})})}),Object(x.jsx)("div",{className:"flex justify-center m-auto",children:Object(x.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[Object(x.jsx)(O,{label:"Home",link:"/my-profile"}),Object(x.jsx)(O,{label:"About",link:"/my-profile/about"}),Object(x.jsx)(O,{label:"Portfolio",link:"/my-profile/portfolio"})]})})]})},v=function(e){var t=e.reverse,i=e.children;return Object(x.jsx)(x.Fragment,{children:t?Object(x.jsx)("div",{className:"flex md:flex-row-reverse flex-col lg:-mx-16 md:m-0",children:i}):Object(x.jsx)("div",{className:"flex md:flex-row flex-col lg:-mx-16 md:m-0",children:i})})},w=function(e){var t=e.title,i=e.type,n=e.imgSrc,r=e.imgTitle,c=(e.readMoreLink,e.reverse);return Object(x.jsxs)(v,{reverse:c,children:[Object(x.jsxs)("div",{className:"w-full md:w-96",children:[Object(x.jsx)("div",{className:"py-5 text-white text-5xl font-semibold",children:t}),Object(x.jsxs)("div",{className:"md:h-48 h-10 flex flex-col justify-between",children:[Object(x.jsx)("div",{className:"text-white tracking-wider",children:i}),Object(x.jsx)("button",{className:"md:block hidden bg-blue-900 text-white py-2 px-12",children:"read more"})]})]}),Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsx)("img",{src:n,title:r,alt:""}),Object(x.jsx)("button",{className:"md:hidden bg-blue-900 text-white py-2 px-12 my-16",children:"read more"})]})]})},N=function(e){return Object(x.jsx)("p",{className:"text-2xl md:text-3xl",children:e.children})},S=function(e){return Object(x.jsx)("p",{className:"py-5 text-base md:text-xl",children:e.children})},k=function(e){var t=e.position,i=e.company,n=e.location,r=e.dateFrom,c=e.dateTo,s=e.jobs;return Object(x.jsxs)(x.Fragment,{children:[t,Object(x.jsx)("br",{}),i," - ",n,": ",r," - ",c,Object(x.jsx)("ul",{className:"list-disc list-inside",children:s.map((function(e){return Object(x.jsx)("li",{children:e.description})}))}),Object(x.jsx)("br",{})]})},T=i.p+"static/media/wyees.45f9d9b4.png",M=[{title:"WY & Esther Engineers",type:"WEB APP",imgSrc:T,imgTitle:"wyees",readMoreLink:"",reverse:!1}],L=function(){return j.setState({headerType:"big"}),Object(x.jsx)("div",{className:"bg-blue-800",children:Object(x.jsxs)(f,{children:[Object(x.jsx)("div",{className:"text-white tracking-widest py-20",children:"PROJECTS"}),M.map((function(e){return Object(x.jsx)(w,{title:e.title,type:e.type,imgSrc:e.imgSrc,imgTitle:e.imgTitle,readMoreLink:e.readMoreLink,reverse:e.reverse})}))]})})},P=[{position:"System Developer",company:"AMS",location:"Dubai",dateFrom:"Feb 2020",dateTo:"Jul 2021",jobs:[{description:"API development(ASP.NET & MSSQL)"},{description:"Web application development(React JS, Tailwind, Redux)"},{description:"Windows application development(WPF C#)"},{description:"Implement domain architecture and repository pattern"},{description:"Using code first approach in Entity Framework core"},{description:"Create SQL scripts for legacy system adjustments"}]},{position:"Software Developer",company:"ZIRO",location:"Dubai",dateFrom:"Aug 2018 ",dateTo:"Dec 2019",jobs:[{description:"Develop ZIRO(https://www.rideziro.com/) landing page(React JS, SASS)"},{description:"Web application development(React JS, Next JS, SASS)"},{description:"API development(Laravel & MYSQL)"}]},{position:"Web Developer",company:"3Digital",location:"Dubai",dateFrom:"Oct 2017",dateTo:"Aug 2018",jobs:[{description:"Wordpress theme modification"},{description:"Wordpress optimization"},{description:"Mobile app development(Ionic, Angular)"},{description:"API development for mobile app(Laravel & MYSQL)"}]},{position:"Software Developer",company:"LTPI",location:"Philippines",dateFrom:"Aug 2014",dateTo:"Aug 2017",jobs:[{description:"Windows application development(VB.NET)"},{description:"Update & maintain legacy systems"}]}],A=function(){return j.setState({headerType:"small"}),Object(x.jsx)("div",{className:"bg-gray-900",children:Object(x.jsx)(f,{children:Object(x.jsxs)("div",{className:"py-10 text-white tracking-wide",children:[Object(x.jsx)(S,{children:"Hi, I'm Reymark, an awsome software developer with experience building web and windows applications. I have professional experience working with C#, VB.Net and React JS."}),Object(x.jsxs)(S,{children:[Object(x.jsx)(N,{children:"Technologies"}),Object(x.jsx)("br",{}),"C#, VB.Net, ASP.Net, MVVM, Repository Pattern, PHP, Laravel, Wordpress, Angular, React JS, Redux , Next JS, CSS, SASS, Bootstrap, Tailwind, MSSQL, MYSQL"]}),Object(x.jsxs)(S,{children:[Object(x.jsx)(N,{children:"Work Experience"}),Object(x.jsx)("br",{}),P.map((function(e){return Object(x.jsx)(k,{position:e.position,company:e.company,location:e.location,dateFrom:e.dateFrom,dateTo:e.dateTo,jobs:e.jobs})}))]})]})})})},F=[{title:"WY & Esther Engineers",type:"WEB APP",imgSrc:T,imgTitle:"wyees",readMoreLink:"",reverse:!1},{title:"ZIRO",type:"WEB APP",imgSrc:i.p+"static/media/ziro.a9e80a51.png",imgTitle:"ziro",readMoreLink:"",reverse:!0},{title:"School of Disruption",type:"WEB APP",imgSrc:i.p+"static/media/sod.80bc3804.png",imgTitle:"sod",readMoreLink:"",reverse:!1}],I=function(){return j.setState({headerType:"small"}),Object(x.jsx)("div",{className:"bg-gray-900",children:Object(x.jsxs)(f,{children:[Object(x.jsx)("div",{className:"text-white tracking-widest py-20",children:"PROJECTS"}),F.map((function(e){return Object(x.jsx)(w,{title:e.title,type:e.type,imgSrc:e.imgSrc,imgTitle:e.imgTitle,readMoreLink:e.readMoreLink,reverse:e.reverse})}))]})})},R=function(){return j.setState({headerType:"small"}),Object(x.jsx)("div",{className:"bg-white",children:Object(x.jsx)(f,{children:Object(x.jsx)("div",{className:"text-8xl font-bold",children:"Error 404 page not found."})})})},E=function(){return Object(x.jsxs)(a.c,{children:[Object(x.jsx)(a.a,{path:"/my-profile",exact:!0,component:L}),Object(x.jsx)(a.a,{path:"/my-profile/about",exact:!0,component:A}),Object(x.jsx)(a.a,{path:"/my-profile/portfolio",exact:!0,component:I}),Object(x.jsx)(a.a,{component:R})]})},W=function(){var e=j((function(e){return e.headerType})),t=j((function(e){return e.isMenuOpen}));return Object(x.jsx)(x.Fragment,{children:t?Object(x.jsx)(y,{}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(u,{headerType:e}),Object(x.jsx)(E,{}),Object(x.jsx)(h,{})]})})};r.a.render(Object(x.jsx)(c.a,{children:Object(x.jsx)(W,{})}),document.getElementById("root")),s()}},[[35,1,2]]]);
//# sourceMappingURL=main.fea8d2cf.chunk.js.map