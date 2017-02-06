import React, { Component } from 'react';

import {StyleSheet, WebView } from 'react-native';

import { Grid, Row, List, ListItem, Col, Text, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';


export default class Posts extends Component {
    webview = null;

    constructor(props) {
        super(props);

        console.log(props);
        this.state = {
            posts: props.posts,
            title: props.title
        };
    }

    componentWillReceiveProps( props ) {
        this.setState({
            posts: props.posts,
            title: props.title
        });
    }

    
    render() {
        let posts = this.state.posts;
        let title = this.state.title;

        const gotoPost = ( post ) => Actions.post( { post, title: "Ler artigo" } );
        return (
            <List>
            <ListItem itemDivider>
                <Text>{title}</Text>
            </ListItem>
            {posts.map( ( post, i ) => 
                <ListItem key={post.id} onPress={() => gotoPost( post )}>
                    <Text>{post.title.rendered}</Text>
                </ListItem>
            )}
            </List>
        );
    }
}