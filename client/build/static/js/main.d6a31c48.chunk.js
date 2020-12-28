(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{44:function(e,s,t){},68:function(e,s,t){"use strict";t.r(s);var c,a,r,i,n=t(0),l=t(1),o=t.n(l),j=t(16),d=t.n(j),h=(t(44),t(2)),b=t(4),m=t(11),x=t(13),p=t(35),O=t(36),u=t(8),g="EXACT_ROUTE_LOCATION",f="ROUTE_CHANGE",w="FORM_DATA",v="INPUT_ERROR",N={location:"",change:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,s=arguments.length>1?arguments[1]:void 0,t=s.type,c=s.payload;switch(t){case g:case f:return Object(u.a)(Object(u.a)({},e),{},{location:c});default:return e}},y={data:{},error:"",isValid:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,s=arguments.length>1?arguments[1]:void 0,t=s.type,c=s.payload;switch(t){case w:return Object(u.a)(Object(u.a)({},e),{},{data:c,error:"",isValid:!0});case v:return Object(u.a)(Object(u.a)({},e),{},{data:{},error:c,isValid:!1});default:return e}},L=Object(x.combineReducers)({exactRouteLocation:k,formData:C}),D=[O.a],I=Object(x.createStore)(L,{},Object(x.compose)(Object(p.composeWithDevTools)(x.applyMiddleware.apply(void 0,D)))),B=t(5),S=Object(m.b)((function(e){return{routeLocation:e.exactRouteLocation}}))((function(e){e.routeLocation;var s=Object(l.useState)(!1),t=Object(B.a)(s,2),a=t[0],r=t[1];return Object(n.jsxs)("header",{children:[Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(h.c,{exact:!0,activeClassName:"active",to:"/",onClick:function(){r(!1)},children:"home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.c,{exact:!0,activeClassName:"active",to:"/projects",children:"projects"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/#about",children:"about"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/#contact",className:"contact-link",children:"contact"})})]})}),Object(n.jsx)("button",{className:"burger-icon",onClick:function(){return"open"!==c?(r(!0),c="open"):(r(!1),c="closed")},children:Object(n.jsx)("img",{src:"/assets/icons/burger-menu.svg",alt:"Burger Menu"})}),Object(n.jsx)("div",{className:"burger-menu",style:!0===a?{height:"270px"}:{height:"0"},children:Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(h.c,{exact:!0,activeClassName:"active",to:"/",children:"home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.c,{exact:!0,activeClassName:"active",to:"/projects",children:"projects"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/#about",children:"about"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/#contact",className:"contact-link",children:"contact"})})]})})})]})})),T=function(e){return function(s){s({type:g,payload:e})}},A=Object(m.b)(null,{setRouteLocation:T})((function(e){var s=e.setRouteLocation,t=Object(b.f)().pathname;return Object(l.useEffect)((function(){s(t)}),[s,t]),Object(n.jsxs)("div",{className:"introduction-container",children:[Object(n.jsxs)("div",{className:"title-wrapper",children:[Object(n.jsx)("h1",{children:"Jay Lewis"}),Object(n.jsx)("p",{children:"Front-end Web Developer"}),Object(n.jsxs)("button",{children:["Take a look ",Object(n.jsx)("img",{src:"/assets/icons/arrow.svg",alt:"arrow"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("img",{src:"/assets/icons/github-bluebg.svg",alt:"Github"})}),Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("img",{src:"/assets/icons/linkedin-bluebg.svg",alt:"LinkedIn"})})]})]}),Object(n.jsx)("div",{className:"illustration-con",children:Object(n.jsx)("img",{src:"/assets/illustrations/home.svg",alt:"Laptop imgage"})})]})})),H=function(){return Object(n.jsxs)("div",{className:"projects-container",children:[Object(n.jsxs)("div",{className:"projects-flex",children:[Object(n.jsxs)("li",{className:"dirt-display",children:[Object(n.jsx)("img",{className:"project-name",src:"/assets/project-names/dirt-name.svg",alt:"Dirt"}),Object(n.jsx)("img",{className:"project-photo",src:"/assets/project-photos/dirt-com.jpeg",alt:"Dirt Page"}),Object(n.jsx)(h.b,{to:"/projects/dirt",className:"project-link",children:Object(n.jsx)("img",{src:"/assets/icons/arrow-left.svg",alt:"Link to project",className:"shake-animation"})}),Object(n.jsxs)("div",{className:"link-container",children:[Object(n.jsx)("a",{href:"https://github.com/JayLewis1/dirt",className:"shake-animation",children:Object(n.jsx)("img",{src:"/assets/icons/github.svg",alt:"Github Link"})}),Object(n.jsx)("a",{href:"http://www.dirtaliceinchains.com/",className:"shake-animation",children:Object(n.jsx)("img",{src:"/assets/icons/website.svg",alt:"Website Link"})})]})]}),Object(n.jsxs)("li",{className:"bouncing-display",children:[Object(n.jsx)("img",{className:"project-name",src:"/assets/project-names/bouncing-name.svg",alt:"Bouncing Borders"}),Object(n.jsx)("img",{className:"project-photo",src:"/assets/project-photos/bouncing-borders-com.jpeg",alt:"Bouncing Borders Page"}),Object(n.jsx)(h.b,{to:"/projects/bouncingborders",className:"project-link",children:Object(n.jsx)("img",{src:"/assets/icons/arrow-left-pink.svg",alt:"Link to project",className:"shake-animation"})}),Object(n.jsxs)("div",{className:"link-container",children:[Object(n.jsx)("a",{href:"https://github.com/JayLewis1/bouncingborderswp",className:"bb-links shake-animation",children:Object(n.jsx)("img",{src:"/assets/icons/github-pink.svg",alt:"Github Link"})}),Object(n.jsx)("a",{href:"http://bouncingborders.com/",className:"bb-links shake-animation",children:Object(n.jsx)("img",{src:"/assets/icons/website-pink.svg",alt:"Website Link"})})]})]})]}),Object(n.jsxs)("div",{className:"projects-flex",children:[Object(n.jsxs)("li",{className:"logic-display",children:[Object(n.jsx)("img",{className:"project-name",src:"/assets/project-names/logic-name.svg",alt:"Logic"}),Object(n.jsx)("img",{className:"project-photo",src:"/assets/project-photos/logic-com.jpeg",alt:"Logic Page"}),Object(n.jsx)(h.b,{to:"/projects/logic",className:"project-link",children:Object(n.jsx)("img",{src:"/assets/icons/arrow-left-orange.svg",alt:"Link to project",className:"shake-animation"})}),Object(n.jsxs)("div",{className:"link-container",children:[Object(n.jsx)("a",{href:"https://github.com/JayLewis1/logic-trades",className:"shake-animation",children:Object(n.jsx)("img",{src:"/assets/icons/github-orange.svg",alt:"Github Link"})}),Object(n.jsx)("a",{href:"https://logictrades.herokuapp.com/",className:"shake-animation",children:Object(n.jsx)("img",{src:"/assets/icons/website-orange.svg",alt:"Website Link"})})]})]}),Object(n.jsxs)("li",{className:"see-all-projects",children:[Object(n.jsx)("h5",{children:"See all projects"}),Object(n.jsx)("a",{href:"/",className:"all-projects-link",children:Object(n.jsx)("img",{src:"/assets/icons/arrow-left-blue.svg",alt:"Link to all projects"})}),Object(n.jsxs)("div",{className:"all-projects-images",children:[Object(n.jsx)("img",{className:"pro-1",src:"/assets/project-photos/bouncing-borders-com.jpeg",alt:"Bouncing Borders"}),Object(n.jsx)("img",{className:"pro-2",src:"/assets/project-photos/logic-com.jpeg",alt:"Logic"}),Object(n.jsx)("img",{className:"pro-3",src:"/assets/project-photos/dirt-com.jpeg",alt:"Dirt"})]})]})]})]})},E=function(){var e=Object(l.useState)(),s=Object(B.a)(e,2),t=s[0],c=s[1],r=function(e,s){a===s?(c(),a=""):(c(s),a=s)};return Object(n.jsxs)(l.Fragment,{children:[Object(n.jsxs)("div",{className:"table-row",style:0===t?{maxHeight:"100%"}:{maxHeight:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper skill-wrapper",children:[Object(n.jsx)("p",{className:"topic",children:"Front-end Development"}),Object(n.jsx)("p",{className:"skill",children:"HTML"}),Object(n.jsxs)("button",{onClick:function(e){return r(0,0)},value:"front-end",children:["  ",Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:0===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})]})]}),Object(n.jsxs)("ul",{className:"list-of-skills",children:[Object(n.jsx)("li",{children:"HTML"}),Object(n.jsx)("li",{children:"CSS"}),Object(n.jsx)("li",{children:"JavaScript"}),Object(n.jsx)("li",{children:"JQuery"}),Object(n.jsx)("li",{children:"Sass"}),Object(n.jsx)("li",{children:"React"}),Object(n.jsx)("li",{children:"Redux"})]})]}),Object(n.jsxs)("div",{className:"table-row",style:1===t?{maxHeight:"100%"}:{maxHeight:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper skill-wrapper",children:[Object(n.jsx)("p",{className:"topic",children:"Back-end Development"}),Object(n.jsx)("p",{className:"skill",children:"Node.js"}),Object(n.jsxs)("button",{onClick:function(e){return r(0,1)},value:"back-end",children:["  ",Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:1===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})]})]}),Object(n.jsxs)("ul",{className:"list-of-skills",children:[Object(n.jsx)("li",{children:"Node.js"}),Object(n.jsx)("li",{children:"Express"}),Object(n.jsx)("li",{children:"JavaScript"})]})]}),Object(n.jsxs)("div",{className:"table-row",style:2===t?{maxHeight:"100%"}:{maxHeight:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper skill-wrapper",children:[Object(n.jsx)("p",{className:"topic",children:"Frameworks"}),Object(n.jsx)("p",{className:"skill",children:"React"}),Object(n.jsx)("button",{onClick:function(e){return r(0,2)},value:"frameworks",children:Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:2===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})})]}),Object(n.jsx)("ul",{className:"list-of-skills",children:Object(n.jsx)("li",{children:"React"})})]}),Object(n.jsxs)("div",{className:"table-row",style:3===t?{maxHeight:"100%"}:{maxHeight:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper skill-wrapper",children:[Object(n.jsx)("p",{className:"topic",children:"Design"}),Object(n.jsx)("p",{className:"skill",children:"Adobe XD"}),Object(n.jsxs)("button",{onClick:function(e){return r(0,3)},value:"design",children:["  ",Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:3===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})]})]}),Object(n.jsxs)("ul",{className:"list-of-skills",children:[Object(n.jsx)("li",{children:"Adobe XD"}),Object(n.jsx)("li",{children:"Adobe Illustrator"})]})]}),Object(n.jsxs)("div",{className:"table-row",style:4===t?{maxHeight:"100%"}:{maxHeight:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper skill-wrapper",children:[Object(n.jsx)("p",{className:"topic",children:"Version Control"}),Object(n.jsx)("p",{className:"skill",children:"Github"}),Object(n.jsxs)("button",{onClick:function(e){return r(0,4)},value:"version",children:["  ",Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:4===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})]})]}),Object(n.jsx)("ul",{className:"list-of-skills",children:Object(n.jsx)("li",{children:"Github"})})]}),Object(n.jsxs)("div",{className:"table-row",style:5===t?{maxHeight:"100%"}:{maxHeight:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper skill-wrapper",children:[Object(n.jsx)("p",{className:"topic",children:"Database"}),Object(n.jsx)("p",{className:"skill",children:"MongoDB"}),Object(n.jsxs)("button",{onClick:function(e){return r(0,5)},value:"database",children:["  ",Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:5===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})]})]}),Object(n.jsxs)("ul",{className:"list-of-skills",children:[Object(n.jsx)("li",{children:"MongoDB"}),Object(n.jsx)("li",{children:"Mongoose"})]})]})]})},R=function(){var e=Object(l.useState)(),s=Object(B.a)(e,2),t=s[0],c=s[1],a=function(e,s){r===s?(c(),r=""):(c(s),r=s)};return Object(n.jsxs)(l.Fragment,{children:[Object(n.jsxs)("div",{className:"table-row",style:0===t?{height:"100%"}:{height:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper",children:[Object(n.jsxs)("span",{className:"left-wrapper",children:[Object(n.jsx)("p",{className:"school",children:"Specsavers"}),Object(n.jsx)("p",{className:"date",children:"November 2019 \u2013 July 2020"})]}),Object(n.jsx)("p",{className:"course",children:"Clinical Assistant"}),Object(n.jsx)("button",{onClick:function(e){return a(0,0)},children:Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:0===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})})]}),Object(n.jsxs)("div",{className:"course-info",children:[Object(n.jsx)("p",{children:"Being in a role solely focused on the customer has opened up my knowledge and developed my skills massively when it comes to customers. "}),Object(n.jsx)("p",{children:"The role included many jobs which increased over the period of time working here through training and the amount of effort I put in. This gave me the ability to adapt to different roles due to many different types of jobs that had to be done in a day for example throughout the day I might have to arrive a patient in, preform a pretest to then finding the customers needs and preferences and finally advising them and fitting a pair of glasses. "}),Object(n.jsx)("p",{children:"Throughout the job role I would learn different topics and new things to better my performance in the job role and then eventually became a massive asset to the team on sales and also customer experience."}),Object(n.jsx)("p",{children:"I also created bonds with many of my colleagues here and became a positive asset to the team."})]})]}),Object(n.jsxs)("div",{className:"table-row",style:1===t?{maxHeight:"100%"}:{maxHeight:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper",children:[Object(n.jsxs)("span",{className:"left-wrapper",children:[Object(n.jsx)("p",{className:"school",children:"The Crafty Half"}),Object(n.jsx)("p",{className:"date",children:"January \u2013 June 2019"})]}),Object(n.jsx)("p",{className:"course",children:"Bartender"}),Object(n.jsx)("button",{onClick:function(e){return a(0,1)},children:Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:1===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})})]}),Object(n.jsxs)("div",{className:"course-info",children:[Object(n.jsx)("p",{children:"This role presented me face to face with customers where I had to be behind the bar taking orders, holding conversations and making sure the customer "}),Object(n.jsx)("p",{children:"The bar had to be kept at a high standard of cleanliness, professionalism while obtaining a certain atmosphere. Some shifts I was the only member staff working so had to keep these stands up by myself which gave me responsibility and developed my professionalism."})]})]}),Object(n.jsxs)("div",{className:"table-row",style:2===t?{maxHeight:"100%"}:{maxHeight:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper",children:[Object(n.jsxs)("span",{className:"left-wrapper",children:[Object(n.jsx)("p",{className:"school",children:"Pertemps, Coldcall"}),Object(n.jsx)("p",{className:"date",children:"June \u2013 September 2018"})]}),Object(n.jsx)("p",{className:"course",children:"Delivery Driver"}),Object(n.jsx)("button",{onClick:function(e){return a(0,2)},children:Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:2===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})})]}),Object(n.jsxs)("div",{className:"course-info",children:[Object(n.jsx)("p",{children:"My responsibilities within this role included delivering products to different Tesco petrol stations. I developed time management skills due to having to deliver the product at the slotted time."}),Object(n.jsx)("p",{children:"This role was my first experience interacting with customers although it wasn\u2019t a customer service roll. This helped to initially develop customer understanding skills."}),Object(n.jsx)("p",{children:"Not too long into the role I was given more responsibility where I had to do a unique route which included picking up food samples from factories and taking them to lab for testing."})]})]}),Object(n.jsxs)("div",{className:"table-row",style:3===t?{maxHeight:"150%"}:{maxHeight:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper",children:[Object(n.jsxs)("span",{className:"left-wrapper",children:[Object(n.jsx)("p",{className:"school",children:"Mamma Mia Restaurant "}),Object(n.jsx)("p",{className:"date",children:"November 2012 - August 2017"})]}),Object(n.jsx)("p",{className:"course",children:"Sous Chef"}),Object(n.jsx)("button",{onClick:function(e){return a(0,3)},children:Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:3===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})})]}),Object(n.jsxs)("div",{className:"course-info",children:[Object(n.jsx)("p",{children:"At the age of 15 I was keen and intrigued to see what the working world was like so I threw myself into a part-time job. This is where my work ethic, ethos and whole attitude towards work began and further developed through the years working at this restaurant. "}),Object(n.jsx)("p",{children:"Initially my job role was Kitchen Porter this involved me carrying out washing and cleaning tasks. I developed a keen work ethic and a selection of skills such as organisation, time management and team working throughout this job role. I also created strong relationships with my colleagues that I still have to this day."}),Object(n.jsx)("p",{children:"I transitioned into the Sous Chef role after 1-2 years of working at the restaurant due to the owners seeing potential in me. This job role developed new skills such as working under pressure due to being in the middle of a fast paced kitchen with the duty of making sure every dish comes out on time and having to coordinate the kitchen staff to make sure dishes come out together. This would develop my organisation, coordinating and communication skills."}),Object(n.jsx)("p",{children:"I attained more responsibility throughout this role, for example I was given the keys and had to open the restaurant up frequently."})]})]})]})},J=function(){var e=Object(l.useState)(),s=Object(B.a)(e,2),t=s[0],c=s[1],a=function(e,s){i===s?(c(),i=""):(c(s),i=s)};return Object(n.jsxs)(l.Fragment,{children:[Object(n.jsxs)("div",{className:"table-row",style:0===t?{maxHeight:"100%"}:{maxHeight:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper",children:[Object(n.jsxs)("span",{className:"left-wrapper",children:[Object(n.jsx)("p",{className:"school",children:"Plymouth University"}),Object(n.jsx)("p",{className:"date",children:"September 2016 - September 2019"})]}),Object(n.jsx)("p",{className:"course",children:"Internet Design BA Hons : 2:1"}),Object(n.jsx)("button",{onClick:function(e){return a(0,0)},children:Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:0===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})})]}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{className:"course-info",children:Object(n.jsx)("p",{children:"The role included many jobs which increased over the period of time working here through training and the amount of effort I put in. This gave me the ability to adapt to different roles due to many different types of jobs that had to be done in a day for example throughout the day I might have to arrive a patient in, preform a pretest to then finding the customers needs and preferences and finally advising them and fitting a pair of glasses. "})})]}),Object(n.jsxs)("div",{className:"table-row",id:"sixth-form",style:1===t?{maxHeight:"100%"}:{maxHeight:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper",children:[Object(n.jsxs)("span",{className:"left-wrapper",children:[Object(n.jsxs)("p",{className:"school",children:["Chepstow School Sixth Form ",Object(n.jsx)("span",{className:"hide",children:"- A Level"})]}),Object(n.jsx)("p",{className:"date",children:"September 2014 - August 2016"})]}),Object(n.jsx)("p",{className:"course",children:"Business Studies : B"}),Object(n.jsx)("button",{onClick:function(e){return a(0,1)},children:Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:1===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})})]}),Object(n.jsx)("div",{}),Object(n.jsxs)("ul",{className:"list-of-grades",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:"Business Studies"})," ",Object(n.jsx)("p",{className:"grade",children:"B"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:"ICT"})," ",Object(n.jsx)("p",{className:"grade",children:"C"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:"Welsh Baccalaureate"})," ",Object(n.jsx)("p",{className:"grade",children:"B"})]})]})]}),Object(n.jsxs)("div",{className:"table-row",style:2===t?{maxHeight:"100%"}:{maxHeight:"70px"},children:[Object(n.jsxs)("div",{className:"row-wrapper",children:[Object(n.jsxs)("span",{className:"left-wrapper",children:[Object(n.jsx)("p",{className:"school",children:"Chepstow School - GCSE"}),Object(n.jsx)("p",{className:"date",children:"September 2009 - August 2016"})]}),Object(n.jsx)("p",{className:"course",children:"English Language : B"}),Object(n.jsx)("button",{onClick:function(e){return a(0,2)},children:Object(n.jsx)("img",{src:"/assets/icons/down-arrow.svg",alt:"Down Arrow",style:2===t?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}})})]}),Object(n.jsx)("div",{}),Object(n.jsxs)("ul",{className:"list-of-grades",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:"English Language"})," ",Object(n.jsx)("p",{className:"grade",children:"B"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:"English Literature"})," ",Object(n.jsx)("p",{className:"grade",children:"C"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:"Math"})," ",Object(n.jsx)("p",{className:"grade",children:"B"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:"Science"})," ",Object(n.jsx)("p",{className:"grade",children:"C"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:"Business Studies"})," ",Object(n.jsx)("p",{className:"grade",children:"B"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:"Resistant Materials"})," ",Object(n.jsx)("p",{className:"grade",children:"A"})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("p",{children:"History"})," ",Object(n.jsx)("p",{className:"grade",children:"D"})]})]})]})]})},M=function(){var e=Object(l.useState)("skills"),s=Object(B.a)(e,2),t=s[0],c=s[1],a=function(e){var s=e.target.value;c(s)};return Object(n.jsxs)("div",{className:"about-container",id:"about",children:[Object(n.jsxs)("ul",{className:"table-header-buttons",children:[Object(n.jsx)("li",{children:Object(n.jsx)("button",{value:"skills",onClick:function(e){return a(e)},className:"skills"===t?"btnSelected":void 0,children:"Skills"})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{value:"workexp",onClick:function(e){return a(e)},className:"workexp"===t?"btnSelected":void 0,children:"Work Experience"})}),Object(n.jsx)("li",{children:Object(n.jsx)("button",{value:"education",onClick:function(e){return a(e)},className:"education"===t?"btnSelected":void 0,children:"Education"})})]}),Object(n.jsxs)("div",{className:"table",children:["skills"===t&&Object(n.jsx)(E,{}),"workexp"===t&&Object(n.jsx)(R,{}),"education"===t&&Object(n.jsx)(J,{})]})]})},F=function(){return Object(n.jsxs)("div",{className:"interests-container",children:[Object(n.jsx)("h3",{className:"hobbies-title-mobile",children:"Hobbies"}),Object(n.jsxs)("div",{className:"interests-grid",children:[Object(n.jsx)("li",{className:"row-1",children:Object(n.jsx)("img",{className:"bounce",src:"/assets/icons/interests/pasta.svg",alt:"Pasta"})}),Object(n.jsx)("li",{className:"row-2",children:Object(n.jsx)("img",{className:"shake",src:"/assets/icons/interests/guitar.svg",alt:"Guitar"})}),Object(n.jsx)("li",{className:"row-2",children:Object(n.jsx)("img",{className:"shake",src:"/assets/icons/interests/controller.svg",alt:"Controller"})}),Object(n.jsx)("li",{className:"row-3",children:Object(n.jsx)("img",{className:"bounce",src:"/assets/icons/interests/camping.svg",alt:"Camping"})}),Object(n.jsx)("li",{className:"row-3 hobbies-title",children:Object(n.jsx)("h3",{children:"Hobbies"})}),Object(n.jsx)("li",{className:"row-3",children:Object(n.jsx)("img",{className:"shake",src:"/assets/icons/interests/beer.svg",alt:"Beer"})}),Object(n.jsx)("li",{className:"row-2",children:Object(n.jsx)("img",{className:"shake",src:"/assets/icons/interests/hiking.svg",alt:"Hiking"})}),Object(n.jsx)("li",{className:"row-2",children:Object(n.jsx)("img",{className:"bounce",src:"/assets/icons/interests/movies.svg",alt:"Movies"})}),Object(n.jsx)("li",{className:"row-1",children:Object(n.jsx)("img",{className:"shake",src:"/assets/icons/interests/travelling.svg",alt:"Travelling"})})]})]})},W=t(24),G=t.n(W),_=t(37),P=t(18),U=t(38),V=t.n(U),X=Object(m.b)((function(e){return{handledFormData:e}}),{handleFormDataWithNodemailer:function(e){return function(s){var t=e.name,c=e.email,a=e.message,r={name:"",email:"",message:""};t||(r.name="Name field must not be left blank"),c||(r.email="Email field must not be left blank"),a||(r.message="Message field must not be left blank"),t&&t.length<3&&(r.name="Name should be longer than 2 characters"),c&&c.length<=8&&(r.email="Email should be longer than 8 characters"),a&&a.length<=10&&(r.message="Message should be longer than 10 characters"),""===r.name&&""===r.email&&""===r.message?(s({type:w,payload:e}),V.a.post("/api/nodemailer",e).then((function(e){})).catch((function(e){}))):s({type:v,payload:r})}}})((function(e){var s=e.handleFormDataWithNodemailer,t=e.handledFormData,c=Object(l.useState)(),a=Object(B.a)(c,2),r=a[0],i=a[1],o=Object(l.useState)([]),j=Object(B.a)(o,2),d=j[0],h=j[1],b=Object(l.useState)(!1),m=Object(B.a)(b,2),x=m[0],p=m[1],O=function(e){i(e);var s=document.createElement("textarea");switch(e){case 0:s.value="07592832146";break;case 1:s.value="jr_lewis@outlook.com"}document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s)},g=function(e){h(Object(u.a)(Object(u.a)({},d),{},Object(P.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(_.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),s(d);case 2:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),w=t.formData.error.name,v=t.formData.error.email,N=t.formData.error.message,k=t.formData.isValid;return Object(l.useEffect)((function(){!0===k&&(console.log("Changed"),h([]),function(){var e=document.getElementById("name"),s=document.getElementById("email"),t=document.getElementById("company"),c=document.getElementById("message");e.value="",s.value="",t.value="",c.value=""}(),p(!0),setTimeout((function(){p(!1)}),5e3))}),[k]),Object(n.jsxs)("div",{className:"contact-container",id:"contact",children:[Object(n.jsx)("h3",{children:"Get in Contact"}),Object(n.jsx)("div",{className:"contact-details",children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{className:"number",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"/assets/icons/contact/phone.svg",alt:"Phone Number"}),Object(n.jsx)("p",{children:"07592832146"}),Object(n.jsx)("button",{onClick:function(){return O(0)},children:Object(n.jsx)("img",{src:"/assets/icons/copy.svg",alt:"copy"})})]}),Object(n.jsxs)("span",{className:0===r?"showCopied":null,children:[Object(n.jsx)("p",{children:"\ud83d\udc4d"}),Object(n.jsx)("p",{className:"copied-text",children:"Copied!"})]})]}),Object(n.jsxs)("li",{className:"email",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"/assets/icons/contact/email.svg",alt:"Email Address"}),Object(n.jsx)("p",{children:"Jr_lewis@outlook.com"}),Object(n.jsx)("button",{onClick:function(){return O(1)},children:Object(n.jsx)("img",{src:"/assets/icons/copy.svg",alt:"copy"})})]}),Object(n.jsxs)("span",{className:1===r?"showCopied":null,children:[Object(n.jsx)("p",{children:"\ud83d\udc4d"}),Object(n.jsx)("p",{className:"copied-text",children:"Copied!"})]})]}),Object(n.jsx)("li",{className:"LinkedIn",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"/assets/icons/contact/linkedin.svg",alt:"LinkedIn"}),Object(n.jsx)("p",{children:"jaylewis98"}),Object(n.jsx)("a",{href:"https://www.linkedin.com/in/jaylewis98/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"/assets/icons/blue-arrow.svg",alt:"Go to linkedIn"})})]})})]})}),Object(n.jsx)("div",{className:"form-container",children:Object(n.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(n.jsxs)("span",{children:[Object(n.jsxs)("span",{className:"label-flex",children:[Object(n.jsx)("label",{htmlFor:"name",children:"Name"}),Object(n.jsx)("p",{children:"*"})]}),Object(n.jsx)("input",{type:"text",id:"name",placeholder:"John Smith",name:"name",className:w?"error":d.name?"success":null,onChange:function(e){return g(e)}}),w&&Object(n.jsxs)("p",{className:"error-msg",children:[" ",w," "]})]}),Object(n.jsxs)("span",{children:[Object(n.jsxs)("span",{className:"label-flex",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email"}),Object(n.jsx)("p",{children:"*"})]}),Object(n.jsx)("input",{type:"text",id:"email",placeholder:"Johnsmith@email.com",name:"email",className:v?"error":d.email?"success":null,onChange:function(e){return g(e)}}),v&&Object(n.jsxs)("p",{className:"error-msg",children:[" ",v," "]})]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("span",{className:"label-flex",children:Object(n.jsx)("label",{htmlFor:"company",children:"Company"})}),Object(n.jsx)("input",{type:"text",id:"company",placeholder:"JohnSmithLtd",name:"company",className:d.company?"success":null,onChange:function(e){return g(e)}})]}),Object(n.jsxs)("span",{children:[Object(n.jsxs)("span",{className:"label-flex",children:[Object(n.jsx)("label",{htmlFor:"message",children:"Message"}),Object(n.jsx)("p",{children:"*"})]}),Object(n.jsx)("textarea",{type:"text",id:"message",placeholder:"Hi Jay, just wanted to get in contact with you ...",name:"message",className:N?"error":d.message?"success":null,onChange:function(e){return g(e)}}),N&&Object(n.jsxs)("p",{className:"error-msg",children:[" ",N," "]})]}),Object(n.jsx)("input",{type:"submit",value:"Send Message",id:"submit"}),!0===k&&!0===x?Object(n.jsx)("p",{className:"succes-msg",children:"Message Sent!"}):null]})})]})})),q=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(A,{}),Object(n.jsx)(H,{}),Object(n.jsx)(M,{}),Object(n.jsx)(F,{}),Object(n.jsx)(X,{})]})},Q=Object(m.b)(null,{setRouteLocation:T})((function(e){var s=e.setRouteLocation,t=Object(b.f)().pathname;return Object(l.useEffect)((function(){s(t)}),[s,t]),Object(n.jsxs)("div",{className:"portfolio-container",children:[Object(n.jsx)("h3",{children:"My Portfolio"}),Object(n.jsxs)("ul",{className:"portfolio-grid",children:[Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/projects/dirt",children:Object(n.jsx)("img",{src:"/assets/project-photos/dirt-com.jpeg",alt:"Dirt Website"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/projects/bouncingborders",children:Object(n.jsx)("img",{src:"/assets/project-photos/bouncing-borders-com.jpeg",alt:"Bouncing Borders Website"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/projects/logic",children:Object(n.jsx)("img",{src:"/assets/project-photos/logic-com.jpeg",alt:"Logic Website"})})})]})]})})),Y=function(){return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{className:"project-container",children:[Object(n.jsx)("div",{className:"backbtn",children:Object(n.jsx)(h.b,{to:"/projects",children:Object(n.jsx)("img",{src:"/assets/icons/arrow-left-blue.svg",alt:"Back to projects"})})}),Object(n.jsx)("div",{className:"photo-container",children:Object(n.jsx)("img",{className:"project-photo",src:"/assets/project-photos/dirt-com.jpeg",alt:"Dirt Website"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Dirt"}),Object(n.jsxs)("span",{className:"link-container",children:[Object(n.jsx)("a",{href:"https://github.com/JayLewis1/dirt",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"/assets/icons/github-blue.svg",alt:"Github Link"})}),Object(n.jsx)("a",{href:"http://www.dirtaliceinchains.com/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"/assets/icons/website-blue.svg",alt:"Website Link"})})]}),Object(n.jsx)("p",{children:"Dirt is an alice in tribute band who came to me to create a website to display tour dates, videos they had of the band, a way of contact and some information on the band. I created this site with plain html, css and javacript for the front-end and used node.js and express for the server side. I believe this project resulted really well although I didn't use React because it was a single page statless site."}),Object(n.jsxs)(h.b,{to:"/projects",className:"mobile-backbtn",children:[Object(n.jsx)("img",{src:"/assets/icons/arrow.svg",alt:"back arrow"}),"Back to projects"]})]})]})},K=function(){return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{className:"project-container",children:[Object(n.jsx)("div",{className:"backbtn",children:Object(n.jsx)(h.b,{to:"/projects",children:Object(n.jsx)("img",{src:"/assets/icons/arrow-left-blue.svg",alt:"Back to projects"})})}),Object(n.jsx)("div",{className:"photo-container",children:Object(n.jsx)("img",{className:"project-photo",src:"/assets/project-photos/bouncing-borders-com.jpeg",alt:"Bouncing Borders Website"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Bouncing Borders"}),Object(n.jsxs)("span",{className:"link-container",children:[Object(n.jsx)("a",{href:"https://github.com/JayLewis1/bouncingborderswp",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"/assets/icons/github-blue.svg",alt:"Github Link"})}),Object(n.jsx)("a",{href:"http://bouncingborders.com/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"/assets/icons/website-blue.svg",alt:"Website Link"})})]}),Object(n.jsx)("p",{children:"I created this site to document my travels through Europe. I wanted to create a blog where we could write posts and also upload pictures we had. This porject was created with html, sass and php. I chose Wordpress initially becasue its an easy and organised way of writing posts, storing them and keeping track of them. This was my first project using the Wordpress format and php which came to be a big learning curve for me."}),Object(n.jsxs)(h.b,{to:"/projects",className:"mobile-backbtn",children:[Object(n.jsx)("img",{src:"/assets/icons/arrow.svg",alt:"back arrow"}),"Back to projects"]})]})]})},z=function(){return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(n.jsxs)("div",{className:"project-container",children:[Object(n.jsx)("div",{className:"backbtn",children:Object(n.jsx)(h.b,{to:"/projects",children:Object(n.jsx)("img",{src:"/assets/icons/arrow-left-blue.svg",alt:"Back to projects"})})}),Object(n.jsx)("div",{className:"photo-container",children:Object(n.jsx)("img",{className:"project-photo",src:"/assets/project-photos/logic-com.jpeg",alt:"Logic Website"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Logic Trades"}),Object(n.jsxs)("span",{className:"link-container",children:[Object(n.jsx)("a",{href:"https://github.com/JayLewis1/logic-trades",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"/assets/icons/github-blue.svg",alt:"Github Link"})}),Object(n.jsx)("a",{href:"https://logictrades.herokuapp.com/",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"/assets/icons/website-blue.svg",alt:"Website Link"})})]}),Object(n.jsxs)("p",{children:["This is a proto-type company website for a forex trading team. The team wanted a site where they can show their services, testimonials, FAQ's, a way of joining their group and a contact page. I created this project using ",Object(n.jsx)("b",{children:"React"}),", ",Object(n.jsx)("b",{children:"redux"}),", ",Object(n.jsx)("b",{children:"node.js"})," and ",Object(n.jsx)("b",{children:"express"}),"."]}),Object(n.jsx)("p",{children:"I chose react becuase of the ease of creating UI components and gave the option to scale up in the future. I needed a way of handling cross application state which brought me to redux as it's a nice, simple, scaledable way of handling state which allows an efficient way for the frontend and server to communicate."}),Object(n.jsxs)(h.b,{to:"/projects",className:"mobile-backbtn",children:[Object(n.jsx)("img",{src:"/assets/icons/arrow.svg",alt:"back arrow"}),"Back to projects"]})]})]})},Z=Object(m.b)((function(e){return{route:e.exactRouteLocation}}))((function(e){e.route;return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:"Top"})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.c,{exact:!0,activeClassName:"footerActive",to:"/",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.c,{exact:!0,activeClassName:"footerActive",to:"/projects",children:"Projects"})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.c,{to:"/#about",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.c,{to:"/#contact",children:"Contact"})})]})}),Object(n.jsxs)("span",{className:"github-wrapper",children:[Object(n.jsx)("img",{src:"/assets/icons/github-no-bg.svg",alt:"github"}),Object(n.jsxs)("p",{children:["You can check out the code for this site ",Object(n.jsx)("a",{href:"/",children:"here"})," \ud83d\ude00"]})]}),Object(n.jsx)("span",{className:"flaticon-ref",children:Object(n.jsxs)("p",{children:["Icons made by",Object(n.jsx)("a",{href:"https://www.flaticon.com/authors/freepik",children:"Freepik"})," from ",Object(n.jsx)("a",{href:"https://www.flaticon.com/",children:"www.flaticon.com"})," "]})})]})})),$=function(){return Object(n.jsx)("div",{className:"notfound-container",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:"/assets/illustrations/404.svg",alt:"404 Not Found"}),Object(n.jsx)("h3",{children:"404 : Page Not Found"}),Object(n.jsxs)("h4",{children:["You can go back home ",Object(n.jsx)(h.c,{to:"/",children:"here"})]})]})})},ee=function(){return Object(n.jsx)(m.a,{store:I,children:Object(n.jsx)(h.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(S,{}),Object(n.jsxs)(b.c,{children:[Object(n.jsx)(b.a,{exact:!0,path:"/",component:q}),Object(n.jsx)(b.a,{exact:!0,path:"/projects",component:Q}),Object(n.jsx)(b.a,{exact:!0,path:"/projects/dirt",component:Y}),Object(n.jsx)(b.a,{exact:!0,path:"/projects/bouncingborders",component:K}),Object(n.jsx)(b.a,{exact:!0,path:"/projects/logic",component:z}),Object(n.jsx)(b.a,{component:$})]}),Object(n.jsx)(Z,{})]})})})};d.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(ee,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.d6a31c48.chunk.js.map