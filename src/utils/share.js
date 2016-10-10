const share = () => {
  window.FB.ui({
    method: 'share',
    href: `${window.location.origin}${window.location.pathname}`,
  });
};

export default share;
