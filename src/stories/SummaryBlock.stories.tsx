import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import '../styles/index.scss';
import { SummaryBlock } from '../components';
import { UIHelpers } from '../components';
const formatNumber = UIHelpers.formatNumber;

export default {
  title: 'Admin/SummaryBlock',
  component: SummaryBlock,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SummaryBlock>;

const Template: ComponentStory<typeof SummaryBlock> = (args) => <div className={'wrapper-summary-block'}>
  <SummaryBlock {...args} title={<i>Fraud Calls</i>}  value={<span><span className={'strong'} style={{color: 'red'}}>23</span> <span className={'divide'}>/</span> 31</span>}/>
  <SummaryBlock {...args} title={'Total Calls'} value={<span><strong className={'strong'} style={{color: 'green'}}>23</strong> <span className={'divide'}>/</span> {formatNumber(10053)}</span>}/>
  <SummaryBlock {...args} loading={true} title={'Fraud Attacks'} value={<span><span className={'strong'} style={{color: 'green'}}>23</span> <span className={'divide'}>/</span> {formatNumber(210053)}</span>}/>
  <a>
    <SummaryBlock {...args} title={'Example test 321'} value={<span><span style={{color: 'green'}}>23</span> <span className={'divide'}>/</span> {formatNumber(2210053)}</span>}/>
  </a>
</div>

export const summaryBlock = Template.bind({});
summaryBlock.args = {
  title: 'Operators1 Operators2 Operators2 Operators4 weq weq 231 sdqwe',
  label: '30d',
  caption: 'WITH EVENTS / TOTAL',
  value: <span><span style={{color: 'red'}}>23</span> / 53</span>
};
