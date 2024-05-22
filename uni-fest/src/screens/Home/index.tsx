import { useEffect } from "react";
import AlignedLogin from "../../components/AlignedLogin";

import { Text } from "react-native-paper";

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
        <AlignedLogin>
            <Text>Home</Text>
        </AlignedLogin>
    )
}