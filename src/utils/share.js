export default function () {
  window.FB.ui({
    method: 'share',
    href: window.location.origin,
  });
}
