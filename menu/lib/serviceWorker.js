self.addEventListener('push', function(event) {
  event.waitUntil(
    registration.showNotification('Foed', {
      body: event.data ? event.data.text() : 'no payload',
      icon: '/static/favicon-32x32.png',
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/order'));
});
