const COLORS = {
  primary: '#092147',
  secondary: '#6C757D',
  blue: '#286FDB',
  ternary: '#343A40',
  gray: '#83829A',
  gray2: '#C1C0C8',
  white: '#F5F5F5',
  pureWhite: '#FFFFFF',
  lightWhite: '#FAFAFC',
  error: '#DC3545',
  green:'#28A745',
  black:'#000000',
};

const FONT = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
};

const SIZES = {
  xSmall: 10,
  xxSmall: 12,
  small: 14,
  medium: 16,
  xmedium: 18,
  large: 20,
  xLarge: 24,
  xxLarge: 30,
};

const FONTWEIGHT = {
  large: 700,
  small: 400,
  medium: 500,
};

const SHADOWS = {
  small: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: -5,
    },
    shadowRadius: 20,
    elevation: 5,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};


const IMAGES ={
  drop : require('../../images/drop.png'),
  email : require('../../images/email.png'),
  lock : require('../../images/GroupLock.png'),
  eyeHide : require('../../images/GroupEye.png'),
  accountCreateSucces : require('../../images/CreateAccountSuccess.png'),
  line : require('../../images/Line62.png'),
  mainImage : require('../../images/Rectangle.png')
  

}

const ICONS = {
  home : require('../../images/icons/home.png'),
  market : require('../../images/icons/market.png'),
  trade : require('../../images/icons/trade.png'),
  wallet : require('../../images/icons/wallet.png'),
  profiles: require('../../images/icons/profile.png'),
  copy : require('../../images/icons/copy.png'),
  search : require('../../images/icons/search.png'),
  scan : require('../../images/icons/scan.png'),
  refral: require('../../images/icons/refral.png'),
  doubleDownArrow : require('../../images/icons/doubleDownArrow.png'),
  fixedDeposite : require('../../images/icons/fixedDeposite.png'),
  day : require('../../images/icons/day.png'),
  night : require('../../images/icons/night.png'),
  notification : require('../../images/icons/notification.png'),
  menu : require('../../images/icons/menu.png'),
  voice : require('../../images/icons/voice.png'),
  whiteTick : require('../../images/icons/whitetick.png')

}

export {COLORS, FONT, SIZES, SHADOWS, FONTWEIGHT, IMAGES, ICONS};
