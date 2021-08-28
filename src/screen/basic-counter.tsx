import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FabButton } from '../components/FabButton';
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    taxtItem: {
        fontSize: 50,
        textAlign: 'center'
    }
});
 
 
export const BasicCounterScreen = () => {
 
    const [counter, setCounter] = useState(0);
 
    return (
        <View style={styles.container} >
            <Text style={styles.taxtItem} >
                Contador: {counter}
            </Text>
 
            <FabButton
                title="-1"
                position="left"
                onClick={() => setCounter(counter - 1)}
            />
 
            <FabButton
                title="+1"
                position="right"
                onClick={() => setCounter(counter + 1)}
            />
 
        </View>
 
    );
}


// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { FabButton } from "../components/FabButton";

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center'
//     },
//     textItem: {
//         fontSize: 50,
//         textAlign: 'center'
//     },

// });

// export const BasicCounterScreen = () => {
//     const [ counter, setCounter] = useState(0);

//     function increment(){
//         setCounter(counter+1);
//     }
//     function decrement(){
//         setCounter(counter-1);
//     }
//     return (
//         <View style={styles.container} >
//             <Text style={styles.textItem} >
//                 Contador: {counter}
//             </Text>

//             <FabButton title="-1" position="left" onClick={() => decrement}/>
//             <FabButton title="+1" position="right" onClick={() => increment}/>
            

//             {/* <TouchableOpacity style={styles.fabToRigth} onPress={increment}>
//                 <View style={styles.btnIncrement}>
//                     <Text style={styles.fabText}>
//                         +1
//                     </Text>
//                 </View>
//             </TouchableOpacity>


//             <TouchableOpacity style={styles.fabToLeft} onPress={decrement}>
//                 <View style={styles.btnDecrement}>
//                     <Text style={styles.fabText}>
//                         -1
//                     </Text>
//                 </View>
//             </TouchableOpacity> */}

//         </View>

//     );
// }