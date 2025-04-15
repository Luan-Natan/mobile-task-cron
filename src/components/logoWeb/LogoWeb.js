import React from 'react';
import {Image} from 'react-native';
import Styles from './Style'

function LogoWeb({ source }) {
    return (
        <Image
            style={ Styles.logoWeb }
            source={{ uri: source }}
        />
    );
}
export default LogoWeb;