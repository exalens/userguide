import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  tutorialSidebar: [
    { type: 'doc', id: 'exalens-platform-overview' },
    { type: 'doc', id: 'installation' },
    { type: 'doc', id: 'asset-intelligence' },
    { type: 'doc', id: 'network-monitoring' },
    { type: 'doc', id: 'app-api' },
    { type: 'doc', id: 'system-administration' },
    { type: 'doc', id: 'user-management' },
    { type: 'doc', id: 'data-forwarding' }
  ]
};

export default sidebars;
