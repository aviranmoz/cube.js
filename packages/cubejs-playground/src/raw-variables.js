const colors = {
  purple: '122, 119, 255',
  'purple-04': '202, 201, 255',
  dark: '20, 20, 70',
  'dark-01': '20, 20, 70',
  'dark-02': '67, 67, 107',
  'dark-04': '161, 161, 181',
  'dark-05': '213, 213, 226',
  light: '243, 243, 251',
};

function color(name, opacity = 1) {
  return `rgba(${colors[name]}, ${opacity})`;
}

module.exports = {
  'active-bg': color('purple', .1),
  'primary-bg': color('purple', .1),
  'primary-1': color('purple', .9),
  'primary-2': color('purple', .8),
  'primary-3': color('purple', .7),
  'primary-4': color('purple', .6),
  'primary-5': color('purple', .5),
  'primary-6': color('purple', .4),
  'primary-7': color('purple', .3),
  'primary-8': color('purple', .2),
  'primary-9': color('purple', .1),
  'primary-10': color('purple', 0),
  'remove-btn-bg': color('purple', .1),
  'remove-btn-hover-bg': color('purple', .2),
  'primary-color': color('purple'),

  'text-color': color('dark', .65),
  'heading-color': color('dark', .65),
  'link-color': color('purple'),
  'info-color': color('purple'),
  'layout-body-background': '#f8f8fb',
  'layout-header-background': '#eeeef5',
  'menu-highlight-color': color('dark-01'),
  'item-hover-bg': color('light'),
  'layout-header-height': '48px',

  'font-family': '\'DM Sans\', sans-serif',
  'menu-item-font-size': '15px',
  'btn-primary-shadow': 'none',
  'btn-text-shadow': 'none',
  'modal-body-padding': '32px',
  'form-item-margin-bottom': '23px',

  'font-size-base': '14px',
  'border-radius-base': '4px',
  'padding-lg': '16px',
};

Object.keys(colors)
  .forEach((name) => {
    module.exports[`${name}-color`] = color(name);
  });
