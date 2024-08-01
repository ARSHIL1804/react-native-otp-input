import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const OptInput = ({ otpLength, setOtp, containerStyle = {}, inputStyle ={} }) => {
    
    const [inputs, setInputs] = useState(Array(4).fill(''));
    const [currentIndex,setCurrentIndex] = useState(0);
    const inputsRef = useRef([])

    useEffect(()=>{
        if(inputsRef.current[0]){
            inputsRef.current[0].focus()
        }
    },[])
    const handleInputChange = (index, value) => {
        const newTextInputs = [...inputs];
        newTextInputs[index] = value;
        setInputs(newTextInputs);
        setOtp(newTextInputs.join(''));
        if(value && index<otpLength-1 && inputsRef.current[index+1]){
            inputsRef.current[index+1].focus();
        }
    };

    const backSpacePressed = (index) => {
        if(inputs[index] === '' && index > 0){
            inputsRef.current[index-1].focus();
        }
    }

    return (
        <View style={{ width:'100%',flexDirection:'row',flexWrap:'wrap',gap:20, justifyContent:'center',...containerStyle}}>
            {
                inputs.map((value, index)=>(
                    <TextInput
                        style={{width:60, height:60, borderRadius:10, textAlign:'center', fontSize:32, fontWeight:'semibold', backgroundColor:'#DEE9F5',color:'#36409C', }}
                        key={index}
                        ref={(input) => (inputsRef.current[index] = input)}
                        value={value}
                        keyboardType='phone-pad'
                        onChangeText={(text) => handleInputChange(index, text)}
                        maxLength={1}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace') {
                               backSpacePressed(index);
                            }
                        }}

                    />
                ))
            }

        </View>
    );
};

export default OptInput;
