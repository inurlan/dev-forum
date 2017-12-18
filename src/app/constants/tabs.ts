import {Tab} from './objects/tab';


/**
 * List of Tabs which creates subtabs in user interface.
 * This data is manipulated in /shared/components/nav-tabs directory
 */

export const QUESTION_TABS = [
  new Tab('ask', 'Ask', '/questions/ask'),
  new Tab('recent', 'Recent', '/questions/recent'),
  new Tab('answered', 'Answered', '/questions/answered'),
  new Tab('unanswered', 'Unanswered', '/questions/unanswered'),
  new Tab('accepted', 'Accepted', '/questions/accepted')
];


/**
 * List of Tabs which creates subtabs in user interface.
 * This data is manipulated in /shared/components/nav-tabs directory
 */

export const ARTICLE_TABS = [
  new Tab('publish', 'Publish', '/articles/publish'),
  new Tab('recent', 'Recent', '/articles/recent'),
  new Tab('popular', 'Popular', '/articles/popular')
];

/**
 * List of Tabs which creates subtabs in user interface.
 * This data is manipulated in /shared/components/nav-tabs directory
 */

export const TAG_TABS = [
  new Tab('create', 'Create', '/tags/create'),
  new Tab('all', 'All', '/tags/all'),
  new Tab('popular', 'Popular', '/tags/popular')
];

/**
 * List of Tabs which creates subtabs in user interface.
 * This data is manipulated in /shared/components/nav-tabs directory
 */

export const USER_TABS = [
  new Tab('all', 'All', '/users/all'),
  new Tab('popular', 'Popular', '/users/popular')
];

/**
 * List of Tabs which creates subtabs in user interface.
 * This data is manipulated in /shared/components/nav-tabs directory
 */

export const PROFILE_TABS = [
  new Tab('home', 'Home', '/profile/:user_id/home'),
  new Tab('q_and_a', 'Q & A', '/profile/:user_id/questions-answers'),
  new Tab('about', 'About', '/profile/:user_id/about'),
  new Tab('contact', 'Contact', '/profile/:user_id/contact')
];

/**
 * List of Parent tabs that are on the app bar.
 * This data is manipulated in the app directory
 */

export const TABS = [
  new Tab('questions', 'Questions', '/questions'),
  new Tab('articles', 'Articles', '/articles'),
  new Tab('tags', 'Tags', '/tags'),
  new Tab('users', 'Users', '/users')
];
