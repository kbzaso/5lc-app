const analyticsTracking = (eventName) => {
    if(typeof window !=== undefined){
        window.ga('send', 'event', 'flow', 'click', eventName){
            nonInteraction: true

        }
    }
}

export default analyticsTracking;