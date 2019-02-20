import PropTypes from 'prop-types';

export const tabIconProps = {
  style: PropTypes.object,
  icon: PropTypes.number.isRequired
};

export const burgerProps = {
  style: PropTypes.object,
  onPress: PropTypes.func.isRequired
};

export const buttonProps = {
  style: PropTypes.object,
  label: PropTypes.string
}

export const questionItemProps = {
  style: PropTypes.object,
  question: PropTypes.object.isRequired,
}