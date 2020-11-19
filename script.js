const projects = [
    'four-card-feature-section-master', 
    'signup-form-master',  
    'base-apparel-coming-soon-master', 
    'single-price-grid-component-master',
    'fylo-landing-page-with-two-column-layout-master' ,
    'huddle-landing-page-with-alternating-feature-blocks-master',
    'huddle-landing-page-with-single-introductory-section-master',
    'ping-coming-soon-page-master',
    'insure-landing-page-master',
    'pricing-component-with-toggle-master',
    'project-tracking-intro-component-master',
    'static-job-listings-master',
    'profile-card-component-main'

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