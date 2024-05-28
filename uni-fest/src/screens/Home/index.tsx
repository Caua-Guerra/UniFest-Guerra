import { useEffect } from "react";
import React from 'react';
import MapView from 'react-native-maps';
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
    navigation: any;
}

export default function Home(props: Props) {
    useEffect(
        () =>
            props.navigation.addListener('beforeRemove', (e: any) => {
                e.preventDefault();
            }),
            []
    )
    return (
        <SafeAreaView style={styles.container}>
            <MapView style={styles.map} zoomControlEnabled/>
        </SafeAreaView>
    )
}
  
  