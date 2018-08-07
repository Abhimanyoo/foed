const appPubkey = process.env.REACT_APP_PUSH_PUBLIC_KEY;

export function registerPush() {
  if ('serviceWorker' in navigator) {
    return navigator.serviceWorker.ready.then(function(registration) {
      return registration.pushManager
        .getSubscription()
        .then(function(subscription) {
          if (subscription) {
            return subscription;
          }

          return registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(appPubkey),
          });
        })
        .then(subscription => JSON.stringify(subscription));
    });
  }
  return Promise.resolve(null);
}

function urlBase64ToUint8Array(base64String: string) {
  var padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}
