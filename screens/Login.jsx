import React from "react";
import {View, Button, StyleSheet, Text, TextInput} from 'react-native'
import { CheckBox } from '@rneui/themed'
import * as colors from '../constants/Colors'


const LoginPage = () => {
    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);

    return (
        
        <View style={styles.container}>
            <View style={{
                position: 'absolute',
                top: '10%',
                height: '100px',
                width: '100%', 
                flexDirection: 'row',
            }}>
                <View style={{
                    flex: 11,
                    height: '100%',
                    width: '100%',                 
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <img source={require ('../assets/images/favicon.png')} style={{width:'100px', height:'100px'}}/>
                </View>
                <View style={{
                    flex: 22,
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                        <Text style={styles.CollegeTitle}>Shahid Smarak</Text>
                        <Text style={styles.CollegeTitle}>College</Text>
                        <Text style={styles.address}>Kirtipur, Ktm</Text>
                </View>


            </View>

            <View style={styles.loginBox}>
                <TextInput style={styles.credtitle} placeholder="E-mail ID"/>
                <TextInput style={styles.credtitle} secureTextEntry placeholder="Password"/>

                <View
                    style={{
                        marginBottom: '20px',
                        width: '100%'
                    }}
                >
                <CheckBox
                    checked={checked}
                    onPress={toggleCheckbox}
                    // Use ThemeProvider to make change for all checkbox
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    title="Remember me?"
                    size={20}
                />
                </View>

                <Button
                    title='Log in'
                    color={colors.Colors.light.secondary}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cc0',
    },
    CollegeTitle:{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 700,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    loginBox: {
        position: 'absolute',
        top: '45%',
    },
    credtitle:{
        fontSize: '14px',
        backgroundColor: '#ccce',
        color: '#999',
        padding: '10px',
        margin: '2px',
        width: '70vw',
        borderRadius: '20px',
    },
    loginButton: {
        backgroundColor: 'green'
    }
})

export default LoginPage;
