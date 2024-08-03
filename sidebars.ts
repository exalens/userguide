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
    {
      type: 'category',
      label: 'Datasources',
      items: [
        { type: 'doc', id: 'datsources/opcua' },
        { type: 'doc', id: 'datsources/mqtt' },
        { type: 'doc', id: 'datsources/modbus' },       
        { type: 'doc', id: 'datsources/mtconnect_adapter' },
        { type: 'doc', id: 'datsources/mtconnect_agent' },
        { type: 'doc', id: 'datsources/snmp' },
      ],
    },
  ],
};

export default sidebars;
