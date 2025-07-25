self.addEventListener('notificationclick', onNotificationClick);

async function onNotificationClick(e) {
    e.notification.close() 

    e.waitUntil(
        clients.matchAll({ type: "window" }).then((clientsArr) => {
            const windowToFocus = clientsArr.find(
                (windowClient) => windowClient.url === e.notification.data.url,
            )

            if(windowToFocus) {
                windowToFocus.focus();
            }else{
                clients
                    .openWindow(e.notification.data.url)
                    .then((windowClient) => (windowClient ? windowClient.focus() : null));
            }
        })
    )
}