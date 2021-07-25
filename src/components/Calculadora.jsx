import React, { useState } from 'react';
import { Button, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { styleDisplay, styles } from '../../style/style';

export default function Calculadora() {
    const [valor, setValor] = useState({
        valor1: '',
        valor2: '',
        result: 0
    })

    const handleInputChange = (name, value) => {
        setValor({
            ...valor, [name]: value
        })
    }
    return (
        <ScrollView>
        <View>
            <View style={styleDisplay.display1}>
                <TextInput
                    style={styleDisplay.display}
                    placeholder="Valor a"
                    onChangeText={
                        (valor) => handleInputChange('valor1', Number(valor))
                    }
                    keyboardType="numeric"
                />
                <TextInput
                    style={styleDisplay.display}
                    placeholder="Valor b"
                    onChangeText={
                        (valor) => handleInputChange('valor2', Number(valor))
                    }
                    keyboardType="numeric"
                />
                <TextInput
                    style={styleDisplay.display}
                    placeholder="0"
                    editable={false} selectTextOnFocus={false}
                >
                    <Text>{valor.result.toFixed(2)}</Text>
                </TextInput>

            </View>

            <View style={styles.btns}>

                <View>

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={
                            () => {
                                setValor({
                                    ...valor, result: (valor.valor1 + valor.valor2)
                                })
                            }
                        }
                    >
                        <Text
                            style={styles.btnTxt}
                        >+</Text>
                    </TouchableOpacity>

                </View>
                <View>

                    <TouchableOpacity
                        style={styles.btn}

                        onPress={
                            () => {
                                setValor({
                                    ...valor, result: (valor.valor1 - valor.valor2)
                                })
                            }
                        }
                    >
                        <Text
                            style={styles.btnTxt}

                        >-</Text>
                    </TouchableOpacity>

                </View>
                <View>

                    <TouchableOpacity
                        style={styles.btn}

                        onPress={
                            () => {
                                setValor({
                                    ...valor, result: (valor.valor1 * valor.valor2)
                                })
                            }
                        }
                    >
                        <Text
                            style={styles.btnTxt}
                        >x</Text>
                    </TouchableOpacity>

                </View>
                <View>

                    <TouchableOpacity
                        style={styles.btn}

                        onPress={
                            () => {
                                setValor({
                                    ...valor, result: (valor.valor1 / valor.valor2)
                                })
                            }
                        }
                    >
                        <Text
                            style={styles.btnTxt}

                        >÷</Text>
                    </TouchableOpacity>

                </View>

                <View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={
                            () => {
                                setValor({
                                    ...valor, result: (valor.valor1 * valor.valor2)/100
                                })
                            }
                        }
                    >
                        <Text
                            style={styles.btnTxt}
                        >%</Text>
                    </TouchableOpacity>

            </View>
                <View>

                    <TouchableOpacity
                        style={styles.btn}

                        onPress={
                            () => {
                                setValor({
                                    ...valor, result: (valor.valor1 * valor.valor1) || (valor.valor2 * valor.valor2)
                                })
                            }
                        }
                    >
                        <Text
                            style={styles.btnTxt}

                        >n²</Text>
                    </TouchableOpacity>

                </View>
                <View>

                    <TouchableOpacity
                        style={styles.btn}

                        onPress={
                            () => {
                                setValor({
                                    ...valor, result: (valor.valor1 * valor.valor1 * valor.valor1) || (valor.valor2 * valor.valor2 * valor.valor2)
                                })
                            }
                        }
                    >
                        <Text
                            style={styles.btnTxt}
                        >n³</Text>
                    </TouchableOpacity>

                </View>
                <View>

                    <TouchableOpacity
                        style={styles.btn}

                        onPress={
                            () => {
                                setValor({
                                    ...valor, result: Math.pow(valor.valor1,valor.valor2)
                                })
                            }
                        }
                    >
                        <Text
                            style={styles.btnTxt}

                        >aᵇ</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
        </ScrollView>
    )
}