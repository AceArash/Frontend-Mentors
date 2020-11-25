const projects = [          
    'base-apparel-coming-soon-master', 
    'clipboard-landing-page-master',
    'coding-bootcamp-testimonials-slider-master',      
    'four-card-feature-section-master',    
    'fylo-landing-page-with-two-column-layout-master' ,
    'huddle-landing-page-with-alternating-feature-blocks-master',
    'huddle-landing-page-with-single-introductory-section-master',
    'insure-landing-page-master',
    'mini-virtual-bootcamp',
    'ping-coming-soon-page-master',
    'pricing-component-with-toggle-master',
    'profile-card-component-main',
    'project-tracking-intro-component-master',    
    'signup-form-master',
    'single-price-grid-component-master',
    'social-proof-section-master',
    'static-job-listings-master'

];

const list = document.getElementById('list');

projects.forEach(project => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `/${project}/index.html`;
    link.innerText = project;

    listItem.appendChild(link);
    list.appendChild(listItem);
});