import React, { Component } from 'react';
import { View } from 'react-native';

import { Container, Content, List, ListItem, Text } from 'native-base';

import Integracao from '@helpers/Integracao';
import {default as PostsComponent } from '@components/Posts';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        Integracao.getPosts()
             .then((response) => response.json())
             .then( (responseJson) => {
                this.setPosts( responseJson );
             })
    }

    setPosts( data ) {
        this.setState( { posts: data } );
    }

    getPosts() {
        console.log( "Get posts" );
        return this.state.posts
    }

    render() {
        let posts      = this.getPosts();
        return (
            <Container style={{marginTop: 52 }}>
                <Content>
                    <PostsComponent title={ "Últimos posts Qtd: " + posts.length } posts={posts} />
                    
                </Content>
            </Container>
        );
    }
}