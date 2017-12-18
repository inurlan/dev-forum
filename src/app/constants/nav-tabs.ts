import {NavTab} from './objects/nav-tab';
import {ARTICLE_TABS, PROFILE_TABS, QUESTION_TABS, TAG_TABS, USER_TABS} from './tabs';

/**
 * List of NavTabs which creates tabs in user interface.
 * This data is manipulated in /shared/components/nav-tabs directory
 */

export const NAV_TABS = [
  new NavTab('questions', 'QUESTION POOL', QUESTION_TABS, 1),
  new NavTab('articles', 'ARTICLE POOL', ARTICLE_TABS, 1),
  new NavTab('tags', 'TAG POOL', TAG_TABS, 1),
  new NavTab('users', 'USERS', USER_TABS, 0),
  new NavTab('profile', 'PROFILE', PROFILE_TABS, 0),
];
