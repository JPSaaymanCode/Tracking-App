import {useState, useEffect} from 'react';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';

export default (shouldTrack, callback) => {

    const [err, setErr] = useState(null);

      useEffect(() => {
        let subscriber;
        const startLocating = async () => {

          // let {status} = await requestPermissionsAsync();
          // if (status === 'denied'){
          //     setErr('denied');
          // }
    
            try {
              const { granted } = await requestPermissionsAsync();
              subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
              }, 
    
              callback
    
              );
              if (!granted) {
                throw new Error('Location permission not granted');
              }
            } catch (e) {
              setErr(e);
            }
          };
        if(shouldTrack) {
            startLocating();
        } else {
            
            if (subscriber) {
              subscriber.remove();
            }
            subscriber = null;
        }
       return () => {
         if(subscriber) {
        subscriber.remove();
         }
       };
    }, [shouldTrack, callback])

    return [err];

};