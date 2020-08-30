import '../src/index.css';

export const parameters = {
  // actions addon（Storybook 上 で onClick などのUIアクションに対してのログを出力する addon）に関連する設定。
  // 個別のストーリーファイル（*.stories.js など）にも指定できるが、このファイルに指定することで、全体に適用される。
  actions: { argTypesRegex: '^on[A-Z].*' },
};
