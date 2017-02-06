import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Content, List, ListItem, Text } from 'native-base';

import {default as PostComponent} from '@components/Post';

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: props.navigationState.post
        };
    }

    render() {
        let post = this.state.post;

        return (
            <Container style={{marginTop: 52 }}>
                <Content>
                    <PostComponent post={post} />
                </Content>
            </Container>
        );
    }
}