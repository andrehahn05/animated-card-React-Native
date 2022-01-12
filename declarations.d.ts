declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  // eslint-disable-next-line no-undef
  const content: React.StatelessComponent<SvgProps>;
  export default content;
}
