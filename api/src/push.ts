import * as webpush from 'web-push';
const hasKeys = !!process.env.BACKEND_VAPID_PUBLIC_KEY;

if (hasKeys) {
  webpush.setVapidDetails(
    `mailto:${process.env.BACKEND_MAIL_FROM}`,
    process.env.BACKEND_VAPID_PUBLIC_KEY,
    process.env.BACKEND_VAPID_PRIVATE_KEY
  );
}

export function sendNotification(subscription: string, message: string) {
  webpush.sendNotification(JSON.parse(subscription), message);
}
