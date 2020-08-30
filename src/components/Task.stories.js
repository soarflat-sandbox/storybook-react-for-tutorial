import React from 'react';

import Task from './Task';

// ストーリーは Component Story Format（CSF）の形式で書く
// CSF のファイルは以下の形式 export default が必須。
export default {
  // サイドバーに表示されるタイトル
  title: 'Task',
  // ストーリーで利用するコンポーネント
  component: Task,
  // decorators: [ ... ], https://storybook.js.org/docs/react/writing-stories/decorators
  // parameters: { ... }, https://storybook.js.org/docs/react/writing-stories/parameters
};

const Template = args => <Task {...args} />;

// CSF のファイルでは、名前付きのエクスポートはストーリーになる
// Default をエクスポートしているので、Default というストーリーが生成される
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};
// 上記の Default.args = ... でやっていることは以下の同じ
// export const Default = () => (
//   <Task
//     task={{
//       id: '1',
//       title: 'Test Task',
//       state: 'TASK_INBOX',
//       updatedAt: new Date(2018, 0, 1, 9, 0),
//     }}
//   />
// );

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
