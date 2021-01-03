import Colors from './Colors';

const BoxShadow = {
  neumorphism: `5px 5px 10px ${Colors.shadowDark}, -5px -5px 10px ${Colors.shadowWhite}`,
  neumorphismInset: `inset 5px 5px 10px ${Colors.shadowDark}, inset -5px -5px 10px ${Colors.shadowWhite}`,
  neumorphismSmall: `1px 1px 2px ${Colors.shadowDark}, -1px -1px 2px ${Colors.shadowWhite}`,
  neumorphismInsetSmall: `inset 1px 1px 2px ${Colors.shadowDark}, inset -1px -1px 2px ${Colors.shadowWhite}`,
};

export default BoxShadow;
