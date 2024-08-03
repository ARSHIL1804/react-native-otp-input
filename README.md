### REACT NATIVE OTP UI

React native OTP component with customizable UI and great User experience with features like auto-focusing, auto-focus to next, and move backward on backspace key press.

[![npm version](https://badge.fury.io/js/react-native-otp-ui.svg)](https://badge.fury.io/js/react-native-otp-ui)
![npm downloads](https://img.shields.io/npm/dw/react-native-otp-ui)

#### How to Use

Check the `Example` react native app for usage.

#### Platform Support

Supports both Android and iOS.

#### Props

The following props are applicable for the component along with **props supported by react native `TextInput` component**

| Prop                 | Type   | Optional | Default      | Description                                        |
| -------------------- | ------ | -------- | ------------ | ---------------------------------------------------
| otpLength            | string | No       | n/a          | Length of OTP feild                                |
| setOtp               | func   | No       | n/a          | To setOtp value in user component.                 |
| containerStyle       | obj    | Yes      | {}           | To customize style for OTP inputs container        |
| inputStyle           | obj    | Yes      | {}           | To customize style for OTP inputs                  |

#### Example

```javascript
import React, { useState } from 'react';
import OtpInput from 'react-native-otp-ui';

const ParentComponent = () => {
    const [otp, setOtp] = useState('');

    const verifyOtp = () => {
        //Verify functionality
    }

    return (
        <View>
            <OtpInput otpLength ={4} setOtp = {setOtp} containerStyle={backgroundColor:'yellow'} inputStyle ={backgroundColor:'red'} >
            <Button title="Verify" onClick={verifyOtp}>
        </View>
    );
}
```

#### If you like the project

If you think I have helped you, feel free to get me coffee. 😊

<a href="https://www.buymeacoffee.com/naveenvignesh" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" height="60" ></a>

