/* eslint-disable no-magic-numbers, sort-keys */
import * as React from 'react';
import { SuperChart } from '@superset-ui/chart';
import { radios } from '@storybook/addon-knobs';
import data from '../data/data';
import { LINE_PLUGIN_TYPE } from '../constants';
import dummyDatasource from '../../../../shared/dummyDatasource';

export default [
  {
    renderStory: () => [
      <SuperChart
        key="line1"
        chartType={LINE_PLUGIN_TYPE}
        datasource={dummyDatasource}
        formData={{
          encoding: {
            x: {
              field: 'x',
              type: 'temporal',
              format: '%Y-%m',
              scale: {
                type: 'time',
              },
              axis: {
                orient: radios('x.axis.orient', { top: 'top', bottom: 'bottom' }, 'bottom'),
                title: radios(
                  'x.axis.title',
                  { enable: 'Time', disable: '', '': undefined },
                  'Time',
                ),
              },
            },
            y: {
              field: 'y',
              type: 'quantitative',
              scale: {
                type: 'linear',
              },
              axis: {
                orient: radios(
                  'y.axis.orient',
                  { left: 'left', right: 'right', '': undefined },
                  'left',
                ),
                title: radios(
                  'y.axis.title',
                  { enable: 'Score', disable: '', '': undefined },
                  'Score',
                ),
              },
            },
            stroke: {
              field: 'name',
              type: 'nominal',
              legend: true,
            },
          },
        }}
        height={400}
        payload={{ data }}
        width={400}
      />,
    ],
    storyName: 'Basic',
    storyPath: 'preset-chart-xy|LineChartPlugin',
  },
];
