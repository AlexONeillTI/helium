import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  },

  resources: {
    en: {
      translation: {
        'bundle.learn-button': 'Learn More',
        'catalog.date-time': 'Date & Time',
        'catalog.location': 'Location',
        'catalog.location-in-person': 'In Person',
        'catalog.location-online': 'Online',
        'catalog.price': 'Price',
        'catalog.sort-by': 'Sort by',
        'catalog.sort-course-start-date': 'Start Date',
        'catalog.sort-created': 'Most Recent',
        'catalog.sort-publish-date': 'Publish Date',
        'catalog.sort-relevance': 'Relevance',
        'catalog.sort-title': 'Title',
        'catalog.sort-updated': 'Last Updated',
        'catalog-search-header': 'Browse',
        'catalog-search-placeholder': 'Search for content',
        'common.agree-terms': 'I agree to the',
        'common.already-member': 'Already a Member?',
        'common.terms-and-conditions': 'Terms & Conditions',
        'common.sign-in': 'Sign In',
        'course.per-month': 'per month',
        'course.per-year': 'per year',
        'course-add-to-queue': 'Add to Queue',
        'course-added-to-queue': 'Added to Queue',
        'course-completed-decal': 'Completed!',
        'course-view-details': 'View Details',
        'dashboard.available': 'Available',
        'dashboard.started': 'Started',
        'dashboard.completed': 'Completed',
        'dashboard.certificates': 'Certifications',
        'dashboard.collaborations': 'Collaborations',
        'redemption.validate': 'Validate',
        'redemption.placeholder': 'Enter Code Here',
        'redemption.add-code': '+ Add Another Code',
        'redemption.signed-in-prompt':
          'Fill in a code below, click validate, and then redeem your code.',
        'redemption.logged-out-prompt':
          'Fill in your details, validate your redemption code, and click redeem to access the school.',
        'redemption.register': 'Register',
        'redemption.validating': 'Validating…',
        'redemption.code-not-found': 'Code not found. Please check your code and try again.',
        'redemption.code-validated': 'Congrats, your code has been validated!',
        'register.first-name': 'First Name',
        'register.last-name': 'Last Name',
        'register.email': 'Email Address',
        'register.password': 'Password',
        'register.confirm-password': 'Password Confirmation',
        course: 'Course',
        'filter-by': 'Filter by',
        'filter-no-courses':
          'Sorry, we were unable to find a match for that search term or category, please try again.',
        'mobile-back-button': 'Back',
        'mobile-menu-button': 'Menu',
        more: 'more',
        'primary-bundle-intro': 'All courses only'
      }
    }
  }
});

export { i18n };
