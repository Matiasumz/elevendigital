// Componente Header, logo + menu
const HeaderComponent={
    template:`
    <header>
        <div id="logo-box">
            <a href="/">
                <img src="/assets/img/marca/Logo-secundario-negativo-Eleven-Digital.webp" alt="logo-negativo-Eleven-Digital" id="logo" width="100px">
            </a>
        </div>
        <svg viewBox="0 0 384 272" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="menu-icon">
            <rect width="384" height="30" id="menu-icon-path"/>
            <rect y="242" width="384" height="30" id="menu-icon-path"/>
            <rect y="121" width="384" height="30" id="menu-icon-path"/>
        </svg>
        <nav id="navbar">
            <a href="/#services" style="width: 120px;">Services</a>
            <a href="/#case-studies" style="width: 150px;">Case studies</a>
            <a href="/#about-us" style="width: 130px;">About us</a>
            <a href="#contact" style="width: 120px;">Contact</a>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 512.015 512.015" style="enable-background:new 0 0 512 512" xml:space="preserve" class="" fill="currentColor" id="icon-x"><g><path d="M298.594 256.011 503.183 51.422c11.776-11.776 11.776-30.81 0-42.586s-30.81-11.776-42.586 0L256.008 213.425 51.418 8.836C39.642-2.94 20.608-2.94 8.832 8.836s-11.776 30.81 0 42.586l204.589 204.589L8.832 460.6c-11.776 11.776-11.776 30.81 0 42.586a30.034 30.034 0 0 0 21.293 8.824c7.71 0 15.42-2.952 21.293-8.824l204.589-204.589 204.589 204.589a30.034 30.034 0 0 0 21.293 8.824c7.71 0 15.42-2.952 21.293-8.824 11.776-11.776 11.776-30.81 0-42.586L298.594 256.011z" opacity="1" class=""></path></g></svg>
        </nav>
    </header>
    `,
};
// Componente para la seccion de servicios, en caso de querer agregar mas servicios se deberan sumar a la lista 'services', con su imagen, nombre y descripcion correspondiente.
// Al agregar servicios se deberan agrupar de a dos con los corchetes 
const ServicesComponent={
    template: `
        <div id="services-box">
            <section v-for="s in services">
                <h3>{{ s.section }}</h3>
                <article>
                    <img :src="s.img" alt="Service Photo">
                    <div>
                        <h4>{{ s.title }}</h4>
                        <p>{{ s.description }}</p>
                        <a href="#contact" class="btn btn-contact">{{s.cta}}</a>
                    </div>
                </article>
            </section>
        </div>
    `,
    data() {
        return {
            services: [
                {
                    img:"assets/img/services/branding.webp",
                    section:"Branding",
                    title:"Creating a Distinctive Identity that Resonates Across Audiences",
                    description:"We craft a unique strategy that defines your brand’s values, mission, and vision, shaping how it’s perceived in the market. Our service goes beyond logos to create a cohesive identity that resonates with your audience, builds trust, and sets you apart from competitors. We ensure your brand stands out and connects meaningfully with customers at every touchpoint.",
                    cta:"Let’s brainstorm together!",},
                {
                    img:"assets/img/services/logo.webp",
                    section:"Logo design",
                    title:"Ensuring Your Logo Speaks Your Brand’s True Language",
                    description:"We will create a unique, memorable visual identity for your brand. We craft logos that reflect your brand’s values, ensuring they are versatile, timeless, and impactful. Whether for a new brand or a refresh, we deliver a logo that strengthens your market presence.",
                    cta:"Request a quote!",},
                {
                    img:"assets/img/services/web.webp",
                    section:"Web design",
                    title:"Enjoyable Experiences Everywhere",
                    description:"We combine intuitive UI/UX design with responsive elements to ensure your site delivers a seamless experience across all devices. Our approach prioritizes both aesthetics and functionality, helping you engage visitors, enhance brand perception, and drive conversions.",
                    cta:"Contact us!",},
                {
                    img:"assets/img/services/data.webp",
                    section:"Market Research",
                    title:"Unlocking Deep Insights to Understand Your Audience",
                    description:"We conduct thorough analysis to help you understand customer behaviors, identify market opportunities, and make data-driven decisions. Our service empowers you to develop effective strategies, optimize marketing efforts, and stay ahead of the competition.",
                    cta:"We can help you!",},
                {
                    img:"assets/img/services/paidmedia.webp",
                    section:"Paid Media",
                    title:"Captivating Ads that Drive Clicks and Conversions",
                    description:"We optimize campaigns across platforms like Google Ads, social media, and display networks, ensuring your brand reaches the right audience with compelling, high-converting ads. Our data-driven approach ensures every ad dollar works efficiently to boost visibility, engagement, and conversions.",
                    cta:"Let’s grow!",},
                {
                    img:"assets/img/services/seo.webp",
                    section:"SEO",
                    title:"Optimizing Every Element for Superior Search Engine Rankings",
                    description:"We use a combination of on-page, off-page, and technical SEO strategies to optimize your content, structure, and authority. Our approach ensures long-term growth, increased online presence, and higher conversions by aligning your website with the latest search engine algorithms.",
                    cta:"Request a quote!",},
                {
                    img:"assets/img/services/manager.webp",
                    section:"Community Manager",
                    title:"Crafting Content that Drives Conversations and Engagement",
                    description:"We engage with your community, manage interactions, and create relevant content to foster loyalty and enhance brand reputation. Our goal is to cultivate a positive, active online presence that strengthens customer trust and drives long-term engagement.",
                    cta:"Contact us!",},
                {
                    img:"assets/img/services/ux.webp",
                    section:"UX Writing",
                    title:"Developing a Consistent, Engaging Voice Across Platforms",
                    description:"We create intuitive microcopy, such as buttons, labels, and instructions, that enhances usability and drives action. Our goal is to ensure your users have a seamless, engaging journey, improving both the functionality and overall satisfaction of your website or app.",
                    cta:"Let’s chat!",},
            ],
        };
    },
};
// Componente para la seccion de case studies, en caso de querer agregar mas personas se deberan sumar a la lista 'cases', con su foto, titulo, sales, return y servicios aplicados.
const CaseStudiesComponent={
    template:
        `<div id="case-studies-box">
            <section v-for="c in casestudies" class="case-box">
                <img :src="c.img" alt="Case Study Photo">
                <section class="content-case">
                    <div>
                        <h3>{{ c.case }}</h3>
                        <ul>
                            <li v-for="(s, index) in c.services" :key="index">{{ s }}</li>
                        </ul>
                    </div>
                </section>
                <section class="view-case">
                    <a :href="c.link" class="btn-case btn">View Case Study</a>
                </section>
            </section>
        </div>`,
    data(){
        return{
            casestudies:[
                {
                    img:"assets/img/case-studies/BatikBoutik.webp",
                    case:"Batik Boutik",
                    services:[
                        "META ADVERTISING ROAS: 5,6 in one month",
                    ],
                    link:"case-study/batik-boutik.html",},
                {
                    img:"assets/img/case-studies/ble-lips.webp",
                    case:"Ble LIPS - Transforming Lip Care with Natural Elegance",
                    services:[
                        "Transforming Lip Care",
                    ],
                    link:"case-study/ble-lips.html",},
            ]
        }
    }
};
// En caso de querer sumar testimonios agregarlos a la lista slides
const TestimonialsComponent = {
    template: `
        <div id="testimonials-carousel">
            <div class="carousel-slide" :style="{ transform: 'translateX(' + (-currentIndex * 100) + '%)' }">
                <div class="carousel-item" v-for="(slide, index) in slides" :key="index">
                    <h3>{{ slide.title }}</h3>
                    <div>
                        <p v-for="(paragraph, i) in slide.content" :key="i">{{ paragraph }}</p>
                    </div>
                </div>
            </div>
            <div class="carousel-indicators">
                <span 
                    v-for="(slide, index) in slides" 
                    :key="index" 
                    @click="goToSlide(index)" 
                    :class="{ active: currentIndex === index }">
                </span>
            </div>
        </div>
    `,
    data() {
        return {
            slides: [
                { 
                    title:"Beauty", 
                    content:
                    [
                        "It was a wonderful experience. We had several meetings where we discussed our goals and future plans, and did an evaluation of the business. Then we received advice and training on which campaigns to run, where to focus, and how to set everything up. Once that was done, we launched the new campaigns.",
                        "A few weeks later, we started evaluating the results, which have been excellent so far.",
                        "I highly recommend them!",
                        "Thank you, Eleven Digital, for all your help ❤️"]},
                { 
                    title:"Mulita", 
                    content:["My experience working with Eleven Digital has been very positive. Eleven is an expert in the field, and when I had trouble expanding my audience on Instagram, I didn't hesitate to call them for help with ads. I increased my sales and am now positioning myself in the market beyond my city. What mattered most to me was the way they explained how things work and what I needed, so we could work together to create a specialized action plan tailored to my industry."]},
                { 
                    title:"Bon Gout", 
                    content:[
                        "Today, after the first reporting meeting, I feel super happy with the results from the first month of working together. Beyond the great results, I’m more than satisfied with the care and attention from Lucía—she’s incredibly attentive, helps you with everything, and provides a super comprehensive report. Everything is working perfectly, with 100% positive results, and we’re making great progress.",
                        "Excellent work, Eleven Digital—I highly recommend them! 👌🏻"]},
                { 
                    title:"Brote", 
                    content:["Before working with Eleven Digital, I used to run campaigns on my own without much knowledge. During the second meeting, when we created three campaigns, they explained everything in detail, making it much easier for me to understand the Ads Manager. It has so many filters, and it’s great to have someone guide you through the process. They developed a plan for the campaigns to help my business achieve greater reach and sales."]},
            ],
            currentIndex: 0,
            intervalId: null,
        };
    },
    methods: {
        startCarousel() {
            this.intervalId = setInterval(() => {
                this.nextSlide();
            }, 5000);
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        goToSlide(index) {
            this.currentIndex = index;
        },
        stopCarousel() {
            clearInterval(this.intervalId);
        },
    },
    mounted() {
        this.startCarousel();
    },
    beforeDestroy() {
        this.stopCarousel();
    },
};
// Componente para la seccion de about, en caso de querer agregar mas personas se deberan sumar a la lista 'people', con su foto, nombre, puesto y descripcion correspondiente.
const AboutUsComponent={
    template:
        `<div id="people-box">
            <section v-for="p in people" :key="p.name">
                <img :src="p.img" alt="Profile picture" >
                <section>
                    <h3>{{ p.name }}</h3>
                    <p class="subtitle">{{ p.position }}</p>
                    <p>{{p.description_p1}}</p>
                    <p>{{p.description_p2}}</p>
                </section>
            </section>
        </div>`,
    data(){
        return{
            people:[
                {
                    img:"assets/img/about/lucia-v.webp",
                    name:"Lucia Vazquez",
                    position:"Founder, Eleven Digital",
                    description_p1:"Lucia is a seasoned digital marketing expert with over 7 years of experience, including a role at Google as a Business Data Analyst. As the founder of Eleven Digital, she specializes in Paid Media and data-driven strategies, helping businesses scale through impactful campaigns.",
                    description_p2:"With an MBA and a degree in Public Relations, Lucia is skilled in platforms like Google Ads, Facebook Ads, and LinkedIn Ads, as well as analytics tools like Google Analytics and Data Studio. Her leadership and expertise drive innovative solutions in the digital space.",},
                {
                    img:"assets/img/about/matias-m.webp",
                    name:"Matias Munoz",
                    position:"Co-Founder, Eleven Digital",
                    description_p1:"Matias Muñoz is a Data Analyst with expertise in Python, Power BI, Google Ads, and analytics tools like GTM and Looker Studio. Currently, he works as Growth Data Lead at Super, blending data from multiple platforms and presenting insights through dashboards.",
                    description_p2:"He has prior experience in content analysis at MRM/McCann and software development, specializing in Django, Flutter, and WordPress. Matias holds an Associate Degree in Software Development and is pursuing a Bachelor’s in Data Science.",},
                {
                    img:"assets/img/about/natalia.webp",
                    name:"Natalia Rocco",
                    position:"Co-Founder, Eleven Digital",
                    description_p1:"Natalia is a versatile and detail-oriented professional with extensive experience managing projects for global brands. As Co-Founder of Eleven Digital, she combines her expertise in digital solutions with a passion for delivering innovative strategies.",
                    description_p2:"Her work spans platforms like Adobe Experience Manager, Quantum, and WordPress, with a strong focus on delivering high-quality assets and seamless content management. With a background at Court Avenue and leadership roles at MRM-McCann, Natalia excels at team collaboration and guiding teams to exceed client expectations.",},]}}
};
const ContactComponent={
    template:`
    <div id="contact-box">
        <form action="https://formsubmit.co/info@elevendigital.com.ar" method="POST">
            <div>
                <input type="text" name="full-name" placeholder="Full Name" title="Please enter your full name" required>
                <input type="tel" name="phone-numer" placeholder="Phone Number" title="Please enter your phone number" required>
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" title="Please enter your email" required>
            </div>
            <div>
                <textarea name="message" id="" placeholder="Message" title="Please enter a message" required></textarea>
            </div>
            <input type="hidden" name="_subject" value="Consulta sitio web USA"><!-- modificar el valor -->
            <input type="hidden" name="_next" value="www.elevendigi.com"><!-- link para volver a la pagina -->
            <button class="btn" type="submit">Contact</button>
        </form>
        <section id="social-networks">
            <a href="mailto:info@elevendigital.com.ar"><img src="/assets/svg/iconos/correo.svg" alt="" width="18px" height="18px" id=icon-correo>Info@elevendigital.com.ar</a>
            <a href="https://www.linkedin.com/company/eleven-digital-ar/"><img src="/assets/svg/iconos/linkedin.svg" alt="" width="18px" height="18px"> /eleven-digital-ar</a>
            <a href="https://www.instagram.com/elevendigitalen"><img src="/assets/svg/iconos/ig.svg" alt="" width="18px" height="18px"> /elevendigitalen</a>
        </section>
    </div>
    `
};
const {createApp}=Vue;
createApp({components:{
    "header-component":HeaderComponent,
    "services":ServicesComponent,
    "casestudies":CaseStudiesComponent,
    "testimonials":TestimonialsComponent,
    "aboutus":AboutUsComponent,
    "contact":ContactComponent,
}}).mount("#app");