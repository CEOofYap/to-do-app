import {View, Text} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";


const _Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name = "index"
                options={{
                    title: "Home",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name = "profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name = "completed"
                options={{
                    title: "Completed",
                    headerShown: false,
                }}
            />
        </Tabs>
    )
}
export default _Layout
